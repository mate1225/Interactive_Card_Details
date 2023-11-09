import "./App.css";
import React, { useState } from "react";
//tsx
import BackgroundImage from "./components/BackgroundImage";
import Card from "./components/card/Card";
/* import FinishPage from "./components/formComponents/FinishPage"; */
import FormSection from "./components/formComponents/FormSection";

function App() {
  const [state, setState] = useState({
    Cardholder: "",
    CardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const { Cardholder, CardNumber, MM, YY, CVC } = state;
  return (
    <>
      <div className=" xl:flex  ">
        <BackgroundImage />
        <Card
          cv={CVC}
          Cardholder={Cardholder}
          cardNumber={CardNumber}
          MM={MM}
          YY={YY}
        />
        <div className=" w-[100%] xl:flex   xl:justify-center ">
          <FormSection
            Cardholder={Cardholder}
            CardNumber={CardNumber}
            MM={MM}
            YY={YY}
            CVC={CVC}
            handleChange={handleInputChange}
          />
          {/* <FinishPage /> */}
        </div>
      </div>
    </>
  );
}

export default App;
