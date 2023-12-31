"use client";
import PlusIcon from "@/public/assets/shared/icon-new-feedback.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { createSuggestionSchema } from "../api/validationSchema";
import FormDropdownOption from "../components/FormDropdownList/FormDropdownOption";
import FormDropdownList from "../components/FormDropdownList/FromDropdownList";
import Spinner from "../components/Spinner";
import TextField from "../components/TextField";
import { StatusList } from "../lists/StatusList";
import { CategoryList } from "../lists/categoryList";

type FormType = z.infer<typeof createSuggestionSchema>;

const CreateForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isValid },
  } = useForm<FormType>({ resolver: zodResolver(createSuggestionSchema) });

  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  const onSubmit = (data: FieldValues) => {
    setLoading(true);
    axios
      .post("/api/suggestions", data)
      .then(() => {
        toast.success("Feedback created sucessfully");
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 200);
      })
      .catch((err) => toast.error("Can't create feedback!"))
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Image className="form-icon" src={PlusIcon} alt="plus icon" />
      <h1 className="form--title h1 txt-dark-indigo mb-20 whitespace-pre-line">
        Create New Feedback
      </h1>

      <div className="mb-6">
        <h4 className="txt-dark-indigo h4">Feedback Title</h4>
        <p className="txt-light-slate-grey h4 fw-normal mb-4 ">
          Add a short, descriptive headline
        </p>
        <TextField
          errorMessage={errors.title?.message}
          {...register("title")}
        />
      </div>

      <div className="mb-6">
        <h4 className="txt-dark-indigo h4">Category</h4>
        <p className="txt-light-slate-grey h4 fw-normal mb-4 ">
          Choose a category for your feedback
        </p>
        <FormDropdownList
          errorMessage={errors.category?.message || null}
          onChange={(value) => {
            setValue("category", value);
            setError("category", {});
          }}
        >
          {Object.values(CategoryList).map((category) => (
            <FormDropdownOption key={category.value} value={category.value}>
              {category.label}
            </FormDropdownOption>
          ))}
        </FormDropdownList>
      </div>

      <div className="mb-6">
        <h4 className="txt-dark-indigo h4">Update Status</h4>
        <p className="txt-light-slate-grey h4 fw-normal mb-4 ">
          Change feedback state
        </p>
        <FormDropdownList
          errorMessage={errors.status?.message || null}
          onChange={(value) => {
            setValue("status", value);
            setError("status", {});
          }}
        >
          {Object.values(StatusList).map((status) => (
            <FormDropdownOption key={status.value} value={status.value}>
              {status.label}
            </FormDropdownOption>
          ))}
        </FormDropdownList>
      </div>

      <div>
        <h4 className="txt-dark-indigo h4">Feedback Detail</h4>
        <p className="txt-light-slate-grey h4 fw-normal mb-4 ">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <TextField
          errorMessage={errors.description?.message}
          {...register("description")}
        />
      </div>

      <div className="flex justify-end mt-8 sm:flex-col gap-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="btn btn-small btn-indigo"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-small btn-violet">
          {isLoading ? <Spinner /> : "Add Feedback"}
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
