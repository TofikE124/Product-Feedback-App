"use client";
import EditIcon from "@/public/assets/shared/icon-edit-feedback.svg";
import React, { useState } from "react";
import FormDropdownOption from "../../components/FormDropdownList/FormDropdownOption";
import FormDropdownList from "../../components/FormDropdownList/FromDropdownList";
import Spinner from "../../components/Spinner";
import TextField from "../../components/TextField";
import { CategoryRecord as CategoryList } from "../../suggestionComponents/CategoryList";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useForm, FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { createSuggestionSchema } from "../../api/validationSchema";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Suggestion } from "@prisma/client";
import { StatusList } from "@/app/suggestionComponents/RoadMap";

type FormType = z.infer<typeof createSuggestionSchema>;

const EditForm = ({ suggestion }: { suggestion: Suggestion }) => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors, isValid },
  } = useForm<FormType>({ resolver: zodResolver(createSuggestionSchema) });

  const router = useRouter();
  const { status } = useSession();
  const [isEditing, setEditing] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  const onSubmit = (data: FieldValues) => {
    setEditing(true);
    axios
      .patch(`/api/suggestions/${suggestion.id}`, data)
      .then(() => {
        toast.success("Feedback updated sucessfully");
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 500);
      })
      .catch((err) => toast.error("Can't update feedback!"))
      .finally(() => setEditing(false));
  };

  const handleDelete = () => {
    setDeleting(true);
    axios
      .delete(`/api/suggestions/${suggestion.id}`)
      .then(() => {
        toast.success("Feedback deleted sucessfully");
        {
          router.push("/");
          router.refresh();
        }
      })
      .catch((err) => toast.error("Can't delete feedback!"))
      .finally(() => setDeleting(false));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <Image className="form-icon" src={EditIcon} alt="plus icon" />
      <h1 className="form--title h1 txt-dark-indigo mb-20">
        Editing ‘{suggestion.title}’
      </h1>

      <div className="mb-6">
        <h4 className="txt-dark-indigo h4">Feedback Title</h4>
        <p className="txt-light-slate-grey h4 fw-normal mb-4 ">
          Add a short, descriptive headline
        </p>
        <TextField
          defaultValue={suggestion.title}
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
          defaultValue={CategoryList[suggestion.category]}
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
          defaultValue={StatusList[suggestion.status]}
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
          defaultValue={suggestion.description}
          errorMessage={errors.description?.message}
          {...register("description")}
        />
      </div>

      <div className="flex mt-8 sm:flex-col sm:gap-4">
        <button
          type="button"
          onClick={() => handleDelete()}
          className="btn btn-small btn-red sm:order-1"
        >
          {isDeleting ? <Spinner /> : "Delete"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="btn btn-small btn-indigo  md:ml-auto md:mr-4"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-small btn-violet sm:-order-1">
          {isEditing ? <Spinner /> : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default EditForm;
