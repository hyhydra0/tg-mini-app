import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="text-light_color p-[12px] flex justify-center items-center">
      <img src={logo} alt="" className="w-[120px]" />
    </div>
  );
};

export default Header;
