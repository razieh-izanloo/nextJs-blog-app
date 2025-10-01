import { toLocalDateShort } from "@/utils/dateFormatter";
import { Table } from "@/components/table/table";
import { truncateText } from "@/utils/truncate";
import { DeletePost, UpdatePost } from "./buttons";

const statusStyle = {
  free: {
    label: "رایگان",
    className: "badge-success",
  },
  premium: {
    label: "پولی",
    className: "badge-secondary",
  },
};

export const PostRow = ({ post, index }) => {
  const { title, category, author, createdAt, type } = post;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 15)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
       <span className={`badge ${statusStyle[type].className}`}>
          {statusStyle[type].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-3">
          <UpdatePost id={post._id} />
          <DeletePost post={post} />
        </div>
      </td>
    </Table.Row>
  );
};
