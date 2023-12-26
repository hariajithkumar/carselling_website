import React, { useState } from 'react';
import { Tabs, Tab, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


// image path
import car1 from '../Common/assets/image/car1.png'
import icon1 from '../Common/assets/image/icon1.png'
import icon2 from '../Common/assets/image/icon2.png'
import icon3 from '../Common/assets/image/icon3.png'
import icon4 from '../Common/assets/image/icon4.png'
import icon5 from '../Common/assets/image/icon5.png'
import icon6 from '../Common/assets/image/icon6.png'
import look1 from '../Common/assets/image/look1.png'
import look2 from '../Common/assets/image/look2.png'
import arrival1 from '../Common/assets/image/arrival-1.png'
import arrival2 from '../Common/assets/image/arrival-2.png'
import review from '../Common/assets/image/review-star.png'
import card1 from '../Common/assets/image/card-1.png'
import card2 from '../Common/assets/image/card-2.png'
import card3 from '../Common/assets/image/card-3.png'
import string from '../Common/assets/image/string.png'
import stock1 from '../Common/assets/image/stock-vehical.png'
import stock2 from '../Common/assets/image/stock-msg.png'
import stock3 from '../Common/assets/image/vehical-user.png'

// file path 
import Header from '../Common/pages/Header'
import '../Common/assets/css/main.css'
import Reviewcarousel from '../Common/pages/Reviewcarousel'

function Home() {
    const [key, setKey] = useState('all');
    const dispatch = useDispatch();
    return (
        <div>
            <Header />
            <section className='mt-5'>
                <div className='container-75 car-details'>
                    <div className='row m-0'>
                        <div className='col-lg-4 text-end pt-5'>
                            <div className='mb-5'>
                                <img src={icon1} className='mb-3' />
                                <h3 className='mb-3'>SUPER FAST</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                            <div className='mb-5'>
                                <img src={icon2} className='mb-3' />
                                <h3 className='mb-3'>AFFORDABLE</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                            <div className='mb-5'>
                                <img src={icon3} className='mb-3' />
                                <h3 className='mb-3'>OIL CHANGES</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                        </div>
                        <div className='col-lg-4 car-hover'>
                            <img src={car1} className='w-100' />
                        </div>
                        <div className='col-lg-4 pt-5'>
                            <div className='mb-5'>
                                <img src={icon4} className='mb-3' />
                                <h3 className='mb-3'>AIR CONDITIONING</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                            <div className='mb-5'>
                                <img src={icon5} className='mb-3' />
                                <h3 className='mb-3'>TRANSMISSION</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                            <div className='mb-5'>
                                <img src={icon6} className='mb-3' />
                                <h3 className='mb-3'>DEALERSHIP</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='looking-car'>
                    <div className='row m-0'>
                        <div className='col-lg-6 col-md-6 col-12 pt-2'>
                            <div className='row m-0 px-3'>
                                <div className='col-4'>
                                    <img src={look1} className='w-100' height={356} />
                                </div>
                                <div className='col-8'>
                                    <div className='look-content'>
                                        <h3>ARE YOU LOOKING FOR A CAR?</h3>
                                        <p className='my-3'>Search your car in our Inventory and request a quote on the vehicle of your choosing.</p>
                                        <button>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12 sell-look'>
                            <div className='row m-0 px-3'>
                                <div className='col-8'>
                                    <div className='look-content'>
                                        <h3>DO YOU WANT TO SELL YOUR CAR ?</h3>
                                        <p className='my-3'>The vehicle of your choosing search your car in our Inventory and request a quote on.</p>
                                        <button >Contact</button>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <img src={look2} className='w-100' height={364} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='new-arrival'>
                    <div className='container-90 new-arrival'>
                        <div className='text-center py-5'>
                            <p>Check out our new cars</p>
                            <h2>NEW ARRIVAL</h2>
                            <hr className='line-1' />
                            <hr className='line-2' />
                        </div>
                        <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='row m-0 py-5'>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                            <div className="card">
                                                <div className='card-image position-relative'>
                                                    <img src={arrival1} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body text-center">
                                                    <img src={review} alt='review' />
                                                    <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                    <hr className='line-3' />
                                                    <hr className='line-4' />
                                                    <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                </div>
                                                <div className='car-model'>
                                                    <div className='row m-0'>
                                                        <div className='col-4'>
                                                            <img src={card1} alt='R' className='pe-1' />
                                                            <span>2011</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card2} alt='setting' className='pe-1' />
                                                            <span>Manual</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card3} alt='speed' className='pe-1' />
                                                            <span>28K km</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                            <div className="card">
                                                <div className='card-image position-relative'>
                                                    <img src={arrival1} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body text-center">
                                                    <img src={review} alt='review' />
                                                    <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                    <hr className='line-3' />
                                                    <hr className='line-4' />
                                                    <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                </div>
                                                <div className='car-model'>
                                                    <div className='row m-0'>
                                                        <div className='col-4'>
                                                            <img src={card1} alt='R' className='pe-1' />
                                                            <span>2011</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card2} alt='setting' className='pe-1' />
                                                            <span>Manual</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card3} alt='speed' className='pe-1' />
                                                            <span>28K km</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                            <div className="card">
                                                <div className='card-image position-relative'>
                                                    <img src={arrival1} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body text-center">
                                                    <img src={review} alt='review' />
                                                    <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                    <hr className='line-3' />
                                                    <hr className='line-4' />
                                                    <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                </div>
                                                <div className='car-model'>
                                                    <div className='row m-0'>
                                                        <div className='col-4'>
                                                            <img src={card1} alt='R' className='pe-1' />
                                                            <span>2011</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card2} alt='setting' className='pe-1' />
                                                            <span>Manual</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card3} alt='speed' className='pe-1' />
                                                            <span>28K km</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                            <div className="card">
                                                <div className='card-image position-relative'>
                                                    <img src={arrival1} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body text-center">
                                                    <img src={review} alt='review' />
                                                    <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                    <hr className='line-3' />
                                                    <hr className='line-4' />
                                                    <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                </div>
                                                <div className='car-model'>
                                                    <div className='row m-0'>
                                                        <div className='col-4'>
                                                            <img src={card1} alt='R' className='pe-1' />
                                                            <span>2011</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card2} alt='setting' className='pe-1' />
                                                            <span>Manual</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card3} alt='speed' className='pe-1' />
                                                            <span>28K km</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className='row m-0 py-5'>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                            <div className="card">
                                                <div className='card-image position-relative'>
                                                    <img src={arrival1} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body text-center">
                                                    <img src={review} alt='review' />
                                                    <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                    <hr className='line-3' />
                                                    <hr className='line-4' />
                                                    <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                </div>
                                                <div className='car-model'>
                                                    <div className='row m-0'>
                                                        <div className='col-4'>
                                                            <img src={card1} alt='R' className='pe-1' />
                                                            <span>2011</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card2} alt='setting' className='pe-1' />
                                                            <span>Manual</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card3} alt='speed' className='pe-1' />
                                                            <span>28K km</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                            <div className="card">
                                                <div className='card-image position-relative'>
                                                    <img src={arrival1} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body text-center">
                                                    <img src={review} alt='review' />
                                                    <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                    <hr className='line-3' />
                                                    <hr className='line-4' />
                                                    <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                </div>
                                                <div className='car-model'>
                                                    <div className='row m-0'>
                                                        <div className='col-4'>
                                                            <img src={card1} alt='R' className='pe-1' />
                                                            <span>2011</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card2} alt='setting' className='pe-1' />
                                                            <span>Manual</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card3} alt='speed' className='pe-1' />
                                                            <span>28K km</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                            <div className="card">
                                                <div className='card-image position-relative'>
                                                    <img src={arrival1} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body text-center">
                                                    <img src={review} alt='review' />
                                                    <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                    <hr className='line-3' />
                                                    <hr className='line-4' />
                                                    <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                </div>
                                                <div className='car-model'>
                                                    <div className='row m-0'>
                                                        <div className='col-4'>
                                                            <img src={card1} alt='R' className='pe-1' />
                                                            <span>2011</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card2} alt='setting' className='pe-1' />
                                                            <span>Manual</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card3} alt='speed' className='pe-1' />
                                                            <span>28K km</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                            <div className="card">
                                                <div className='card-image position-relative'>
                                                    <img src={arrival1} className="card-img-top" alt="..." />
                                                </div>
                                                <div className="card-body text-center">
                                                    <img src={review} alt='review' />
                                                    <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                    <hr className='line-3' />
                                                    <hr className='line-4' />
                                                    <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                </div>
                                                <div className='car-model'>
                                                    <div className='row m-0'>
                                                        <div className='col-4'>
                                                            <img src={card1} alt='R' className='pe-1' />
                                                            <span>2011</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card2} alt='setting' className='pe-1' />
                                                            <span>Manual</span>
                                                        </div>
                                                        <div className='col-4 p-0'>
                                                            <img src={card3} alt='speed' className='pe-1' />
                                                            <span>28K km</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='happy-client text-center'>
                    <div className='happy-review'>
                        <p>What Our Happy Clients say about us</p>
                        <h5>OUR TESTIMONIAL</h5>
                        <hr className='line-5' />
                        <hr className='line-6' />
                    </div>
                    <div className='py-4'>
                        <div id="carouselExampleIndicators" className="carousel" data-bs-ride="carousel">
                            <div className="carousel-inner happy-content ">
                                <div className="carousel-item active">
                                    <div class="">
                                        <img src={string} />
                                        <p className=''> You will begin to realize why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise.</p>
                                        <h5>John doe</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div class="">
                                        <img src={string} />
                                        <p className=''> You will begin to realize why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise.</p>
                                        <h5>John doe</h5>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div class="my-2">
                                        <img src={string} />
                                        <p className=''> You will begin to realize why this exercise is called the Dickens Pattern with reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise.</p>
                                        <h5>John doe</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active inactive" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="inactive"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className="inactive"></button>
                            </div>
                        </div>

                        {/* <Reviewcarousel /> */}
                    </div>
                </div>
                <div className='new-arrival collection-arrival'>
                    <div className='container-90 new-arrival'>
                        <div className='text-center py-5'>
                            <p>Check out our new cars</p>
                            <h2>RECENT VEHICLE</h2>
                            <hr className='line-1' />
                            <hr className='line-2' />
                        </div>
                        <div className='mt-3'>
                            <div className='container-90 search-vehicle d-lg-block d-md-block d-sm-block d-none'>
                                <Tabs
                                    id="controlled-tabs"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                >
                                    <Tab eventKey="all" title={<><span className='select-vehicle'>All</span></>}>
                                        <div className=' bg-active-tabs'>
                                            <div className='row m-0 py-5'>
                                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                    <div className="card">
                                                        <div className='card-image position-relative'>
                                                            <img src={arrival1} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <img src={review} alt='review' />
                                                            <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                            <hr className='line-3' />
                                                            <hr className='line-4' />
                                                            <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                        </div>
                                                        <div className='car-model'>
                                                            <div className='row m-0'>
                                                                <div className='col-4'>
                                                                    <img src={card1} alt='R' className='pe-1' />
                                                                    <span>2011</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card2} alt='setting' className='pe-1' />
                                                                    <span>Manual</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card3} alt='speed' className='pe-1' />
                                                                    <span>28K km</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                    <div className="card">
                                                        <div className='card-image position-relative'>
                                                            <img src={arrival1} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <img src={review} alt='review' />
                                                            <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                            <hr className='line-3' />
                                                            <hr className='line-4' />
                                                            <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                        </div>
                                                        <div className='car-model'>
                                                            <div className='row m-0'>
                                                                <div className='col-4'>
                                                                    <img src={card1} alt='R' className='pe-1' />
                                                                    <span>2011</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card2} alt='setting' className='pe-1' />
                                                                    <span>Manual</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card3} alt='speed' className='pe-1' />
                                                                    <span>28K km</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                    <div className="card">
                                                        <div className='card-image position-relative'>
                                                            <img src={arrival1} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <img src={review} alt='review' />
                                                            <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                            <hr className='line-3' />
                                                            <hr className='line-4' />
                                                            <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                        </div>
                                                        <div className='car-model'>
                                                            <div className='row m-0'>
                                                                <div className='col-4'>
                                                                    <img src={card1} alt='R' className='pe-1' />
                                                                    <span>2011</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card2} alt='setting' className='pe-1' />
                                                                    <span>Manual</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card3} alt='speed' className='pe-1' />
                                                                    <span>28K km</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                    <div className="card">
                                                        <div className='card-image position-relative'>
                                                            <img src={arrival1} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <img src={review} alt='review' />
                                                            <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                            <hr className='line-3' />
                                                            <hr className='line-4' />
                                                            <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                        </div>
                                                        <div className='car-model'>
                                                            <div className='row m-0'>
                                                                <div className='col-4'>
                                                                    <img src={card1} alt='R' className='pe-1' />
                                                                    <span>2011</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card2} alt='setting' className='pe-1' />
                                                                    <span>Manual</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card3} alt='speed' className='pe-1' />
                                                                    <span>28K km</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100 my-2'>
                                                    <div className="card">
                                                        <div className='card-image position-relative'>
                                                            <img src={arrival1} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <img src={review} alt='review' />
                                                            <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                            <hr className='line-3' />
                                                            <hr className='line-4' />
                                                            <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                        </div>
                                                        <div className='car-model'>
                                                            <div className='row m-0'>
                                                                <div className='col-4'>
                                                                    <img src={card1} alt='R' className='pe-1' />
                                                                    <span>2011</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card2} alt='setting' className='pe-1' />
                                                                    <span>Manual</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card3} alt='speed' className='pe-1' />
                                                                    <span>28K km</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100 my-2'>
                                                    <div className="card">
                                                        <div className='card-image position-relative'>
                                                            <img src={arrival1} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <img src={review} alt='review' />
                                                            <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                            <hr className='line-3' />
                                                            <hr className='line-4' />
                                                            <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                        </div>
                                                        <div className='car-model'>
                                                            <div className='row m-0'>
                                                                <div className='col-4'>
                                                                    <img src={card1} alt='R' className='pe-1' />
                                                                    <span>2011</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card2} alt='setting' className='pe-1' />
                                                                    <span>Manual</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card3} alt='speed' className='pe-1' />
                                                                    <span>28K km</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100 my-2'>
                                                    <div className="card">
                                                        <div className='card-image position-relative'>
                                                            <img src={arrival1} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <img src={review} alt='review' />
                                                            <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                            <hr className='line-3' />
                                                            <hr className='line-4' />
                                                            <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                        </div>
                                                        <div className='car-model'>
                                                            <div className='row m-0'>
                                                                <div className='col-4'>
                                                                    <img src={card1} alt='R' className='pe-1' />
                                                                    <span>2011</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card2} alt='setting' className='pe-1' />
                                                                    <span>Manual</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card3} alt='speed' className='pe-1' />
                                                                    <span>28K km</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100 my-2'>
                                                    <div className="card">
                                                        <div className='card-image position-relative'>
                                                            <img src={arrival1} className="card-img-top" alt="..." />
                                                        </div>
                                                        <div className="card-body text-center">
                                                            <img src={review} alt='review' />
                                                            <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                            <hr className='line-3' />
                                                            <hr className='line-4' />
                                                            <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                        </div>
                                                        <div className='car-model'>
                                                            <div className='row m-0'>
                                                                <div className='col-4'>
                                                                    <img src={card1} alt='R' className='pe-1' />
                                                                    <span>2011</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card2} alt='setting' className='pe-1' />
                                                                    <span>Manual</span>
                                                                </div>
                                                                <div className='col-4 p-0'>
                                                                    <img src={card3} alt='speed' className='pe-1' />
                                                                    <span>28K km</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="bmw" title={<><span className='select-vehicle'>BMW</span></>}>
                                        <div className='bg-active-tabs'>
                                            <div className=''>
                                                <div className='row m-0 py-5'>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </Tab>
                                    <Tab eventKey="maruti" title={<><span className='select-vehicle'>Maruti Suzuki</span></>}>
                                        <div className='bg-active-tabs'>
                                            <div className=''>
                                                <div className='row m-0 py-5'>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="hondai" title={<><span className='select-vehicle'>HONDA</span></>}>
                                        <div className='bg-active-tabs'>
                                            <div className=''>
                                                <div className='row m-0 py-5'>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="tata" title={<><span className='select-vehicle'>TATA</span></>}>
                                        <div className='bg-active-tabs'>
                                            <div className=''>
                                                <div className='row m-0 py-5'>
                                                    <div className='col-lg-3 col-md-4 col-sm-6 col-12 h-100'>
                                                        <div className="card">
                                                            <div className='card-image position-relative'>
                                                                <img src={arrival1} className="card-img-top" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <img src={review} alt='review' />
                                                                <h5 className="card-title">GTA 5 Lowriders DLC</h5>
                                                                <hr className='line-3' />
                                                                <hr className='line-4' />
                                                                <p className="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
                                                            </div>
                                                            <div className='car-model'>
                                                                <div className='row m-0'>
                                                                    <div className='col-4'>
                                                                        <img src={card1} alt='R' className='pe-1' />
                                                                        <span>2011</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card2} alt='setting' className='pe-1' />
                                                                        <span>Manual</span>
                                                                    </div>
                                                                    <div className='col-4 p-0'>
                                                                        <img src={card3} alt='speed' className='pe-1' />
                                                                        <span>28K km</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='vehical-stock'>
                    <div className='vehical-bg'>
                        <div className='container-90'>
                            <div className='row m-0 py-5'>
                                <div className='col-lg-4 stock-view'>
                                    <div className='stock-detail'>
                                        <h3>VEHICLE IN STOCK</h3>
                                        <img src={stock1} />
                                    </div>
                                </div>
                                <div className='col-lg-4'>

                                </div>
                                <div className='col-lg-4'>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home