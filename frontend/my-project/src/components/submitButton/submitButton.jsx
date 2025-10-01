import { useFormStatus } from "react-dom";
import SvgLoaderComponent from "./SVGLoaderComponent";
import { Button } from "@/components/button";

export const SubmitButton = ({ children, calssName, ...rest }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      {...rest}
      className={`flex items-center justify-center gap-x-4 py-4 w-full
        ${calssName}
        `}
    >
      {children}
      {pending && <SvgLoaderComponent />}
    </Button>
  );
};
