import { useState } from "react";
import styles from "../../styles/Tutorial.module.scss";
import { useRouter } from "next/navigation";

export default function Tutorial() {
  const slides = [
    "Salve Allenatore Pokemon, benvenuto nel tuo fantastico nuovo pokedex!",
    "Segui attentamente questa guida prima di iniziare il tuo viaggio alla conquista di tutte le medaglie",
    "Sarai in grado di visualizare le statistiche dei pokemon in tuo possesso",
    "Potrai cercare il suo nome oppure conoscere i più comuni",
    "Se sei convinto di essere pronto ad iniziare il tuo viaggio clicca il tasto START!",
  ];

  const [counterSlide, setCounterSlide] = useState(0);
  const [textSlide, setTextSlide] = useState(slides[0]);

  const router = useRouter();

  const nextSlide = () => {
    if (counterSlide + 2 > slides.length) {
      router.replace("/pokedex");
    }

    setCounterSlide((prevCounterSlide) => prevCounterSlide + 1);
    setTextSlide(slides[counterSlide + 1]);
  };

  const prevSlide = () => {
    setCounterSlide((prevCounterSlide) =>
      prevCounterSlide - 1 < 0 ? prevCounterSlide : prevCounterSlide - 1
    );
    setTextSlide(slides[counterSlide]);
  };

  return (
    <div className={styles.Slider__container}>
      <div className={styles.Slider}>
        <button className={styles.Arrow} onClick={prevSlide}>
          &#60;
        </button>
        <h2 key={counterSlide} className={styles.AnimatedText}>
          {counterSlide + 1}. {textSlide}
        </h2>
        {counterSlide + 2 > slides.length ? (
          <button
            className={`${styles.Arrow} ${styles.Last} `}
            onClick={nextSlide}
          >
            START
          </button>
        ) : (
          <button className={styles.Arrow} onClick={nextSlide}>
            &#62;
          </button>
        )}
      </div>
    </div>
  );
}
