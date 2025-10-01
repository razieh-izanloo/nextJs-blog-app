import { Avatar } from "./avatar";

export const Author = ({ name, avatarUrl }) => {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar src={avatarUrl} />
      <span className="text-sm text-secondary-500">{name}</span>
    </div>
  );
};
