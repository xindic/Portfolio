import { NavigationBar } from "../Components/NavigationBar";
import { CustomButton } from "../Components/CustomButton";

const ContactIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block ml-1"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);
const EmailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block ml-1"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

function Work() {
  return (
    <div className="h-screen w-screen">
      <NavigationBar />
      <div className="font-generalsans-semibold text-[25vw] lg:text-[15vw] w-screen h-[30vh] flex items-center justify-center">
        Hello
      </div>
      <div className="text-[#848484] text-[5vw] lg:text-[2vw] w-screen h-[5vh] flex items-center justify-center">
        I'm xindic — Fullstack Developer
      </div>

      <div className="flex items-center justify-center w-screen h-[50vh]">
        <div className="flex flex-col items-center justify-center w-[35vw] h-[50vh] space-y-1">
          <CustomButton Text="Projects" Redirect="/projects" />
          <CustomButton Text="Showcase" Redirect="/showcase" />
        </div>
        <div className="flex flex-col items-center justify-center w-[35vw] h-[50vh] space-y-1">
          <CustomButton
            Text="Email"
            Icon={EmailIcon}
            TextToCopy="ayaanlums@gmail.com"
          />
          <CustomButton
            Text="Discord"
            Icon={ContactIcon}
            Link={"https://discord.com/users/489824470941433856"}
          />
          <CustomButton
            Text="Github"
            Icon={ContactIcon}
            Link={"https://github.com/xindic"}
          />
        </div>
      </div>
      <div className="w-screen h-[5vh] flex items-center justify-center">
        © 2024 xindic. All rights reserved
      </div>
    </div>
  );
}

export default Work;
