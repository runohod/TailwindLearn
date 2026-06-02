import logo from "@/shared/assets/svg/logo.svg";
import chat from "@/shared/assets/svg/chat.svg";
import phone from "@/shared/assets/svg/phone.svg";

export const Header = () => {
  return (
    <header className="w-full bg-white">
      <div className="mt-5 flex max-w-1230 w-full justify-between mx-auto px-4 items-center mb-5">
        <div className="flex gap-60">
          <div className="">
            <img src={logo} alt="logo" className="w-32.5 h-5.5" />
          </div>
          <nav className="font-bold">
            <ul className="flex gap-10">
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

        <div className="flex gap-9">
          <div className="flex gap-5.5">
            <img src={phone} alt="phone" className="w-10 h-10" />
            <div className="font-bold">
              <p>Call us</p>
              <p>(405) 555-0128</p>
            </div>
          </div>
          <div className="flex gap-5.5">
            <img src={chat} alt="chat" className="w-10 h-10" />
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
