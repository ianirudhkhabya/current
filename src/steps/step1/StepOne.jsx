import UploadVideo from "./UploadVideo";
import Header from "./Header";

const StepOne = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen flex flex-col">
      <Header />
      <UploadVideo />
    </div>
  );
};

export default StepOne;
