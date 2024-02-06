
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import PostingAds from './components/PostingAds';
// import ContactUs from './components/ContactUs';
function App() {
  return (
    <>
    <Navbar/>
    {/* <PostingAds/> */}
    {/* <ContactUs/> */}
    <SignUp/>
    <Login/>
    <Footer/>
    </>
  );
}

export default App;
