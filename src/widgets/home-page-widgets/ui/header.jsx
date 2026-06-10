import { logo, chat, phone } from "@/shared/assets";

export const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="container-custom py-4 min-[768px]:my-5 flex justify-between items-center gap-4 flex-wrap min-[768px]:flex-nowrap">
        <div className="flex items-center gap-6 min-[1200px]:gap-12">
          <div>
            <img src={logo} alt="logo" className="w-32.5 h-5.5" />
          </div>
          <nav className="font-bold">
            <ul className="flex gap-10">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-4 min-[1200px]:gap-9 shrink-0 ">
          <div className="flex gap-3.5 items-center">
            <img src={phone} alt="phone" className="w-10 h-10 hidden min-[768px]:block" />
            <div className="font-bold text-sm leading-tight hidden min-[992px]:block">
              <p className="text-gray-text font-normal text-xs">Call us</p>
              <p className="text-dark whitespace-nowrap">(405) 555-0128</p>
            </div>
          </div>
          <div className="flex gap-3.5 items-center">
            <img src={chat} alt="chat" className="w-10 h-10 hidden min-[768px]:block" />
            <div className="font-bold text-sm leading-tight hidden min-[992px]:block">
              <p className="text-gray-text font-normal text-xs">Talk to us</p>
              <p className="text-dark">hello@createx.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};