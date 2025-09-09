"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { RHFTextField } from "@/components/textField/RHFTextField";
import { Button } from "@/components/button/button";
import { useAuth } from "@/context/authContext";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().min(8).required("رمز عبور الزامی است"),
  })
  .required();

const SigninPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="text-center fs-3 mb-4">ورود</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-3"
      >
        <RHFTextField
          label="ایمیل"
          name="email"
          register={register}
          dir="ltr"
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          register={register}
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
        />
        <div>
          {isLoading ? (
            // <SpinnerMini />
            <>loading</>
          ) : (
            <Button type="submit" variant="primary" className="w-100">
              تایید
            </Button>
          )}
        </div>
      </form>
      <Link href="/signup" className="link-footer mt-4 text-center">
        ثبت نام
      </Link>
    </div>
  );
};
export default SigninPage;
