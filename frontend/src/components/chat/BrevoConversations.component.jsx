import { useEffect } from 'react';

const BrevoConversations = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(d, w, c) {
        w.BrevoConversationsID = '67cfec8c2bf99d694e0aa4f4';
        w[c] = w[c] || function() {
          (w[c].q = w[c].q || []).push(arguments);
        };
      })(document, window, 'BrevoConversations');
    `;
    document.head.appendChild(script);

    const mainScript = document.createElement('script');
    mainScript.async = true;
    mainScript.src =
      'https://conversations-widget.brevo.com/brevo-conversations.js';
    document.head.appendChild(mainScript);

    return () => {
      document.head.removeChild(script);
      if (document.head.contains(mainScript)) {
        document.head.removeChild(mainScript);
      }
      delete window.BrevoConversationsID;
      delete window.BrevoConversations;
    };
  }, []);

  return null;
};

export default BrevoConversations;
