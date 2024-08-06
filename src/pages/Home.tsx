import Logo from "../assets/move.png";
import Hand from "../assets/money_3.png";

import Button from "../components/Button";
// import {useState} from "React"
function Home() {
  const menuItems = [
    { label: "Accueil", link: "#" },
    { label: "Support", link: "#" },
    { label: "Produits", link: "#" },
    { label: "Communauté", link: "#" },
    { label: "S'inscrire", link: "#" },
  ];
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
          <Button content="Connexion" />
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
    </div>
  );
}

export default Home;
