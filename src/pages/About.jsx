// About page

function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      {/* Header Section */}
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Project Tracker
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Project Tracker is a powerful tool designed to help teams manage tasks, track progress, and stay organized. Keep your projects on schedule, collaborate seamlessly, and boost productivity.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Task Management</h2>
          <p className="text-gray-600">
            Create, assign, and manage tasks effortlessly with an intuitive interface.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Progress Tracking</h2>
          <p className="text-gray-600">
            Visualize project progress with dashboards and real-time updates.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-2 text-indigo-600">Collaboration</h2>
          <p className="text-gray-600">
            Collaborate with your team, share updates, and stay connected seamlessly.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <p className="text-gray-700 mb-4">
          Ready to boost your productivity and take control of your projects?
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default About;
