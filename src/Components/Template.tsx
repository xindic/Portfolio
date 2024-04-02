interface Props {
  Name?: string;
  Image?: string;
  Description?: string;
  Link?: string;
  Video?: string;
}

const MouseEnter = (event: React.MouseEvent<HTMLElement>) => {
  event.currentTarget.style.opacity = "1";
};

const MouseLeave = (event: React.MouseEvent<HTMLElement>) => {
  event.currentTarget.style.opacity = "0.7";
};

// const MouseDown = (event: React.MouseEvent<HTMLElement>) => {
// };

const Template = ({
  Image = "https://htmlcolors.com/color-image/111111.png",
  Video,
}: Props) => {
  if (Video) {
    return (
      <video
        className="mx-8 overflow-hidden rounded-sm"
        width="90%"
        height="100%"
        src={Video}
        controls
      />
    );
  } else {
    return (
      <div className="mx-8 overflow-hidden rounded-sm">
        <img
          src={Image}
          className="w-[100%] h-[100%] opacity-[0.7]"
          onMouseEnter={MouseEnter}
          onMouseLeave={MouseLeave}
          // onMouseDown={MouseDown}
        />
      </div>
    );
  }
};

export default Template;
