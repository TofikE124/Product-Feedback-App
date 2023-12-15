import BackButton from "../../components/BackButton";
import EditForm from "./EditForm";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";

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

  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
    include: { Suggestions: { where: { id: suggestion.id } } },
  });

  if (!user?.Suggestions.length) notFound();

  return (
    <div className="suggestion-form-page w-fit mx-auto">
      <BackButton />
      <EditForm suggestion={suggestion} />
    </div>
  );
};

export default EditPage;
