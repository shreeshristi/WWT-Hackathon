import { BadgeCheck } from 'lucide-react'; // if you're using lucide icons

export default function SchemeCard({ scheme }) {
  return (
    <div className="border border-purple-200 bg-white rounded-2xl p-4 shadow-lg mb-4">
      <h2 className="text-lg font-bold text-primary flex items-center gap-2">
        <BadgeCheck className="w-5 h-5 text-financeGreen" /> {scheme.id}
      </h2>
      <p className="text-sm text-gray-500 mt-1">💡 Match Score: <span className="font-semibold">{scheme.match_score}</span></p>
      <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
        {scheme.next_steps.map((step, idx) => (
          <li key={idx}>🔹 {step}</li>
        ))}
      </ul>
    </div>
  );
}
