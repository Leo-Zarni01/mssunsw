export interface Event {
  id: number;
  name: string;
  date: string; // change to actual date object later when backend is involved
  time: string;
  location: string;
  imageUrl: string;
  description: string;
  imagesUrl: string[];
}


// hardcoded, adjust when backend is created
export const EVENTS: Event[] = [
  {
    id: 1,
    name: "Da Saung Taing 2024",
    date: "15TH NOV 2024",
    time: "6PM - 9PM",
    location: "COLOMBO LG02",
    imageUrl: 'events/Tazaungdine 24T3/Copy of 1.jpg',
    description: "Come join MSS to celebrate DA SAUNG TAING!!! Enjoy a night of FUN games and our FAVOURITE activities like lantern painting. Get ready for some YUMMY food. We will be selling a set meal of Khaut Swe Thoke and two desserts (Thar Gu Pyin and Kaut Hnyin Sanwin Makin) for $15. We can’t wait to see everyone soon.",
    imagesUrl: [
      "/events/Tazaungdine 24T3/IMG_4744.JPG",
      "/events/Tazaungdine 24T3/IMG_4752.JPG",
      "/events/Tazaungdine 24T3/IMG_4753.JPG",
      "/events/Tazaungdine 24T3/IMG_4756.JPG",
      "/events/Tazaungdine 24T3/IMG_4773.JPG",
      "/events/Tazaungdine 24T3/IMG_4775.JPG",
      "/events/Tazaungdine 24T3/IMG_5296.JPG",
      "/events/Tazaungdine 24T3/IMG_5301.JPG",
      "/events/Tazaungdine 24T3/IMG_5302.JPG",
      "/events/Tazaungdine 24T3/IMG_5303.JPG",
      "/events/Tazaungdine 24T3/IMG_5305.JPG",
      "/events/Tazaungdine 24T3/IMG_5306.JPG",
      "/events/Tazaungdine 24T3/IMG_5308.JPG",
      "/events/Tazaungdine 24T3/IMG_5310.JPG",
      "/events/Tazaungdine 24T3/IMG_5328.JPG",
      "/events/Tazaungdine 24T3/IMG_5338.JPG",
      "/events/Tazaungdine 24T3/IMG_5339.JPG",
    ],
  },
  {
    id: 2,
    name: "Australia Visa Pathways 2024",
    date: "18TH SEP 2024",
    time: "6:00PM - 8:00PM",
    location: "Michael Hintze Theatre",
    imageUrl: "/events/Aus Visa Pathways 2024/Visa Seminar.png",
    description: "Ready for an adventure? Grab your new friends and explore the UNSW campus while you race to complete exciting challenges at game stations! Each challenge brings you closer to unlocking the ultimate chest filled with prizes like Burmese snacks and gift cards. Solve the clues, Gather your hints & Unlock the treasures! Let’s kick off Term 3 with some fun so JOIN US!!",
    imagesUrl: ["/events/Aus Visa Pathways 2024/Visa Seminar.png",],
  },
  {
    id: 3,
    name: "Fresher Welcome 24T3",
    date: "14TH SEP 2024",
    time: "10:00AM - 2:00PM",
    location: "COLOMBO THEATRE A",
    imageUrl: "/events/Fresher Welcome 24T3/Fresher Welcome poster 24T3.png",
    description: "Are you an international student or recent graduate looking to navigate the complexities of Australian visas? Join us for an insightful seminar featuring former MSS President Ko Ko Aung from Albert Arthur Lawyers. Gain valuable knowledge on: Temporary Graduate Visa (485), Skilled Migration Visa, Employer-Sponsored Visa, PR Pathways, Visa Extensions and Renewals, Changing Courses or Institutions",
    imagesUrl: [
      "/events/Fresher Welcome 24T3/IMG_1693.PNG",
      "/events/Fresher Welcome 24T3/IMG_1694.PNG",
      "/events/Fresher Welcome 24T3/IMG_1695.PNG",
    ],
  },
  {
    id: 4,
    name: "Fresher Welcome 25T1",
    date: "2ND MAR 2025",
    time: "10:30AM - 3:00PM",
    location: "COLOMBO LG01",
    imageUrl: "/events/Fresher Welcome 25T1/Fresher Welcome poster 25T1.png",
    description: "မင်္ဂလာပါ everyone and to all the freshers ❤️ Join us for an exciting day at our FRESHER WELCOME where we will host a scavenger hunt, awesome games and…FREE FOOD for all members 🥳 Meet our MSS committee members and make some new friends within the MSS community. REGISTRATION LINKED IN OUR BIO ✨. See you all there 🤩",
    imagesUrl: [
      "/events/Fresher Welcome 25T1/IMG_3549 2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3550 2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3557 2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3564 2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3565 2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3566_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3568_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3570_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3574_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3580_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3583_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3586_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3589_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3595_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_3596_2.jpg",
      "/events/Fresher Welcome 25T1/IMG_0353.JPG",
      "/events/Fresher Welcome 25T1/IMG_0354 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0357 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0358.JPG",
      "/events/Fresher Welcome 25T1/IMG_0361.JPG",
      "/events/Fresher Welcome 25T1/IMG_0362.JPG",
      "/events/Fresher Welcome 25T1/IMG_0366.JPG",
      "/events/Fresher Welcome 25T1/IMG_0367 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0369.JPG",
      "/events/Fresher Welcome 25T1/IMG_0370.JPG",
      "/events/Fresher Welcome 25T1/IMG_0371 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0373 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0374 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0376.JPG",
      "/events/Fresher Welcome 25T1/IMG_0379 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0380.JPG",
      "/events/Fresher Welcome 25T1/IMG_0381 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0383.JPG",
      "/events/Fresher Welcome 25T1/IMG_0386 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0388 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0391.JPG",
      "/events/Fresher Welcome 25T1/IMG_0392 2.JPG",
      "/events/Fresher Welcome 25T1/IMG_0393.JPG",
      "/events/Fresher Welcome 25T1/IMG_0394 2.JPG",
    ],
  },
]

export const UPCOMINGEVENTS: Event[] = [
  {
    id: 1,
    name: "Inter Cultural Cup 25T1",
    date: "14TH MAR 2025",
    time: "10:00AM - 4:00PM",
    location: "UNSW Village Green",
    imageUrl: "/events/Inter Cultural Cup 25T1/Intercultural_Cup_Poster.webp",
    description: "Join us to play some thrilling games of soccer and represent MYANMAR in UNSW’s intercultural cup 🇲🇲 We’re looking for players to join our team: 7 players minimum (6 outfield+1 GK including a minimum of 2 females) ✨ And that’s not all…THERE WILL BE PRIZES FOR THE WINNING TEAMS 🙌🏆 Whether your here to play or cheer us on we’re excited to see you there 🥳",
    imagesUrl: ["/events/Inter Cultural Cup 25T1/Intercultural_Cup_Poster.webp"],
  }
]
