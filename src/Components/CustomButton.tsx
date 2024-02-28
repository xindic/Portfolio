interface Props {
  Text: string;
  Icon?: React.ReactElement<SVGElement>;
}

export const CustomButton = ({ Text, Icon }: Props) => {
  return (
    <button className="text-[#696969] text-[1.5rem] CustomButton">
      {Text} {Icon}
    </button>
  );
};
