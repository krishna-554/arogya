import { Heart, LogOut } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate, user, onLogout }) {
  const navItems = [
    { id: 'feed', label: 'Community Feed' },
    { id: 'ask', label: 'Ask a Question' },
    { id: 'about', label: 'About' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('feed')}>
          <Heart className="w-8 h-8 text-terracotta fill-terracotta" />
          <span className="text-2xl font-bold text-terracotta">Arogya</span>
        </div>
        
        <div className="flex gap-6 items-center">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? 'text-terracotta border-b-2 border-terracotta'
                  : 'text-gray-700 hover:text-terracotta'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* User Profile & Logout */}
          <div className="flex items-center gap-4 pl-6 border-l border-gray-300">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-800">{user?.username}</p>
              <p className="text-xs text-sage capitalize">
                {user?.role === 'doctor' ? '👩‍⚕️ Verified Health Professional' : '👩 Community Member'}
              </p>
            </div>
            <button
              onClick={onLogout}
              className="p-2 text-gray-600 hover:text-terracotta smooth-transition"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
