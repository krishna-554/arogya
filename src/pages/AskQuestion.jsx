import { useState } from 'react';
import { Send } from 'lucide-react';

export default function AskQuestion({ onSubmit, user }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('General');
  const [isAnonymous, setIsAnonymous] = useState(user?.defaultAnonymous || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all fields');
      return;
    }

    onSubmit({
      title,
      description,
      category,
      author: isAnonymous ? 'Anonymous Sister' : user.username,
      isAnonymous,
      authorRole: user.role,
    });

    // Reset form
    setTitle('');
    setDescription('');
    setCategory('General');
    setIsAnonymous(user?.defaultAnonymous || false);
  };

  return (
    <div className="pb-40">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Ask a Question</h1>

      <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl">
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Question Title <span className="text-terracotta">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Is irregular periods normal?"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Category <span className="text-terracotta">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
            >
              <option value="Periods">Periods</option>
              <option value="Mental Health">Mental Health</option>
              <option value="Sexual Health">Sexual Health</option>
              <option value="Pregnancy">Pregnancy</option>
              <option value="General">General</option>
            </select>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Details <span className="text-terracotta">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Share more about your question or concern..."
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
            />
          </div>

          {/* Anonymous Toggle */}
          <div className="mb-8 p-4 bg-cream rounded-lg">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="w-5 h-5 rounded cursor-pointer accent-terracotta"
              />
              <span className="font-semibold text-gray-800">Post Anonymously</span>
            </label>
            <p className="text-xs text-gray-600 mt-2 ml-8">
              Your identity will be protected. Posts appear as "Anonymous Sister".
            </p>
            {!isAnonymous && (
              <p className="text-xs text-sage font-semibold mt-2 ml-8">
                This post will show your name: <strong>{user.username}</strong>
              </p>
            )}
          </div>

          {/* Username (if not anonymous) */}
          {!isAnonymous && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={user.username}
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-1">Your profile name (cannot be changed)</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-terracotta text-white font-bold py-3 rounded-lg hover:bg-opacity-90 smooth-transition flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Post {isAnonymous ? 'Anonymously' : 'Question'}
          </button>
        </form>
      </div>
    </div>
  );
}
