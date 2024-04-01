import { CustomButton } from "./CustomButton";

export const NavigationBar = () => {
  return (
    <div className="w-[100vw] h-[10vh] flex items-center justify-start">
      <div className="w-[40%]">
        <img
          className="rounded-full w-[4rem] mx-8"
          src="https://i.pinimg.com/564x/57/9d/c5/579dc56b270f465965023eec0499c05d.jpg"
          alt="xindic"
        />
      </div>
      <div
        id="CopyText"
        className="w-[20%] text-[#c4c4c4] text-[2vw] lg:text-[1.2vw] transition-opacity duration-500 ease-in-out opacity-0"
      >
        Text copied to clipboard!
      </div>
      <div className="w-[40%] flex items-center justify-end">
        <CustomButton
          Text="Work"
          Color="#ffffff"
          Hover="#696969"
          Size="1.3rem"
          Redirect="/"
        ></CustomButton>
        <CustomButton
          Text="About"
          Color="#ffffff"
          Hover="#696969"
          Size="1.3rem"
          MarginX="2vh"
          Redirect="/about"
        ></CustomButton>
      </div>
    </div>
  );
};
