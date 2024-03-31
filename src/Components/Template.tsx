interface Props {
  Name?: string;
  Image: string;
  Description?: string;
  Link?: string;
}

const Template = ({ Image }: Props) => {
  return (
    <div className="w-[23%] h-[80%] mx-8">
      <img src={Image} className="w-[100%] h-[100%]" />
    </div>
  );
};

export default Template;
