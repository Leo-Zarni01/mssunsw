import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavComps/NavBar";
import StayTuned from "../components/StayTuned";
import { EVENTS, UPCOMINGEVENTS } from "../components/eventDetailsTemplate";

const Events = () => {
  return (
    <>
      <NavBar isDark={false} />
      <div className="min-h-auto flex flex-col justify-center items-center">
        <p className="text-3xl text-[#FFA700]">Upcoming Events</p>
          <div className="mt-12 flex justify-center items-center">
          { UPCOMINGEVENTS.length === 0?
          <StayTuned></StayTuned>:
          <> :
            {UPCOMINGEVENTS.slice(0, 6).map((event) => (
              <EventCard key={event.id} event={event} type="upcoming" />
            ))}
          </>
          }
          </div>
      </div>
      <div className="min-h-screen flex flex-col items-center px-6 py-12">
        <h1 className="text-3xl text-[#FFA700] mb-8">Past Events</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 auto-rows-fr">
          {EVENTS.slice(0, 6).map((event) => (  // Always ensures six cards are displayed
            <EventCard key={event.id} event={event} type="past" />
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
