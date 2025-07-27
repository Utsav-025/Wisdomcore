import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Wisdomcore</h1>
          <div className="user-info">
            <span className="welcome-text">
              Welcome, {currentUser?.displayName || currentUser?.email}
            </span>
            <button onClick={handleSignOut} className="sign-out-btn">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="hero-section">
            <h2>Welcome to Your Learning Journey</h2>
            <p>
              Discover, learn, and grow with our AI-powered learning platform.
              Your personalized learning experience starts here.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>Interactive Courses</h3>
              <p>Engage with dynamic content tailored to your learning style</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered Learning</h3>
              <p>Get personalized recommendations and adaptive learning paths</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your learning progress with detailed analytics</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Goal Setting</h3>
              <p>Set and achieve your learning goals with our guidance system</p>
            </div>
          </div>

          <div className="cta-section">
            <h3>Ready to Start Learning?</h3>
            <p>Choose from hundreds of courses and begin your journey today.</p>
            <button className="cta-button">Browse Courses</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;