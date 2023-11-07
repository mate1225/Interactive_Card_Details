export default function Inputs(props: {
  placeholderValue: string;
  labelValue: string;
  style: string;
}) {
  const { placeholderValue, labelValue, style } = props;
  return (
    <div className={` grid   text-DeepViolet ${style} `}>
      {labelValue && <label htmlFor={labelValue}>{labelValue}</label>}
      <input
        type="text"
        className=" my-[0.69rem]  h-[2.8125rem] min-w-0 max-w-[1000rem] rounded-lg border-[1px] border-solid border-LightGrey px-4 "
        id={labelValue}
        placeholder={placeholderValue}
        value={""}
      />
    </div>
  );
}
