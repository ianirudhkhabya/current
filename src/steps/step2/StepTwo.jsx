import Header from "./Header";
import BrandSetup from "./BrandSetup";

const StepOne = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 min-h-screen flex flex-col">
      <Header />
      <BrandSetup />
    </div>
  );
};

export default StepOne;
