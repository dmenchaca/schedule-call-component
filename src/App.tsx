import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[1150px] flex items-start gap-[60px] p-9 relative">
        <FontAwesomeIcon icon={faTimes} className="absolute top-4 right-4 w-5 h-5 text-gray-400" />
        <div className="w-fit">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-indigo-600">
              <FontAwesomeIcon icon={faBolt} className="w-[15px] h-[15px] opacity-50" />
              <span className="font-medium">Upgrade account</span>
            </div>
          
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mt-3">
                Create better product<br />
                data that drives sales
              </h2>
              <p className="text-gray-600 mt-2">
                Book a call to upgrade your account
              </p>
            </div>
          </div>

          {/* Features List */}
          <ul className="mt-8 space-y-2">
            {[
              'Create unlimited products',
              'Get world-class support',
              'Sync your data with Shopify and Google Merchant'
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <FontAwesomeIcon icon={faCheck} className="w-[18px] h-[18px] text-indigo-600 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Trusted By Section */}
          <div className="mt-10">
            <p className="text-sm text-gray-500 mb-4">
              Trusted by leading e-commerce brands and retailers
            </p>
            <div className="flex items-center gap-8">
              {/* Logo placeholders - replace these with actual SVGs */}
              <div className="h-7 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-7 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-7 w-24 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
        
        <div 
          className="meetings-iframe-container w-full h-[566px] rounded-xl overflow-hidden" 
          data-src="https://meetings.hubspot.com/sandra-adramanova?embed=true"
          style={{ lineHeight: '100%' }}
        />
      </div>
    </div>
  );
}

export default App;
