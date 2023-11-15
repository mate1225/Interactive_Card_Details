import BottomSection from "./BottomSection";
import CustomButton from "./CustomButton";
import Inputs from "./Inputs";
import { ChangeEventHandler, MouseEventHandler } from "react";

export default function FormSection(props: {
  Cardholder: string;
  CardNumber: string;
  MM: string;
  YY: string;
  CVC: string;
  handleChange: ChangeEventHandler;
  CardHolderError: boolean;
  CardNumberError: boolean;
  MMError: boolean;
  YYError: boolean;
  CVCError: boolean;
  handelClick: MouseEventHandler;
}) {
  const {
    Cardholder,
    CardNumber,
    MM,
    YY,
    CVC,
    handleChange,
    CardNumberError,
    MMError,
    YYError,
    CVCError,
    CardHolderError,
    handelClick,
  } = props;
  return (
    <div className=" mt-[3.02rem]  xl:mt-[17.19rem] xl:max-w-[23.8125rem]  ">
      <section>
        <Inputs
          labelValue="Cardholder Name"
          placeholderValue="e.g. Jane Appleseed"
          divStyle="mx-6"
          InputStyle={CardHolderError}
          inpValue={Cardholder}
          inpName="Cardholder"
          handleChange={handleChange}
          displayError=""
        />
        <Inputs
          labelValue="Card Number"
          placeholderValue="e.g. 1234 5678 9123 0000"
          divStyle="mx-6"
          InputStyle={CardNumberError}
          inpValue={CardNumber}
          inpName="CardNumber"
          handleChange={handleChange}
          displayError=""
        />
        <BottomSection
          MMvalue={MM}
          YYValue={YY}
          CVCValue={CVC}
          handleChange={handleChange}
          MMError={MMError}
          YYError={YYError}
          CVCError={CVCError}
        />
        <CustomButton text="Confirm" style="mt-7" handelClick={handelClick} />
      </section>
    </div>
  );
}
