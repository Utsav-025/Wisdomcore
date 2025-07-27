# Wisdomcore - AI Learning Platform

An AI-powered learning platform with modern authentication features including email/password login, Google OAuth, and user management.

## Features

- 🔐 **Multiple Authentication Options**
  - Email/Password login and registration
  - Google OAuth integration
  - Secure user session management

- 🎨 **Modern UI/UX**
  - Beautiful landing page with animations
  - Responsive design for all devices
  - Clean and intuitive interface

- 🛡️ **Security**
  - Firebase Authentication
  - Protected routes
  - Secure user data handling

- ⚡ **Performance**
  - React with TypeScript
  - Optimized components
  - Fast loading times

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wisdomcore
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select existing project
   - Enable Authentication and set up sign-in methods:
     - Email/Password
     - Google (optional but recommended)
   - Copy your Firebase configuration

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Firebase configuration values.

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## Firebase Setup Guide

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Follow the setup wizard

### 2. Enable Authentication
1. In your Firebase project, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable the following providers:
   - **Email/Password**: Click and enable
   - **Google**: Click, enable, and add your project's OAuth consent screen

### 3. Get Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon `</>`
4. Register your app with a nickname
5. Copy the configuration object

### 4. Update Environment Variables
Replace the values in your `.env` file with your actual Firebase config:

```env
REACT_APP_FIREBASE_API_KEY=your-actual-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

## Project Structure

```
src/
├── components/
│   ├── Auth.css           # Shared authentication styles
│   ├── Dashboard.css      # Dashboard styles
│   ├── Dashboard.tsx      # Main dashboard component
│   ├── LandingPage.css    # Landing page styles
│   ├── LandingPage.tsx    # Home/landing page
│   ├── Login.tsx          # Login component
│   ├── PrivateRoute.tsx   # Route protection
│   └── SignUp.tsx         # Registration component
├── contexts/
│   └── AuthContext.tsx    # Authentication context
├── firebase.ts            # Firebase configuration
├── App.tsx               # Main app component
└── index.tsx             # App entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## Usage

### Authentication Flow

1. **Landing Page**: Users see the main landing page with login/signup options
2. **Registration**: New users can sign up with email/password or Google
3. **Login**: Existing users can log in with their credentials or Google
4. **Dashboard**: Authenticated users are redirected to their dashboard
5. **Logout**: Users can securely log out from the dashboard

### Components Overview

- **LandingPage**: Marketing page with call-to-action buttons
- **Login**: Email/password and Google login form
- **SignUp**: Registration form with validation
- **Dashboard**: Protected area for authenticated users
- **PrivateRoute**: HOC for protecting authenticated routes

## Customization

### Styling
The app uses custom CSS with modern design principles. Key files:
- `Auth.css` - Authentication forms styling
- `LandingPage.css` - Homepage styling
- `Dashboard.css` - Dashboard styling

### Firebase Rules
For production, set up proper Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

### Environment Variables for Production
Make sure to set up environment variables in your hosting platform:
- Vercel: Add in project settings
- Netlify: Add in site settings
- Firebase: Use `firebase functions:config:set`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions:
- Create an issue in the repository
- Check the Firebase documentation
- Review React documentation

---

Built with ❤️ using React, TypeScript, and Firebase
