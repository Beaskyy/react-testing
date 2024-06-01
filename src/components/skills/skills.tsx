import { SkillsProps } from "./skills.types";

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <>
      <ul>
        <li>
          {skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </li>
      </ul>
    </>
  );
};
