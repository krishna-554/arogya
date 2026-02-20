import { CheckCircle } from 'lucide-react';

export default function ReplyCard({ reply }) {
  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <div className={`p-4 rounded-lg ${reply.isDoctor ? 'bg-soft-blue border-l-4 border-cyan-400' : 'bg-gray-50'}`}>
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800">{reply.author}</span>
          {reply.isDoctor && (
            <div className="flex items-center gap-1 bg-cyan-200 px-2 py-1 rounded-full text-xs font-bold text-cyan-700">
              <CheckCircle className="w-3 h-3" />
              Verified Health Professional
            </div>
          )}
          {!reply.isDoctor && (
            <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs font-semibold">
              Sister Support
            </span>
          )}
        </div>
        <span className="text-xs text-gray-500">{timeAgo(reply.createdAt)}</span>
      </div>

      <p className="text-gray-700 text-sm">{reply.text}</p>
    </div>
  );
}
