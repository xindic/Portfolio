export const NavigationBar = () => {
  return (
    <div className="h-[6rem] flex flex-wrap items-center justify-start sticky">
      <div className="w-[50%]">
        <img
          className="rounded-full w-[4rem] mx-8"
          src="https://cdn.discordapp.com/avatars/489824470941433856/325ded998276694c50a78c578aed4a06.webp?size=2048"
          alt="xindic"
        />
      </div>
      <div className="w-[50%] flex flex-wrap items-center justify-end">
        <button className="hover:text-[#696969] text-[1.3rem]">Work</button>
        <button className="hover:text-[#696969] text-[1.3rem] mx-8">
          About
        </button>
      </div>
    </div>
  );
};
