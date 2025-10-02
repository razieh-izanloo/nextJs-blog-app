import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getPosts } from "@/services/postServices";
import { RelatedPost } from "../_components/RelatedPost";
import { PostComment } from "../_components/comment/postComment";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { posts } = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: `پست ${post.title}`,
  };
}

const SinglePost = async ({ params }) => {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto px-3">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          src={post.coverImageUrl}
          alt={post.title}
        />{" "}
      </div>
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <PostComment post={post} />
    </div>
  );
};
export default SinglePost;
