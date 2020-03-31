import React, {Component} from 'react';

class mainBanner extends Component{
    render() {
        return(
            <div>
                <div className="site-blocks-cover overlay" id="banner-area" style="background-image: url(assets/images/hero_bg_2.jpg);"
                     data-aos="fade"
                     data-stellar-background-ratio="0.5" id="section-home">
                    <div className="container">
                        <div className="row align-items-center justify-content-center text-center">
                            <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
                                <p data-aos="fade-up" data-aos-delay="200"><a href="#section-contact"  className="btn btn-primary py-3 px-5 text-white">
                                  FALE CONOSCO</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default mainBanner;
