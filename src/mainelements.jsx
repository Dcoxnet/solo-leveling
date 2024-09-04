import { useEffect, useState } from "react";

export function App() {
  const [show, setShow] = useState({
    first: false,
    second: false,
    third: false,
  });

  const [cardIndex, setCardIndex] = useState(0);

  // Массив карточек с данными
  const cards = [
    { title: "Информация" },
    { title: "Способности" },
    { title: "Статус" },
  ];

  // Функция для смены карточки
  const handleChangeCard = () => {
    setCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  useEffect(() => {
    function onScroll(e) {
      const newShow = {
        first: false,
        second: false,
        third: false,
      };

      if (window.scrollY > 100) {
        newShow.first = true;
      }

      if (window.scrollY > 600) {
        newShow.second = true;
      }

      if (window.scrollY > 1050) {
        newShow.third = true;
      }

      setShow(newShow);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <div class="bText">
        <div></div>
        <h1 class="jumbo">arrise</h1>
      </div>
      <main>
        <div className="center">
          <div className={`son ${show.first ? "something" : ""}`}>
            <div className="aside">
              <h1>{cards[cardIndex].title}</h1>
              <h2>{cards[cardIndex].title}</h2>
              <h2>{cards[cardIndex].title}</h2>
            </div>
            <img
              src="/pictures/son.png"
              className="sonbratan"
              alt="son"
              width="267px"
              height="450px"
            />
            <div>
              <h1>
                <span className="spanText">S</span> rank <br />
                Сон Джин-Ву
                <br />
                (성진우)
              </h1>
              <p>
                Главный герой Поднятия уровня в одиночку. Джин-Ву был печально
                известным охотником Е-ранга, "слабейшим охотником человечества".
                Однако жизнь юноши изменилась, когда таинственная Система
                провозгласила его "игроком". Теперь некогда слабейший охотник
                получил возможность стать сильнейшим.
              </p>
            </div>
          </div>

          <div className={`jha ${show.second ? "something" : ""}`}>
            <div className="aside">
              <h1>Информация</h1>
              <h2>Способности</h2>
              <h2>Статус</h2>
            </div>
            <img
              src="/pictures/jha.png"
              className="jhasestra"
              alt="jha"
              width="267px"
              height="450px"
            />
            <div>
              <h1>
                <span className="spanText">S</span> rank
                <br />
                Ча Хэ-Ин <br />
                (차해인)
              </h1>
              <p>
                Ча - дотошная женщина, которая заботится о жизни окружающих, о
                чем свидетельствует то, как у нее появилась привычка
                патрулировать логово босса во время рейдов своей гильдии, чтобы
                обеспечить безопасность горнодобывающих и транспортировочных
                команд.
              </p>
            </div>
          </div>

          <div className={`yoo ${show.third ? "something" : ""}`}>
            <div className="aside">
              <h1>Информация</h1>
              <h2>Способности</h2>
              <h2>Статус</h2>
            </div>
            <img
              src="/pictures/yoojinho.png"
              className="yoobratan"
              alt="yoo"
              width="267px"
              height="450px"
            />
            <div>
              <h1>
                <span className="spanText">D</span> rank <br />Ю Джин Хо
                <br />
                (유진호兪珍虎)
              </h1>
              <p>
                Ю Джин Хо- охотник D-ранга, которого Сон Джин-Ву спас в
                подземелье C-ранга. Первоночально он подумал, что Джин-Ву
                является "лжеранговым" и испугался его, но быстро начал ему
                доверять и заработал у него уважение.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
