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
]

export const UPCOMINGEVENTS: Event[] = [
  {
    id: 1,
    name: "Fresher Welcome 25T1",
    date: "2ND MAR 2025",
    time: "10:30AM - 3:00PM",
    location: "COLOMBO LG01",
    imageUrl: "/events/Fresher Welcome 25T1/Fresher Welcome poster 25T1.png",
    description: "မင်္ဂလာပါ everyone and to all the freshers ❤️ Join us for an exciting day at our FRESHER WELCOME where we will host a scavenger hunt, awesome games and…FREE FOOD for all members 🥳 Meet our MSS committee members and make some new friends within the MSS community. REGISTRATION LINKED IN OUR BIO ✨. See you all there 🤩",
    imagesUrl: ["/events/Fresher Welcome 25T1/Fresher Welcome poster 25T1.png"],
  }
]
