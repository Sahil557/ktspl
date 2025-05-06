export default function Card() {
  return (
    <div className="w-[577px] h-[400px] bg-primary-ex-soft rounded-2xl text-white flex">
      <div className="px-16 py-14">
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
