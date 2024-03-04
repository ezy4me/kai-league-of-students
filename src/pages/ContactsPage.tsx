const ContactsPage = () => {
  const contacts = [
    {
      name: "Исполнительный директор — Ким Милана",
      phone: "+7-(987)-175-06-66",
      telegram: "@milano4kakim",
      image: "/public/images/persons/image-1.png",
    },
    {
      name: "Руководитель Регламентно-протокольной службы — Мингатина Галина",
      phone: "+7-(962)-554-92-34",
      telegram: "@gali_mingatina",
      image: "/public/images/persons/image-13.png",
    },
    {
      name: "Руководитель службы по работе с участниками — Хуснутдинова Алиса",
      phone: "+7-(906)-326-14-27",
      telegram: "@aiw_66",
      image: "/public/images/persons/image-12.png",
    },
    {
      name: "Руководитель Медиа — Шагиева Регина",
      phone: "+7-(927)-677-19-38",
      telegram: "@ginn8y",
      image: "/public/images/persons/image-11.png",
    },
    {
      name: "Руководитель PR&Фандрайзинг — Кузьмина Полина",
      phone: "+7-(905)-313-68-74",
      telegram: "@mepollya",
      image: "/public/images/persons/image-10.png",
    },
    {
      name: "Руководитель направлений Медиа&Видео — Батюкова Ева",
      phone: "",
      telegram: "@itabave",
      image: "/public/images/persons/image-9.png",
    },
    {
      name: "Руководитель направлений Мода&АРТ — Гилева Елизавета",
      phone: "",
      telegram: "@wowowowowoe",
      image: "/public/images/persons/image-8.png",
    },
    {
      name: "Руководитель концертно-административной службы — Кавиева Гулюса",
      phone: "",
      telegram: "@glskka",
      image: "/public/images/persons/image-7.png",
    },
    {
      name: "Руководитель службы по работе с экспертами — Ахунова Регина",
      phone: "",
      telegram: "@myuwerei",
      image: "/public/images/persons/image-6.png",
    },
    {
      name: "Руководитель технической группы — Зиннуров Руслан",
      phone: "",
      telegram: "@rouslzinn",
      image: "/public/images/persons/image-5.png",
    },
    {
      name: "Руководитель службы Программа — Раимова Аделина",
      phone: "",
      telegram: "@Raimbo17",
      image: "/public/images/persons/image-4.png",
    },
    {
      name: "Руководитель службы Логистика — Осянина Алёна",
      phone: "",
      telegram: "@Al_Rock9",
      image: "/public/images/persons/image-3.png",
    },
    {
      name: "Руководитель направления Общая программа ВУЗа — Розанов Артур",
      phone: "",
      telegram: "@Neikan1",
      image: "/public/images/persons/image-2.png",
    },
  ];

  return (
    <div className="page contacts-page">
      <section>
        <div className="container contacts-page__container">
          <h1>Исполнительная дирекция фестиваля</h1>
          <div className="contacts">
            <div className="contacts__list">
              {contacts.map((contact, index) => (
                <div key={index} className="contacts__item">
                  <img src={contact.image} alt="" />
                  <div className="contacts__item-content">
                    <h3 className="contacts__item-title">{contact.name}</h3>
                    <h5 className="contacts__item-subtitle">{contact.phone}</h5>
                    <a className="contacts__item-link">{contact.telegram}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactsPage;
