import BackButton from "../components/BackButton";
import CreateForm from "./CreateForm";

const CreatePage = () => {
  return (
    <div className="suggestion-form-page  w-fit mx-auto sm:mt-8">
      <BackButton />
      <CreateForm />
    </div>
  );
};

export default CreatePage;
