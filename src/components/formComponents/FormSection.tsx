import BottomSection from "./BottomSection";
import ConfirmButton from "./ConfirmButton";
import Inputs from "./Inputs";

export default function FormSection() {
  return (
    <div className=" mt-[3.02rem]  xl:ml-[7.94rem] xl:mr-[14.19rem] xl:mt-[17.19rem]  ">
      <section>
        <Inputs
          placeholderValue="e.g. Jane Appleseed"
          labelValue="Cardholder Name"
          style="mx-6"
        />
        <Inputs
          placeholderValue="e.g. Jane Appleseed"
          labelValue="Cardholder Name"
          style="mx-6"
        />
        <BottomSection />
        <ConfirmButton />
      </section>
    </div>
  );
}
