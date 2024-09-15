import { Link } from "react-router-dom";
import heroWoman from "../../assets/images/hero-woman.png";

const Hero: React.FC = () => {
    return (
        <section className="w-full h-auto min-h-[100vh] bg-heroBanner bg-center bg-no-repeat bg-cover">
            <div className="row flex items-start justify-center gap-2">
                <div className="w-full flex items-start justify-between flex-col gap-4 py-16">
                    <h1 className="w-[80%] text-5xl leading-12 font-bold text-white">
                        Foundations of Excellence Mastering Construction Basics
                    </h1>
                    <p className="w-[80%] text-white text-sm leading-7">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Distinctio, velit iure exercitationem eius nulla
                        laborum eos eaque sit?
                    </p>
                    <Link className="btn btn-primary" to="">
                        Learn More
                    </Link>
                </div>

                <div className="w-full flex items-center justify-center">
                    <img src={heroWoman} alt="hero woman" className="w-[50%]" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
