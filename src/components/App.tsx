import About from "./About/About";
import Layout from "./Common/Layout";
import Hero from "./Hero/Hero";

const App: React.FC = () => {
    return (
        <>
            <Layout>
                <Hero />
                <About />
            </Layout>
        </>
    );
};

export default App;
