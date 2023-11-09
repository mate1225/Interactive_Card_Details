import { ChangeEventHandler } from "react";

export default function Inputs(props: {
  placeholderValue: string;
  labelValue: string;
  divStyle: string;
  InputStyle: boolean;
  inpValue: string;
  inpName: string;
  handleChange: ChangeEventHandler;
}) {
  const {
    divStyle,
    InputStyle,
    labelValue,
    placeholderValue,
    inpValue,
    inpName,
    handleChange,
  } = props;
  return (
    <div className={` grid   text-DeepViolet ${divStyle} `}>
      {labelValue && <label htmlFor={labelValue}>{labelValue}</label>}
      <input
        type="text"
        className={` my-[0.69rem]  h-[2.8125rem] min-w-0 max-w-[1000rem] rounded-lg border-[1px] border-solid  px-4 outline-none   ${
          InputStyle ? "border-Red" : "border-LightGrey focus:border-Gradient"
        } `}
        id={labelValue}
        placeholder={placeholderValue}
        value={inpValue}
        name={inpName}
        onChange={handleChange}
      />
    </div>
  );
}
