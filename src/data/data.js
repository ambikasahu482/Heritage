// Heritage Images
import tajmahal from "../assets/images/tajmahal.jpg";
import redfort from "../assets/images/redfortdelhi.jpg";
import amerfort from "../assets/images/Amer Fortjaipur.jpg";
import bhadrafort from "../assets/images/Bhadra Fortahmadabad.jpg";
import mysorepalace from "../assets/images/Mysore Palace karnatak.jpg";
import indiagate from "../assets/images/India Gatedelhi.jpg";

// Destination Images
import gateway from "../assets/images/gatewayindiamumbai.jpg";
import dallake from "../assets/images/Dal Lake shrinagar.jpg";
import lakepichola from "../assets/images/Lake Pichola udaypur.jpg";
import backwaters from "../assets/images/Backwaters keral.jpg";
import jammukashmir from "../assets/images/jammu and kashmir.jfif";
import dhuandhar from "../assets/images/dhuwandhar jbp.jfif";

// Temple Images
import goldentemple from "../assets/images/the golden temple.jfif";
import vaishnodevi from "../assets/images/vaishnodevi katra jammu.jfif";
import jagannath from "../assets/images/shri jaggannath odisha.jfif";
import sharda from "../assets/images/shardatemple maihar.jfif";
import fatehgarh from "../assets/images/fatehgad sahib panjab.jpg";

// pilgrimage
import rishikesh from "../assets/images/rishikesh.jpg";
import haridwar from "../assets/images/haridwar.jpg";
import auli from "../assets/images/auli.jpg";
import kedarnath from "../assets/images/kedarnath.jpg";
import amarnath from "../assets/images/amarnath.jpg";
import tirupati from "../assets/images/tirupati.jfif";


// Culture Images
import theyyam from "../assets/images/Theyyam.jpg";
import tradition from "../assets/images/tredition.jpg";

export const heritageData = [
  {
    id: 1,
    title: "Taj Mahal",
    state: "Uttar Pradesh",
    image: tajmahal,
    category: "UNESCO Heritage",
    description:
      "The Taj Mahal is one of the Seven Wonders of the World and a masterpiece of Mughal architecture.",
  },
  {
    id: 2,
    title: "Red Fort",
    state: "Delhi",
    image: redfort,
    category: "Fort",
    description:
      "Historic Mughal fort and UNESCO World Heritage Site located in Old Delhi.",
  },
  {
    id: 3,
    title: "Amer Fort",
    state: "Rajasthan",
    image: amerfort,
    category: "Fort",
    description:
      "Magnificent hill fort in Jaipur famous for its architecture and royal history.",
  },
  {
    id: 4,
    title: "Bhadra Fort",
    state: "Gujarat",
    image: bhadrafort,
    category: "Fort",
    description:
      "Historic fort in Ahmedabad built during the Gujarat Sultanate.",
  },
  {
    id: 5,
    title: "Mysore Palace",
    state: "Karnataka",
    image: mysorepalace,
    category: "Palace",
    description:
      "Royal palace famous for its Indo-Saracenic architecture and Dasara celebrations.",
  },
  {
    id: 6,
    title: "India Gate",
    state: "Delhi",
    image: indiagate,
    category: "Memorial",
    description:
      "National war memorial dedicated to Indian soldiers.",
  },
];

export const templeData = [
  {
    id: 1,
    name: "Golden Temple",
    state: "Punjab",
    image: goldentemple,
    deity: "Guru Granth Sahib",
    location: "Amritsar",
  },
  {
    id: 2,
    name: "Vaishno Devi",
    state: "JammuKashmir",
    image: vaishnodevi,
    deity: "Mata Vaishno Devi",
    location: "Katra",
  },
  {
    id: 3,
    name: "Jagannath Temple",
    state: "Odisha",
    image: jagannath,
    deity: "Lord Jagannath",
    location: "Puri",
  },
  {
    id: 4,
    name: "Sharda Temple",
    state: "Madhya-Pradesh",
    image: sharda,
    deity: "Maa Sharda",
    location: "Maihar",
  },
  {
    id: 5,
    name: "Fatehgarh Sahib",
    state: "Punjab",
    image: fatehgarh,
    deity: "Sikh Heritage",
    location: "Fatehgarh Sahib",
  },
];

