import Inputs from "./Inputs";

export default function BottomSection() {
  return (
    <>
      <div className="mx-6 flex justify-between "></div>
      <section className=" mx-6 grid grid-cols-2 grid-rows-1  ">
        <div>
          <p className=" ">Exp. Date (MM/YY)</p>
          <div className=" grid grid-cols-2 grid-rows-1">
            <Inputs placeholderValue="MM" labelValue="" style="" />
            <Inputs
              placeholderValue="YY"
              labelValue=""
              style=" ml-[0.5rem]  "
            />
          </div>
        </div>

        <div className=" ml-[0.69rem] ">
          <p>CVC</p>
          <Inputs placeholderValue="e.g. 123" labelValue="" style=" " />
        </div>
      </section>
    </>
  );
}
