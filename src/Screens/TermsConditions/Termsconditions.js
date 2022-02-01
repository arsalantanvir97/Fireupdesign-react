import React,{useEffect} from 'react'

const Termsconditions = () => {
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
                <img src="images/ecommerce-banner.jpg" className="img-fluid hero-banner" alt="" />
              </div>
              <div className="col-lg-4">
                <div className="hero__wrap">
                  <div className="overflow-hidden mb-3">
                    <h1 className="hero-h1">
                      Terms Condition
                    </h1>
                  </div>
                  {/* <p class="hero-subline">From browsing to checkout in minutes </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-body" id="our-story">
          <div className="custom-container-wrap pt-0 pb-5">
            <div className="row align-items-center ">
              <div className="col-12 col-lg-10 col-xl-8 m-auto">
                <h4 className="heading-4">Introduction</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The Terms and Conditions (“Terms”) describe how Fire up Design in London (“Company,” “we,” and “our”) regulates your use of this website http://fireupdesign.com (the “Website”). Please read the following information carefully to understand our practices regarding your use of the website. The Company may change the Terms at any time. The Company may inform you of the changes to the Terms using the available means of communication. The Company recommends you to check the website frequently to see the actual version of the Terms and their previous versions.
                </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  If you represent a legal entity, you certify that you entitled by such a legal entity to conclude the Terms as the legal entity you represent.
                </p>
                <h4 className="heading-4">Privacy Policy</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  Our Privacy Policy is available on a separate page. Our Privacy Policy explains to you how we process information about you. You shall understand that through your use of the website you acknowledge the processing of this information shall be undertaken in accordance with the Privacy Policy.</p>
                <h4 className="heading-4">Your Account</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  When using the website, you shall be responsible for ensuring the confidentiality of your account, password and other credentials and for secure access to your device. You shall not assign your account to anyone. The Company is not responsible for unauthorized access to your account that results from misappropriation or theft of your account. The Company may refuse or cancel service, terminate your account, and remove or edit content.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The Company does not knowingly collect personal data from persons under the age of 16 (sixteen). If you are under 16 (sixteen) years old, you may not use the website and may not enter into the Terms under any circumstances.</p>
                <h4 className="heading-4">Services</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The website allows you to use Services available on the website. You shall not use the services for the illegal aims.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We may, at our sole discretion, set fees for using the website for you. All prices are published separately on relevant pages on the website. We may, at our sole discretion, at any time change any fees.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We may use certified payment systems, which also may have their commissions. Such commissions may be implied on you when you choose a particular payment system. Detailed information about commissions of such payment systems may be found on their websites.</p>
                <h4 className="heading-4">Third Party Services</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The website may include links to other websites, applications, and platforms (hereinafter the "Linked Sites").</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The Company does not control the Linked Sites, and shall not be responsible for the content and other materials of the Linked Sites. The Company makes these links available to you for providing the functionality or services on the website.</p>
                <h4 className="heading-4">Prohibited Uses and Intellectual Property</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The Company grants you a non-transferable, non-exclusive, revocable license to access and use the website from one device in accordance with the Terms. You shall not use the website for unlawful or prohibited purpose. You may not use the website in a way that may disable, damage, or interfere in the website.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  All content present on the website includes text, code, graphics, logos, images, compilation, software used on the website (hereinafter and hereinbefore the "Content"). The Content is the property of the Company or its contractors and protected by intellectual property laws that protect such rights. You agree to use all copyright and other proprietary notices or restrictions contained in the Content and you are prohibited from changing the Content.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  You may not publish, transmit, modify, reverse engineer, participate in the transfer, or create and sell derivative works, or in any way use any of the Content. Your enjoyment of the website shall not entitle you to make any illegal and disallowed use of the Content, and in particular you shall not change proprietary rights or notices in the Content. You shall use the Content only for your personal and non-commercial use. The Company does not grant you any licenses to the intellectual property of the Company.</p>
                <h4 className="heading-4">The Company Materials</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  By posting, uploading, inputting, providing or submitting your Content you are granting the Company to use your Content in connection with the operation of Company's business including, but not limited to, the rights to transmit, publicly display, distribute, publicly perform, copy, reproduce, and translate your Content; and to publish your name in connection with your Content.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  No compensation shall be paid with regard to the use of your Content. The Company shall have no obligation to publish or enjoy any Content you may send us and may remove your Content at any time.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">By posting, uploading, inputting, providing or submitting your Content you warrant and represent that you own all of the rights to your Content.</p>
                <h4 className="heading-4">Disclaimer of Certain Liabilities</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The information available via the website may include typographical errors or inaccuracies. The Company shall not be liable for these inaccuracies and errors.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The Company makes no representations about the availability, accuracy, reliability, suitability, and timeliness of the Content contained on and services available on the website. To the maximum extent allowed by the applicable law, all such Content and services are provided on the "as is" basis. The Company disclaims all warranties and conditions regarding this Content and services, including warranties and provisions of merchantability, fitness for a certain purpose.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  To the maximum extent permitted by the applicable law, in no event shall the Company be liable for any direct, indirect, incidental, consequential, special, punitive damages including, but not limited to, damages for loss of enjoyment, data or profits, in the connection with the enjoyment or execution of the website in the context of the inability or delay to enjoy the website or its services, or for any Content of the website, or otherwise arising out of the enjoyment of the website, based on contract and non-contract liability or other reason.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  If the exclusion or limitation of liability for damages, whether consequential or incidental, are prohibited in a particular case, the exclusion or limitation of liability shall not apply to you.</p>
                <h4 className="heading-4">Indemnification</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  You agree to indemnify, defend and hold harmless the Company, its managers, directors, employees, agents, and third parties, for any costs, losses, expenses (including attorneys' fees), liabilities regarding or arising out of your enjoyment of or inability to enjoy the website or its services and Company's services and products, your violation of the Terms or your violation of any rights of third parties, or your violation of the applicable law. The Company may assume the exclusive defense and you shall cooperate with the Company in asserting any available defenses.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  Termination and Access Restriction
                  The Company may terminate your access and account to the website and its related services or any part at any time, without notice, in case of your violation of the Terms.</p>
                <h4 className="heading-4">Miscellaneous</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The governing law of the Terms shall be the substantive laws of the country where the Company is set up, except the conflict of laws rules. You shall not use the website in jurisdictions that do not give effect to all provisions of the Terms.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  No joint venture, partnership, employment, or agency relationship shall be implied between you and the Company as a result of the Terms or use of the website.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  Nothing in the Terms shall be a derogation of the Company's right to comply with governmental, court, police, and law enforcement requests or requirements regarding your enjoyment of the website.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  If any part of the Terms is determined to be void or unenforceable in accordance with applicable law then the void or unenforceable clauses will be deemed superseded by valid and enforceable clauses shall be similar to the original version of the Terms and other parts and sections of the Terms shall be applicable to you and the Company.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The Terms constitute the entire agreement between you and the Company regarding the enjoyment of the website and the Terms supersede all prior or communications and offers, whether electronic, oral or written, between you and the Company.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  The Company and its affiliates shall not be liable for a failure or delay to fulfill its obligations where the failure or delay results from any cause beyond Company's reasonable control, including technical failures, natural disasters, blockages, embargoes, riots, acts, regulation, legislation, or orders of government, terroristic acts, war, or any other force outside of Company's control.</p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  In case of controversies, demands, claims, disputes, or causes of action between the Company and you relating to the website or other related issues, or the Terms, you and the Company agree to attempt to resolve such controversies, demands, claims, disputes, or causes of action by good faith negotiation, and in case of failure of such negotiation, exclusively through the courts of the country where the Company is set up.</p>
                <h4 className="heading-4">Complaints</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We are committed to resolve any complaints about our collection or use of your personal data. If you would like to make a complaint regarding this Terms or our practices in relation to your personal data, please contact us through our website. We will reply to your complaint as soon as we can and in any event, within 30 days. We hope to resolve any complaint brought to our attention, however if you feel that your complaint has not been adequately resolved, you reserve the right to contact your local data protection supervisory authority.</p>
                <h4 className="heading-4">Contact Information</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We welcome your comments or questions about our Terms. You may contact us through the contact information available on our website.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="lets-connect" className="content-body pb-extra pt-4">
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

export default Termsconditions
