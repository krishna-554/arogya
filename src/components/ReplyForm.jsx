import { useState, useRef, useEffect } from 'react';
import { Send, Heart } from 'lucide-react';

export default function ReplyForm({ onSubmit, user }) {
  const [replyText, setReplyText] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const textareaRef = useRef(null);

  // Auto-expand textarea as user types
  const handleTextChange = (e) => {
    setReplyText(e.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 250) + 'px';
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [replyText]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!replyText.trim()) {
      alert('Please write a reply');
      return;
    }

    onSubmit({
      author: isAnonymous ? 'Anonymous Sister' : user.username,
      text: replyText,
    });

    setReplyText('');
    setIsAnonymous(false);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const displayName = isAnonymous ? 'Anonymous Sister' : user.username;
  const roleLabel = user.role === 'doctor' ? '👩‍⚕️ Verified Health Professional' : '👩 Community Member';

  return (
    <div className="bg-gradient-to-r from-cream to-white p-6 rounded-lg shadow-md border-l-4 border-terracotta">
      <h3 className="text-lg font-bold text-gray-800 mb-2">Share Your Support</h3>
      <p className="text-xs text-gray-500 mb-4">Your compassionate reply can make a real difference</p>

      <form onSubmit={handleSubmit}>
        {/* Reply Textarea with auto-expand */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Your Reply <span className="text-terracotta">*</span>
          </label>
          <textarea
            ref={textareaRef}
            value={replyText}
            onChange={handleTextChange}
            placeholder="Offer your support or professional advice here..."
            rows="3"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta smooth-transition resize-none max-h-64"
          />
          <p className="text-xs text-gray-500 mt-2">
            <Heart className="w-3 h-3 inline mr-1 text-terracotta fill-terracotta" />
            Remember to be kind and supportive. This is a safe space.
          </p>
        </div>

        {/* Anonymous Toggle & Preview */}
        <div className="mb-5 p-4 bg-white rounded-lg border-2 border-gray-100">
          <label className="flex items-center gap-3 cursor-pointer mb-3">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="w-5 h-5 rounded cursor-pointer accent-terracotta"
            />
            <span className="font-semibold text-gray-800">Post Anonymously</span>
          </label>

          {/* Reply Preview */}
          <div className={`mt-3 p-3 rounded-lg ${user.role === 'doctor' && !isAnonymous ? 'bg-soft-blue border-l-4 border-cyan-400' : 'bg-gray-50'}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-sm text-gray-800">{displayName}</span>
              {user.role === 'doctor' && !isAnonymous && (
                <span className="bg-cyan-200 text-cyan-700 text-xs font-bold px-2 py-1 rounded-full">
                  ✓ Verified
                </span>
              )}
              {user.role !== 'doctor' && !isAnonymous && (
                <span className="bg-pink-100 text-pink-700 text-xs font-bold px-2 py-1 rounded-full">
                  Sister Support
                </span>
              )}
            </div>
            <p className="text-xs text-gray-600">{replyText || 'Your reply preview will appear here...'}</p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!replyText.trim()}
          className="w-full bg-terracotta text-white font-bold py-3 rounded-lg hover:bg-opacity-90 smooth-transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5" />
          Post Reply
        </button>
      </form>

      {/* Tip */}
      <p className="text-xs text-gray-500 text-center mt-4 py-2 border-t border-gray-200">
        Your reply will appear instantly in the thread
      </p>
    </div>
  );
}
