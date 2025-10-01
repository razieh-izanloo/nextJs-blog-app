"use client";
import { Button } from "@/components/button";
import { ButtonIcon } from "@/components/buttonIcon/buttonIcon";
import { FileInput } from "@/components/fileInput/fileInput";
import { RHFSelect } from "@/components/RHFSelect/RHFSelect";
import { Spinner } from "@/components/spinner/spinner";
import { RHFTextField } from "@/components/textField/RHFTextField";
import { useCategories } from "@/hooks/useCategories";
import { useCreatePost } from "@/hooks/useCreatePost";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import "./style.scss";
import { imageUrlToFile } from "@/utils/fileFormatter";
import { useEditPost } from "@/hooks/useEditPost";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

export const CreatePostForm = ({ postToEdit = {} }) => {
  const { _id: editId } = postToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    text,
    briefText,
    slug,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevPostCoverImageUrl,
  } = postToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      text,
      briefText,
      slug,
      readingTime,
      category: category._id,
      coverImage,
    };
  }

  const { categories } = useCategories();
  const { createPost, isCreating } = useCreatePost();
  const { editPost, isEditing } = useEditPost();
  const [coverImageUrl, setCoverImageUrl] = useState(
    prevPostCoverImageUrl || null
  );
  const router = useRouter();

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevPostCoverImageUrl) {
      async function fetchMyAPI() {
        const file = await imageUrlToFile(prevPostCoverImageUrl);
        setValue("coverImage", file);
      }
      fetchMyAPI();
    }
  }, []);

  const onSubmit = async (data) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            router.push("/profile/posts");
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");
          reset();
        },
      });
    }
  };

  return (
    <div className="row">
      <form
        className="form col-sm-8 col-lg-6 col-xl-5 col-xxl-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RHFTextField
          label="عنوان"
          name="title"
          register={register}
          required
          errors={errors}
        />
        <RHFTextField
          label="متن کوتاه"
          name="briefText"
          register={register}
          required
          errors={errors}
        />
        <RHFTextField
          label="متن"
          name="text"
          register={register}
          required
          errors={errors}
        />
        <RHFTextField
          label="اسلاگ"
          name="slug"
          register={register}
          required
          errors={errors}
        />
        <RHFTextField
          label="زمان مطالعه"
          name="readingTime"
          register={register}
          required
          errors={errors}
        />
        <RHFSelect
          label="دسته بندی"
          required
          name="category"
          register={register}
          options={categories}
        />
        <Controller
          control={control}
          name="coverImage"
          rules={{ required: "عکس کاور پست الزامی است" }}
          render={({ field: { value, onChange, ...rest } }) => {
            return (
              <FileInput
                {...rest}
                value={value?.fileName}
                onChange={(event) => {
                  const file = event.target.files[0];
                  onChange(file);
                  setCoverImageUrl(URL.createObjectURL(file));
                }}
                label="انتخاب کاور پست"
                errors={errors}
              />
            );
          }}
        />

        {coverImageUrl && (
          <div id="section-cover-image">
            <Image
              className="object-fit-cover"
              fill
              alt="cover-iamge"
              src={coverImageUrl}
            />
            <ButtonIcon
              type="button"
              onClick={() => {
                setCoverImageUrl(null);
                setValue("coverImage", null);
              }}
              variant="red"
            >
              <XMarkIcon />
            </ButtonIcon>
          </div>
        )}

        <div>
          {isCreating ? (
            <Spinner />
          ) : (
            <Button variant="primary" type="submit" className="w-100">
              تایید
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
