import React, { useState, useEffect } from "react";
import './App.css';
import budgetImg from './assets/budget.png';
import analyticsImg from './assets/analytics.png';
import cloudImg from './assets/cloud.png';
import { auth } from './firebaseConfig';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut, 
  updateProfile 
} from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  // signup fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => setUser(currentUser));
    return () => unsubscribe();
  }, []);

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
      await updateProfile(userCredential.user, {
        displayName: firstName
      });
      setShowSignup(false);
      setFirstName(""); setLastName(""); setPhone("");
      setSignupEmail(""); setSignupPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setShowLogin(false);
      setLoginEmail(""); setLoginPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>💰 MoneyMentor</h1>
        <p className="subheading">AI-Powered Personal Finance & Fraud Detection Web App</p>

        {user ? (
          <>
            <h2>Welcome, {user.displayName || user.email} 👋</h2>
            <button className="btn logout" onClick={handleLogout}>🚪 Logout</button>
          </>
        ) : (
          <div className="auth-buttons">
            <button className="btn signup" onClick={() => setShowSignup(true)}>👤 Sign Up</button>
            <button className="btn login" onClick={() => setShowLogin(true)}>🔑 Login</button>
          </div>
        )}
      </header>

      <main>

         {/* Get Started Section */}
        <section className="get-started">
          <h2>Get Started</h2>
          {!user && <p>Click Sign Up or Login above to start managing your finances!</p>}
          {user && <p>🎉 You are ready to manage your money like a pro!</p>}
        </section>
      </main>
      
        {/* Features Section */}
        <section className="features">
          <h2>Our Features</h2>
          <div className="feature-cards">
            <div className="card">
              <img src={budgetImg} alt="Budget" className="feature-img" />
              <h3>Track Budgets</h3>
              <p>Manage your income and expenses efficiently.</p>
            </div>
            <div className="card">
              <img src={analyticsImg} alt="Analytics" className="feature-img" />
              <h3>Analytics</h3>
              <p>Visualize your spending habits with clear graphs.</p>
            </div>
            <div className="card">
              <img src={cloudImg} alt="Cloud" className="feature-img" />
              <h3>Cloud Sync</h3>
              <p>Securely sync your data with Firebase cloud.</p>
            </div>
          </div>
        </section>

       
      <footer>
        <p>© {new Date().getFullYear()} MoneyMentor</p>
      </footer>

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowSignup(false)}>&times;</span>
            <h3>Sign Up</h3>
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="email" placeholder="Email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} />
            <input type="tel" placeholder="Phone Number (Optional)" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button onClick={handleSignUp} className="btn signup">Sign Up</button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
            <h3>Login</h3>
            <input type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            <button onClick={handleLogin} className="btn login">Login</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
