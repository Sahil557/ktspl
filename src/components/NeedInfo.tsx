export default function NeedInfo() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="mb-4 text-3xl font-bold text-white">Need more info? <span className="text-yellow-400">Just reach out!</span></h2>

      <form className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <input type="text" placeholder="Name" className="rounded-md bg-[#2c579be3] text-white p-3 outline-none" />
        <input type="text" placeholder="Phone number" className="rounded-md bg-[#2c579be3]  text-white p-3 outline-none" />
        <input type="email" placeholder="Email" className="rounded-md bg-[#2c579be3] text-white p-3 outline-none" />
      </form>

      <textarea placeholder="Your Message..." rows="4" className="w-full rounded-md bg-[#2c579be3] text-white p-3 outline-none"></textarea>

      <div className="flex items-center justify-between flex-wrap gap-4">

        <div className="flex flex-wrap gap-4 text-white">
          <label className="flex items-center gap-2">
            <input type="radio" name="role" value="player" className="accent-yellow-400" />
            Player
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="role" value="coach" className="accent-yellow-400" />
            Coach
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="role" value="director" className="accent-yellow-400" />
            Sport Director
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="role" value="other" className="accent-yellow-400" />
            Other
          </label>
        </div>

        <button className="text-white px-6 py-2 rounded-md font-semibold">
          Join
        </button>

      </div>
    </div>
  );
}
