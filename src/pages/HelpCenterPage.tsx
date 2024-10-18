import React from 'react';
import { Book, FileText, MessageCircle } from 'lucide-react';

const HelpCenterPage: React.FC = () => {
  const faqs = [
    { question: "How do I create a new board?", answer: "To create a new board, go to your profile page and click on the 'Create Board' button. Follow the prompts to name your board and set its privacy settings." },
    { question: "Can I change my account email?", answer: "Yes, you can change your account email in the Account Management settings. Go to your profile, click on 'Settings', then 'Account', and you'll see an option to update your email." },
    { question: "How do I cancel my subscription?", answer: "To cancel your subscription, go to 'My Page', click on 'Subscription & Payments', and select 'Cancel Subscription'. Follow the prompts to complete the cancellation process." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Help Center</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Book size={40} className="text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">User Guide</h2>
          <p className="text-gray-600">Comprehensive guide to using all features of VogL.</p>
          <a href="#" className="text-indigo-600 hover:underline mt-4 inline-block">Read Guide</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <FileText size={40} className="text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">FAQs</h2>
          <p className="text-gray-600">Find answers to commonly asked questions.</p>
          <a href="#faqs" className="text-indigo-600 hover:underline mt-4 inline-block">View FAQs</a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <MessageCircle size={40} className="text-indigo-600 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
          <p className="text-gray-600">Get in touch with our support team for personalized help.</p>
          <a href="#" className="text-indigo-600 hover:underline mt-4 inline-block">Contact Us</a>
        </div>
      </div>
      <div id="faqs">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Legal Information</h2>
        <div className="space-y-2">
          <a href="#" className="text-indigo-600 hover:underline block">Terms of Service</a>
          <a href="#" className="text-indigo-600 hover:underline block">Privacy Policy</a>
          <a href="#" className="text-indigo-600 hover:underline block">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;