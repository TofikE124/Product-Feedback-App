import { Toaster } from "react-hot-toast";
import CreateForm from "./CreateForm";
import BackButton from "../components/BackButton";

const CreatePage = () => {
  return (
    <div className="create-suggestion-page mt-24 w-fit mx-auto">
      <Toaster />
      <BackButton />
      <CreateForm />
    </div>
  );
};

export default CreatePage;
