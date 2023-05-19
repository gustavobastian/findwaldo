import '../styles/main.css';
import HeaderFun from '../components/header';
import GameFun from '../components/gameBody'
import Footer from '../components/footer';
function Main() {
    console.log("here")
  return (
    <div>      
        <div >
            <HeaderFun />        
            <GameFun />
            <Footer />     
        </div>
      
    </div>
  );
}

export default Main;