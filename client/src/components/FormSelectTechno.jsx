import React, { useState } from "react";
import Select from "react-select";

const FormSelectTechno = ({ register, onValueChange }) => {
  const options = [
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Express", label: "Express" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "SASS", label: "SASS" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "Tailwind", label: "Tailwind" },
    { value: "Material UI", label: "Material UI" },
    { value: "React Native", label: "React Native" },
    { value: "Redux", label: "Redux" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "Next.js", label: "Next.js" },
    { value: "Gatsby", label: "Gatsby" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "Apollo", label: "Apollo" },
    { value: "PostgreSQL", label: "PostgreSQL" },
    { value: "MySQL", label: "MySQL" },
    { value: "Sequelize", label: "Sequelize" },
    { value: "Mongoose", label: "Mongoose" },
    { value: "Git", label: "Git" },
    { value: "GitHub", label: "GitHub" },
    { value: "Heroku", label: "Heroku" },
    { value: "Netlify", label: "Netlify" },
    { value: "Vercel", label: "Vercel" },
    { value: "AWS", label: "AWS" },
    { value: "Google Cloud", label: "Google Cloud" },
    { value: "Firebase", label: "Firebase" },
    { value: "Figma", label: "Figma" },
    { value: "Adobe XD", label: "Adobe XD" },
    { value: "Photoshop", label: "Photoshop" },
    { value: "Illustrator", label: "Illustrator" },
    { value: "InDesign", label: "InDesign" },
  ];

  const [selectedOption, setSelectedOption] = useState([]);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onValueChange(selectedOption);
  };

  return (
    <>
      <Select
        name="technologies"
        {...register("technologies")}
        closeMenuOnSelect={false}
        isMulti
        options={options}
        value={selectedOption}
        onChange={handleChange}
        // styles={{
        //   placeholder: (baseStyles, state) => ({
        //     ...baseStyles,
        //     padding: "0",
        //   }),
        // }}
      />
    </>
  );
};

export default FormSelectTechno;
