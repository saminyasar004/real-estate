import { useEffect, useRef } from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const headerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", () => {
            const rect = headerRef.current?.getBoundingClientRect() as DOMRect;

            if (rect.top <= 0) {
                headerRef.current?.classList.add("sticky", "top-0", "z-50");
                console.log(rect.top);
            } else {
                headerRef.current?.classList.remove("sticky", "top-0", "z-50");
            }
        });
    }, []);

    return (
        <header
            ref={headerRef}
            className="w-full h-auto py-2 transition-all duration-300 bg-white"
        >
            <div className="row flex items-center justify-center gap-2">
                <div className="w-full flex items-center justify-start">
                    <Link to="">
                        <img src={Logo} alt="logo" className="w-60" />
                    </Link>
                </div>
                <div className="w-full flex items-center justify-between">
                    <ul className="w-full flex items-center justify-between">
                        <li className="relative p-1">
                            <Link
                                className="text-blue nav-link hover:text-orange nav-link-active"
                                to=""
                            >
                                Home
                            </Link>
                        </li>
                        <li className="relative p-1">
                            <Link
                                className="text-blue nav-link hover:text-orange"
                                to=""
                            >
                                About us
                            </Link>
                        </li>
                        <li className="relative p-1">
                            <Link
                                className="text-blue nav-link hover:text-orange"
                                to=""
                            >
                                Services
                            </Link>
                        </li>
                        <li className="relative p-1">
                            <Link
                                className="text-blue nav-link hover:text-orange"
                                to=""
                            >
                                Features
                            </Link>
                        </li>
                        <li className="relative p-1">
                            <Link
                                className="text-blue nav-link hover:text-orange"
                                to=""
                            >
                                Testimonials
                            </Link>
                        </li>
                        <li className="relative p-2">
                            <Link
                                className="text-blue nav-link hover:text-orange"
                                to=""
                            >
                                FAQ
                            </Link>
                        </li>
                        <li className="relative p-2">
                            <Link
                                className="text-blue nav-link hover:text-orange"
                                to=""
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
