import { Event } from "./eventDetailsTemplate";

interface EventProps {
  event: Event,
  type: string,
}

const EventCard: React.FC<EventProps> = ({ event, type }) => {
  let route = "";
  if (type === "past") {
    route = `/past-events/${event.id}`;
  } else if (type === "upcoming") {
    route = `/events/${event.id}`;
  }
  return (
    <div className="w-80 h-full border border-orange-100 rounded-2xl shadow-md overflow-hidden bg-white font-poppins">
      <div className="relative">
        <img
          src={event.imageUrl}
          alt={event.name}
          className="w-full h-48 object-cover"
        />
        {/* <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-yellow-400 text-4xl">UNSW</h1>
        </div> */}
      </div>
      <div className="p-8">
        <h2 className="text-2xl text-yellow-500 text-center">{event.name}</h2>
        <div className="mt-10 space-y-4 text-sm text-black">
          <p>Date: <span className="font-medium">{event.date}</span></p>
          <p>Time: <span className="font-medium">{event.time}</span></p>
          <p>Location: <span className="font-medium">{event.location}</span></p>
        </div>
        <a
          href={route}
          className="mt-4 inline-block text-right w-full text-yellow-500 hover:text-blue-600 text-sm font-medium"
        >
          More Details &gt;
        </a>
      </div>
    </div>
  );
}
export default EventCard;
