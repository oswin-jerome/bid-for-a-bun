import React from 'react';

const Footer = () => {
    return ( 
        <div>
            <footer className="bg-app-500 p-5 text-center md:text-left md:flex justify-between items-center">
                <p>Ⓒ 2021, bidforabun.in</p>
                <div className="mt-3 md:mt-0">
                <p className="text-sm">Designed by, <a className="font-bold text-app-900" href="#">Prem Kumar</a></p>
                <p className="text-sm">Developed by, <a className="font-bold text-app-900" href="https://oswinjerome.in">Oswin Jerome</a></p>
                </div>
            </footer>
        </div> 
    );
}
 
export default Footer;