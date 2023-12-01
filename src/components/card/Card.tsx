//tsx
import CardBack from "./CardBack";
import CardFront from "./CardFront";

export default function () {
  return (
    <>
      <section className=" flex items-center justify-center xl:items-end xl:justify-start  ">
        <div className=" flex flex-col xl:flex-col-reverse">
          <CardBack />
          <CardFront />
        </div>
      </section>
    </>
  );
}
