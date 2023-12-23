import React from 'react'

// image path
import car1 from '../Common/assets/image/car1.png'
import icon1 from '../Common/assets/image/icon1.png'
import icon2 from '../Common/assets/image/icon2.png'
import icon3 from '../Common/assets/image/icon3.png'
import icon4 from '../Common/assets/image/icon4.png'
import icon5 from '../Common/assets/image/icon5.png'
import icon6 from '../Common/assets/image/icon6.png'

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
                                <img src={icon1} className='mb-3'/>
                                <h3 className='mb-3'>SUPER FAST</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                            <div className='mb-5'>
                                <img src={icon2} className='mb-3'/>
                                <h3 className='mb-3'>AFFORDABLE</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                            <div className='mb-5'>
                                <img src={icon3} className='mb-3'/>
                                <h3 className='mb-3'>OIL CHANGES</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img src={car1} className='w-100' />
                        </div>
                        <div className='col-lg-4 pt-5'>
                            <div className='mb-5'>
                                <img src={icon4} className='mb-3'/>
                                <h3 className='mb-3'>AIR CONDITIONING</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                            <div className='mb-5'>
                                <img src={icon5} className='mb-3'/>
                                <h3 className='mb-3'>TRANSMISSION</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                            <div className='mb-5'>
                                <img src={icon6} className='mb-3'/>
                                <h3 className='mb-3'>DEALERSHIP</h3>
                                <p className='mb-3'>Leap lorem Ipsum is simply dummy text the implications printin  k a galley of.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Home