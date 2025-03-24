import '../App.css';
export default function Agent_cards({ agent }) {
  const handleBookSlot = () => {
    if (window.confirm("Are you sure you want to book this slot?")) {
      window.location.href = "/location";
    }
  };

  return (
    <div className="items-center flex flex-wrap flex-col h-1/4 border border-black m-2 md:min-w-screen">
      <div className="flex md:w-1/2 md:m-2 md:px-3 justify-center items-center gap-x-2 mt-2">
        <div className="aspect-square flex h-[100px] justify-center items-center">
          <img
            src={agent.image}
            alt={`${agent.name}`}
            className="rounded-full aspect-square"
          />
        </div>
        <div className="flex flex-col justify-evenly md:px-4 md:py-2 text-sm md:text-md cardfont">
          <h1>{agent.name}</h1>
          <h2>{agent.City}</h2>
          <h3>{agent.mobile}</h3>
          <h4>{agent.email}</h4>
          <div className="flex gap-x-4 w-44 md:w-80 text-sm md:text-md">
            <button
              className="border border-black flex rounded-md hover:bg-green-400 w-1/2 justify-center"
              onClick={handleBookSlot}
            >
              Book slot
            </button>
            <button className="border border-black flex rounded-md hover:bg-green-400 w-1/2 justify-center">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
