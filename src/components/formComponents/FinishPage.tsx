import complete from "../../images/icon-complete.svg";
import CustomButton from "./CustomButton";
export default function FinishPage() {
  return (
    <div className=" mt-[3.02rem] xl:mt-[19.06rem]">
      <div className=" flex justify-center">
        <img src={complete} className=" w-[5rem]" />
      </div>

      <h1 className=" mt-[2.19rem] text-center text-[1.75rem] tracking-[0.21388rem] text-DeepViolet">
        THANK YOU!
      </h1>
      <p className=" mt-4 text-center text-[1.125rem] text-PurplishGrey">
        We’ve added your card details
      </p>
      <CustomButton text="Continue" style="mt-[3rem]" />
    </div>
  );
}
