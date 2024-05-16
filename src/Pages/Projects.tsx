import { NavigationBar } from "../Components/NavigationBar";
import Template from "../Components/Template";

const Projects = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <NavigationBar />
      <div className="w-[85vw] h-[85vh] mx-[7.5vw] Scrollable">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full sm:mb-4 gap-y-10">
          <Template
            Name="Arm Wrestling Simulator"
            Link="https://www.roblox.com/games/14985614364/Weight-Lifting-Simulator"
            Image="https://tr.rbxcdn.com/1f20694c727ba2bab87fd663d2c622df/768/432/Image/Png"
          />
          <Template
            Name="Mining Adventure Simulator"
            Link="https://www.roblox.com/games/15618465191/Mining-Adventure-Simulator"
            Image="https://tr.rbxcdn.com/acadd395d5a1726dcacb207d458c911c/768/432/Image/Png"
          />
          <Template
            Name="Tree Farming Simulator"
            Link="https://www.roblox.com/games/14742393991/Tree-Farming-Simulator"
            Image="https://tr.rbxcdn.com/2aeffb8f1c9d881a55357516ba4f6575/500/280/Image/Jpeg"
          />
          <Template
            Name="The Conductor"
            Link="https://www.roblox.com/games/16130519846/The-Conductor"
            Image="https://tr.rbxcdn.com/46a2f6114fde2705d6d8e25777008cd1/768/432/Image/Png"
          />
          <Template
            Name="Tarnished"
            Link="https://www.roblox.com/games/15077806640/Tarnished"
            Image="https://tr.rbxcdn.com/8d31645e27780802eb271cd2458c7fc2/768/432/Image/Png"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
