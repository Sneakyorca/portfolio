import { useId, useState } from "react";
import { EMAIL, projectTypes, WHATSAPP_URL } from "../data/content";

// Web3Forms access keys are designed to be public (they only allow sending
// to the email the key was created for). Set it in .env.local and on Vercel.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const EMPTY = { name: "", email: "", business: "", type: "", message: "" };

const validate = (v) => {
  const errors = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  if (!v.email.trim()) errors.email = "Enter your email so I can reply.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim()))
    errors.email = "That email doesn't look right. Check it and try again.";
  if (!v.type) errors.type = "Pick what you need, or choose Not sure yet.";
  if (v.message.trim().length < 10)
    errors.message =
      "Tell me a little about your project (a sentence is fine).";
  return errors;
};

const inputClass = (hasError) =>
  `w-full rounded-md border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/25 ${
    hasError ? "border-red-500/80" : "border-border"
  }`;

const Field = ({ id, label, optional, error, children }) => (
  <div>
    <label
      htmlFor={id}
      className="block t-small font-medium text-foreground mb-2"
    >
      {label}
      {optional && (
        <span className="text-muted-foreground font-normal"> (optional)</span>
      )}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="mt-1.5 t-small text-red-500">
        {error}
      </p>
    )}
  </div>
);

const EnquiryForm = () => {
  const uid = useId();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed

  const update = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    // Clear a field's error as soon as the visitor edits it.
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const fieldProps = (key) => ({
    id: `${uid}-${key}`,
    value: values[key],
    onChange: update(key),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `${uid}-${key}-error` : undefined,
    className: inputClass(errors[key]),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`${uid}-${Object.keys(found)[0]}`)?.focus();
      return;
    }

    const subject = `New enquiry: ${values.type}${values.business ? ` for ${values.business}` : ""}`;

    // No key configured yet: hand off to the visitor's email app instead.
    if (!ACCESS_KEY) {
      const lines = [`Name: ${values.name}`, `Email: ${values.email}`];
      if (values.business) lines.push(`Business: ${values.business}`);
      lines.push(`Looking for: ${values.type}`, "", values.message);
      const body = lines.join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: "Portfolio enquiry",
          name: values.name,
          email: values.email,
          business: values.business || "Not given",
          looking_for: values.type,
          message: values.message,
          botcheck: e.target.elements.botcheck?.checked || false,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed");
      setStatus("sent");
      setValues(EMPTY);
    } catch {
      setStatus("failed");
    }
  };

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border bg-card p-8 md:p-10">
        <p className="t-eyebrow text-primary mb-4">Message sent</p>
        <h3 className="t-h3 mb-3">Thanks, I&apos;ve got your enquiry.</h3>
        <p className="mb-8">
          I&apos;ll reply by email with next steps. If it&apos;s urgent, message
          me on WhatsApp.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground dark:text-background font-display font-semibold"
          >
            Open WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="px-6 py-3 rounded-full border font-display font-semibold text-foreground cursor-pointer"
          >
            Send another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-xl border bg-card p-7 md:p-9 space-y-5"
      aria-label="Project enquiry"
    >
      <div>
        <p className="t-eyebrow text-primary mb-2">Start a project</p>
        <p className="t-small">
          Tell me what you need and I&apos;ll get back to you.
        </p>
      </div>

      {/* Honeypot: hidden from people, ticked by bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${uid}-name`} label="Your name" error={errors.name}>
          <input
            type="text"
            autoComplete="name"
            placeholder="Ada Okafor"
            {...fieldProps("name")}
          />
        </Field>
        <Field id={`${uid}-email`} label="Email" error={errors.email}>
          <input
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="ada@yourbusiness.com"
            {...fieldProps("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${uid}-business`} label="Business name" optional>
          <input
            type="text"
            autoComplete="organization"
            placeholder="Ada's Hair Studio"
            {...fieldProps("business")}
          />
        </Field>
        <Field id={`${uid}-type`} label="What do you need?" error={errors.type}>
          <select {...fieldProps("type")}>
            <option value="" disabled>
              Choose one
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        id={`${uid}-message`}
        label="About your project"
        error={errors.message}
      >
        <textarea
          rows={5}
          placeholder="What does your business do, what should the site help with, and when do you need it?"
          {...fieldProps("message")}
          className={`${inputClass(errors.message)} resize-y`}
        />
      </Field>

      {status === "failed" && (
        <p role="alert" className="t-small text-red-500">
          Your message didn&apos;t send. Try again, or email me at {EMAIL}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-primary text-primary-foreground dark:text-background font-display font-semibold hover:bg-primary/90 transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-wait"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
};

export default EnquiryForm;
