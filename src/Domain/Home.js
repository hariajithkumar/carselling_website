import React from 'react'

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

// file path 
import Header from '../Common/pages/Header'
import '../Common/assets/css/main.css'

function Home() {
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
                        <div className='col-lg-4'>
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
                <div className='looking-car my-2'>
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
                <div className='container-90 new-arrival'>
                    <div className='text-center'>
                        <p>Check out our new cars</p>
                        <h2>NEW ARRIVAL</h2>
                        <hr className='line-1' />
                        <hr className='line-2' />
                    </div>
                    <div className='row m-0 py-5'>
                        <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
                            <div class="card">
                                <img src={arrival1} class="card-img-top" alt="..." />
                                <div className='car-model'>
                                    
                                </div>
                                    <div class="card-body text-center">
                                        <img src={review} alt='review' />
                                        <h5 class="card-title">GTA 5 Lowriders DLC</h5>
                                        <p class="card-text"><span>Rs 60 Lakh</span> Rs 50 Lakh</p>
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