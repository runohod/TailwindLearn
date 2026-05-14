import logo from "../shared/assets/logo.svg";
import chat from "../shared/assets/chat.svg";
import phone from "../shared/assets/phone.svg";

export const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="mt-[20px] flex max-w-[1230px] w-full justify-between mx-auto px-4 items-center mb-[20px]">
        <div className="flex gap-[60px]">
          <div className="">
            <img src={logo} alt="logo" className="w-32.5 h-5.5" />
          </div>
          <nav className="font-bold">
            <ul className="flex gap-[40px]">
              <li className="">
                <a href="#">About Us</a>
              </li>
              <li className="">
                <a href="#">Services</a>
              </li>
              <li className="">
                <a href="#">Work</a>
              </li>
              <li className="">
                <a href="#">News</a>
              </li>
              <li className="">
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-[36px]">
          <div className="flex gap-[22px]">
            <img src={phone} alt="phone" className="w-[40px] h-[40px]" />
            <div className="font-bold">
              <p>Call us</p>
              <p>(405) 555-0128</p>
            </div>
          </div>
          <div className="flex gap-[22px]">
            <img src={chat} alt="chat" className="w-[40px] h-[40px]" />
            <div className="font-bold">
              <p>Talk to us</p>
              <p>hello@createx.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
