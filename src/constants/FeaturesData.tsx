import Clock from "../assets/clock.png";
import Wallet from "../assets/wallet.png";
import Budget from "../assets/budget.png";
interface FeaturesProps {
  title: string;
  description: string;
  image: string;
}

export const FeaturesData: FeaturesProps[] = [
  {
    title: "Suivi en temps réel",
    description:
      "Grâce à notre fonctionnalité de suivi en temps réel, vous pouvez surveiller vos finances à tout moment. Restez informé des mouvements de votre portefeuille, suivez vos dépenses et vos revenus instantanément, et prenez des décisions éclairées en fonction des données les plus récentes",
    image: Clock,
  },
  {
    title: "Gestion des investissements",
    description:
      "Optimisez votre portefeuille avec notre outil de gestion des investissements. Analysez vos placements actuels, évaluez les performances et identifiez les opportunités de croissance grâce à des analyses approfondies et des recommandations personnalisées.",
    image: Wallet,
  },
  {
    title: "Budget",
    description:
      "Prenez le contrôle de vos finances avec notre outil de gestion de budget. Établissez des budgets personnalisés, suivez vos dépenses et identifiez les domaines où vous pouvez économiser. Notre plateforme vous permet de planifier vos finances en toute simplicité, en vous offrant une vue d'ensemble claire de vos revenus et de vos dépenses.",
    image: Budget,
  },
];
