import CardsNews from "./CardsNews";
import "./LatestNews.css";

const LatestNews = () => {
    return(
        <div className="LatestNews_Global">
            <p className="LatestNews_Title">Dernières nouveautés Disneyland Paris</p>
            <CardsNews />
        </div>
    )
}

export default LatestNews;