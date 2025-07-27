import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="header-content">
          <h1 className="logo">Wisdomcore</h1>
          <nav className="nav-links">
            <Link to="/login" className="nav-button login-btn">
              Login
            </Link>
            <Link to="/signup" className="nav-button signup-btn">
              Sign Up
            </Link>
          </nav>
        </div>
      </header>

      <main className="landing-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Unlock Your Potential with
              <span className="gradient-text"> AI-Powered Learning</span>
            </h1>
            <p className="hero-description">
              Transform your learning journey with personalized AI tutoring, 
              adaptive courses, and intelligent progress tracking. Join thousands 
              of learners who are already achieving their goals.
            </p>
            <div className="hero-buttons">
              <Link to="/signup" className="cta-button primary">
                Get Started Free
              </Link>
              <Link to="/login" className="cta-button secondary">
                Sign In
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">🎓</div>
              <div className="card-text">Interactive Learning</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🤖</div>
              <div className="card-text">AI Tutor</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">📊</div>
              <div className="card-text">Progress Analytics</div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-content">
            <h2>Why Choose Wisdomcore?</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h3>Personalized Learning</h3>
                <p>AI-driven recommendations tailored to your learning style and pace</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>Instant Feedback</h3>
                <p>Get immediate responses and corrections to accelerate your progress</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <h3>Achievement System</h3>
                <p>Track milestones and celebrate your learning achievements</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🌐</div>
                <h3>Learn Anywhere</h3>
                <p>Access your courses from any device, anytime, anywhere</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Transform Your Learning?</h2>
            <p>Join our community of learners and start your journey today</p>
            <Link to="/signup" className="cta-button large">
              Start Learning Now
            </Link>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="footer-content">
          <p>&copy; 2024 Wisdomcore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;