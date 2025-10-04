"use server";

import { deleteCommentApi } from "@/services/commentService";
import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function deleteComment(prevState, { commentId }) {
  const cookieStore = cookies();

  try {
    const options = setCookieOnReq(cookieStore);
    const { message } = await deleteCommentApi(commentId, options);

    revalidatePath("/profile/comments");

    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;

    return {
      error,
    };
  }
}
