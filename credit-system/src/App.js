import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { FlashMessageProvider } from './FlashMessageContext';
import Header from './Header';
import Hero from './Hero';
import CreditsPage from './CreditsPage';
import Login from './Login';
import './App.css';
import './FlashMessage.css'; 

function App() {
  const [credits, setCredits] = useState(100);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCredits(credits + 10); // 10 credits for login
  };

  return (
    <FlashMessageProvider>
      <Router>
        <div className="App">
          {isLoggedIn && <Header />}
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/"
              element={isLoggedIn ? (
                <>
                  <Hero />
                  
                  <div className="card-container">
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <img
                          src="https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg?t=st=1721510635~exp=1721514235~hmac=d36557ed458170a2d350fd03d2b5576b6a88f70a300341bfdbf0ad52c0fc94f9&w=740"
                          alt="Quiz" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          Speed, Distance, Time
                          <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                          <div className="badge badge-outline">Fashion</div>
                          <div className="badge badge-outline">Products</div>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <img
                          src="https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg?t=st=1721510635~exp=1721514235~hmac=d36557ed458170a2d350fd03d2b5576b6a88f70a300341bfdbf0ad52c0fc94f9&w=740"
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          Shoes!
                          <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                          <div className="badge badge-outline">Fashion</div>
                          <div className="badge badge-outline">Products</div>
                        </div>
                      </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl">
                      <figure>
                        <img
                          src="https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg?t=st=1721510635~exp=1721514235~hmac=d36557ed458170a2d350fd03d2b5576b6a88f70a300341bfdbf0ad52c0fc94f9&w=740"
                          alt="Shoes" />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">
                          Shoes!
                          <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                          <div className="badge badge-outline">Fashion</div>
                          <div className="badge badge-outline">Products</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Navigate to="/login" />
              )}
            />
            <Route
              path="/credits"
              element={isLoggedIn ? <CreditsPage credits={credits} /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </FlashMessageProvider>
  );
}

export default App;
