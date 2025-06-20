import image1 from '../Assets/chair1.webp';
import image2 from '../Assets/chair2.jpg';
import image3 from '../Assets/chair3.jpg';

const imageMap = {
    1: image1,
    2: image2,
    3: image3
};

export default function getProductImage(id) {
    return imageMap[id] || image1; 
}