import "./App.css";
import React, { useState } from "react";
//tsx
import BackgroundImage from "./components/BackgroundImage";
import Card from "./components/card/Card";
import FinishPage from "./components/formComponents/FinishPage";
import FormSection from "./components/formComponents/FormSection";
import { stateInterface, ErrorStateInterface } from "./util/interfaces";

function App() {
  const [state, setState] = useState<stateInterface>({
    Cardholder: "",
    CardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
    buttonSate: false,
  });

  const [errorState, setErrorState] = useState<ErrorStateInterface>({
    Cardholder: false,
    CardNumber: false,
    MM: false,
    YY: false,
    CVC: false,
    isContainFalse: false,
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    for (const error in errorState) {
      if (error as keyof ErrorStateInterface) {
        console.log("set true");
        setErrorState((prev) => {
          return {
            ...prev,
            isContainFalse: true,
          };
        });
      }
    }

    const { name, value } = e.target;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    //ezt még optimalizálni kell
    /*  useEffect(() => {
      setErrorState((prev) => {
        return {
          ...prev,
          [name]: false,
        };
      });
    }, [
      errorState.CVC,
      errorState.CardNumber,
      errorState.Cardholder,
      errorState.MM,
      errorState.YY,
    ]); */
    setErrorState((prev) => {
      return {
        ...prev,
        [name]: false,
      };
    });
  }

  //form validation
  function useErrorState(name: string, value: boolean) {
    setErrorState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  /* function isContinLetters() {
    //itt lesz egy ellenőrzés arra hogy tartalmaz-e betűket
  } */
  function formValidation() {
    if (state.CardNumber.length > 16) {
      useErrorState("CardNumber", true);
    }
    if (state.CVC.length > 3) {
      useErrorState("CVC", true);
    }
    if (state.MM.length > 2) {
      useErrorState("MM", true);
    }
    if (state.YY.length > 2) {
      useErrorState("YY", true);
    }
  }

  return (
    <>
      <div className=" xl:flex  ">
        <BackgroundImage />
        <Card
          CVC={state.CVC}
          Cardholder={state.Cardholder}
          CardNumber={state.CardNumber}
          MM={state.MM}
          YY={state.YY}
        />
        <div className=" w-[100%] xl:flex   xl:justify-center ">
          <FormSection
            Cardholder={state.Cardholder}
            CardNumber={state.CardNumber}
            MM={state.MM}
            YY={state.YY}
            CVC={state.CVC}
            handleChange={handleInputChange}
            CardNumberError={errorState.CardNumber}
            MMError={errorState.MM}
            YYError={errorState.YY}
            CVCError={errorState.CVC}
          />
          {errorState.isContainFalse === false && state.buttonSate && (
            <FinishPage />
          )}
        </div>
        <button
          className=" h-[20rem] w-[20rem] rounded-md  bg-red-500 hover:bg-gray-600"
          onClick={formValidation}
        >
          teszt button
        </button>
      </div>
    </>
  );
}

export default App;
