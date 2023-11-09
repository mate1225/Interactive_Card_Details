import Inputs from "./Inputs";
import { ChangeEventHandler } from "react";

export default function BottomSection(props: {
  MMvalue: string;
  YYValue: string;
  CVCValue: string;
  handleChange: ChangeEventHandler;
  MMError: boolean;
  YYError: boolean;
  CVCError: boolean;
}) {
  const {
    MMvalue,
    YYValue,
    CVCValue,
    handleChange,
    MMError,
    YYError,
    CVCError,
  } = props;
  return (
    <>
      <div className="mx-6 flex justify-between "></div>
      <section className=" mx-6 grid grid-cols-2 grid-rows-1  ">
        <div>
          <p className=" text-[0.75rem] tracking-[0.125rem] text-DeepViolet  ">
            Exp. Date (MM/YY)
          </p>
          <div className=" grid grid-cols-2 grid-rows-1">
            <Inputs
              placeholderValue="MM"
              labelValue=""
              divStyle=""
              InputStyle={MMError}
              inpValue={MMvalue}
              inpName="MM"
              handleChange={handleChange}
            />
            <Inputs
              placeholderValue="YY"
              labelValue=""
              divStyle=" ml-[0.5rem] "
              InputStyle={YYError}
              inpValue={YYValue}
              inpName="YY"
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className=" ml-[0.69rem] ">
          <p className=" text-[0.75rem] tracking-[0.125rem] text-DeepViolet  ">
            CVC
          </p>
          <Inputs
            placeholderValue="e.g. 123"
            labelValue=""
            divStyle=""
            InputStyle={CVCError}
            inpValue={CVCValue}
            inpName="CVC"
            handleChange={handleChange}
          />
        </div>
      </section>
    </>
  );
}
