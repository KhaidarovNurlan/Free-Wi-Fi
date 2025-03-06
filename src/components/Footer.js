const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="nav">
          <h2>FREE-Wi-Fi-Website</h2>
          <ul>
            <li><a href="/sign">Регистрация</a></li>
            <li><a href="/cabinet"><div className="sub">Личный кабинет</div></a></li>
          </ul>
        </div>
        <div className="subscribe">
          <h3>Введите три цифры с обратной стороны вашей банковской карты,<br />чтобы подключиться к интернету с доступом к ChatGPT✔</h3>
          <ul>
            <li><input type="number" placeholder="Введите 3 цифры" /></li>
            <li><a href="/sign"><div className="sub-mail">✔</div></a></li>
          </ul>
        </div>
        <div className="info">
          <p>© 2024 - 2025 FreeInternet.online<br />Contact: support@freeinternet.online</p>
          <ul>
            <li><a href="/"><img src="https://img.icons8.com/m_rounded/512/FFFFFF/facebook-new.png" alt="Facebook" /></a></li>
            <li><a href="/"><img src="https://img.icons8.com/m_outlined/200/FFFFFF/twitterx--v2.png" alt="Twitter" /></a></li>
            <li><a href="/"><img src="https://img.icons8.com/m_outlined/512/FFFFFF/instagram-new.png" alt="Instagram" /></a></li>
            <li><a href="/"><img src="https://img.icons8.com/m_rounded/512/FFFFFF/linkedin--v2.png" alt="LinkedIn" /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
