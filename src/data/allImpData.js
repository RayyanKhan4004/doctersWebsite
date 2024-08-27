import dentalImage from './Image Placeholder.png';
import bonesImage from './Image Placeholder (1).png';
import diagnosisImage from './Container.png';
import eyecareImage from './Container (3).png';
import cardiologyImage from './Container (2).png';
import surgeryImage from './Container (1).png';
import EyeCoolLifting from './Eye cool lifting.png'
import checkBoneRepair from './cheeekone repair 1.png' 
import foreheadRepair from './forehead repair.png'
import eyeZoneRepair from './eyezone repair2 1.png'
import NAZOLABIAL from './nazola.png'
import lipsCorrection from './lips correction 1.png'
const AllImpinfo = [
  {
    id: 1,
    image: dentalImage,
    name: "Dental",
    description: "Information related to dental health and care.",
  },
  {
    id: 2,
    image: bonesImage,
    name: "Bones",
    description: "Data on bone structure, health, and related conditions.",
  },
  {
    id: 3,
    image: diagnosisImage,
    name: "Diagnosis",
    description: "Diagnostic tools and information for various medical conditions.",
  },
  {
    id: 4,
    image: cardiologyImage,
    name: "Cardiology",
    description: "Information about heart health and cardiovascular diseases.",
  },
  {
    id: 5,
    image: eyecareImage,
    name: "Eyecare",
    description: "Information related to eye health and care.", // Add description
  },
  {
    id: 6,
    image: surgeryImage,
    name: "Surgery",
    description: "Information about surgical procedures and treatments.", // Add description
  },
];
   
  export const AllImpinfo2 = [
  {
    id: 1, // Generate unique IDs if needed (see explanation below)
    profileName: "MysteriousWanderer42",
    description: "Lost in the labyrinth of thoughts, seeking solace in the echoes of silence. A wanderer of dreams, chasing the horizon's elusive embrace.",
    img: "https://loremflickr.com/320/320/girl"
  },
  {
    id: 2, // Generate unique IDs if needed (see explanation below)
    profileName: "StarryEyedSeeker",
    description: "With a heart full of stardust and a soul hungry for adventure, /n I explore the universe within and beyond. A dreamer searching for cosmic connections.",
    img: "https://loremflickr.com/320/320/girl"
  },
  {
    id: 3, // Generate unique IDs if needed (see explanation below)
    profileName: "SilentObserver",
    description: "Observing the world from a quiet corner, finding beauty in the ordinary and magic in the unseen. A silent witness to life's unfolding tapestry.",
    img: "https://loremflickr.com/320/320/girl"
  }
];
 
  export const ratingData = [
  {
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Melissa Smith",
    title: "Marketing Manager",
    review: "I've been using XYZ for over a year now and their customer service is excellent! Whenever I have a question, the team is always available and willing to help. Highly recommend!",
    rating: 5
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    name: "John Doe",
    title: "Software Engineer",
    review: "This product is amazing! It has saved me so much time and effort. Highly recommend!",
    rating: 4
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    name: "Emily Johnson",
    title: "Designer",
    review: "The user interface is so intuitive and easy to use. I love this product!",
    rating: 5
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Brown",
    title: "Developer",
    review: "Great product with excellent features. Highly recommend it!",
    rating: 4
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
    name: "Sarah Wilson",
    title: "Marketing Analyst",
    review: "The customer support is top-notch. They helped me with an issue I was having and resolved it quickly.",
    rating: 5
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Michael Lee",
    title: "Product Manager",
    review: "This product has exceeded my expectations. It's a game-changer!",
    rating: 5
  }
];

 export const BotoxCard = [
  {
    img : EyeCoolLifting,
    txt :'CRYO COOL LIFTING'
  },
  {
    img : checkBoneRepair ,
    txt: 'CheckBone repair'
  },
  {
    img : foreheadRepair ,
    txt: 'forehead correction'
  },
  {
    img : eyeZoneRepair ,
    txt : 'eye zone repair'
  },
  {
    img : NAZOLABIAL ,
    txt :'NAZOLABIAL REPAIR'
  },
  { img : lipsCorrection ,
    txt : 'lips correction'
 
  }

 ] 
export default AllImpinfo;
