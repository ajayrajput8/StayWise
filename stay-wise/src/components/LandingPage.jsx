import {Link} from 'react-router-dom'
import {CustomerSignup} from './customerSignUp'
import {Login} from './LogIn'
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-wrapper">
      <div className="landing-card">
        <h1>StayWise</h1>
        <div className="landing-buttons">
          <Link to="/customerSignup" className="landing-btn">Sign Up</Link>
          <Link to="/ownerSignup" className="landing-btn">Owner Sign Up</Link>
          <Link to="/login" className="landing-btn">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;