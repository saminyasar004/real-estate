import AboutSectionImg from "../../assets/images/about-section-image.jpg";

const About: React.FC = () => {
    return (
        <section className="w-full h-auto py-4">
            <div className="row">
                <div className="w-full flex items-center justify-center flex-col gap-1">
                    <span className="text-blue tracking-wide">
                        Lets Know Our Company
                    </span>
                    <h2 className="text-4xl font-bold text-orange font-montserrat">
                        ABOUT US
                    </h2>
                    <div className="line"></div>
                </div>
            </div>

            <div className="row">
                <div className="w-full flex items-center justify-between gap-6">
                    <div className="w-full flex items-center justify-center">
                        <img src={AboutSectionImg} className="w-full h-auto" />
                    </div>
                    <div className="flex items-center justify-center flex-col gap-4">
                        <h3 className="w-[60%] text-3xl font-semibold text-blue">
                            <span className="text-orange">
                                Welcome to Largest{" "}
                            </span>
                            Construction Company
                        </h3>
                        <p className="w-[60%] text-base leading-7 text-gray">
                            your trusted partner in construction solutions.
                            experience in the industry, we have established
                            ourselves as a premier construction company
                            dedicated to excellence, integrity, and customer
                            satisfaction. we believe in delivering more than
                            just buildings; we create spaces that inspire,
                            innovate, and endure. Our team of skilled
                            professionals brings expertise, creativity, and
                            attention to detail to every
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
