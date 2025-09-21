import { setCookieOnReq } from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./authService";
import { getAllCommentsApi } from "./commentService";
import { getAllPostsApi } from "./postServices";

export async function fetchHardData() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getAllPostsApi(),
      getAllCommentsApi(options),
    ]);
    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfPosts = Number(data[1].posts.length ?? "0");
    const numberOfComments = Number(data[2].commentsCount ?? "0");

    return {
      numberOfPosts,
      numberOfUsers,
      numberOfComments,
    };
  } catch (error) {
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}
