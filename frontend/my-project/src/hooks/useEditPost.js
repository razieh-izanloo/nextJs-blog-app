import { editPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useEditPost = () => {
  const queruClient = useQueryClient();

  const { isPending: isCreating, mutate: editPost } = useMutation({
    mutationFn: editPostApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queruClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isCreating, editPost };
};
