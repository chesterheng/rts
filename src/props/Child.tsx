import { FC, ReactNode } from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
  children?: ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
      {children}
    </div>
  );
};

ChildAsFC.displayName = "Child is a React function component";
