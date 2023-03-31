
import { DescriptionLive, About , Reservation , ImageCarousel  } from "./index"

const images: string[] = [
    require("../../images/confe1.jpg"),
    require("../../images/confe2.jpg"),
    require("../../images/confe3.jpg"),
    require("../../images/confe1.jpg"),
    require("../../images/confe2.jpg"),
    require("../../images/confe3.jpg"),
    require("../../images/confe1.jpg"),
    require("../../images/confe2.jpg"),
    require("../../images/confe3.jpg"),
  ];

const Live = () => {
  
    return (
        <div className="container live">
           
            <DescriptionLive />
            <ImageCarousel images={images} autoScrollInterval={3000}/>
            <About/>
            <Reservation/>
           
           
        </div>
    )
}

export default Live