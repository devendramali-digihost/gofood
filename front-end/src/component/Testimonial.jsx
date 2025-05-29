import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <div className="testimonial">
        <div className="container">
            <div className="title">
                <h3>Testimonials</h3>
                <p>Why Our Clients Choose Us</p>
            </div>
             <div id="carouselExample" class="carousel slide testislider" >
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <div className="text-contaent">
                            <span><RiDoubleQuotesL /></span>
                            <p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce tincidunt in leo lacinia condimentum..</p>
                            <div className="profile">
                                <figure><img src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/client-14-110x110.jpg" alt="" /></figure>
                                <h4>Patric Stone</h4>
                                <p>Freelancer</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="text-contaent">
                            <span><RiDoubleQuotesL /></span>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus deserunt nobis, dolore earum eos consequatur fugiat tempore odio accusantium reprehenderit laborum. Voluptate neque eum ducimus iusto, nisi natus quos ad.</p>
                            <div className="profile">
                                <figure><img src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/client-15-110x110.jpg" alt="" /></figure>
                                <h4>Patrdxfic Stone</h4>
                                <p>Frexcvelancer</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="text-contaent">
                            <span><RiDoubleQuotesL /></span>
                            <p>Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce tincidunt in leo lacinia condimentum..</p>
                            <div className="profile">
                                <figure><img src="http://gomoto.like-themes.com/wp-content/uploads/2019/06/client-16-110x110.jpg" alt="" /></figure>
                                <h4>Patrdxfic Stone</h4>
                                <p>Frexcvelancer</p>
                            </div>
                        </div>
                    </div>
                
                </div>
                 <button class="carousel-control-prev slidebtn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="" aria-hidden="true"><FaArrowLeftLong /></span>
                    {/* <span class="visually-hidden"><FaArrowLeftLong /></span> */}
                </button>
                <button class="carousel-control-next slidebtn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="" aria-hidden="true"><FaArrowRightLong /></span>
                    {/* <span class="visually-hidden"><FaArrowRightLong /></span> */}
                </button>
            </div>
        </div>
   
    </div>
  );
};

export default Testimonial;
