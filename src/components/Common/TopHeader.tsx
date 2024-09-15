import {
    TelephoneFill,
    EnvelopeFill,
    GeoAltFill,
    Search,
    Facebook,
    Instagram,
    Whatsapp,
} from "react-bootstrap-icons";

const TopHeader: React.FC = () => {
    return (
        <header className="bg-topHeaderGradiant">
            <div className="row flex items-center justify-between h-auto py-5">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center justify-center gap-3">
                        <TelephoneFill className="text-white text-lg" />
                        <span className="text-white text-sm font-light">
                            000-000-0000
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <EnvelopeFill className="text-white text-lg" />
                        <span className="text-white text-sm font-light">
                            info323@gmail.com
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <GeoAltFill className="text-white text-lg" />
                        <span className="text-white text-sm font-light">
                            9no West Monipur,Dhaka
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-center text-white"></div>
                <div className="flex items-center justify-center text-white">
                    <div className="flex items-center justify-center gap-3">
                        <Facebook className="text-white cursor-pointer transition-all duration-300 hover:text-orange text-lg" />
                        <Instagram className="text-white cursor-pointer transition-all duration-300 hover:text-orange text-lg" />
                        <Whatsapp className="text-white cursor-pointer transition-all duration-300 hover:text-orange text-lg" />
                        <Search className="text-white cursor-pointer transition-all duration-300 hover:text-orange text-lg" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;
