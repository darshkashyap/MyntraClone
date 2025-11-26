export default function Login({ close }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-999">

      <div className="bg-white p-6 rounded-lg w-[420px] relative shadow-xl border">

        <button
          className="absolute top-3 right-3 text-xl"
          onClick={close}
        >
          ✕
        </button>
        <h2 className="text-center text-lg mt-4 font-semibold">
          India’s #1 Online Resale Platform
        </h2>
        <div className="flex items-center mt-4 border rounded-lg px-3 py-2">
          <span className="text-gray-600 mr-2">+91</span>
          <input
            type="text"
            placeholder="Mobile Number*"
            className="flex-1 outline-none"
          />
        </div>
        <button className="bg-yellow-400 w-full mt-4 py-2 rounded-lg font-semibold">
          Login
        </button>

      </div>
    </div>
  );
}
