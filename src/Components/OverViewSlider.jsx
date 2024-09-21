import { Carousole } from "./Carousele";
import Featurs from "./Featurs";
import Overview from "./Overview";

export default function OverViewSlider() {
    return (
      <div className="mt-96 relative">
            <div className="relative">
                {/* Carousel positioned above */}
                <div className="absolute  bottom-40 left-[500px] right-0 z-[10000]">
                    <Carousole />
                </div>
                {/* Overview positioned below the carousel */}
                <div className="relative 
                
                z-20 mt-[50px]"> {/* Adjust mt to match the height of your carousel */}
                    <Overview />
                </div>
            </div>
            <div className="absolute top-[500px] z-[10000] left-60 "><Featurs/></div>
      </div>
    );
}
