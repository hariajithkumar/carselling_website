import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';

// css link 
import '../assets/css/main.css'
import '../assets/css/header.css'

// fontawesome link 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';


// image path 
import mail from '../assets/image/mail.png'
import clock from '../assets/image/clock.png'
import call from '../assets/image/call.png'
import facebook from '../assets/image/Facebook.png'
import instagram from '../assets/image/Instagram.png'
import x from '../assets/image/X.png'
import logo from '../assets/image/white-logo.png'

// state change 
import { setClass1Hide } from '../../Redux/CreateSlice';
import Carousel from './Carousel';
import Carousels from './Carousels';



function Header() {
    const { isClass1Show } = useSelector((state) => state.car_selling)
    const [currentIndex, setCurrentIndex] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname, search, hash } = location;

    const navButton = () => {
        if (isClass1Show == false) {
            dispatch(setClass1Hide(true))
        } else {
            dispatch(setClass1Hide(false))
        }
    }


    return (
        <header className='bg-img'>
            <div className='container-95'>
                <div className='row m-0 py-3 header-top'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <img src={mail} /><span className='ms-2 me-3'>info@jinglyy.com</span>
                        <img src={clock} /><span className='ms-2'>Mon - Sat 8.00 - 18.00. Sunday CLOSED</span>
                    </div>
                    <div className='col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-2 text-end'>
                        <span className=''>
                            <img src={call} /><span className='ms-2 me-3'>info@jinglyy.com</span>
                        </span>
                        <span className='ms-2'>
                            <img src={facebook} />
                            <img src={instagram} className='mx-2' />
                            <img src={x} />
                        </span>
                    </div>
                </div>
            </div>
            <hr className='mt-0'/>
            <div className='container-95'>
                <div className='header-bottom'>
                    <nav class="navbar navbar-expand-lg ">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#"><img src={logo} /></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-list">
                                    <li class="nav-item">
                                        <NavLink exact to={{ pathname: '/' }} className={`${pathname === '/' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact to={{ pathname: '/buycar' }} className={`${pathname === '/buycar' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            Buy car
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <NavLink exact to={{ pathname: '/sellcar' }} className={`${pathname === '/buycar' ? 'active' : 'custom-active'} text-decoration-none`}>
                                            Sell car
                                        </NavLink>
                                    </li>
                                    <li class="nav-item">
                                        <button className='login-btn'>Login</button>
                                    </li>
                                    <li class="nav-item">
                                        <button className='regi-btn'>Register</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='carousel-section'>
                <Carousel />
            </div>
            {/* <div className='pt-5'>
                <Carousels style={{ transform: `translateX(${translateX}%)` }}/>
            </div> */}
        </header>
    )
}

export default Header