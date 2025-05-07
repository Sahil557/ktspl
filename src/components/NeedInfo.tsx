export default function NeedInfo() {
  return (
    <div className="max-w-[1216px] w-full px-4 mx-auto ">
      <h2 className="mb-4 text-2xl md:text-4xl font-bold text-white">Need more info? <span className="text-secondary">Just reach out!</span></h2>

      <form className="my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <input type="text" placeholder="Name" className="rounded-md bg-primary-input text-light-blue p-3 outline-none" />
        <input type="text" placeholder="Phone number" className="rounded-md bg-primary-input text-light-blue p-3 outline-none" />
        <input type="email" placeholder="Email" className="rounded-md bg-primary-input text-light-blue p-3 outline-none" />
      </form>

      <textarea placeholder="Your Message..." rows="4" className="w-full rounded-md bg-primary-input text-light-blue p-3 outline-none"></textarea>

      <div className="flex items-center justify-between flex-wrap gap-4">

        <div className="flex items-center flex-wrap gap-6 text-white">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="role" value="player" className="accent-secondary cursor-pointer" />
            Player
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="role" value="coach" className="accent-secondary cursor-pointer" />
            Coach
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="role" value="director" className="accent-secondary cursor-pointer" />
            Sport Director
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="role" value="other" className="accent-secondary cursor-pointer" />
            Other
          </label>
        </div>

        <button className="text-white px-6 py-2 rounded-md font-semibold">
          Send
        </button>

      </div>
    </div>
  );
}
