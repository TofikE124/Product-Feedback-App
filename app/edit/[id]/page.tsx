import { Toaster } from "react-hot-toast";
import BackButton from "../../components/BackButton";
import EditForm from "./EditForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

const EditPage = async ({ params: { id } }: Props) => {
  const suggestion = await prisma.suggestion.findUnique({
    where: { id: Number(id) },
  });

  if (!suggestion) {
    notFound();
  }

  return (
    <div className="suggestion-form-page w-fit mx-auto">
      <BackButton />
      <EditForm suggestion={suggestion} />
    </div>
  );
};

export default EditPage;
