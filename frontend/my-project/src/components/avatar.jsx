import Image from "next/image";

export const Avatar = ({ src, width = 24 }) => {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={width}
      className="rounded-5 border border-secondary"
      alt={src}
    />
  );
};
