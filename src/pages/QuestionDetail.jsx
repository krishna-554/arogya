import { ArrowLeft } from 'lucide-react';
import ReplyCard from '../components/ReplyCard';
import ReplyForm from '../components/ReplyForm';

export default function QuestionDetail({ question, onAddReply, user }) {

  const categoryColors = {
    'Periods': 'bg-pink-100 text-pink-700',
    'Mental Health': 'bg-purple-100 text-purple-700',
    'Sexual Health': 'bg-blue-100 text-blue-700',
    'General': 'bg-gray-100 text-gray-700',
    'Pregnancy': 'bg-amber-100 text-amber-700',
  };

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    return `${Math.floor(seconds / 86400)}d ago`;
  };

  return (
    <div className="pb-40">
      {/* Header */}
      <div className="mb-8">
        <button className="flex items-center gap-2 text-terracotta font-semibold hover:opacity-80 smooth-transition">
          <ArrowLeft className="w-5 h-5" />
          Back to Feed
        </button>
      </div>

      {/* Question */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <div className="flex items-start justify-between mb-4">
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[question.category] || categoryColors['General']}`}>
            #{question.category}
          </span>
          <span className="text-xs text-gray-500">{timeAgo(question.createdAt)}</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">{question.title}</h1>
        <p className="text-gray-700 text-lg mb-6 leading-relaxed">{question.description}</p>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-sage font-semibold">{question.author}</p>
        </div>
      </div>

      {/* Replies Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Supportive Replies ({question.replies.length})
        </h2>

        {question.replies.length > 0 ? (
          <div className="space-y-4 mb-8">
            {question.replies.map(reply => (
              <ReplyCard key={reply.id} reply={reply} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gradient-to-r from-cream to-orange-50 rounded-lg mb-8 border-2 border-dashed border-terracotta">
            <p className="text-gray-600 text-lg font-semibold mb-2">No replies yet.</p>
            <p className="text-gray-500">Be the first to offer support!</p>
          </div>
        )}
      </div>

      {/* Reply Form */}
      <div className="mb-8">
        <ReplyForm onSubmit={(replyData) => onAddReply(question.id, replyData)} user={user} />
      </div>
    </div>
  );
}
