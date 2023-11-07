import BottomSection from "./BottomSection";
import CustomButton from "./CustomButton";
import Inputs from "./Inputs";

export default function FormSection() {
  return (
    <div className=" mt-[3.02rem]  xl:mt-[17.19rem] xl:max-w-[23.8125rem]  ">
      <section>
        <Inputs
          labelValue="Cardholder Name"
          placeholderValue="e.g. Jane Appleseed"
          style="mx-6"
        />
        <Inputs
          labelValue="Card Number"
          placeholderValue="e.g. 1234 5678 9123 0000"
          style="mx-6"
        />
        <BottomSection />
        <CustomButton text="Confirm" style="mt-7" />
      </section>
    </div>
  );
}
