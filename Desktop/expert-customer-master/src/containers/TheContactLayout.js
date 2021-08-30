import React from 'react';
import Navbar from '../components/Navbar';
import Map from "../components/Map";
import Footer from '../components/Footer'
const TheContactLayout =() => {
    return (
        <>
        <Navbar/>
        <div className="container text-center p-3 mt-6">
            <h3>Contact Us</h3>
            <div className="row justify-content-center">
                <div className="col-md-6 text-left">
            <form>
                <div className="mb-3">
                    <label for="name">Name</label>
                    <input type="text" className="form-control bg-light brad-0" />
                    </div>
                    <div className="mb-3">
                    <label for="name">Email</label>
                    <input type="text" className="form-control bg-light brad-0" />
                    </div>
                    <div className="mb-3">
                    <label for="name">Message</label>
                    <textarea className="form-control bg-light brad-0" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn bg-main pl-4 pr-4">Send</button>
            </form>
                </div>
            </div>
        </div>
        <div className="container-fluid pt-6 pb-6 mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="bg-light p-4 mb-3">
                        <div className="m-2">
                        <h4 className="text-center">Address 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                    <div className="bg-light p-4 mb-3">
                        <div className="m-2">
                        <h4 className="text-center">Address 2</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <Map />
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default TheContactLayout;