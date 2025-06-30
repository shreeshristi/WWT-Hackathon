import SchemeCard from './SchemeCard';

export default function ChatUI() {
  return (
    <div className="max-w-lg mx-auto bg-white p-4 rounded-2xl shadow-md">
      <div className="text-sm text-gray-700 mb-2">User: मुझे बिज़नेस लोन चाहिए</div>
      <div className="text-sm text-green-600 mb-2">Bot: आपके लिए ये योजनाएं उपलब्ध हैं:</div>
      <SchemeCard
        scheme={{
          id: 'PM-SVANidhi',
          match_score: 0.92,
          next_steps: ['आधार OTP', 'दुकान की फोटो']
        }}
      />
    </div>
  );
}
