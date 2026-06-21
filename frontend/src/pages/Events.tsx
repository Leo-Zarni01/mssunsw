import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import NavBar from "../components/NavComps/NavBar";
import StayTuned from "../components/StayTuned";
// import { EVENTS, UPCOMINGEVENTS } from "../components/eventDetailsTemplate";
import {useEffect, useState} from "react";
import { supabase } from '../supabaseClient'
import { Event } from "../interface";


const Events = () => {

  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents();
  }, [])

  async function fetchEvents() {
    const { data, error } : {data: Event[] | null, error: any} = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: false });

    if (error) {
      console.error(error)
    } else {
      setEvents(data ?? [])
      console.log(data)
    }
    setLoading(false)
  }

  const upcomingEvents = events.filter((event) => event.past === false);
  const pastEvents = events.filter((event) => event.past === true);

  if (loading) {
    return <p className="text-center mt-20">Loading events...</p>;
  }

  return (
    <>
      <NavBar isDark={false} />

      <div className="min-h-auto flex flex-col justify-center items-center">
        <p className="text-3xl text-[#FFA700]">Upcoming Events</p>

        <div className="mt-12 flex justify-center items-center">
          {upcomingEvents.length === 0 ? (
            <StayTuned />
          ) : (
            upcomingEvents.slice(0, 6).map((event) => (
              <EventCard key={event.id} event={event} type="upcoming" />
            ))
          )}
        </div>
      </div>

      <div className="min-h-screen flex flex-col items-center px-6 py-12">
        <h1 className="text-3xl text-[#FFA700] mb-8">Past Events</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 auto-rows-fr">
          {pastEvents.slice(0, 6).map((event) => (
            <EventCard key={event.id} event={event} type="past" />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Events;

//   return (
//     <>
//       <NavBar isDark={false} />
//       <div className="min-h-auto flex flex-col justify-center items-center">
//         <p className="text-3xl text-[#FFA700]">Upcoming Events</p>
//           <div className="mt-12 flex justify-center items-center">
//           { UPCOMINGEVENTS.length === 0?
//           <StayTuned></StayTuned>:
//           <> :
//             {UPCOMINGEVENTS.slice(0, 6).map((event) => (
//               <EventCard key={event.id} event={event} type="upcoming" />
//             ))}
//           </>
//           }
//           </div>
//       </div>
//       <div className="min-h-screen flex flex-col items-center px-6 py-12">
//         <h1 className="text-3xl text-[#FFA700] mb-8">Past Events</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 auto-rows-fr">
//           {EVENTS.slice(0, 6).reverse().map((event) => (  // Always ensures six cards are displayed
//             <EventCard key={event.id} event={event} type="past" />
//           ))}
//         </div>
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </>
//   )
// }

// export default Events;
