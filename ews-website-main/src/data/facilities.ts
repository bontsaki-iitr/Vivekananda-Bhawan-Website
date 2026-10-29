import fruitImage from "../assets/images/fruit.jpg";
import stationaryImage from "../assets/images/stationary.jpeg";
import washingImage from "../assets/images/washing.jpg";
import barberShopImage from "../assets/images/barber.jpeg";
import canteenimg from "../assets/images/canteen.jpg";
import messimg from "../assets/images/mess.jpg";
import visitingImage from "../assets/images/visiting.jpg";

export interface Facility {
  title: string;
  description: string;
  // Empty string means no photo yet; a placeholder is shown instead
  imageUrl: string;
  // Key points shown as a checklist under the description
  highlights?: string[];
}

export const facilities: Facility[] = [
  {
    title: "Mess",
    description: "The Bhawan mess serves wholesome, freshly prepared meals to all residents throughout the day. The menu is planned together with the Mess Secretary and Mess Warden, and resident feedback is taken seriously to keep the food varied and of good quality.",
    highlights: [
      "Air-conditioned dining hall with a TV and music system",
      "Menu revised every week",
      "Non-vegetarian dishes served twice a week",
      "A sweet dish with dinner every day, along with special dishes from time to time",
      "A special dinner once every month",
      "Separate, hygienic preparation and serving areas for vegetarian and non-vegetarian food",
      "Coupon system for egg dishes from the Egg Pantry and paneer dishes from the Paneer Pantry",
      "Meals delivered to the room for residents who are unwell and unable to come to the mess"
    ],
    imageUrl: messimg
  },
  {
    title: "Canteen",
    description: "The Bhawan canteen is open 24×7, so there is always something to eat, whether it is a late-night study break or a quick bite between classes.",
    highlights: [
      "Open 24×7",
      "Freshly made snacks, meals and beverages",
      "Packaged foods, drinks and everyday essentials",
      "A relaxed place to sit and catch up with friends"
    ],
    imageUrl: canteenimg
  },
  {
    title: "Visiting Area",
    description: "The visiting area near the entrance is a comfortable space to sit and relax. Residents can catch a match on TV, play a game of carrom with friends, or spend time with family members who come to visit.",
    highlights: [
      "Comfortable sofa seating",
      "TV for matches and shows",
      "Carrom board",
      "A welcoming place to meet visiting family and friends"
    ],
    imageUrl: visitingImage
  },
  {
    title: "Gym",
    description: "The Bhawan gym is open 24×7, so residents can work out whenever it fits their schedule, whether that is early in the morning or after a late evening in the lab. It is equipped for both strength training and cardio, and suits beginners as well as regular lifters.",
    highlights: [
      "Open 24×7",
      "Equipment for strength training and cardio",
      "Table tennis table for a quick game with friends",
      "Open to all residents"
    ],
    imageUrl: ""
  },
  {
    title: "Music Room",
    description: "The music room gives residents a quiet place to practise, jam with friends, or simply enjoy music. It is a space for anyone who plays an instrument or sings, whether as a hobby or to prepare for cultural events.",
    highlights: [
      "A quiet space to practise and rehearse",
      "Room to jam with friends",
      "Useful for preparing for cultural events"
    ],
    imageUrl: ""
  },
  {
    title: "Fruit Shop",
    description: "The fruit shop inside the Bhawan sells fresh seasonal fruit at reasonable prices, along with treats like sweet corn and rabdi kulfi. Residents can pick up a healthy snack between classes, or something sweet late in the evening, without having to step out of the hostel.",
    highlights: [
      "Fresh seasonal fruit",
      "Sweet corn and rabdi kulfi",
      "Right inside the Bhawan"
    ],
    imageUrl: fruitImage
  },
  {
    title: "Stationery Shop",
    description: "The stationery shop stocks the everyday things students need, such as notebooks, pens, files and markers. It saves a trip to the market when an assignment is due or exams are around the corner.",
    highlights: [
      "Notebooks, pens, files and markers",
      "Everyday academic essentials",
      "No trip to the market needed"
    ],
    imageUrl: stationaryImage
  },
  {
    title: "Laundry Room",
    description: "The laundry room has washing machines that residents can use to wash their clothes within the Bhawan, so laundry fits easily into a busy week.",
    highlights: [
      "Washing machines inside the Bhawan",
      "Available to all residents"
    ],
    imageUrl: washingImage
  },
  {
    title: "Salon",
    description: "The salon in the Bhawan offers haircuts, beard trims and grooming at student-friendly rates, so residents don't need to go off campus to look their best.",
    highlights: [
      "Haircuts, beard trims and grooming",
      "Student-friendly rates",
      "No need to go off campus"
    ],
    imageUrl: barberShopImage
  }
];
