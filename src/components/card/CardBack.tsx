import cardBack from "../../images/bg-card-back.png";
export default function CardBack(props: { cv: string }) {
  console.log(props.cv);

  return (
    <div className="flex">
      <div className="relative ml-[4.56rem] mr-4 mt-8 xl:ml-[16.12rem] xl:mt-[2.31rem] xl:w-[27.9375rem] ">
        <img src={cardBack} className="  h-[9.8125rem] xl:h-[15.3125rem] " />
        <p className=" tracking-[0.08038rem absolute right-0 top-0 mr-[2.31rem] mt-[4.3rem]  text-[0.5625rem] text-white xl:mr-[3.56rem] xl:mt-[6.94rem] xl:text-[0.875rem] xl:tracking-[0.125rem] ">
          {props.cv === "" ? "000" : props.cv}
        </p>
      </div>
    </div>
  );
}
