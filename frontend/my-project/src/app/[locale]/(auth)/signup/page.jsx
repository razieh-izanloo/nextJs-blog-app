"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
// import { useAuth } from "@/context/AuthContext";
// import SpinnerMini from "@/ui/SpinnerMini";
import { RHFTextField } from "@/components/textField/RHFTextField";
import { Button } from "@/components/button/button";

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی نامعتبر است")
      .max(30)
      .required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  // const { signup } = useAuth();
  const onSubmit = async (values) => {
    // await signup();
  };

  return (
    <div>
      <h1 className="text-center fs-3 mb-4">ثبت نام</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-3"
      >
        <RHFTextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          isRequired
          errors={errors}
        />
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
      <Link href="/signin" className="link-footer mt-4 text-center">
        ورود
      </Link>
    </div>
  );
}
export default Signup;
