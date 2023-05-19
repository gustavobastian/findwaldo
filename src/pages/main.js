import '../styles/main.css';
import HeaderFun from '../components/header';
import GameFun from '../components/gameBody'
import Footer from '../components/footer';
function Main(props) {
    console.log("here")
  return (
    <div>      
        <div >
            <HeaderFun setCurrentGame={(e)=>{props.setCurrentGame(e);}}/>        
            <GameFun value={props.valueCurrent}/>
            <Footer />     
        </div>
      
    </div>
  );
}

export default Main;