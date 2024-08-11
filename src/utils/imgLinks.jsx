import image10 from '../assets/img/image 10.jpg';
import image11 from '../assets/img/image 11.jpg';
import image12 from '../assets/img/image 12.jpg';
import image13 from '../assets/img/image 13.jpg';
import image17 from '../assets/img/image 17.jpg';
import image19 from '../assets/img/image 19.jpg';
import image21 from '../assets/img/image 21.jpg';
import svg14 from '../assets/img/vectors icons/image 14.svg';
import svg15 from '../assets/img/vectors icons/image 15.svg';
import svg16 from '../assets/img/vectors icons/image 16.svg';
import svg18 from '../assets/img/vectors icons/image 18.svg';

const imgLinks = [
    {
        src: image10,
        title: 'Air Freight',
        description: 'Air freight offers several advantages over others modes of transportation',
        icon: <img src={svg14} alt="icon-50" className="w-15 h-15" />
    },
    {
        src: image11,
        title: 'Cargo Freight',
        description: 'Cargo freight is the transportation of goods through the sea.',
        icon: <img src={svg15} alt="icon-51" className="w-15 h-15" />
    },
    {
        src: image12,
        title: 'Road Freight',
        description: 'Road freight can be carried out of by various of vehicles flatbed trucks',
        icon: <img src={svg16} alt="icon-52" className="w-15 h-15" />
    },
    {
        src: image17,
        title: 'Bike Freight',
        description: 'Bike freight also known as bicycle logistics, refers of goods or cargo.',
        icon: <img src={svg18} alt="icon-50" className="w-15 h-15" />
    },
    {
        src: image19,
        title: 'Bicycle Freight',
        description: 'Bicycle freight also known as bicycle logistics, refers of goods or cargo.',
        icon: <img src={svg18} alt="icon-51" className="w-15 h-15" />
    },
    {
        src: image21,
        title: 'Truck Freight',
        description: 'Trucks with a Gross Vehicle Weight Rating (GVWR) greater than 33,000 lbs. ',
        icon: <img src={svg16} alt="icon-52" className="w-15 h-15" />
    }
]

export default imgLinks;