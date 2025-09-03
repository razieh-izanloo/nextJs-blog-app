import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/services/postServices";
import "./page.scss";

export const dynamicParams = false;

export async function generateStaticParams(){
  const posts = await getPosts();
  const slugs = posts.map(post => ({slug: post.slug}))
  return slugs;
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: `پست ${post.title}`,
  };
} 

const SinglePost = async ({ params }) => {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  return (
    <div className="container single-post">
      <div className="row">
        <h1>{post.title}</h1>
        <p className="mb-">{post.briefText}</p>
        <p className="mb-4">{post.text}</p>
        <div className="img-box">
          <Image fill src={post.coverImageUrl} alt={post.title} />
        </div>
        {/* {post.related.length > 0 && <RelatedPost posts={post.related} />} */}
        {/* <PostComment post={post} /> */}
      </div>
    </div>
  );
};
export default SinglePost;
