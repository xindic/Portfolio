export const NavigationBar = () => {
  return (
    <div className="h-[6rem] flex flex-wrap items-center justify-start sticky">
      <div className="w-[40%]">
        <img
          className="rounded-full w-[4rem] mx-8"
          src="https://i.pinimg.com/564x/57/9d/c5/579dc56b270f465965023eec0499c05d.jpg"
          alt="xindic"
        />
      </div>
      <div
        id="CopyText"
        className="w-[20%] text-[#c4c4c4] text-[1.2rem] transition-opacity duration-500 ease-in-out opacity-0"
      >
        Text copied to clipboard!
      </div>
      <div className="w-[40%] flex flex-wrap items-center justify-end">
        <button className="hover:text-[#696969] text-[1.3rem]">Work</button>
        <button className="hover:text-[#696969] text-[1.3rem] mx-8">
          About
        </button>
      </div>
    </div>
  );
};
