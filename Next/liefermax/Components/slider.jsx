import { Carousel } from "react-bootstrap";
import Image from "next/image";
export default function Slider() {
  return (
    
    <div>
        {/* //interval={5000} "Das Sorgt dafür das die bilder immer nach 5 sekunden überspringen"  */}
      <Carousel controls={false} fade={true} > 
        <Carousel.Item>
            <Image className="d-block w-100 rounded-3"src="/img/food/burger.jpg" alt="Burger" width={3000} height={600}/>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100 rounded-3"src="/img/food/burrito.jpg" alt="Burrito" width={3000} height={600}/>
        </Carousel.Item>
        <Carousel.Item>
            <Image className="d-block w-100 rounded-3"src="/img/food/pizza.jpg" alt="Pizza" width={3000} height={600}/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
