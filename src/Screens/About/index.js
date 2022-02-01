import React from 'react'
import { connect } from 'react-redux'

const Home = () => {
    
    return (
        <div>
            <section className="home-banner about-banner-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="banner-content">
                                <h1>About Us</h1>
                                <h3>JOIN OUR FITNESS FAMILY.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="real-work-result">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mb-4">REAL WORK. REAL RESULTS.</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="category-video">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-sm-6 col-md-3">
                            <div className="video-top">
                                <button><i className="fas fa-play-circle" /></button>
                                <video src="assets/video/mov_bbb.mp4" poster="assets/img/catgry-1.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="video-top">
                                <button><i className="fas fa-play-circle" /></button>
                                <video src="assets/video/mov_bbb.mp4" poster="assets/img/catgry-2.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="video-top">
                                <button><i className="fas fa-play-circle" /></button>
                                <video src="assets/video/mov_bbb.mp4" poster="assets/img/catgry-3.png" />
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="video-top">
                                <button><i className="fas fa-play-circle" /></button>
                                <video src="assets/video/mov_bbb.mp4" poster="assets/img/catgry-4.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose-us">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="mb-4">Why Choose Us</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default Home
