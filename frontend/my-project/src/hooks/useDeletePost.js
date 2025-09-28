import { deletePostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeletePost = () => {
  const queruClient = useQueryClient();

  const { isPending: isDeleting, mutate: deletePost } = useMutation({
    mutationFn: deletePostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queruClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, deletePost };
};
