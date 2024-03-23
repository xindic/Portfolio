interface Props {
  Text: string;
  Icon?: React.ReactElement<SVGElement>;
  Link?: string;
  TextToCopy?: string;
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

export const CustomButton = ({ Text, Icon, Link, TextToCopy }: Props) => (
  <button
    className="text-[#696969] text-[1.5rem] hover:text-white CustomButton"
    onClick={() =>
      TextToCopy
        ? CopyToClipboard(TextToCopy)
        : Link && window.open(Link, "_blank")
    }
  >
    {Text} {Icon}
  </button>
);
