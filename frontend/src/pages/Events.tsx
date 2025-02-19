import EventCard from "../components/EventCard"; import Footer from "../components/Footer";
import NavBar from "../components/NavComps/NavBar";
import { Event, EVENTS } from "../components/eventDetailsTemplate";

const upComingEvent: Event =
{
  id: 1,
  name: "Fresher Welcome",
  date: "TBD",
  time: "TBD",
  location: "TBD",
  imageUrl: "TBD",
}

const Events = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className="text-3xl text-[#FFA700]">Upcoming Events</p>
        <div className="mt-12 flex justify-center items-center">
          <EventCard event={upComingEvent} />
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center px-6 py-12">
        <h1 className="text-3xl text-[#FFA700] mb-8">Past Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 auto-rows-fr">
          {EVENTS.slice(0, 6).map((event) => (  // Always ensures six cards are displayed
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Events;
