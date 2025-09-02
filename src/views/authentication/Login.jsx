export default function Login() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Glass Card */}
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-[90%] max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-white mb-6 animate-slide-down">
          Welcome Back
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Please login to your account
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div className="flex flex-col">
            <label className="text-white mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="p-3 rounded-lg bg-white/70 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="p-3 rounded-lg bg-white/70 focus:bg-white outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transform transition duration-300 hover:bg-indigo-700"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-4 text-gray-200">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Social Logins */}
        <div className="flex space-x-4">
          <button className="flex-1 py-3 bg-red-500 text-white rounded-lg hover:scale-105 transition transform duration-300">
            Google
          </button>
          <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition transform duration-300">
            Facebook
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-200 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-yellow-300 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
