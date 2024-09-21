import Boxes from "@/Components/Boxes";
import Explore from "@/Components/Explore";
import Navbar from "@/Components/Navbar";
import OverViewSlider from "@/Components/OverViewSlider";
import Photos from "@/Components/Photos";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Boxes />
      <Photos/>
      <Explore/>
      <OverViewSlider/>
      
    </div>
  );
}
