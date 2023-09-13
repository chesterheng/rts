import { useState, FC } from "react";

interface User {
  name: string;
  age: number;
}

type UserState = User | undefined;

const users: User[] = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alex",
    age: 21,
  },
  {
    name: "Micheal",
    age: 22,
  },
];

const UserSearch: FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<UserState>();

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <br />
      <label htmlFor="username">Name</label>
      <input
        id="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
