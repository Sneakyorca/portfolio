const SkillCard = ({ group, skills }) => {
  return (
    <div className="p-6 border rounded-xl bg-background/40">
      <h3 className="font-semibold text-foreground font-display mb-6 flex items-center">
        <span className="inline-block p-1 rounded-full mr-3 bg-primary"></span>{" "}
        {group}
      </h3>
      <ul className="flex flex-col gap-3.5">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm">
            <div className="flex justify-between">
              <p>{skill.name}</p>
              <span className="text-xs text-gray-400">{skill.level}%</span>
            </div>
            <progress value={skill.level} max="100" className="w-full h-1" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
