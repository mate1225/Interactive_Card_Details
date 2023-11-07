//image
import mobileBG from "../images/bg-main-mobile.png";
import desktopBG from "../images/bg-main-desktop.png";

export default function BackgroundImage() {
  return (
    <div className=" absolute top-0 z-[-1]">
      <img src={mobileBG} className=" h-[15rem] w-screen xl:hidden" />
      <img
        src={desktopBG}
        className=" w-[ 30.1875rem] hidden h-screen xl:block"
      />
    </div>
  );
}
