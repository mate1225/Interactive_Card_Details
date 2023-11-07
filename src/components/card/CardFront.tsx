import cardFront from "../../images/bg-card-front.png";
import cardLogo from "../../images/card-logo.svg";
export default function CardFront(props: {
  name: string;
  cardNumber: string;
  date: string;
}) {
  const { name, cardNumber, date } = props;
  return (
    <section>
      <div className=" relative ml-[1.06rem] mr-[4.56rem] mt-[-4.23rem] xl:ml-[10.25rem] xl:mt-[11.69rem] xl:w-[27.9375rem] ">
        <img src={cardFront} className=" h-[9.763rem] xl:h-[15.3125rem] " />
        <div className=" absolute left-0 top-0 pl-[1.1rem] text-white xl:pl-8 ">
          <img
            src={cardLogo}
            className=" mt-[1.1rem] h-[1.875rem] xl:h-[2.9375rem] "
          />
          <p className=" mt-[2.31rem] text-[1.125rem] tracking-[0.1375rem] xl:mt-[4rem] xl:text-[1.75rem] xl:tracking-[0.21388rem]  ">
            {cardNumber === "" ? "0000 0000 0000 0000" : cardNumber}
          </p>
          <div className=" mt-[1.06rem] flex items-center justify-between text-[0.5625rem] tracking-[0.08038rem] xl:mt-[1.59rem] xl:text-[0.875rem] xl:tracking-[0.125rem] ">
            <p> {name === "" ? "JANE APPLESEED" : name}</p>
            <p> {date === "" ? "00/00" : date}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
