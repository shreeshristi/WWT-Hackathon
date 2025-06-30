// App.jsx
import ChatUI from './components/ChatUI';
import SchemeCard from './components/SchemeCard';

export default function App() {
  const dummyScheme = {
    id: "PM-SVANidhi",
    match_score: 0.92,
    next_steps: ["आधार OTP", "दुकान की फोटो"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 p-6 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-rose-700 mb-2">
          SampannAI – Empowering Women 💰🌸
        </h1>
        <p className="text-md text-gray-700">
          Financial Access via Voice, Chat & Education
        </p>
      </div>

      {/* Interaction Section */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-rose-800 mb-5 text-center">💬 Interact with SampannAI</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
          <button className="bg-purple-100 hover:bg-purple-200 py-3 px-5 rounded-lg text-purple-900 font-medium">
            🎙️ Voice Input
          </button>
          <button className="bg-green-100 hover:bg-green-200 py-3 px-5 rounded-lg text-green-800 font-medium">
            💚 Connect via WhatsApp
          </button>
          <button className="bg-yellow-100 hover:bg-yellow-200 py-3 px-5 rounded-lg text-yellow-800 font-medium">
            ✍️ Type your Query
          </button>
          <button className="bg-blue-100 hover:bg-blue-200 py-3 px-5 rounded-lg text-blue-800 font-medium">
            🔍 Search Government Schemes
          </button>
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-purple-700 mb-3">🗨️ Recent Interaction</h2>
        <ChatUI />
      </div>

      {/* Government Schemes Section */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-6 mb-10">
        <h2 className="text-xl font-semibold text-purple-700 mb-3">🏛️ Eligible Government Schemes</h2>
        <SchemeCard scheme={dummyScheme} />
      </div>

      {/* Footer */}
      <div className="text-xs text-center text-gray-500 mt-10">
        💬 Powered by SampannAI · Bridging Bharat’s financial divide
      </div>
    </div>
  );
}
