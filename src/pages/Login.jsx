import { useState } from 'react';
import { Heart, UserCheck, Stethoscope } from 'lucide-react';

export default function Login({ onLogin }) {
  const [step, setStep] = useState('role'); // 'role' or 'profile'
  const [selectedRole, setSelectedRole] = useState(null);
  
  // User profile fields
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [defaultAnonymous, setDefaultAnonymous] = useState(false);
  
  // Doctor profile fields
  const [fullName, setFullName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setStep('profile');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedRole === 'user') {
      if (!username.trim()) {
        alert('Please enter a username');
        return;
      }
      onLogin({
        role: 'user',
        username,
        age: age || null,
        defaultAnonymous,
      });
    } else if (selectedRole === 'doctor') {
      if (!fullName.trim() || !specialization || !licenseNumber.trim()) {
        alert('Please fill in all fields');
        return;
      }
      onLogin({
        role: 'doctor',
        fullName,
        specialization,
        licenseNumber,
        username: fullName, // Use full name as display name
      });
    }
  };

  const handleBack = () => {
    setStep('role');
    setSelectedRole(null);
    setUsername('');
    setAge('');
    setDefaultAnonymous(false);
    setFullName('');
    setSpecialization('');
    setLicenseNumber('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-orange-50 flex items-center justify-center px-4">
      {/* Hero Section - Role Selection */}
      {step === 'role' && (
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 flex justify-center">
            <Heart className="w-16 h-16 text-terracotta fill-terracotta" />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Arogya
          </h1>
          
          <p className="text-2xl text-gray-700 mb-2">
            A Safe Space for Women's Health
          </p>
          
          <p className="text-gray-600 mb-12 text-lg">
            Join our caring community. Choose your role to get started.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Button */}
            <button
              onClick={() => handleRoleSelect('user')}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl smooth-transition border-2 border-transparent hover:border-terracotta"
            >
              <UserCheck className="w-12 h-12 text-terracotta group-hover:scale-110 smooth-transition mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">I am a User</h3>
              <p className="text-gray-600 text-sm">
                Join as a community member to ask questions and share experiences with sisters.
              </p>
            </button>

            {/* Doctor Button */}
            <button
              onClick={() => handleRoleSelect('doctor')}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl smooth-transition border-2 border-transparent hover:border-cyan-400"
            >
              <Stethoscope className="w-12 h-12 text-cyan-500 group-hover:scale-110 smooth-transition mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">I am a Doctor</h3>
              <p className="text-gray-600 text-sm">
                Join as a verified health professional to provide expert guidance.
              </p>
            </button>
          </div>
        </div>
      )}

      {/* Profile Setup */}
      {step === 'profile' && (
        <div className="max-w-md w-full">
          <button
            onClick={handleBack}
            className="mb-6 text-terracotta font-semibold hover:opacity-70 smooth-transition"
          >
            ← Back to Role Selection
          </button>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedRole === 'user' ? 'Welcome, Sister!' : 'Verify Your Credentials'}
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              {selectedRole === 'user'
                ? 'Complete your profile to get started.'
                : 'Your credentials help us verify your expertise.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {selectedRole === 'user' ? (
                <>
                  {/* Username */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Username <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="e.g., SarahW"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Age <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="e.g., 28"
                      min="13"
                      max="120"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta"
                    />
                  </div>

                  {/* Default to Anonymous */}
                  <div className="p-4 bg-cream rounded-lg">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={defaultAnonymous}
                        onChange={(e) => setDefaultAnonymous(e.target.checked)}
                        className="w-5 h-5 rounded cursor-pointer accent-terracotta"
                      />
                      <span className="font-semibold text-gray-800">Default to Anonymous</span>
                    </label>
                    <p className="text-xs text-gray-600 mt-2 ml-8">
                      Your real name will never be shown unless you choose to share it in a post.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Dr. Priya Singh"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                  </div>

                  {/* Specialization */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Specialization <span className="text-terracotta">*</span>
                    </label>
                    <select
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    >
                      <option value="">Select a specialization</option>
                      <option value="Gynecologist">Gynecologist</option>
                      <option value="Psychologist">Psychologist</option>
                      <option value="General Practitioner">General Practitioner</option>
                      <option value="Nutritionist">Nutritionist</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Medical License Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Medical License Number <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      placeholder="e.g., MED12345678"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    />
                    <p className="text-xs text-gray-500 mt-1">For verification purposes</p>
                  </div>
                </>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full font-bold py-3 rounded-lg smooth-transition text-white ${
                  selectedRole === 'user'
                    ? 'bg-terracotta hover:bg-opacity-90'
                    : 'bg-cyan-500 hover:bg-opacity-90'
                }`}
              >
                {selectedRole === 'user' ? 'Join Community' : 'Verify & Join'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
