import { Badge, Heart } from 'lucide-react';

export default function QuestionCard({ question, onClick }) {
  const categoryColors = {
    'Periods': 'bg-pink-100 text-pink-700',
    'Hormonal Changes': 'bg-orange-100 text-orange-700',
    'Mental Health': 'bg-purple-100 text-purple-700',
    'Pregnancy': 'bg-amber-100 text-amber-700',
    'General': 'bg-gray-100 text-gray-700',
  };

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg smooth-transition cursor-pointer border-l-4 border-terracotta"
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[question.category] || categoryColors['General']}`}>
          #{question.category}
        </span>
        <span className="text-xs text-gray-500">{timeAgo(question.createdAt)}</span>
      </div>

      <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">{question.title}</h3>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{question.description}</p>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <span className="text-xs font-medium text-sage">{question.author}</span>
        <div className="flex items-center gap-2 text-gray-500">
          <Heart className="w-4 h-4" />
          <span className="text-xs">{question.replies.length} replies</span>
        </div>
      </div>
    </div>
  );
}
