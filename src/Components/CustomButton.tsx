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
    event.preventDefault();

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
      className="CustomButton"
      style={{
        color: Color,
        fontSize: Size,
        marginLeft: MarginX,
        marginRight: MarginX,
      }}
      onMouseEnter={(event) => (event.currentTarget.style.color = Hover)}
      onMouseLeave={(event) => (event.currentTarget.style.color = Color)}
      onClick={handleClick}
    >
      {Text} {Icon}
    </button>
  );
};
