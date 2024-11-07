import { FC } from "react";

interface IHeader {
  locale?: string;
}

const Header: FC<IHeader> = ({ locale }) => {
  console.log(locale, "locale");
  return (
    <header>
      <div className="flex items-center gap-4">
        <h1>Header</h1>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
        <select id="languageSelect">
          <option value="en">English</option>
          <option value="uk">Українська</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
