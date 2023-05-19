import '../styles/main.css';
import HeaderFun from '../components/header';
import GameFun from '../components/gameBody'
import Footer from '../components/footer';
function Main(props) {
    
  return (
    <div>      
        <div >
            <HeaderFun value={props.valueCurrent} setCurrentGame={(e)=>{props.setCurrentGame(e);}}/>        
            <GameFun value={props.valueCurrent}/>
            <Footer />     
        </div>
      
    </div>
  );
}

export default Main;