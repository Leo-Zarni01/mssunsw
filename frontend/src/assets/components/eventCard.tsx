const EventCard = () => {
  return (
    <div className="max-w-sm mx-auto border border-orange-100 rounded-lg shadow-md overflow-hidden bg-white">
      <div className="relative">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Event"
          className="w-full h-56 object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-yellow-400 text-4xl font-bold">UNSW</h1>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-yellow-500 text-center">Fresher Welcome</h2>
        <div className="mt-2 text-sm text-gray-600">
          <p>Date: <span className="font-medium">TBD</span></p>
          <p>Time: <span className="font-medium">TBD</span></p>
          <p>Location: <span className="font-medium">TBD</span></p>
        </div>
        <a
          href="#"
          className="mt-4 inline-block text-blue-500 hover:text-blue-600 text-sm font-medium"
        >
          More Details &gt;
        </a>
      </div>
    </div>
  );
}
export default EventCard;
