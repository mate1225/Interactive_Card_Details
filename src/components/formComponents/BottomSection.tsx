import Inputs from "./Inputs";
import { ChangeEventHandler } from "react";

export default function BottomSection(props: {
  MMvalue: string;
  YYValue: string;
  CVCValue: string;
  handleChange: ChangeEventHandler;
}) {
  const { MMvalue, YYValue, CVCValue, handleChange } = props;
  return (
    <>
      <div className="mx-6 flex justify-between "></div>
      <section className=" mx-6 grid grid-cols-2 grid-rows-1  ">
        <div>
          <p className=" ">Exp. Date (MM/YY)</p>
          <div className=" grid grid-cols-2 grid-rows-1">
            <Inputs
              placeholderValue="MM"
              labelValue=""
              divStyle=""
              InputStyle=""
              inpValue={MMvalue}
              inpName="MM"
              handleChange={handleChange}
            />
            <Inputs
              placeholderValue="YY"
              labelValue=""
              divStyle=" ml-[0.5rem] "
              InputStyle=""
              inpValue={YYValue}
              inpName="YY"
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className=" ml-[0.69rem] ">
          <p>CVC</p>
          <Inputs
            placeholderValue="e.g. 123"
            labelValue=""
            divStyle=""
            InputStyle=""
            inpValue={CVCValue}
            inpName="CVC"
            handleChange={handleChange}
          />
        </div>
      </section>
    </>
  );
}
