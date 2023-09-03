interface Props {
  children: string;
}
const Header = ({ children }: Props) => {
  return (
    <div className="w-fit flex items-center">
      <div className="w-20 bg-dprimary h-1 mr-2" />
      <h1 className="font-bold text-4xl">{children}</h1>
    </div>
  );
};

export default Header;
