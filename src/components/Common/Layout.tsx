import TopHeader from "./TopHeader";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <TopHeader />
            <Header />
            <main>{children}</main>
        </>
    );
};

export default Layout;
