const HomePage = () => {
  const directions = [
    {
      title: "Вокальное",
      content: ["ООВО", "ПОО"],
    },
    {
      title: "Инструментальное",
      content: ["ООВО", "ПОО"],
    },
    {
      title: "Танцевальное",
      content: ["ООВО", "ПОО"],
    },
    {
      title: "Театральное",
      content: ["ООВО", "ПОО"],
    },
    {
      title: "Оригинальный жанр",
      content: ["ООВО", "ПОО"],
    },
    {
      title: "Медиа",
      content: ["ООВО", "ПОО"],
    },
    {
      title: "Видео",
      content: ["ООВО", "ПОО"],
    },
    {
      title: "Мода",
      content: ["ООВО", "ПОО"],
    },
    {
      title: "Арт",
      content: ["ООВО", "ПОО"],
    },
    {
      title: "Общая программа",
      content: ["ООВО", "ПОО"],
    },
  ];

  return (
    <div className="page home-page">
      <section>
        <div className="home-page__image">
          <div className="container home-page__container">
            <h1>
              Студенческая Весна - <span>творчество</span> внутри тебя!
            </h1>
            <button className="btn">Подать заявку</button>

            <div className="home-page__history">
              <div className="home-page__history-image">
                <img src="/public/images/big-cat.png" alt="Big Cat" />
              </div>
              <div className="home-page__history-content">
                <h3>
                  XIII Республиканский фестиваль студенческого творчества
                  «Студенческая весна Республики Татарстан» в 2024 году.
                  Ежегодный фестиваль, проводимый в ВУЗах и ССУЗах, а также
                  крупнейшая площадка для обмена и реализации творческих идей,
                  проводимый в рамках реализации Программы поддержки и развития
                  студенческого творчества «Российская студенческая весна»
                </h3>
                <button className="btn">
                  История Российской Студенческой Весны
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container home-page__container">
          <div className="home-page__directions">
            <h1>Направления участия</h1>
            <div className="directions-list">
              {directions.map((direction, index) => (
                <div className="directions-item" key={index}>
                  <h3 className="directions-item__title">{direction.title}</h3>
                  <div className="directions-item__content">
                    {direction.content.map((text, i) => (
                      <p className="text" key={i}>
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button className="btn">Подробнее</button>
          </div>
        </div>
      </section>
      <section>
        <div className="container home-page__container">
          <div className="home-page__sponsors">
            <h1>Наши спонсоры</h1>
            <div className="sponsors__list">
              <div className="sponsors__list">
                <div className="sponsors__item">
                  <img src="/public/images/adb.png" alt="АБД" />
                </div>
                <div className="sponsors__item">
                  <img src="/public/images/abb.png" alt="АК БАРС" />
                </div>
                <div className="sponsors__item">
                  <img
                    src="/public/images/talants.png"
                    alt="ИНСТИТУТ ТАЛАНТОВ"
                  />
                </div>
                <div className="sponsors__item">
                  <img src="/public/images/kuzlar.png" alt="КЮЗЛАР" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
