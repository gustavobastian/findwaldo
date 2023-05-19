import '../styles/About.css';
import Header from '../components/header';
import Footer from '../components/footer';
function About() {
  return (
    <div>
      <Header/>
      <div className="About">
        <div id="innerAbout" className='innerAbout'>
            <div className='referenceTitle'>About me:</div>
            <p id='firsP' className='pAbout'>I am an Electronic Engineer with good background in web technologies.</p>
            <p id='secondP' className='pAbout'>This app is part of the javascripth path of the Odin Project.</p>
            <p id='secondP' className='pAbout'>Current status: under development.</p>
        
            <div className='referenceTitle'>Images used in this project:</div>
            <div id='reference_1' className='itemReference'>
                <div className='aboutTitle'>
                    <p id='firsR' className='pAbout'>App Icon:<a href='https://icon-library.com/3014281.html'>https://icon-library.com/3014281.html</a></p>                
                </div>
                <div className='aboutTitle'>
                    <p id='firsR' className='pAbout'>Img 1:<a href='https://wallpapers.com/wallpapers/where-s-waldo-athletic-field-u833jv2k2ewxa01r.html'>rottie12345 on Wallpapers.com</a></p>                
                </div>
                <div className='aboutTitle'>
                    <p id='firsR' className='pAbout'>Img 2:<a href='https://wallpapers.com/wallpapers/where-s-waldo-crowded-ship-d72fdlc30qu2viu1.html'>tide777 on Wallpapers.com</a></p>                
                </div>
                <div className='aboutTitle'>
                    <p id='firsR' className='pAbout'>Img 3:<a href='https://wallpapers.com/wallpapers/where-s-waldo-fishing-boats-ivl4gypxwu6ie0dm.html'>tanyuschastreha on Wallpapers.com</a></p>                
                </div>
            </div>
        
        </div>
        
      </div>
      
      <Footer/>
    </div>
  );
}

export default About;