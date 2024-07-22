import React, { createContext, useState, useContext } from 'react';

const FlashMessageContext = createContext();

export const useFlashMessage = () => {
  return useContext(FlashMessageContext);
};

export const FlashMessageProvider = ({ children }) => {
  const [message, setMessage] = useState(null);

  const showMessage = (msg, duration = 10000) => { // Updated duration to 10 seconds
    setMessage(msg);
    setTimeout(() => {
      setMessage(null);
    }, duration);
  };

  return (
    <FlashMessageContext.Provider value={showMessage}>
      {children}
      {message && (
        <div className="flash-message">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFD700" stroke="#FFD700" stroke-width="0.5" class="bi bi-coin" viewBox="0 0 16 16">
            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
          </svg>

          <div>
            <strong>Daily Login</strong>
            <br />
            <span>10 credit points earned!!</span>
          </div>
        </div>
      )}
    </FlashMessageContext.Provider>
  );
};
