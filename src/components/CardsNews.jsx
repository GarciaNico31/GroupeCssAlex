import CardDataNews from "../data/CardDataNews";
import "./CardsNews.css";

const CardsNews = () => {
    return (
        <div className="CardsNews_Global">
            {CardDataNews.map((cardNews, index) => (
                <div key={cardNews.id} className={`cardNews cardNews-${index}`}>
                    <div className="CardsNews_Text">
                        <h3 className="NewsTitle">{cardNews.titleNews}</h3>
                        <p className="NewsDescritpion">{cardNews.descriptionNews}</p>
                    </div>
                    <img src={cardNews.imgNews} alt={cardNews.titleNews} />
                </div>
            ))}
        </div>
    )
}

export default CardsNews;