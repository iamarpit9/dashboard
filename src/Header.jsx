import logo1 from "./assets/logo1.png";
import search from "./assets/search.svg";
import bell from "./assets/bell.svg";
import chat from "./assets/chat.svg";
import reactsvg from "./assets/react.svg";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 w-full shadow px-0 bg-white	 z-50">
        <div className="relative max-w-[1260px] flex items-center justify-between gap-4 w-full h-[5rem] md:h-[4.5rem] px-8 mx-auto bg-background10 z-50">
          <a href="/home">
            <img src={logo1} alt="img" className="h-8" />
          </a>
          <div className="flex items-center justify-end gap-4 h-[2.5rem] w-3/5 text-gray-500">
            <form className="relative mr-24 pr-1 shrink-0 flex  items-center gap-4 w-[19rem] h-full">
              <img className=" absolute left-3 text-black h-5" src={search} />
              <div className="absolute left-10 w-[1px] h-5 bg-neutral-950	"></div>
              <input
                type="text"
                className="w-full h-full text-base pl-12 pr-3 rounded-3xl border border-[#DCDAFF] focus:outline-1 text-letters-secondary focus:outline-blue-500 placeholder:text-letters-tertiary/70 "
                placeholder="Search"
              />
            </form>

            <div className="relative flex justify-center items-center h-full aspect-square border rounded-md border-[#DCDAFF] text-brand-primary">
              <img className="" src={bell} />
            </div>
            <div className="relative flex justify-center items-center h-full aspect-square border rounded-md border-[#DCDAFF] text-brand-primary">
              <img className="" src={chat} />
            </div>
            <div className="relative flex justify-center items-center h-full aspect-square  rounded-full bg-current ">
              <img className="" src={reactsvg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
