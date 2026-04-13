const OutlinedButton = ({ text }) => {
  return (
    <button className="px-3 py-1 rounded-full text-body border bg-muted/50 hover:bg-transparent transition-all duration-300">
      {text}
    </button>
  );
};

export default OutlinedButton;
