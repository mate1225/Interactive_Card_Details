import "./App.css";
//tsx
import BackgroundImage from "./components/BackgroundImage";
import Card from "./components/card/Card";
import FormSection from "./components/formComponents/FormSection";

function App() {
  return (
    <>
      <div className=" xl:flex  ">
        <BackgroundImage />
        <Card />
        <FormSection />
      </div>
    </>
  );
}

export default App;
