import Allhouses from "../AllHouses/Allhouses";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
          <Banner></Banner>  
          <Allhouses></Allhouses>
        </div>
    );
};

export default Home;Home