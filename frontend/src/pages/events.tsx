import EventCard from "../assets/components/eventCard";

const Events = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <p className="text-3xl font-bold text-[#FFA700]">Upcoming events</p>
      </div>
      <div>
        <EventCard />
      </div>
    </>
  )
}

export default Events;
