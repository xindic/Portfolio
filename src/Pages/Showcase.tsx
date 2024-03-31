import { NavigationBar } from "../Components/NavigationBar";
import Template from "../Components/Template";

const Showcase = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <NavigationBar />
      <div className="w-[90vw] h-[85vh] mx-[5vw] Scrollable">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mb-0 sm:mb-4 gap-y-10">
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
          <Template Image="https://tr.rbxcdn.com/dec317dd2c12c80cdfbbf56addb86103/768/432/Image/Png" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
