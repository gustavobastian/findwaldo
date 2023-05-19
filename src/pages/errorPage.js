import '../styles/About.css';
import Header from '../components/header';
import Footer from '../components/footer';
function About() {
  return (
    <div>
      <Header/>
      <div className="About">
        <div className='innerAbout'>
            <div className='aboutTitle' id="pageNotFound">PAGE NOT FOUND</div>           
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;