interface Props {
  Name?: string;
  Image?: string;
  Description?: string;
  Link?: string;
  Video?: string;
}

const MouseEnter = (event: React.MouseEvent<HTMLElement>) => {
  const title =
    event.currentTarget.parentElement?.parentElement?.querySelector("h1");

  event.currentTarget.style.opacity = "1";
  if (title) {
    title.style.opacity = "1";
  }
};

const MouseLeave = (event: React.MouseEvent<HTMLElement>) => {
  const title =
    event.currentTarget.parentElement?.parentElement?.querySelector("h1");

  event.currentTarget.style.opacity = "0.7";
  if (title) {
    title.style.opacity = "0.5";
  }
};

const Template = ({
  Name,
  Image = "https://htmlcolors.com/color-image/111111.png",
  Video,
  Link,
}: Props) => {
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.preventDefault();
    window.open(Link, "_blank");
  };

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
      <>
        <div className="mx-8 overflow-hidden">
          <h1 className="opacity-[0.5] my-3 text-[1.2rem]"> {Name} </h1>
          <div>
            <img
              src={Image}
              className="w-[100%] h-[100%] opacity-[0.7] rounded-xl"
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
              onMouseDown={handleClick}
            />
          </div>
        </div>
      </>
    );
  }
};

export default Template;
