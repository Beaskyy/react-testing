import { useEffect, useState } from "react";
import { SkillsProps } from "./skills.types";

export const Skills = ({ skills }: SkillsProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    },   500);
  })
  return (
    <>
      <ul>
        <li>
          {skills.map((skill) => {
            return <li key={skill}>{skill}</li>;
          })}
        </li>
      </ul>

      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
