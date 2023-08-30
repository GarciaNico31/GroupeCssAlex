// CSS
import CardsParks from "./CardsParks";
import "./Parks.css";

const Parks = () => {
    return (
        <div className="ParksGlobal">
            <p className="ParksP">Nos deux Parcs : le Parc Disneyland, le Parc Walt Disney Studios et les boutiques,<br/>bars, restaurants et cinéma du Disney Village</p>
            <CardsParks />
        </div>
    )
}

export default Parks;