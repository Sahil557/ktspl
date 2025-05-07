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

        <button className="text-white py-2 rounded-md font-semibold inline-flex gap-2 items-center">
          Send
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path d="M2.49746 17.835L19.0072 10.4725C20.3309 9.88222 20.3309 8.11779 19.0072 7.52746L2.49746 0.16496C1.00163 -0.502106 -0.549937 0.979138 0.190994 2.36689L3.34302 8.27061C3.58817 8.72977 3.58818 9.27023 3.34302 9.72939L0.190994 15.6331C-0.549935 17.0209 1.00163 18.5021 2.49746 17.835Z" fill="#E3AA2F" />
          </svg>
        </button>

      </div>
    </div>
  );
}
