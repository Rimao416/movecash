import Logo from "../assets/move.png";
import Hand from "../assets/money_3.png";
import Finance_1 from "../assets/finance_1.jpg";
import Finance_2 from "../assets/finance_2.jpg";
import Tax from "../assets/tax.png";
import Statistics from "../assets/statistics.png";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Money from "../assets/money_2.png";
import Button from "../components/Button";
import Title from "../components/Title";
import { FeaturesData } from "../constants/FeaturesData";
import { useState } from "react";
// import {useState} from "React"
function Home() {
  const [active, setActive] = useState(false);
  const menuItems = [
    { label: "Accueil", link: "#" },
    { label: "Support", link: "#" },
    { label: "Produits", link: "#" },
    { label: "Communauté", link: "#" },
    { label: "S'inscrire", link: "#" },
  ];
  const truncateTitle = (text: string, maxLength: number = 15): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="app">
      <section className="navigation">
        <div className="navigation__header">
          <img src={Logo} className="navigation__header--logo" alt={Logo} />
          <ul className="navigation__header--list">
            {menuItems.map((item, index) => (
              <li className="navigation__wrapper--list" key={index}>
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div
            className={`navigation__responsive navigation__responsive--${
              active ? "active" : "inactive"
            }`}
          >
            <div className="navigation__index">
              <img src={Logo} alt="" />
              <span
                className="navigation__icon"
                onClick={() => setActive(false)}
              >
                <IoClose />
              </span>
            </div>
            <ul className="navigation__header--list">
              {menuItems.map((item, index) => (
                <li className="navigation__wrapper--list" key={index}>
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="navigation__right">
            <div
              className={`navigation__wrapper navigation__wrapper--${
                active ? "active" : "inactive"
              }`}
            >
              <Button content="Connexion" />
            </div>
            <span
              className="navigation__icon"
              onClick={() => setActive(!active)}
            >
              <RxHamburgerMenu />
            </span>
          </div>
        </div>

        <div className="navigation__body">
          <div className="navigation__wrapper">
            <h1 className="navigation__body--title">
              Startups avec une meilleure expérience de la finance
            </h1>
            <p className="navigation__body--description">
              La finance décrit la finance comme étant liée aux entités des
              États souverains et aux entités publiques connexes.
            </p>
            <Button content="Joignez votre entreprise à la nôtre" />
          </div>
        </div>
        <img src={Hand} alt={Hand} className="navigation__image" />
      </section>
      <section className="features">
        <Title title="Fonctionnalités complètes pour la gestion des finances personnelles" />
        <div className="features__wrapper">
          {FeaturesData.map((feature) => (
            <div className="features__wrapper--card" key={feature.title}>
              <img
                src={feature.image}
                alt={feature.title}
                className="features__wrapper--image"
              />
              <h3>{feature.title}</h3>
              <p>{truncateTitle(feature.description, 150)}</p>
              <p className="more">Voir plus</p>
            </div>
          ))}
        </div>
      </section>
      <section className="finance">
        <div className="finance__wrapper">
          <div className="finance__wrapper--box">
            <img src={Finance_1} alt={Finance_1} />
            <div className="finance__wrapper--text">
              <h4>Jesika Stamford</h4>
              <p>Financiel Advisor</p>
            </div>
          </div>
          <img
            src={Finance_2}
            alt={Finance_2}
            className="finance__wrapper--image"
          />
          <div className="finance__wrapper--payment">
            <h4>Paiements</h4>
            <p>Les 30 Derniers jours</p>
            <div className="finance__wrapper--info">
              <img src={Tax} alt={Tax} />
              <div className="finance__wrapper--content">
                <p>Taxes Supplémentaires</p>
                <p>120$</p>
              </div>
            </div>
            <div className="finance__wrapper--info">
              <img src={Statistics} alt={Statistics} />
              <div className="finance__wrapper--content">
                <p>Etudes Supplémentaires</p>
                <p>20$</p>
              </div>
            </div>
          </div>
        </div>
        <div className="finance__wrapper">
          <h1 className="finance__wrapper--title">
            La qualité de vos équipes financières grâce au flux d'argent
          </h1>
          <p className="finance__wrapper--description">
            Les finances décrivent les finances liées aux entités de l'État
            souverain et aux entités publiques connexes.
          </p>

          <div className="finance__wrapper--timeline">
            <div className="center-line"></div>
            <div className="finance__row finance__row--1">
              <section>
                <img
                  src={Money}
                  alt={Money}
                  className="finance__wrapper--icon"
                />
                <div className="finance__row--details">
                  <span className="finance__row--title">
                    Où va votre argent ?
                  </span>

                  <p className="finance__row--description">
                    Découvrez en détail comment et où votre argent est dépensé
                    avec notre outil d'analyse financière. Suivez vos
                    transactions, catégorisez vos dépenses et visualisez vos
                    habitudes financières grâce à des graphiques clairs et
                    intuitifs. Identifiez les postes de dépenses les plus
                    importants et trouvez des opportunités pour économiser.
                  </p>
                </div>
              </section>
            </div>
            <div className="finance__row finance__row--2">
              <section>
                <img
                  src={Money}
                  alt={Money}
                  className="finance__wrapper--icon"
                />
                <div className="finance__row--details">
                  <span className="finance__row--title">
                    Travailler à partir de n'importe quel appareil
                  </span>

                  <p className="finance__row--description">
                    La finance d'entreprise traite des actions entreprises pour
                    accroître la valeur de l'entreprise pour les actionnaires,
                    des sources de financement et de la gestion des risques.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="how">
        <Title
          title="Comment ça marche"
          description="Nous commençons par comprendre vos objectifs financiers. Ensuite, nous élaborons un plan personnalisé pour maximiser vos ressources."
        />
        <div className="how__wrapper"></div>
      </section>
      <div className={`overlay overlay--${active ? "active" : ""}`}></div>
    </div>
  );
}

export default Home;
