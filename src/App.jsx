// App.js
import { Routes, Route, Navigate,useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import SignupPage from './pages/SignUp';
import LoginPage from './pages/Login';
import ForgetPasswordPage from './pages/ForgetPassword';
import ResetPasswordPage from './pages/ResetPassword';
import VerificationPage from './pages/Verification';
import Checkmail from './pages/Checkmail';
import ProfilePage from './pages/Profile';
import CreateCardPage from './pages/CreateCard';
import PublicProfile from './pages/PublicProfile';
import ChatUIPage from './pages/ChatPage'
import PrivateProfile from './pages/PrivateProfile';
import ChatRoomPage from './pages/ChatRoom';
import Errornotfound from './pages/notfound';
import AboutUspage from './pages/AboutPage';
import Mio from './components/Profile/Upload';


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

   const location = useLocation();
   const islogin = localStorage.getItem('islogin') == 'True';


 return (
    <>
      <div className="flex flex-col min-h-screen">
         <div className="flex-grow">

         {['/profile', '/profile/info', '/profile/edit','/profile/changepass', '/profile/myannc', '/profile/blog', '/profile/mychats', '/create-card', '/public/', '/chatUI', '/private/', '/chat', '/'].includes(location.pathname) && <Navbar />}
         {!['/profile', '/profile/info', '/profile/edit','/profile/changepass', '/profile/myannc', '/profile/blog', '/profile/mychats', '/create-card', '/public/', '/chatUI', '/private/', '/chat', '/'].includes(location.pathname) && location.pathname.startsWith('/private/') && <Navbar />}
            <Routes>
               <Route path="/" element={islogin ? <Home /> : <Navigate to="/login" />} />
               <Route path="/profile/*" element= {islogin ? <ProfilePage/> : <Navigate to="/login" />}/>
               <Route path="/login" element={<LoginPage />} />
               <Route path="/signup" element={<SignupPage />} />
               <Route path="/forget-password" element={<ForgetPasswordPage />} />
               <Route path="/reset-password" element={<ResetPasswordPage />} />
               <Route path="/verify-email" element={<VerificationPage />} />
               <Route path="/checkmail" element={<Checkmail/>} />
               <Route path="/create-card" element={<CreateCardPage/>} />
               <Route path="/public/:username" element={islogin ? <PublicProfile/> : <Navigate to="/login" />} />
               <Route path="/chatUI" element={<ChatUIPage/>} />
               <Route path="/private/:username" element={islogin ? <PrivateProfile/> : <Navigate to="/login" />} />
               <Route path='*' element={<Errornotfound/>}/>
               <Route path="/chat" element={<ChatRoomPage/>}/>
               <Route path="/About" element={<AboutUspage/>}/>
               <Route path="/mio" element={<Mio/>}/>
            </Routes>
            
         </div>
         {['/profile', '/profile/info', '/profile/edit','/profile/changepass', '/profile/myannc', '/profile/blog', '/profile/mychats', '/create-card', '/public/', '/chatUI', '/private/', '/chat', '/'].includes(location.pathname) && <Footer />}
         {!['/profile', '/profile/info', '/profile/edit','/profile/changepass', '/profile/myannc', '/profile/blog', '/profile/mychats', '/create-card', '/public/', '/chatUI', '/private/', '/chat', '/'].includes(location.pathname) && location.pathname.startsWith('/private/') && <Footer />}
      </div>
         <ToastContainer 
                  position="top-left"
                  newestOnTop={true}
                  pauseOnFocusLoss
                  draggable
                  autoClose={2000}
                  closeOnClick
                  pauseOnHover
         />
      
    </>
 );
};

export default App;