"use client";
import { useRouter } from "next/navigation";

export const BtnBack = (props) => {
  const { title } = props;
  const router = useRouter();

  return (
    <button type="button" onClick={router.back}>
      {title}
    </button>
  );
};
