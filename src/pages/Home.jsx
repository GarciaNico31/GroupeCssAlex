// Components
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Parks from "../components/Parks";

// StyleSheets
import "./Home.css";

const Home = () => {
    return (
        <div className="HomeGlobal">
            <Header />
            <Parks />
            <LatestNews />
        </div>
    );
};

export default Home;
