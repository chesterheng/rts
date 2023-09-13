import { FC, ChangeEvent, DragEvent } from "react";

const EventComponent: FC = () => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const onDragState = (event: DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <div>
      Event Component
      <br />
      <label htmlFor="username">Name</label>
      <input id="username" onChange={onChange} />
      <div draggable onDragStart={onDragState}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
