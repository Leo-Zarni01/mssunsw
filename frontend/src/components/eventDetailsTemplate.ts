export interface Event {
  id: number;
  name: string;
  date: string; // change to actual date object later when backend is involved
  time: string;
  location: string;
  imageUrl: string;
}


// hardcoded, adjust when backend is created
export const EVENTS: Event[] = [
  {
    id: 1,
    name: "Da Saung Taing",
    date: "15TH NOV 2024",
    time: "6PM - 9PM",
    location: "COLOMBO LG02",
    imageUrl: 'events/Tazaungdine 24T3/Copy of 1.jpg',
  },

  {
    id: 2,
    name: "Aus Visa Pathways",
    date: "18TH SEP 2024",
    time: "6PM - 8PM",
    location: "Michael Hintze Theatre",
    imageUrl: "events/Visa Seminar 24T3/Visa Seminar.png",
  },
  {
    id: 3,
    name: "Fresher Welcome 24T3",
    date: "14TH SEP 2024",
    time: "10AM - 2PM",
    location: "COLOMBO THEATRE A",
    imageUrl: 'events/Fresher Welcome 24T3/IMG_1693.PNG',
  },
]
