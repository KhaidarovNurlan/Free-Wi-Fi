const Catagory = () => {
  return (
    <div className="catagory">
      <div className="catagory-content">
        <div className="choose">
          <h1>Выберите подписку</h1>
        </div>
        <div className="cats">
          <div className="cat-card">
            <a href="/sign"><h1>Easy-peasy</h1></a>
            <p>Плюсы: высокая скорость интернета<br />Необходимо Ваше ФИО</p>
          </div>
          <div className="cat-card">
            <a href="/sign"><h1>Pro</h1></a>
            <p>Плюсы: очень высокая скорость интернета<br />Необходимо Ваше ФИО<br />Город проживания</p>
          </div>
          <div className="cat-card">
            <a href="/sign"><h1>Legend</h1></a>
            <p>Плюсы: очень-очень высокая скорость интернета<br />Необходимо Ваше ФИО<br />Город проживания<br />Номер телефона</p>
          </div>
          <div className="cat-card">
            <a href="/sign"><h1>Sigma Boy</h1></a>
            <p>Плюсы: супер-дупер высокая скорость интернета<br />Необходимо Ваше ФИО<br />Город проживания<br />Номер телефона<br />Адрес дома</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
