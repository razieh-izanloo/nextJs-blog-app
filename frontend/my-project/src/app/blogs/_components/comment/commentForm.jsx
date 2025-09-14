"use client";

import { SubmitButton } from "@/components/submitButton/submitButton";
import { TextArea } from "@/components/textarea";
import { createComment } from "@/lib/actions";
import { useState, useActionState, useEffect } from "react";
import toast from "react-hot-toast";

const initilaState = {
  error: "",
  message: "",
};

export const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initilaState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            className="space-y-7"
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton>تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};
