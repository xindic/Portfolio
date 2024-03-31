interface Props {
  Name?: string;
  Image: string;
  Description?: string;
  Link?: string;
}

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
};
const Template = ({ Name, Image, Description, Link }: Props) => {
  return (
    <div className="w-[23%] h-[80%] mx-8">
      <img src={Image} className="w-[100%] h-[100%]" />
    </div>
  );
};

export default Template;
