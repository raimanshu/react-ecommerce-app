export default function Register() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-[90%] max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-white mb-6 animate-slide-down">
          Create Account
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Sign up to get started
        </p>

        <form className="space-y-5">
          <div>
            <label className="text-white mb-1 block">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="text-white mb-1 block">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="text-white mb-1 block">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
          <div>
            <label className="text-white mb-1 block">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transform transition duration-300 hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-200 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-300 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
