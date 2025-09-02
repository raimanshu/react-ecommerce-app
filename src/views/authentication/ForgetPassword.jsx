export default function ForgetPassword() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-[90%] max-w-md animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-white mb-6 animate-slide-down">
          Reset Password
        </h1>
        <p className="text-center text-gray-200 mb-8">
          Enter your email to reset your password
        </p>

        <form className="space-y-5">
          <div>
            <label className="text-white mb-1 block">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-white/70 focus:bg-white outline-none focus:ring-2 focus:ring-pink-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transform transition duration-300 hover:bg-pink-700"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-center text-gray-200 mt-6">
          Remembered your password?{" "}
          <a href="/login" className="text-yellow-300 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
