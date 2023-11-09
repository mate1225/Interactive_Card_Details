//images

import CardBack from "./CardBack";
import CardFront from "./CardFront";

export default function (props: {
  cv: string;
  Cardholder: string;
  cardNumber: string;
  MM: string;
  YY: string;
}) {
  const { cv, Cardholder, cardNumber, MM, YY } = props;
  return (
    <>
      <section className=" flex items-center justify-center xl:items-end xl:justify-start  ">
        <div className=" flex flex-col xl:flex-col-reverse">
          <CardBack cv={cv} />
          <CardFront
            Cardholder={Cardholder}
            cardNumber={cardNumber}
            MM={MM}
            YY={YY}
          />
        </div>
      </section>
    </>
  );
}