export const destinationData = [
  {
    id: 1,
    title: "Gateway of India",
    state: "Maharashtra",
    image: gateway,
  },
  {
    id: 2,
    title: "Dal Lake",
    state: "JammuKashmir",
    image: dallake,
  },
  {
    id: 3,
    title: "Lake Pichola",
    state: "Rajasthan",
    image: lakepichola,
  },
  {
    id: 4,
    title: "Kerala Backwaters",
    state: "Kerala",
    image: backwaters,
  },
  {
    id: 5,
    title: "Jammu&Kashmir",
    state: "JammuKashmir",
    image: jammukashmir,
  },
  {
    id: 6,
    title: "Dhuandhar Falls",
    state: "MadhyaPradesh",
    image: dhuandhar,
  },
];

export const pilgrimageData = [
  {
    id: 1,
    name: "Char Dham Yatra",
    state: "amritsar",
    image: goldentemple,
    location: "Badrinath, Dwarka, Puri, Rameshwaram",
    description:
      "India ki sabse pavitra pilgrimage yatra jisme char dham shamil hain.",
  },

  {
    id: 2,
    name: "Vaishno Devi Yatra",
    state: "JammuKashmir",
    image: vaishnodevi,
    location: "Katra",
    description:
      "Mata Vaishno Devi ka prasiddh holy shrine.",
  },

  {
    id: 3,
    name: "Jagannath Rath Yatra",
    state: "Odisha",
    image: jagannath,
    location: "Puri",
    description:
      "Lord Jagannath ka famous pilgrimage destination.",
  },

  {
    id: 4,
    name: "Kedarnath Yatra",
    state: "Uttarakhand",
    image: kedarnath,
    location: "Kedarnath",
    description:
      "Bhagwan Shiva ke 12 Jyotirlingo me se ek.",
  },

  {
    id: 5,
    name: "Amarnath Yatra",
    state: "JammuKashmir",
    image: amarnath,
    location: "Amarnath Cave",
    description:
      "Baba Amarnath ki pavitra gufa yatra.",
  },

  {
    id: 6,
    name: "Tirupati Balaji",
    state: "Andhra-Pradesh",
    image: tirupati,
    location: "Tirumala",
    description:
      "Lord Venkateswara ka famous temple.",
  },
  {
  id: 7,
  title: "Rishikesh",
  state: "Uttarakhand",
  image: rishikesh,
  location: "rishikesh",

  description:
    "Known as the Yoga Capital of the World, Rishikesh is famous for the Ganga Aarti, adventure sports, and spiritual retreats.",
},

{
  id: 8,
  title: "Haridwar",
  state: "Uttarakhand",
  image: haridwar,
  description:
    "One of the holiest cities in India, Haridwar is famous for Har Ki Pauri, Ganga Aarti, and the Kumbh Mela.",
},

{
  id: 9,
  title: "Auli",
  state: "Uttarakhand",
  image: auli,
  description:
    "Auli is a beautiful hill station known for skiing, snow-covered mountains, and breathtaking Himalayan views.",
},
];
export const cultureData = [
  {
    id: 1,
    title: "Theyyam",
    state: "Kerala",
    image: theyyam,
  },
  {
    id: 2,
    title: "Indian Traditions",
    state: "India",
    image: tradition,
  },
];

export const festivalData = [
  { id: 1, name: "Diwali", month: "October / November" },
  { id: 2, name: "Holi", month: "March" },
  { id: 3, name: "Navratri", month: "September / October" },
  { id: 4, name: "Durga Puja", month: "October" },
  { id: 5, name: "Onam", month: "August / September" },
  { id: 6, name: "Rath Yatra", month: "June / July" },
    {id: 7, name: "Raksha Bandhan", month: "August"}

];

export const states = [
  "Delhi",
  "Rajasthan",
  "Punjab",
  "Gujarat",
  "Kerala",
  "Maharashtra",
  "Odisha",
  "Madhya-Pradesh",
  "JammuKashmir",
  "Karnataka",
  "Uttar-Pradesh",
  "Uttarakhand",
  "Andhra-Pradesh"
];