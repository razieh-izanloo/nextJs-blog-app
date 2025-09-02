"use client";

import { ButtonIcon } from "@/components/buttonIcon/buttonIcon";
// import { bookmarkPostApi, likePostApi } from "@/services/postServices";

import {
  BookmarkIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

import {
  HeartIcon as SolidHeartIcon,
  BookmarkIcon as SolidBookmarkIcon,
} from "@heroicons/react/24/solid";
import { toPersianDigits } from "helper/numberFormatter";
import { useRouter } from "next/navigation";

// import toast from "react-hot-toast";

export const PostInteraction = ({ post }) => {
  const router = useRouter();

  // const likeHandler = async (postId) => {
  //   try {
  //     const { message } = await likePostApi(postId);
  //     toast.success(message);
  //     router.refresh();
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };

  // const bookmarkHandler = async (postId) => {
  //   try {
  //     const { message } = await bookmarkPostApi(postId);
  //     toast.success(message);
  //     router.refresh();
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message);
  //   }
  // };

  return (
    <div className="d-flex align-items-center gap-2">
      <ButtonIcon variant="secondary">
        <ChatBubbleOvalLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
      <ButtonIcon variant="red" onClick={() => likeHandler(post._id)}>
        {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant="primary" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
    </div>
  );
};
