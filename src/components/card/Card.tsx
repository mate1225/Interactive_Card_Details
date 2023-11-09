//images

import CardBack from "./CardBack";
import CardFront from "./CardFront";

export default function (props: {
  CVC: string;
  Cardholder: string;
  CardNumber: string;
  MM: string;
  YY: string;
}) {
  const { CVC, Cardholder, CardNumber, MM, YY } = props;
  return (
    <>
      <section className=" flex items-center justify-center xl:items-end xl:justify-start  ">
        <div className=" flex flex-col xl:flex-col-reverse">
          <CardBack cv={CVC} />
          <CardFront
            Cardholder={Cardholder}
            cardNumber={CardNumber}
            MM={MM}
            YY={YY}
          />
        </div>
      </section>
    </>
  );
}
