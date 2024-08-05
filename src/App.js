
import './App.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
function App() {
  return (
    <section >
      <div className='rect'></div>
      <div className='content-container'>
      <div className=' form-content '>
        <h2>Login</h2>
        <form>
          <p>Username</p>
          <CiUser className='lock'/>
          <input  type='text' placeholder='Type Your Username'></input>
          <hr></hr>
          <p>Password</p>
          <CiLock className='lock' />
          <input type='password'  placeholder=' Type Your Password'></input>
          <hr></hr>
          <p className='forget'><a href='#'>  Forget Your Password?</a></p>
        </form>
        <button> LOGIN </button>
        <div className='form-text'>
        <div className='icons-text'>
          <p>Or Sign Up Using</p>
          <div className='icons'>
            <span className='icon facabook'><FaFacebookF /></span>
            <span className='icon twitter'><FaTwitter  /></span>
            <span className='icon google'> <FaGoogle  /></span>
          </div>
          </div>
        
          <div className='content-text'>
          <p>Or Sign Up Using</p>
          <p className='context-bold'>Sign Up</p>
          </div>
          </div>
        


      </div>
      </div>
    </section>
 
  );
}

export default App;
