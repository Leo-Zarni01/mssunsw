import { Event } from "../eventDetailsTemplate";

interface EventProps {
  event: Event
}

const EventCard: React.FC<EventProps> = ({ event }) => {
  return (
    <div className="w-80 h-full border border-orange-100 rounded-2xl shadow-md overflow-hidden bg-white">
      <div className="relative">
        <img
          src="https://via.placeholder.com/400x200"
          alt={event.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-yellow-400 text-4xl font-bold">UNSW</h1>
        </div>
      </div>
      <div className="p-8">
        <h2 className="text-2xl font-semibold text-yellow-500 text-center">{event.name}</h2>
        <div className="mt-10 space-y-4 text-sm text-gray-600">
          <p>Date: <span className="font-medium">{event.date}</span></p>
          <p>Time: <span className="font-medium">{event.time}</span></p>
          <p>Location: <span className="font-medium">{event.location}</span></p>
        </div>
        <a
          href="#"
          className="mt-4 inline-block text-right w-full text-yellow-500 hover:text-blue-600 text-sm font-medium"
        >
          More Details &gt;
        </a>
      </div>
    </div>
  );
}
export default EventCard;
