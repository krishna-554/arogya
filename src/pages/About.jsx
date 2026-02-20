import { Heart, Users, Shield, MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="pb-40">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">About Arogya</h1>

      {/* Mission */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <div className="flex items-start gap-4 mb-6">
          <Heart className="w-8 h-8 text-terracotta flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Arogya is a safe, anonymous women's health community dedicated to supporting and empowering women 
              at every stage of their health journey. We believe that peer support, combined with verified health 
              professional guidance, creates a trust-based environment where women can ask questions without judgment.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <Shield className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
            <h3 className="font-bold text-lg text-gray-800">Privacy & Safety</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Your identity is your choice. Post anonymously or with your name—we prioritize your safety and comfort.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <Users className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
            <h3 className="font-bold text-lg text-gray-800">Community Support</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Connect with sisters who understand. Share experiences, ask questions, and support one another.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <MessageCircle className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
            <h3 className="font-bold text-lg text-gray-800">Expert Guidance</h3>
          </div>
          <p className="text-gray-600 text-sm">
            Verified health professionals contribute insights while maintaining peer support as the foundation.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start gap-3 mb-4">
            <Heart className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
            <h3 className="font-bold text-lg text-gray-800">Empowerment</h3>
          </div>
          <p className="text-gray-600 text-sm">
            We empower women to take charge of their health through knowledge, support, and compassion.
          </p>
        </div>
      </div>

      {/* Important Disclaimer */}
      <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg">
        <h3 className="font-bold text-lg text-amber-900 mb-2">Important Notice</h3>
        <p className="text-amber-800 text-sm leading-relaxed">
          Arogya is for peer support and information only. This is not a substitute for professional medical advice. 
          Always consult a qualified healthcare provider for medical concerns. In case of medical emergencies, 
          please contact your local health services immediately.
        </p>
      </div>
    </div>
  );
}
