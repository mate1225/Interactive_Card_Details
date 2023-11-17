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
  errorMessageInterface,
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
  });

  const [errorState, setErrorState] = useState<ErrorStateInterface>({
    Cardholder: false,
    CardNumber: false,
    MM: false,
    YY: false,
    CVC: false,
  });

  const [errorMessage, setErrorMessage] = useState<errorMessageInterface>({
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
    if (state.buttonSate) {
      setState((prev) => {
        return {
          ...prev,
          buttonSate: false,
        };
      });
    }

    setErrorState((prev) => {
      return {
        ...prev,
        [name]: false,
      };
    });
    setErrorMessage((prev) => {
      return { ...prev, [name]: "" };
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
  function useErrorMessage(name: string, value: string) {
    setErrorMessage((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  //form validation
  function isContainsLetters(name: string, input: string) {
    const onlyNumbers = /^\d+$/.test(input);
    if (onlyNumbers === false) {
      useErrorState(name, true);
      useErrorMessage(name, "Wrong format, numbers only");
    }
  }

  function validateInputField(name: keyof errorSateType, number: number) {
    if (state[name] === "") {
      useErrorState(name, true);
    } else if (state[name].length !== number) {
      useErrorState(name, true);
      if (name === "CardNumber") {
        useErrorMessage(name, "Must be 16 characters long");
      } else if (name === "MM" || name === "YY") {
        useErrorMessage(name, "Must be 2 characters long");
      } else if (name === "CVC") {
        useErrorMessage(name, "Must be 3 characters long");
      }
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
        useErrorMessage("Cardholder", "Can’t be blank");
      }
      //CardNumber
      validateInputField("CardNumber", 16);
      if (state.CardNumber !== "") {
        isContainsLetters("CardNumber", state.CardNumber);
      } else if (state.CardNumber === "") {
        useErrorMessage("CardNumber", "Can’t be blank");
      }
      //MM
      validateInputField("MM", 2);
      if (state.MM !== "") {
        isContainsLetters("MM", state.MM);
      } else if (state.MM === "") {
        useErrorMessage("MM", "Can’t be blank");
      }
      //YY
      validateInputField("YY", 2);
      if (state.YY !== "") {
        isContainsLetters("YY", state.YY);
      } else if (state.YY === "") {
        useErrorMessage("YY", "Can’t be blank");
      }
      //CVC
      validateInputField("CVC", 3);
      if (state.CVC !== "") {
        isContainsLetters("CVC", state.CVC);
      } else if (state.CVC === "") {
        useErrorMessage("CVC", "Can’t be blank");
      }

      setState((prev) => {
        return {
          ...prev,
          buttonSate: true,
        };
      });
    }
  }

  function resetPage() {
    setState({
      Cardholder: "",
      CardNumber: "",
      MM: "",
      YY: "",
      CVC: "",
      buttonSate: false,
    });
    setErrorState({
      Cardholder: false,
      CardNumber: false,
      MM: false,
      YY: false,
      CVC: false,
    });
    setErrorMessage({
      Cardholder: "",
      CardNumber: "",
      MM: "",
      YY: "",
      CVC: "",
    });
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
            <FinishPage handelClick={resetPage} />
          ) : (
            <FormSection
              Cardholder={state.Cardholder}
              CardNumber={state.CardNumber}
              MM={state.MM}
              YY={state.YY}
              CVC={state.CVC}
              handleChange={handleInputChange}
              CardHolderError={errorState.Cardholder}
              CardNumberError={errorState.CardNumber}
              MMError={errorState.MM}
              YYError={errorState.YY}
              CVCError={errorState.CVC}
              handelClick={formValidation}
              CardHolderErrorMessage={errorMessage.Cardholder}
              CardNumberErrorMessage={errorMessage.CardNumber}
              MMErrorMessage={errorMessage.MM}
              YYErrorMessage={errorMessage.YY}
              CVCErrorMessage={errorMessage.CVC}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
