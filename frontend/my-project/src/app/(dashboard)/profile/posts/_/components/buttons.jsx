"use client";
import { ButtonIcon } from "@/components/buttonIcon/buttonIcon";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const DeletePost = ({ id }) => {
  return (
    <ButtonIcon variant="outline" onClick={() => console.log(id)}>
      <TrashIcon className="text-danger" />
    </ButtonIcon>
  );
};

export const UpdatePost = ({ id }) => {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
};
