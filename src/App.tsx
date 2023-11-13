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
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    console.log(state.buttonSate);
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
        buttonSate: false,
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
    if (state.Cardholder === "") {
      useErrorState("Cardholder", true);
    }
    if (state.CardNumber === "") {
      useErrorState("CardNumber", true);
    } else if (state.CardNumber.length !== 16) {
      useErrorState("CardNumber", true);
    }
    //
    if (state.MM === "") {
      useErrorState("MM", true);
    } else if (state.MM.length !== 2) {
      useErrorState("MM", true);
    }
    //
    if (state.YY === "") {
      useErrorState("YY", true);
    } else if (state.YY.length !== 2) {
      useErrorState("YY", true);
    }
    //
    if (state.CVC === "") {
      useErrorState("CVC", true);
    } else if (state.CVC.length !== 3) {
      useErrorState("CVC", true);
    }
    /* if (
      state.Cardholder === "" ||
      state.CardNumber === "" ||
      state.MM ||
      state.YY === "" ||
      state.CVC === ""
    ) {
      setErrorState({
        Cardholder: true,
        CardNumber: true,
        MM: true,
        YY: true,
        CVC: true,
      });
    } */
    //
    setState((prev) => {
      return {
        ...prev,
        buttonSate: true,
      };
    });
  }
  console.log(errorState);
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
          {errorState.CVC === false &&
          errorState.CardNumber === false &&
          errorState.Cardholder === false &&
          errorState.MM === false &&
          errorState.YY === false &&
          state.buttonSate === true ? (
            <FinishPage />
          ) : (
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
              CardHolderError={errorState.Cardholder}
            />
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
