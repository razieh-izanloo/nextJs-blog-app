import { Avatar } from "./avatar";

export const Author = ({ name, avatarUrl }) => {
  return (
    <div className="d-flex align-items-center gap-2 author">
      <Avatar src={avatarUrl} />
      <span>{name}</span>
    </div>
  );
};
