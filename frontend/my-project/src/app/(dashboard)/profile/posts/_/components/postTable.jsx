import { Empty } from "@/components/empty/empty";
import { Table } from "@/components/table/table";
import { getPosts } from "@/services/postServices";
import { PostRow } from "./postRow";

export const PostTable = async ({ query = "" }) => {
  const { posts } = await getPosts(query);
  if (!posts.length) return <Empty resourceName="پستی یافت نشد!" />;
  return (
    <>
      <Table>
        <Table.Header>
          <th>#</th>
          <th>عنوان</th>
          <th>دسته بندی</th>
          <th>نویسنده</th>
          <th>تاریخ ایجاد</th>
          <th>نوع</th>
          <th>عملیات</th>
          <th></th>
        </Table.Header>
        <Table.Body>
          {posts.map((item, index) => (
            <PostRow key={item.id} post={item} index={index} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
