import React,{useEffect} from 'react'

const OurChapters = () => {

    useEffect(() => {
        let fadein = document.getElementsByClassName("fade-in");
        let riseUp = document.querySelectorAll(".rise-up");
    
        window?.gsap.to(".hero-h1", {
          scrollTrigger: ".hero__wrap", // start the animation when ".box" enters the viewport (once)
          y: 0,
          delay: 1,
          duration: 1.5,
          stagger: 1,
        });
        window?.gsap.to(".hero-subline", {
          opacity: 1,
          delay: 2.5,
          duration: 1.5,
        });
        window?.gsap.from(".hero-link", {
          opacity: 0,
          delay: 3,
          duration: 1.5,
        });
        window?.gsap.from(".hero-banner", {
          opacity: 0,
          delay: 0.5,
          duration: 1,
        });
      }, [window?.gsap]);
    
    return (
        <div>
            <div>
        <section className="hero">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-lg-8">
                <img src="images/our-chapterbanner.jpg" className="img-fluid hero-banner" alt="" />
              </div>
              <div className="col-lg-4">
                <div className="hero__wrap">
                  <div className="overflow-hidden mb-3">
                    <h1 className="hero-h1">
                      Our Chapters
                    </h1>
                  </div>
                  <p className="hero-subline">Your story, perfectly told and illustrated</p>
                  {/* <p class="hero-subline">When you partner with Fire Up Design you are guaranteed affordable
                        web design and a unique, user-friendly website that allows your business to shine.</p>
                    <a href="javascript:void(0)" class="orange-link hero-link">Learn More <i class="fas fa-chevron-right ml-2"></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section class="content-body" id="our-story">
    <div class="custom-container-wrap">
        <div class="row align-items-center ">
            <div class="col-12 col-lg-10 col-xl-8 m-auto text-center">
                <h3 class="heading-3">
                    What We Do
                </h3>
                <p class="body-text-16 text-justify font-weight-light mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p class="body-text-16 text-justify font-weight-light">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
        </div>
    </div>
</section> */}
        <section id="our-chapter" className="content-body pb-1 pb-extra">
          <div className="custom-container-wrap">
            <div className="row fade-in">
              <div className="col-12 col-lg-10 col-xl-8 m-auto text-center">
                <h3 className="heading-3">
                  Our Chapters
                </h3>
                <p className="body-text-18 font-weight-normal">The Fired Up Design storybook is a collection of perfectly crafted chapters that take your customers on a new adventure. From head turning designs to next level website development, our services will help you reach a whole new audience who’ll keep coming back time and time again.</p>
                {/* <p class="body-text-18">"Imagination is the only weapon in the war with reality"</p>
                <p class="body-text-16">- Lewis Carroll, ‘Alice in Wonderland’</p> */}
              </div>
            </div>
            <div className="row margin-more align-items-center fade-in">
              <div className="col-lg-6 mb-3 mb-lg-0 switch-order">
                <div className="position-relative bg-frame bg-frame">
                  <img src="images/chapter-1.png" className="img-fluid w-100 h-100 " alt="" />
                  <p className="picture-tag">Create</p>
                  <img src="images/frame-wood.png" className="frame" alt="" />
                </div>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-0 ">
                <h4 className="heading-4">Web design &amp; development</h4>
                <div className="tags-parent">
                  <span className="tag">Wordpress</span>
                  <span className="tag">eCommerce</span>
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                </div>
                <p className="fw-body-text">We build, create and maintain websites that are easy on the eye and simple to navigate. Our website design and development services are all about giving your customers a fully functional, secure and user friendly experience that adds real value to your growing business.</p>
                <a href="javascript:void(0)" className="orange-link mt-3">Learn More <i className="fas fa-chevron-right ml-2" /></a>
              </div>
            </div>
            <div className="row margin-more align-items-center fade-in">
              <div className="col-lg-6 mb-3 mb-lg-0 ">
                <h4 className="heading-4">Search Engine Optimization</h4>
                <div className="tags-parent">
                  <span className="tag">Seo</span>
                  <span className="tag">Organic</span>
                  <span className="tag">Paid</span>
                  <span className="tag">Analytics</span>
                </div>
                <p className="fw-body-text">Getting found online is tricky in an increasingly crowded marketplace. We specialise in creating and delivering highly effective SEO strategies that will get your business ranking highly on Google and other popular search engines.</p>
                {/* <ul class="commitments mt-3">
                    <li>You have 0.05 seconds to make a good impression and keep a potential customer interested.</li>
                    <li>Your company's credibility is judged based on your web design by 75% of your potential customer base.</li>
                    <li>A business with a poorly designed "mobile-friendly" website won't get recommended by 57% of internet users.</li>
                </ul> */}
                <a href="search-engine-optimisation.php" className="orange-link mt-3">Learn More <i className="fas fa-chevron-right ml-2" /></a>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-0 switch-order">
                <div className="position-relative bg-frame bg-frame">
                  <img src="images/seo-img.jpg" className="img-fluid w-100 h-100 " alt="" />
                  <p className="picture-tag">EXPAND</p>
                  <img src="images/frame-wood.png" className="frame" alt="" />
                </div>
              </div>
            </div>
            <div className="row margin-more align-items-center fade-in">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <div className="position-relative bg-frame">
                  <img src="images/chapter-2.png" className="img-fluid w-100 h-100" alt="" />
                  <p className="picture-tag">Imagine</p>
                  <img src="images/frame-wood.png" className="frame" alt="" />
                </div>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-0 px-lg-5 px-3">
                <h4 className="heading-4">Graphic design services</h4>
                <div className="tags-parent">
                  <span className="tag">Branding</span>
                  <span className="tag">Creative</span>
                  <span className="tag">Illustrations</span>
                  <span className="tag">Art</span>
                </div>
                <p className="fw-body-text">Good graphic design is about creating images that people can understand and recognise. Great graphic design is about creating images that are memorable, impactful and ooze quality. It’s often said that a picture paints a thousand words, and that’s exactly what our graphics will do for your brand.</p>
                <a href="javascript:void(0)" className="orange-link mt-3">Learn More <i className="fas fa-chevron-right ml-2" /></a>
              </div>
            </div>
            <div className="row margin-more align-items-center fade-in">
              <div className="col-lg-6 mb-3 mb-lg-0 ">
                <h4 className="heading-4">Mobile app development</h4>
                <div className="tags-parent">
                  <span className="tag">iOS</span>
                  <span className="tag">Android</span>
                  <span className="tag">Hybrid</span>
                  <span className="tag">Ux/Ui</span>
                </div>
                <p className="fw-body-text">These days it seems like there’s an app for everything, which means that your customers will expect one from you, too. We design and develop great looking apps that are functional, easy to use and will add real value to your business.</p>
                <a href="javascript:void(0)" className="orange-link mt-3">Learn More <i className="fas fa-chevron-right ml-2" /></a>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-0 switch-order">
                <div className="position-relative bg-frame">
                  <img src="images/chapter-4.png" className="img-fluid w-100 h-100" alt="" />
                  <p className="picture-tag">Discover</p>
                  <img src="images/frame-wood.png" className="frame" alt="" />
                </div>
              </div>
            </div>
            <div className="row margin-more align-items-center fade-in">
              <div className="col-lg-6 mb-3 mb-lg-0">
                <div className="position-relative bg-frame">
                  <img src="images/chapter-3.png" className="img-fluid w-100 h-100" alt="" />
                  <p className="picture-tag">Adventure</p>
                  <img src="images/frame-wood.png" className="frame" alt="" />
                </div>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-0 px-lg-5 px-3">
                <h4 className="heading-4">Social media marketing (Smm)</h4>
                <div className="tags-parent">
                  <span className="tag">Paid Media</span>
                  <span className="tag">Community</span>
                  <span className="tag">Campaigns</span>
                  <span className="tag">Marketing</span>
                </div>
                <p className="fw-body-text">Engaging with customers in a fast moving digital landscape demands a social media strategy that builds trust and sparks minds. We’ll help you set achievable goals and deliver original, authentic content that’s relevant, on-trend and highly shareable.</p>
                <a href="javascript:void(0)" className="orange-link mt-3">Learn More <i className="fas fa-chevron-right ml-2" /></a>
              </div>
            </div>
            <div className="row margin-more fade-in">
              <div className="col-12 text-center">
                <p className="body-text-18">"When we get to the end of the story you will know more than you do now"</p>
                <p className="body-text-16">- Hans Christian Anderson, ‘The Snow Queen’</p>
              </div>
            </div>
          </div>
        </section>
        {/* <section class="content-body pt-0" id="projects-step">
    <div class="container-fluid p-0">
        <div class="row no-gutters">
            <div class="col-12">
                <img src="images/step-banner.jpg" class="" alt="">
            </div>
        </div>
        <div class="project-steps-wrap custom-container-wrap pb-5 pb-lg-0">
            <div class="row">
                <div class="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                    <div class="media project-steps">
                        <div class="media-left align-self-start mr-4">01</div>
                        <div class="media-body">
                            <h5 class="mt-0"><span class="d-lg-block">Discover</span>Information gathering</h5>
                            <p class="body-text-16 font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                    <div class="media project-steps">
                        <div class="media-left align-self-start mr-4">02</div>
                        <div class="media-body">
                            <h5 class="mt-0"><span class="d-lg-block">Define</span>Strategic brand definition</h5>
                            <p class="body-text-16 font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                    <div class="media project-steps">
                        <div class="media-left align-self-start mr-4">03</div>
                        <div class="media-body">
                            <h5 class="mt-0"><span class="d-lg-block">Design</span>Creative implementation</h5>
                            <p class="body-text-16 font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6 mb-4 mb-lg-5 d-flex">
                    <div class="media project-steps">
                        <div class="media-left align-self-start mr-4">04</div>
                        <div class="media-body">
                            <h5 class="mt-0"><span class="d-lg-block">Delight</span>Roll out and refine</h5>
                            <p class="body-text-16 font-weight-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}
        {/* <section id="client-testimonial" class="client-testimonial">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-10 mx-auto">
                <div class="row fade-in">
                    <div class="col-12 text-center">
                        <h3 class="heading-3">
                            Client feedback
                        </h3>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <div class="client-carousel owl-carousel">
                            <div class="item ru">
                                <div class="card rounded-20 client-card">
                                    <div class="card-content">
                                        <div class="rating mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <blockquote> <strong class="font-italic">Ian and the</strong> guys at Fire Up are a pleasure to work with, created a fantastic website for me and took the hassle out of domain registration and hosting. Will definitely recommend.</blockquote>
                                        <div class="media align-items-stretch pt-2">
                                            <div class="pr-3 text-center avatar-img">
                                                <img src="images/testimonial-pic.jpg" alt="" class="img-fluid">
                                            </div>
                                            <div class="p-2 media-body author">
                                                <h5>Ben Döring</h5>
                                                <h6>A Happy Client</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="card rounded-20 client-card">
                                    <div class="card-content">
                                        <div class="rating mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <blockquote> <strong class="font-italic">Ian and the</strong> guys at Fire Up are a pleasure to work with, created a fantastic website for me and took the hassle out of domain registration and hosting. Will definitely recommend.</blockquote>
                                        <div class="media align-items-stretch pt-2">
                                            <div class="pr-3 text-center avatar-img">
                                                <img src="images/testimonial-pic.jpg" alt="" class="img-fluid">
                                            </div>
                                            <div class="p-2 media-body author">
                                                <h5>Ben Döring</h5>
                                                <h6>A Happy Client</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="card rounded-20 client-card">
                                    <div class="card-content">
                                        <div class="rating mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <blockquote> <strong class="font-italic">Ian and the</strong> guys at Fire Up are a pleasure to work with, created a fantastic website for me and took the hassle out of domain registration and hosting. Will definitely recommend.</blockquote>
                                        <div class="media align-items-stretch pt-2">
                                            <div class="pr-3 text-center avatar-img">
                                                <img src="images/testimonial-pic.jpg" alt="" class="img-fluid">
                                            </div>
                                            <div class="p-2 media-body author">
                                                <h5>Ben Döring</h5>
                                                <h6>A Happy Client</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="card rounded-20 client-card">
                                    <div class="card-content">
                                        <div class="rating mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <blockquote> <strong class="font-italic">Ian and the</strong> guys at Fire Up are a pleasure to work with, created a fantastic website for me and took the hassle out of domain registration and hosting. Will definitely recommend.</blockquote>
                                        <div class="media align-items-stretch pt-2">
                                            <div class="pr-3 text-center avatar-img">
                                                <img src="images/testimonial-pic.jpg" alt="" class="img-fluid">
                                            </div>
                                            <div class="p-2 media-body author">
                                                <h5>Ben Döring</h5>
                                                <h6>A Happy Client</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="card rounded-20 client-card">
                                    <div class="card-content">
                                        <div class="rating mb-3">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <blockquote> <strong class="font-italic">Ian and the</strong> guys at Fire Up are a pleasure to work with, created a fantastic website for me and took the hassle out of domain registration and hosting. Will definitely recommend.</blockquote>
                                        <div class="media align-items-stretch pt-2">
                                            <div class="pr-3 text-center avatar-img">
                                                <img src="images/testimonial-pic.jpg" alt="" class="img-fluid">
                                            </div>
                                            <div class="p-2 media-body author">
                                                <h5>Ben Döring</h5>
                                                <h6>A Happy Client</h6>
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
</section> */}
        <section id="lets-connect" className="content-body pb-extra pt-2">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-11 col-xl-10  mx-auto col-custom">
                <div className="row fade-in">
                  <div className="col-12 text-center mb-5">
                    <h3 className="heading-3">
                      Let’s create your story together
                    </h3>
                    <p className="body-text-18">Get in touch and lets get those creative juices flowing</p>
                  </div>
                  <div className="col-lg-8 mb-4 mb-lg-0">
                    <form action="#" className="contact_form">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input type="text" className="fireup-input" placeholder="Full Name" />
                        </div>
                        <div className="col-md-6 mb-4">
                          <input type="email" className="fireup-input" placeholder="Email Address" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input type="number" className="fireup-input" placeholder="Phone Number" />
                        </div>
                        <div className="col-md-6 mb-4">
                          <input type="text" className="fireup-input" placeholder="Select Service" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4">
                          <textarea name id className="fireup-textarea" placeholder="Description Of Project" cols={30} rows={6} defaultValue={""} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button type="submit" className="form-submit">Submit Request <i className="fas fa-chevron-right ml-2" /></button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <ul className="connect">
                      <li>
                        <a href="mailto:Hello@fireupdesign.com">hello@fireupdesign.com</a>
                      </li>
                      <li>
                        <a href="telto:+447912108120">+44 79 121 08 120</a>
                      </li>
                      <li>
                        <a href="telto:+441276489005">+44 1276 489 005</a>
                      </li>
                      <li>
                        <p className="social-heading">Connect with us</p>
                        <ul className="social">
                          <li>
                            <a href="https://twitter.com/fireupdesign?s=08" target="_blank"><i className="fab fa-twitter" /></a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/fireupdesign/" target="_blank"><i className="fab fa-facebook-f" /></a>
                          </li>
                          <li>
                            <a href="https://instagram.com/fireupdesign?igshid=198v0grqib17l" target="_blank"><i className="fab fa-instagram" /></a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        </div>
    )
}

export default OurChapters
