// StyleSheet
import CardDataParks from "../data/CardDataParks";
import "./CardsParks.css";

const CardsParks = () => {
  return (
    <div className="CardsParksGlobal">
      {CardDataParks.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imgPark} alt={card.title} className="imgCardPark" />
          <h3 className="cardTitle">{card.title}</h3>
          <p className="cardSousTitre">{card.sousTitre}</p>
          <p className="card.description">{card.description}</p>
          <button className="cardButton">{card.nameButton}</button>
        </div>
      ))}
    </div>
  );
};

export default CardsParks;
