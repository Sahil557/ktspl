export default function Card() {
  return (
    <div className=" bg-primary-ex-soft rounded-2xl text-white flex border border-[#CBCBEF33]">
      <div className="px-8 md:px-16 pt-8 md:pt-14 md:pb-31 pb-16 ">
        <p className="font-semibold text-2xl">Gamified Drills</p>
        <p className="text-light-blue text-base my-3">Engage, compete and have fun while practicing your skills.</p>
        <p className="text-light-blue text-base my-3">
          Choose your drill and we take care of the experience: light 
          & sound feedback, scoreboards, rankings...
        </p>
        <p className="text-light-blue text-base my-3">
          Whether you are working on your depth, consistency, pace 
          or accuracy, your court turns into a virtual playground!
        </p>
      </div>
    </div>
  );
}
