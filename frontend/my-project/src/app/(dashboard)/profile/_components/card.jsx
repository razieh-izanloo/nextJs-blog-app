import {
  UserGroupIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  comments: ChatBubbleBottomCenterTextIcon,
  users: UserGroupIcon,
  posts: DocumentIcon,
};

export const Card = ({ title, value, type }) => {
  const Icon = iconMap[type];

  return (
    <div className="col-sm-4 my-2">
      <div className="section-card shadow-sm">
      <div className="d-flex gap-1 align-items-center py-2">
        {Icon ? <Icon className="icon-card" /> : null}
        <h3 className="mb-0">{title}</h3>
      </div>
      <div className="box-number">
      <p
        className={`truncate rounded-xl bg-secondary-0 px-4 py-8 text-center text-2xl text-secondary-500`}
      >
        {value}
      </p>
      </div>

      </div>
    </div>
  );
};
