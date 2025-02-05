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
    name: "Event 1",
    date: "XXXX",
    time: "XXXX",
    location: "XXXX",
    imageUrl: "XXXX",
  },

  {
    id: 2,
    name: "Event 2",
    date: "XXXX",
    time: "XXXX",
    location: "XXXX",
    imageUrl: "XXXX",
  },
  {
    id: 3,
    name: "Event 3",
    date: "XXXX",
    time: "XXXX",
    location: "XXXX",
    imageUrl: "XXXX",
  },
  {
    id: 4,
    name: "Event 4",
    date: "XXXX",
    time: "XXXX",
    location: "XXXX",
    imageUrl: "XXXX",
  },
  {
    id: 5,
    name: "Event 5",
    date: "XXXX",
    time: "XXXX",
    location: "XXXX",
    imageUrl: "XXXX",
  },
  {
    id: 6,
    name: "Event 6",
    date: "XXXX",
    time: "XXXX",
    location: "XXXX",
    imageUrl: "XXXX",
  },
]
