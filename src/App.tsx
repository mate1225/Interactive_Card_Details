import "./App.css";
import React, { useState } from "react";
//tsx
import BackgroundImage from "./components/BackgroundImage";
import Card from "./components/card/Card";
import FinishPage from "./components/formComponents/FinishPage";
import FormSection from "./components/formComponents/FormSection";
import {
  stateInterface,
  ErrorStateInterface,
  /* errorMessageInterface, */
  errorSateType,
} from "./util/interfaces";

function App() {
  const [state, setState] = useState<stateInterface>({
    Cardholder: "",
    CardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
    buttonSate: false,
    ContinueState: false,
  });

  const [errorState, setErrorState] = useState<ErrorStateInterface>({
    Cardholder: false,
    CardNumber: false,
    MM: false,
    YY: false,
    CVC: false,
  });

  /* const [errorMessage, setErrorMessage] = useState<errorMessageInterface>({
    Cardholder: "",
    CardNumber: "",
    MM: "",
    YY: "",
    CVC: "",
  }); */

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

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

  //customStates
  function useErrorState(name: string, value: boolean) {
    setErrorState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  /*  function useErrorMessage(name: string, value: string) {
    setErrorMessage((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  } */
  /*  function useBtnReset() {
    setState((prev) => {
      return {
        ...prev,
        buttonSate: false,
      };
    });
  } */
  //form validation
  function isContainsLetters(name: string, input: string) {
    const hasNumber = /\d/.test(input);
    if (hasNumber === false) {
      useErrorState(name, true);
    }
  }
  function validateInputField(name: keyof errorSateType, number: number) {
    if (state[name] === "") {
      useErrorState(name, true);
    } else if (state[name].length !== number) {
      useErrorState(name, true);
    }
  }
  function formValidation() {
    if (
      state.buttonSate &&
      errorState.Cardholder &&
      errorState.CardNumber &&
      errorState.MM &&
      errorState.YY &&
      errorState.CVC
    ) {
      setState((prev) => {
        return {
          ...prev,
          ContinueState: true,
        };
      });
    } else {
      if (state.Cardholder === "") {
        useErrorState("Cardholder", true);
      }
      validateInputField("CardNumber", 16);
      isContainsLetters(state.CardNumber, state.CardNumber);
      validateInputField("MM", 2);
      validateInputField("YY", 2);
      validateInputField("CVC", 3);

      setState((prev) => {
        return {
          ...prev,
          buttonSate: true,
        };
      });
    }
  }
  if (state.ContinueState) {
    setState({
      Cardholder: "",
      CardNumber: "",
      MM: "",
      YY: "",
      CVC: "",
      buttonSate: false,
      ContinueState: false,
    });
    setErrorState({
      Cardholder: false,
      CardNumber: false,
      MM: false,
      YY: false,
      CVC: false,
    });
    /*   setErrorMessage({
      Cardholder: "",
      CardNumber: "",
      MM: "",
      YY: "",
      CVC: "",
    }); */
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
              handelClick={formValidation}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
