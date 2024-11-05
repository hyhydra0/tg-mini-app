const Footer = () => {
  return (
    <div className="text-center py-[8px] text-[#B2B2B2]">
      @copyright {new Date().toDateString().slice(10)} Powered by CP ventures
    </div>
  );
};

export default Footer;
