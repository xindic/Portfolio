import { useNavigate } from "react-router-dom";

interface Props {
  Text: string;
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
      console.log(Redirect);
    } else if (TextToCopy) {
      CopyToClipboard(TextToCopy);
    } else if (Link) {
      window.open(Link, "_blank");
    }
  };

  return (
    <button
      className="text-[#696969] text-[1.5rem] hover:text-white CustomButton"
      onClick={handleClick}
    >
      {Text} {Icon}
    </button>
  );
};
