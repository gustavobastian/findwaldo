import React  from 'react';
import '../styles/footer.css'

const footerFun = (props)=>{
    return(
        <div className="footerClass">
            <div className='line1'>
            Developed by: Gustavo Bastian (2023)
            </div>
            <div className='line1'>
            Image by:<a className='aFooter' href="https://wallpapers.com/wallpapers/where-s-waldo-athletic-field-u833jv2k2ewxa01r.html">rottie12345</a>  on Wallpapers.com
            </div>
        </div>
    );
};

export default footerFun;