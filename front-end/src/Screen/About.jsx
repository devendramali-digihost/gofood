import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import home from "../../public/assets/home.png"
import bag from "../../public/assets/bag.png"
import location1 from "../../public/assets/location1.png"
import Rellax from 'rellax';

const About = () => {
    useEffect(() => {
        const rellax = new Rellax('.rellax', { speed: 2.5 });

        return () => {
            rellax.destroy();
        };
    }, []);
    return (
        <div>
            <Navbar />
            <div className="aboutpage">
                <div className="bradcromb">
                    <h2>About Us</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>|</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="about-main">
                    <div className="aboutcontaant">
                        <div className="row justify-content-center">
                            <div className="col-lg-5 col-md-8">
                                <div className="abcont">
                                    <h2>Better food for <br /> <span> more people</span></h2>
                                    <p>For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep</p>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="ctaboxconst">
                                    <div className="row g-0">
                                        <div className="col-lg-4">
                                            <div className="ctabox">
                                                <div className="">
                                                    <h3>3,00,000+</h3>
                                                    <span>restaurants</span>
                                                </div>
                                                <figure><img src={home} alt="" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="ctabox box2">
                                                <div className="">
                                                    <h3>800+</h3>
                                                    <span>cities</span>
                                                </div>
                                                <figure><img src={location1} alt="" /></figure>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="ctabox">
                                                <div className="">
                                                    <h3>3 billion+</h3>
                                                    <span>orders delivered</span>
                                                </div>
                                                <figure><img src={bag} alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="boxex">
                            <figure className='img rellax img1'><img src="https://b.zmtcdn.com/data/o2_assets/70b50e1a48a82437bfa2bed925b862701742892555.png" alt="" /></figure>
                            <figure className='img rellax img2'><img src="https://b.zmtcdn.com/data/o2_assets/110a09a9d81f0e5305041c1b507d0f391743058910.png" alt="" /></figure>
                            <figure className='img rellax img3'><img src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png" alt="" /></figure>
                            <figure className='img rellax img4'><img src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png" alt="" /></figure>
                            <figure className='img rellax img5'><img src="https://b.zmtcdn.com/data/o2_assets/9ef1cc6ecf1d92798507ffad71e9492d1742892584.png" alt="" /></figure>
                            <figure className='img rellax img6'><img src="https://b.zmtcdn.com/data/o2_assets/316495f4ba2a9c9d9aa97fed9fe61cf71743059024.png" alt="" /></figure>
                        </div>
                    </div>
                </div>
                <div className="waitingappsection">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 col-md-12">
                            <h2>What’s waiting for you <br /><span>on the app?</span></h2>
                            <p> Our app is packed with features that enable you to experience food delivery like never before</p>

                            <div className="row mt-4 justify-content-center">
                                <div className="col-lg-4 col-md-7 col-sm-10 col-12">
                                    <div className="row smallimg">
                                        <div className="col-lg-6 col-md-6 col-sm-10 col-6 ">
                                            <div className="boxsds mt-4">
                                                <figure>
                                                    <img src="https://b.zmtcdn.com/data/o2_assets/d0f1639403f80f8f2c19e0d538222e661742455804.png" alt="" />
                                                </figure>
                                                Healthy

                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6">
                                            <div className="boxsds">
                                                <figure>
                                                    <img src="https://b.zmtcdn.com/data/o2_assets/82f145180cd6f920a8a8617dda366a0a1742455963.png" alt="" />
                                                </figure>
                                                Veg Mode
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6 ">
                                            <div className="boxsds">
                                                <figure>
                                                    <img src="https://b.zmtcdn.com/data/o2_assets/5e7aab0f183b36fc12c29279f0cb55181742462245.png" alt="" />
                                                </figure>
                                                Plan a Party
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6 ">
                                            <div className="boxsds last">
                                                <figure>
                                                    <img src="https://b.zmtcdn.com/data/o2_assets/867f86a10503998e437963bb37c451591742455764.png" alt="" />
                                                </figure>
                                                Gift Cards
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-7">
                                    <div className="mobbanner">
                                        <div className="row  justify-content-center align-content-end h-100 smallimg">
                                        <div className="col-lg-6 col-md-6 col-6 ">
                                            <div className="boxsds mt-4">
                                                <figure>
                                                    <img src="https://b.zmtcdn.com/data/o2_assets/cc1caf220c91be38dd94cce12b416fcd1746550226.png" alt="" />
                                                </figure>
                                                Schedule your order


                                            </div>
                                        </div>
                                       
                                        </div>
                                        <div className="mob">
                                            <figure>
                                                <img src="https://b.zmtcdn.com/data/o2_assets/3f7e2757e62fd22592b879bd56b666011742294630.png" alt="" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-7 col-12">
                                    <div className="row smallimg">
                                        <div className="col-lg-6 col-md-6 col-6 ">
                                            <div className="boxsds mt-4">
                                                <figure>
                                                    <img src="https://b.zmtcdn.com/data/o2_assets/6e27c9acde6045c272a28e6eb275727e1742455789.png" alt="" />
                                                </figure>
                                                Gourmet

                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6 ">
                                            <div className="boxsds">
                                                <figure>
                                                    <img src="https://b.zmtcdn.com/data/o2_assets/813952c961fd13588cb71867d84ea7dc1742455815.png" alt="" />
                                                </figure>
                                                Offers
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6 ">
                                            <div className="boxsds">
                                                <figure>
                                                    <img src="https://b.zmtcdn.com/data/o2_assets/06d090307e02772693ac06123b53459b1742455939.png" alt="" />
                                                </figure>
                                                Food on Train

                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-6 ">
                                            <div className="boxsds last">
                                                <figure>
                                                    <img src="https://b.zmtcdn.com/data/o2_assets/5e973dd10c387878009c66d625ae541a1746550690.png" alt="" />
                                                </figure>
                                                Collections
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default About