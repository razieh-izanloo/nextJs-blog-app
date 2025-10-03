"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { RHFTextField } from "@/components/RHFTextField";
import { Button } from "@/components/button";
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
        className="flex flex-col gap-3"
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

        <Button
          type="submit"
          disable={isLoading.toString()}
          variant="primary"
          className="w-full mt-3"
        >
          تایید
        </Button>
      </form>
      <Link href="/signup" className="mt-5 block">
        ثبت نام
      </Link>
    </div>
  );
};
export default SigninPage;
