import React from "react";

interface TextNode {
  text: String;
}

const Hooks: React.FC = () => {
  const [name, setName] = React.useState<TextNode>({ text: "Paulos" });

  const changeText = () => {
    setName({ text: "Name Changed" });
  };

  return (
    <div>
      <h3>{name.text}</h3>
      <button onClick={changeText}>Change Text</button>
    </div>
  );
};

export default Hooks;
