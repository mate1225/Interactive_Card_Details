import "./App.css";
//tsx
import BackgroundImage from "./components/BackgroundImage";
import Card from "./components/card/Card";
import FinishPage from "./components/formComponents/FinishPage";
import FormSection from "./components/formComponents/FormSection";

function App() {
  return (
    <>
      <div className=" xl:flex  ">
        <BackgroundImage />
        <Card />
        <div className=" w-[100%] xl:flex   xl:justify-center ">
          <FormSection />
          {/* <FinishPage /> */}
        </div>
      </div>
    </>
  );
}

export default App;
