import React from 'react'
import '../assets/css/header.css'

// image path 
import car2 from '../assets/image/stock-vehical.png'
import logo from '../assets/image/footer-logo.png'


function Footer() {
    return (
        <footer>
            <div className='footer'>
                <div className='container-60 footer-content'>
                    <img src={car2} className='footer-car'/>
                    <h3>DO YOU NEED HELP IN CHOOSING A CAR?</h3>
                    <p>Call Us :<span> (+91) 76766 65642</span></p>
                    <img src={logo} className='my-3'/>
                </div>
                <hr />
                <div className='footer-bottom'>
                    <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 col-12 text-center'>
                            <p>@ 2023 All rights reserved</p>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 my-lg-0 my-md-0 my-3 text-center'>
                            <ul className='nav d-flex justify-content-center'>
                                <li className='nav-item'>Home</li>
                                <li className='nav-item'>Buy Car</li>
                                <li className='nav-item'>Sell car</li>
                            </ul>
                        </div>
                        <div className='col-lg-4 col-md-4 col-12 text-center'>
                            <p>Designed by Webbitech.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer