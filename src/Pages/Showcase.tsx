import { NavigationBar } from "../Components/NavigationBar";
import Template from "../Components/Template";

const Showcase = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <NavigationBar />
      <div className="w-[80vw] h-[85vh] mx-[10vw] Scrollable">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full sm:mb-4 gap-y-10">
          <Template Video="videos/golden.mp4" />
          <Template Video="videos/fireball.mp4" />
          <Template Video="videos/impact.mp4" />
          <Template Video="videos/parry.mp4" />
          <Template Video="videos/slashes.mp4" />
          <Template Video="videos/fireslash.mp4" />
          <Template Video="videos/cero.mp4" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
