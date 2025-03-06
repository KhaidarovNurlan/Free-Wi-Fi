const Header = () => {
  return (
    <header>
      <div className="div-norm">
        <a href="/">
          <img src="https://www.marley-rus.ru/images/wifi_logo.png" alt="Logo" />
        </a>
        <div className="div1">
          <h1>↓↓↓↓↓ FREE Wi-Fi ↓↓↓↓↓</h1>
          <i>ЧТОБЫ ПОЛЬЗОВАТЬСЯ ХАЛЯВНЫМ ИНТЕРНЕТОМ, ЗАРЕГИСТРИРУЙТЕСЬ НА САЙТЕ</i>
        </div>
      </div>
      <ul>
        <li><a href="/sign">Регистрация</a></li>
        <li><a href="/cabinet"><div className="sub">Личный кабинет</div></a></li>
      </ul>
    </header>
  );
};

export default Header;
