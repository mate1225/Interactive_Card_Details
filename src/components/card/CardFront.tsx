import { useContext } from "react";
import cardFront from "../../images/bg-card-front.png";
import cardLogo from "../../images/card-logo.svg";
import { CardContext } from "../../util/contexts";
export default function CardFront() {
  const { Cardholder, CardNumber, MM, YY } = useContext(CardContext);

  let cardNumberPart1 = CardNumber.slice(0, 4);
  let cardNumberPart2 = CardNumber.slice(4, 8);
  let cardNumberPart3 = CardNumber.slice(8, 12);
  let cardNumberPart4 = CardNumber.slice(12, 16);

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
            {CardNumber === ""
              ? "0000 0000 0000 0000"
              : cardNumberPart1 +
                " " +
                cardNumberPart2 +
                " " +
                cardNumberPart3 +
                " " +
                cardNumberPart4}
          </p>
          <div className=" mt-[1.06rem] flex gap-[7.76rem] text-[0.5625rem] tracking-[0.08038rem] xl:mt-[1.59rem] xl:gap-[12.2rem] xl:text-[0.875rem] xl:tracking-[0.125rem] ">
            <p> {Cardholder === "" ? "JANE APPLESEED" : Cardholder}</p>
            <p>
              {MM === "" ? "00" : MM.slice(0, 2)} /{" "}
              {YY === "" ? "00" : YY.slice(0, 2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
