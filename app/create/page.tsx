import { Toaster } from "react-hot-toast";
import CreateForm from "./CreateForm";
import BackButton from "../components/BackButton";

const CreatePage = () => {
  return (
    <div className="suggestion-form-page  w-fit mx-auto">
      <BackButton />
      <CreateForm />
    </div>
  );
};

export default CreatePage;
