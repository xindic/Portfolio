import { NavigationBar } from "../Components/NavigationBar";

const About = () => {
  return (
    <div className="h-screen w-screen flex-col flex-wrap items-center justify-center">
      <NavigationBar />
      <div className="text-[8rem] my-[-2rem]">xindic</div>
      <div className="text-[#848484] text-[4rem]">Fullstack Developer</div>

      <div className="my-20 flex flex-col align-top items-center">
        <div className="w-[60rem] h-[7rem]">
          Hey there! I'm a game developer with over 2 years of experience both
          on and outside of Roblox. I am most proficient in{" "}
          <span className="text-[#848484]">Scripting</span> and{" "}
          <span className="text-[#848484]">VFX Design </span>. With each of my
          services, my goal is to deliver an impactful experience for everyone.
        </div>
        <div className="w-[60rem] h-[20rem]"></div>
      </div>

      <div>© 2024 xindic. All rights reserved</div>
    </div>
  );
};

export default About;
