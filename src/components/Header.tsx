import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="logo">
          <img src="/public/images/logo.png" alt="Лига студентов" />
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
            {/* <li className="header__nav-item">
              < className="logo">
                <img src="/public/images/cat.png" alt="Лига студентов" />
              </>
            </li> */}
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

        <a className="link" href="#">
          Личный кабинет
        </a>
      </div>
    </header>
  );
};

export default Header;
