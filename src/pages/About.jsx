// About page

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      {/* Header Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          TrackIn
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          TrackIn is a powerful tool designed to help organizations monitor attendance, track employee/student presence, and stay organized. Keep your records accurate, manage attendance seamlessly, and boost overall efficiency.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Live Attendence Monitoring</h2>
          <p className="text-gray-600">
            Track student attendance in real time with accuracy, zero manual errors, and instant insights for smarter management.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Easy Reporting & Analytics</h2>
          <p className="text-gray-600">
            Lets you generate detailed attendance reports quickly and gain insights into patterns, trends, and overall workforce/student presence with minimal effort.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Seamless Integration & Efficiency</h2>
          <p className="text-gray-600">
            Ensures the system works smoothly with your existing tools, streamlining attendance management and saving time for more important tasks.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 mb-4">
          Ready to make attendance management effortless and accurate?
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300"
         onClick={() => navigate("/")}
         >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default About;
