import AgroNews from "../components/AgroNews";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import LatestCrop from "../components/LatestCrop";
import Pathshala from "../components/Pathshala";
import Results from "../components/Results";


const Home = () => {
    return (
       <div>
       <section>
         <Hero></Hero>
       </section>
        <section>
            <LatestCrop></LatestCrop>
        </section>
        <section>
            <HowItWorks></HowItWorks>
        </section>
        <section>
            <AgroNews></AgroNews>
        </section>
        <section>
            <Results></Results>
        </section>
        <section>
            <Pathshala></Pathshala>
        </section>
       </div>
    );
};

export default Home;