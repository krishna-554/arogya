import QuestionCard from '../components/QuestionCard';

export default function Feed({ questions, selectedCategory, onSelectCategory, onSelectQuestion }) {
  const categories = ['Periods', 'Hormonal Changes', 'Mental Health', 'Pregnancy', 'General'];

  return (
    <div className="pb-40">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Community Feed</h1>
        
        <div className="flex gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap smooth-transition ${
              selectedCategory === null
                ? 'bg-terracotta text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-terracotta'
            }`}
          >
            All Categories
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-full font-medium whitespace-nowrap smooth-transition ${
                selectedCategory === category
                  ? 'bg-terracotta text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-terracotta'
              }`}
            >
              #{category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {questions.length > 0 ? (
          questions.map(question => (
            <QuestionCard
              key={question.id}
              question={question}
              onClick={() => onSelectQuestion(question.id)}
            />
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg">No questions in this category yet.</p>
            <p className="text-gray-400 text-sm mt-2">Be the first to ask something!</p>
          </div>
        )}
      </div>
    </div>
  );
}
