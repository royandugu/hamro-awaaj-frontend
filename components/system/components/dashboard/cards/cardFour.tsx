import { GiArtificialIntelligence } from "react-icons/gi";

const CardFour = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
        <GiArtificialIntelligence className="fill-primary" size={30} />

      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black">
            6
          </h4>
          <span className="text-sm font-medium">Total Users</span>
        </div>
      </div>
    </div>
  );
};

export default CardFour;
