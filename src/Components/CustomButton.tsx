import { useNavigate } from "react-router-dom";

interface Props {
  Text: string;
  Size?: string;
  Color?: string;
  Hover?: string;
  MarginX?: string;
  Icon?: React.ReactElement<SVGElement>;
  Link?: string;
  TextToCopy?: string;
  Redirect?: string;
}

const CopyToClipboard = (Text: string) => {
  navigator.clipboard.writeText(Text);

  let CopyText = document.getElementById("CopyText");
  if (CopyText) {
    CopyText.style.opacity = "100%";

    setTimeout(() => {
      if (CopyText) {
        CopyText.style.opacity = "0%";
      }
    }, 2000);
  }
};

export const CustomButton = ({
  Text,
  Size = "1.5rem",
  Color = "#696969",
  Hover = "#ffffff",
  MarginX = "0",
  Icon,
  Link,
  TextToCopy,
  Redirect,
}: Props) => {
  const Navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default button behavior

    if (Redirect) {
      Navigate(`/${Redirect}`);
    } else if (TextToCopy) {
      CopyToClipboard(TextToCopy);
    } else if (Link) {
      window.open(Link, "_blank");
    }
  };

  return (
    <button
      className={`text-[${Color}] text-[${Size}] mx-${MarginX} hover:text-[${Hover}] CustomButton`}
      onClick={handleClick}
    >
      {Text} {Icon}
    </button>
  );
};
