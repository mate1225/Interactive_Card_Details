import { MouseEventHandler } from "react";

export default function CustomButton(props: {
  text: string;
  style: string;
  handelClick: MouseEventHandler;
}) {
  return (
    <>
      <div
        className={` mx-6  grid ${props.style} `}
        onClick={props.handelClick}
      >
        <button className=" min-w-0 rounded-lg bg-DeepViolet   py-[0.94rem] text-[1.125rem] text-white hover:bg-Gradient xl:px-[9.44rem] ">
          {props.text}
        </button>
      </div>
    </>
  );
}
