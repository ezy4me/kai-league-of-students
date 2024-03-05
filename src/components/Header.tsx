import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <Link to={"/"}>
            <img alt="header_logo" src="/public/images/logo.png" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link className="link" to={"/"}>
                О фестивале
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="link" to={"/venues"}>
                Площадки
              </Link>
            </li>
            <li className="header__nav-item">
              <div className="logo">
                <img src="/public/images/cat.png" alt="Лига студентов" />
              </div>
            </li>
            <li className="header__nav-item">
              <Link className="link" to={"/contacts"}>
                Контакты
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="link" to={"/documents"}>
                Документы
              </Link>
            </li>
          </ul>
        </nav>

        <Link className="link" to={"/login"}>
          Личный кабинет
        </Link>
      </div>
    </header>
  );
};

export default Header;
