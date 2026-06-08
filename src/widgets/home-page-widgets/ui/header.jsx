import { logo, chat, phone } from "@/shared/assets";

export const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="mt-5 flex max-w-1230 w-full justify-between mx-auto px-24 items-center mb-5">
        <div className="flex items-center gap-12">
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

        <div className="flex gap-9 shrink-0">
          <div className="flex gap-3.5 items-center">
            <img src={phone} alt="phone" className="w-10 h-10" />
            <div className="font-bold text-sm leading-tight">
              <p className="text-gray-text font-normal text-xs">Call us</p>
              <p className="text-dark">(405) 555-0128</p>
            </div>
          </div>
          <div className="flex gap-3.5 items-center">
            <img src={chat} alt="chat" className="w-10 h-10" />
            <div className="font-bold text-sm leading-tight">
              <p className="text-gray-text font-normal text-xs">Talk to us</p>
              <p className="text-dark">hello@createx.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
