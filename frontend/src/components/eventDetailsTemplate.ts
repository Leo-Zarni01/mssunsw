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
    imageUrl: "XXXX",
    description: "XXX",
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
    name: "Aus Visa Pathways 2024",
    date: "18TH SEP 2024",
    time: "6:00PM - 8:00PM",
    location: "Michael Hintze Theatre",
    imageUrl: "/events/Aus Visa Pathways 2024/Visa Seminar.png",
    description: "XXX",
    imagesUrl: ["/events/Aus Visa Pathways 2024/Visa Seminar.png",],
  },
  {
    id: 3,
    name: "Fresher Welcome 24T3",
    date: "14TH SEP 2024",
    time: "10:00AM - 2:00PM",
    location: "COLOMBO THEATRE A",
    imageUrl: "/events/Fresher Welcome 24T3/Fresher Welcome poster 24T3.png",
    description: "XXX",
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
    date: "2ND FEB 2025",
    time: "10:30AM - 3:00PM",
    location: "COLOMBO LG01",
    imageUrl: "/events/Fresher Welcome 25T1/Fresher Welcome poster 25T1.png",
    description: "TBD",
    imagesUrl: ["/events/Fresher Welcome 25T1/Fresher Welcome poster 25T1.png"],
  }
]
