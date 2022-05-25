import React from 'react'
import bg from '../../assets/bg.jpg'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img
                    src={bg}
                    className="card-img-top"
                    style={{ height: "550px", objectFit: "cover" }}
                    alt="Connected no internet"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-4 mb-0 fw-bolder text-light">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
