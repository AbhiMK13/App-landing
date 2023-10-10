import React from 'react'
import "./css/Dashboard.css"
import about_img from "./css/images/about-img.png"
import review_img1 from "./css/images/pic1.png"
import review_img2 from "./css/images/pic2.png"
import review_img3 from "./css/images/pic3.png"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import './styles.css';
// import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function Dashboard() {
  return (
    <>
    <div className='main-div'>
    <header>
        <a href="#" className="logo">LOGO</a>
        <div id="menu-bar" className="fas fa-bars">

            
        </div>
        <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#usage">Usage</a>
            <a href="#review">Review</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            
        </nav>

    </header>

{/* <!--home section--> */}
<section className="home" id="home">
    <div className="content">
        <h3>App dashboard page</h3>
        <p>
            It is critical to test and evaluate software and
             hardware with dummy data before working with actual data.
              Running the code through various scenarios and test cases allows the detection of possible bugs.
        </p>
        <a href="#" className="btn">get started</a>
    </div>
    <div className="mySwiper image-slider">
        <div className="swiper-wrapper">
        {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
      </Swiper> */}
        </div>

    </div>
    {/* <!--features secion starts here--> */}
    <section className="features" id="features">
        <h1 className="heading">App Features</h1>
        <div className="box-container">
            <div className="box">
                <i className="fas fa-magic"></i>
                <h3>Smooth design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam optio nemo.
                     Eius sint, laborum, hic beatae totam vitae reprehenderit quas necessitatibus voluptatibus pariatur 
                     accusamus repellendus explicabo, sit quidem nostrum?</p>
            </div>
            <div className="box">
                <i className="fas fa-shield-alt"></i>
                <h3>Privacy Protect</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam optio nemo.
                     Eius sint, laborum, hic beatae totam vitae reprehenderit quas necessitatibus voluptatibus pariatur 
                     accusamus repellendus explicabo, sit quidem nostrum?</p>
            </div>
            <div className="box">
                <i className="fas fa-globe"></i>
                <h3>Multiple Language</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam optio nemo.
                     Eius sint, laborum, hic beatae totam vitae reprehenderit quas necessitatibus voluptatibus pariatur 
                     accusamus repellendus explicabo, sit quidem nostrum?</p>
            </div>
            <div className="box">
                <i className="fas fa-map-marked-alt"></i>
                <h3>Location Tracking</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam optio nemo.
                     Eius sint, laborum, hic beatae totam vitae reprehenderit quas necessitatibus voluptatibus pariatur 
                     accusamus repellendus explicabo, sit quidem nostrum?</p>
            </div>
            <div className="box">
                <i className="fas fa-cogs"></i>
                <h3>Powerfull settings</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam optio nemo.
                     Eius sint, laborum, hic beatae totam vitae reprehenderit quas necessitatibus voluptatibus pariatur 
                     accusamus repellendus explicabo, sit quidem nostrum?</p>
            </div>
            <div className="box">
                <i className="fas fa-headset"></i>
                <h3>24x7 Services</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam optio nemo.
                     Eius sint, laborum, hic beatae totam vitae reprehenderit quas necessitatibus voluptatibus pariatur 
                     accusamus repellendus explicabo, sit quidem nostrum?</p>
            </div>
        </div>

    </section>
    {/* <!--features section ends here-->
    <!--About section starts here--> */}
    <section className="about" id="about">
        <h1 className="heading">
            About the App
        </h1>
        <div className="row">
            <div className="image">
                <img src={about_img} alt=""/>
            </div>
       
        <div className="content">
            <h3>Take a look around our app</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Alias, consequatur obcaecati distinctio, fugit vel autem blanditiis
                  eius deleniti sint quas nam veritatis consequuntur nemo! Exercitationem eligendi 
                  inventore perferendis aspernatur molestiae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere harum est reprehenderit
                 tenetur impedit. Repellat, quia hic reiciendis
                 at officiis iste.</p>
            <div className="buttons">
                <a href="#"><img src= "images/app-store-btn.png" alt=""/></a>
                <a href="#"><img src= "images/google-btn.png" alt=""/></a>
            </div>   
        </div>
    </div>
    </section>
    {/* <!--About section Ends here-->
    <!--usage section starts here--> */}
    <section className="usage" id="usage">
        <h1 className="heading">How it works</h1>
        <div className="row">
            <div className="box-container">
                <div className="box">
                    <i className="fas fa-sort-amount-down"></i>
                    <h3>Minimum Progress</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta nostrum eius vitae quae officiis aspernatur sapiente repellat laborum est debitis ducimus at blanditiis dolores, ratione tempore quo ea eveniet.</p>

                </div>
                <div className="box">
                    <i className="fas fa-user-clock"></i>
                    <h3>Active Time </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta nostrum eius vitae quae officiis aspernatur sapiente repellat laborum est debitis ducimus at blanditiis dolores, ratione tempore quo ea eveniet.</p>
                    
                </div>

            </div>
            <img  className="divider" src = "images/usage-img.png" alt=""/>
            <div className="box-container">
                <div className="box">
                    <i className="fas fa-sort-amount-up"></i>
                    <h3>Maximum Progress</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta nostrum eius vitae quae officiis aspernatur sapiente repellat laborum est debitis ducimus at blanditiis dolores, ratione tempore quo ea eveniet.</p>

                </div>
                <div className="box">
                    <i className="fas fa-fire"></i>
                    <h3>Calories Burned</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique soluta nostrum eius vitae quae officiis aspernatur sapiente repellat laborum est debitis ducimus at blanditiis dolores, ratione tempore quo ea eveniet.</p>
                    
                </div>

            </div>

        </div>
    </section>
    {/* <!--usage section ends here-->
    <!--review section starts here--> */}
    <section className="review" id="review">
        <h1 className="heading">Customers Review</h1>
        <div className="box-container">
            <div className="box">
                <img src={review_img1} alt="#"/>
                <h3> John Deo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id corporis cum harum aut officiis debitis natus deserunt ipsa molestias dicta totam praesentium fugit unde accusantium itaque nisi, vitae molestiae.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>

                </div>
            </div>
            <div className="box">
                <img src={review_img2} alt="#"/>
                <h3> John Deo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id corporis cum harum aut officiis debitis natus deserunt ipsa molestias dicta totam praesentium fugit unde accusantium itaque nisi, vitae molestiae.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>

                </div>
            </div>
            <div className="box">
                <img src={review_img3} alt="#"/>
                <h3> John Deo</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id corporis cum harum aut officiis debitis natus deserunt ipsa molestias dicta totam praesentium fugit unde accusantium itaque nisi, vitae molestiae.</p>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>

                </div>
            </div>


        </div>
    </section>
    {/* <!--review section ends here-->
    <!--Price section starts here--> */}
    <section className="pricing" id="price">
        <h1 className="heading">
            Our Pricing Plans
        </h1>
        <div className="box-container">
            <div className="box">
                <div className="price"><span>$</span>10<span>Month</span></div>
                <h3>Basic</h3>
                <ul>
                    <li>100 MB Disk Space</li>
                    <li>2 Subdomains</li>
                    <li>5 Email Accounts </li>
                    <li>Email support</li>
                </ul>
                <a href="#" className="btn">Select Plan</a>
    
            </div>
            <div className="box">
                <div className="price"><span>$</span>10<span>Month</span></div>
                <h3>Standard</h3>
                <ul>
                    <li>100 MB Disk Space</li>
                    <li>2 Subdomains</li>
                    <li>5 Email Accounts </li>
                    <li>Email support</li>
                </ul>
                <a href="#" className="btn">Select Plan</a>
    
            </div>
            <div className="box">
                <div className="price"><span>$</span>10<span>Month</span></div>
                <h3>Premium</h3>
                <ul>
                    <li>100 MB Disk Space</li>
                    <li>2 Subdomains</li>
                    <li>5 Email Accounts </li>
                    <li>Email support</li>
                </ul>
                <a href="#" className="btn">Select Plan</a>
    
            </div>

        </div>
    </section>
    {/* <!-- price section ends here--> */}
    {/* <!--Contact section starts here--> */}
    <section className="contact" id="contact">
        <h1 className="heading">Get in touch</h1>
        <form action="">
            <div className="inputBox">
                <input type="text" required/>
                <label>Name</label>
            </div>
            <div className="inputBox">
                <input type="email" required/>
                <label>Email</label>
            </div>
            <div className="inputBox">
                <input type="number" required/>
                <label>Number</label>
            </div>
            <div className="inputBox">
                <textarea required name="" id="" cols="30" rows="10"></textarea>
                <label>Message</label>
            </div>
            <input type="submit" className="btn" value="send message"/>
    
        </form>
    </section>
    {/* <!--Contact sectio Ends here-->
    <!--Footer section starts here--> */}
    <section className="footer" id="footer">
        <div className="share">
            <a href="#" className="fab fa-facebook-f"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-linkedin"></a>

        </div>
        <h1 className="credit">Created By <span>Mr. Abhishek M K</span>|All rights reserved</h1>
    </section>
    {/* <!--Footer section ends here--> */}

</section> 
{/* <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>
<script>
var swiper  = new Swiper(".image-slider",{
    effect:'coverflow',
    grabCursor: true,
    centerSlides:true,
    slidesPerView:"auto",
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:2,
        slideShadows:true,
    },
    loop:true,
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    }
})
    let menu = document.querySelector('#menu-bar');
    let navbar = document.querySelector(".navbar");
    menu.addEventListener('click',()=>{
        menu.classNameList.toggle('fa-times');
        navbar.classNameList.toggle("nav-toggle")
    })

window.onscroll = () =>{
    menu.classNameList.remove("fa-times")
    navbar.classNameList.remove("nav-toggle")
} */}
{/* </script> */}

    </div>

    </>
  )
}
