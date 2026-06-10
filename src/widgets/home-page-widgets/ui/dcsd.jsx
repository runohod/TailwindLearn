import { logo, chat, phone } from "@/shared/assets";

export const Header = () => {
  return (
    <header className="w-full bg-white">
      {/* Контейнер: 
        - mt-5 и mb-5 на десктопе, уменьшаем отступы на мобилках (py-4), чтобы хедер не был гигантским.
        - flex-wrap, чтобы на самых маленьких экранах элементы могли перенестись, а не ломали разметку.
      */}
      <div className="container-custom py-4 min-[768px]:my-5 flex justify-between items-center gap-4 flex-wrap min-[768px]:flex-nowrap">
        
        {/* Левая часть: Лого + Навигация */}
        <div className="flex items-center gap-6 min-[1200px]:gap-12">
          <div className="shrink-0">
            <img src={logo} alt="logo" className="w-32.5 h-5.5" />
          </div>
          
          {/* Навигация:
            - Скрываем полностью на экранах меньше 768px (под мобильное меню / бургер).
            - На экранах от 768px до 1200px уменьшаем зазоры между ссылками до gap-5, чтобы всё влезало.
          */}
          <nav className="font-bold hidden min-[768px]:block">
            <ul className="flex gap-5 min-[1200px]:gap-10 text-sm min-[1200px]:text-base whitespace-nowrap">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Work</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">News</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contacts</a></li>
            </ul>
          </nav>
        </div>

        {/* Правая часть: Контакты */}
        <div className="flex gap-4 min-[1200px]:gap-9 shrink-0 items-center">
          
          {/* Блок: Позвонить */}
          <div className="flex gap-3 items-center">
            <img src={phone} alt="phone" className="w-10 h-10" />
            {/* Текст скрывается на <1200px (или на <992px, как ты просил).
              Класс `hidden min-[992px]:block` заставит текст исчезнуть ровно на 992px и ниже.
            */}
            <div className="font-bold text-sm leading-tight hidden min-[992px]:block">
              <p className="text-gray-text font-normal text-xs">Call us</p>
              <p className="text-dark whitespace-nowrap">(405) 555-0128</p>
            </div>
          </div>
          
          {/* Блок: Написать */}
          <div className="flex gap-3 items-center">
            <img src={chat} alt="chat" className="w-10 h-10" />
            {/* Точно так же скрываем текстовый блок на экранах меньше 992px */}
            <div className="font-bold text-sm leading-tight hidden min-[992px]:block">
              <p className="text-gray-text font-normal text-xs">Talk to us</p>
              <p className="text-dark whitespace-nowrap">hello@createx.com</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};