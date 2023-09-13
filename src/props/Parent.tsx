import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
      Hello
    </ChildAsFC>
  );
};

export default Parent;
