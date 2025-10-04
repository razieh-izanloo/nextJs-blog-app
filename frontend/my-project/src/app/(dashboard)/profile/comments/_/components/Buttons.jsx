"use client";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import deleteComment from "../actions/deleteComment";
import EditCommentForm from "./UpdateCommentForm";
import { ButtonIcon } from "@/components/buttonIcon";
import { Modal } from "@/components/modal";
import { ConfirmDelete } from "@/components/ConfirmDelete";

export function DeleteComment({ id: commentId }) {
  const [state, formAction] = useActionState(deleteComment, {
    error: "",
    message: "",
  });
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      setIsDeleteOpen(false);
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف نظر`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          title={`حذف نظر`}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={async (formData) => {
            await formAction({ formData, commentId });
          }}
        />
      </Modal>
    </>
  );
}

export function UpdateComment({ comment }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const onClose = () => setIsEditOpen(false);
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsEditOpen(true)}>
        <PencilIcon className="text-error" />
      </ButtonIcon>

      <Modal title={`ویرایش نظر`} open={isEditOpen} onClose={onClose}>
        <EditCommentForm onClose={onClose} comment={comment} />
      </Modal>
    </>
  );
}
