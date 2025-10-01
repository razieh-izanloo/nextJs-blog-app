import { useFormStatus } from "react-dom";
import SvgLoaderComponent from "./SVGLoaderComponent";
import { Button } from "@/components/button";

export const SubmitButton = ({ children, calssName, ...rest }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      {...rest}
      className={`d-flex align-items-center justify-content-center gap-4 py-4 w-100
        ${calssName}
        `}
    >
      {children}
      {pending && <SvgLoaderComponent />}
    </Button>
  );
};
