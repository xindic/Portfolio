import { NavigationBar } from "../Components/NavigationBar";

interface AboutData {
  title: string;
  description?: string;
  proficiency: number;
  image?: string;
}

const languageInfo = [
  {
    title: "Luau",
    proficiency: 5,
    image: "Luau.svg",
  },
  {
    title: "C#",
    proficiency: 4,
    image: "images/C#.svg",
  },
  {
    title: "Typescript",
    proficiency: 2,
    image: "images/Typescript.svg",
  },
  {
    title: "C++",
    proficiency: 2,
    image: "images/C++.svg",
  },
];

const renderStars = (proficiency: number | null) => {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= (proficiency || 0) ? "★" : "☆";
  }
  return stars;
};
const Languages = ({ languageInfo }: { languageInfo: AboutData[] }) => (
  <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-4">
    {languageInfo.map((info, index) => (
      <div key={index} className="p-4 rounded shadow">
        {info.image && (
          <img
            src={info.image}
            alt={info.title}
            className="w-16 h-16 rounded-full mx-auto"
          />
        )}
        <h3 className="text-center font-metrobold mt-4 mb-2">{info.title}</h3>
        <p className="text-center font-metroregular text-white">
          {info.description}
        </p>
        <p className="text-center font-metroregular text-white text-opacity-50">
          {renderStars(info.proficiency)}
        </p>
      </div>
    ))}
  </div>
);

const About = () => {
  return (
    <div className="h-screen w-screen flex-col justify-center items-center">
      <NavigationBar />
      <div className="text-[#848484] text-[4rem] w-[100vw] h-[10vh]">
        Fullstack Developer
      </div>
      <div className="w-[60vw] h-[15vh] mx-[20vw] text-[1.3rem] text-left my-[5vh]">
        Hey there! I'm a game developer with over 2 years of experience both on
        and outside of Roblox. I excel in{" "}
        <span className="text-[#e7cd56]">Scripting</span> and{" "}
        <span className="text-[#e7cd56]">VFX Design </span>. Over the years, I
        have contributed to over <span className="text-[#e7cd56]">5M+</span>{" "}
        visits and I believe I can bring value to any team with my skillset.
      </div>
      <div className="flex-row justify-center items-center align-middle w-[50vw] mx-[25vw] h-[10vh] mt-[20vh]">
        <Languages languageInfo={languageInfo} />{" "}
      </div>
    </div>
  );
};

export default About;
