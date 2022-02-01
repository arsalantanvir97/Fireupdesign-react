import React, { useEffect } from "react";

const PrivacyPolicy = () => {
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
                <img
                  src="images/ecommerce-banner.jpg"
                  className="img-fluid hero-banner"
                  alt=""
                />
              </div>
              <div className="col-lg-4">
                <div className="hero__wrap">
                  <div className="overflow-hidden mb-3">
                    <h1 className="hero-h1">Privacy Policy</h1>
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
                  This privacy policy (“Policy”) describes how Fire up Design in
                  London (“Company,” “we,” and “our”) processes, collects, uses
                  and shares personal data when using this website
                  http://fireupdesign.com (the “Website”). Please read the
                  following information carefully to understand our practices
                  regarding your personal data and how we will process data.
                </p>
                <h4 className="heading-4">Purposes of Processing</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  <strong>What is personal data?</strong>
                  <br />
                  We collect information about you in a range of forms,
                  including personal data. As used in this Policy, “personal
                  data” is as defined in the General Data Protection Regulation,
                  this includes any information which, either alone or in
                  combination with other information we process about you,
                  identifies you as an individual, including, for example, your
                  name, postal address, email address and telephone number.
                </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  <strong>Why do we need your personal data?</strong>
                  <br />
                  We will only process your personal data in accordance with
                  applicable data protection and privacy laws. We need certain
                  personal data in order to provide you with access to the
                  website. If you registered with us, you will have been asked
                  to tick to agree to provide this information in order to
                  access our services, purchase our products, or view our
                  content. This consent provides us with the legal basis we
                  require under applicable law to process your data. You
                  maintain the right to withdraw such consent at any time. If
                  you do not agree to our use of your personal data in line with
                  this Policy, please do not use our website.{" "}
                </p>
                <h4 className="heading-4">Collecting Your Personal Data</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We collect information about you in the following ways:
                  <br />
                  <strong>Information You Give Us.</strong> This includes:
                  <strong />
                </p>
                <ul>
                  <li>
                    the personal data you provide when you register to use our
                    website, including your name, postal address, email address,
                    telephone number, username, password and demographic
                    information (such as your gender);
                    <strong />
                  </li>
                  <li>
                    the personal data that may be contained in any video,
                    comment or other submission you upload or post to the
                    website;
                  </li>
                  <li>
                    the personal data you provide in connection with our rewards
                    program and other promotions we run on the website;
                    <strong />
                  </li>
                  <li>
                    the personal data you provide when you report a problem with
                    our website or when we provide you with customer support;{" "}
                    <strong />
                  </li>
                  <li>
                    the personal data you provide when you make a purchase
                    thorough our website; and
                    <strong />
                  </li>
                  <li>
                    the personal data you provide when you correspond with us by
                    phone, email or otherwise.
                    <strong />
                  </li>
                </ul>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  <strong>
                    Information from Social Networking Websites. <br />
                  </strong>
                  Our website includes interfaces that allow you to connect with
                  social networking sites (each a “SNS”). If you connect to a
                  SNS through our website, you authorize us to access, use and
                  store the information that you agreed the SNS could provide to
                  us based on your settings on that SNS. We will access, use and
                  store that information in accordance with this Policy. You can
                  revoke our access to the information you provide in this way
                  at any time by amending the appropriate settings from within
                  your account settings on the applicable SNS.
                </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  <strong>Information Automatically Collected.</strong> <br />
                  We automatically log information about you and your computer
                  or mobile device when you access our website. For example,
                  when visiting our website, we log your computer or mobile
                  device operating system name and version, manufacturer and
                  model, browser type, browser language, screen resolution, the
                  website you visited before browsing to our website, pages you
                  viewed, how long you spent on a page, access times and
                  information about your use of and actions on our website. We
                  collect this information about you using cookies.
                </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  <strong>Automated Decision Making and Profiling. </strong>
                  <br />
                  We do not use your personal data for the purposes of automated
                  decision-making. However, we may do so in order to fulfill
                  obligations imposed by law, in which case we will inform you
                  of any such processing and provide you with an opportunity to
                  object.
                </p>
                <h4 className="heading-4">Cookies</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  <strong>What are cookies?</strong>
                  <br />
                  We may collect information using “cookies.” Cookies are small
                  data files stored on the hard drive of your computer or mobile
                  device by a website. We may use both session cookies (which
                  expire once you close your web browser) and persistent cookies
                  (which stay on your computer or mobile device until you delete
                  them) to provide you with a more personal and interactive
                  experience on our website.
                </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We use two broad categories of cookies: (1) first party
                  cookies, served directly by us to your computer or mobile
                  device, which are used only by us to recognize your computer
                  or mobile device when it revisits our website; and (2) third
                  party cookies, which are served by service providers on our
                  website, and can be used by such service providers to
                  recognize your computer or mobile device when it visits other
                  websites.
                  <br />
                  <br />
                  <strong>Cookies we use</strong>
                  <br />
                  Our website uses the following types of cookies for the
                  purposes set out below:
                </p>
                <div className="table-responsive">
                  <table
                    border={1}
                    cellSpacing={0}
                    cellPadding={10}
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td width={145} valign="top">
                          <strong>Type of cookie</strong>
                        </td>
                        <td width={323} valign="top">
                          <strong>Purpose </strong>
                        </td>
                      </tr>
                      <tr>
                        <td width={145} valign="top">
                          <em>Essential Cookies </em>
                        </td>
                        <td width={323} valign="top">
                          <p className="body-text-16 text-justify font-weight-normal mb-0">
                            These cookies are essential to provide you with
                            services available through our website and to enable
                            you to use some of its features. For example, they
                            allow you to log in to secure areas of our website
                            and help the content of the pages you request load
                            quickly.<strong> </strong>Without these cookies, the
                            services that you have asked for cannot be provided,
                            and we only use these cookies to provide you with
                            those services.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145} valign="top">
                          <p>
                            <em>Functionality Cookies</em>
                          </p>
                        </td>
                        <td width={323} valign="top">
                          <p className="mb-0">
                            These cookies allow our website to remember choices
                            you make when you use our website, such as
                            remembering your language preferences, remembering
                            your login details and remembering the changes you
                            make to other parts of our website which you can
                            customize. The purpose of these cookies is to
                            provide you with a more personal experience and to
                            avoid you having to re-enter your preferences every
                            time you visit our website.{" "}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145} valign="top">
                          <p>
                            <em>Analytics and Performance Cookies</em>
                          </p>
                        </td>
                        <td width={323} valign="top">
                          <p>
                            These cookies are used to collect information about
                            traffic to our website and how users use our
                            website. The information gathered does not identify
                            any individual visitor. It includes the number of
                            visitors to our website, the websites that referred
                            them to our website, the pages they visited on our
                            website, what time of day they visited our website,
                            whether they have visited our website before, and
                            other similar information. We use this information
                            to help operate our website more efficiently, to
                            gather broad demographic information and to monitor
                            the level of activity on our website.
                          </p>
                          <p>
                            We use Google Analytics for this purpose. Google
                            Analytics uses its own cookies. It is only used to
                            improve how our website works. You can find out more
                            information about Google Analytics cookies here:{" "}
                            <a href="https://developers.google.com/analytics/resources/concepts/gaConceptsCookies">
                              https://developers.google.com/analytics/resources/concepts/gaConceptsCookies
                            </a>
                          </p>
                          <p>
                            You can find out more about how Google protects your
                            data here:{" "}
                            <a href="https://policies.google.com/privacy">
                              https://policies.google.com/privacy
                            </a>
                            .
                          </p>
                          <p>
                            You can prevent the use of Google Analytics relating
                            to your use of our website by downloading and
                            installing the browser plugin available via this
                            link:{" "}
                            <a href="http://tools.google.com/dlpage/gaoptout?hl=en-GB">
                              http://tools.google.com/dlpage/gaoptout?hl=en-GB
                            </a>
                            <br />
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145} valign="top">
                          <p>
                            <em>Targeted and advertising cookies</em>
                          </p>
                        </td>
                        <td width={323} valign="top">
                          <p>
                            These cookies track your browsing habits to enable
                            us to show advertising which is more likely to be of
                            interest to you. These cookies use information about
                            your browsing history to group you with other users
                            who have similar interests. Based on that
                            information, and with our permission, third party
                            advertisers can place cookies to enable them to show
                            adverts which we think will be relevant to your
                            interests while you are on third party websites.
                          </p>
                          <p>
                            You can disable cookies which remember your browsing
                            habits and target advertising at you by visiting{" "}
                            <a href="http://www.youronlinechoices.com/uk/your-ad-choices">
                              http://www.youronlinechoices.com/uk/your-ad-choices
                            </a>
                            . If you choose to remove targeted or advertising
                            cookies, you will still see adverts but they may not
                            be relevant to you. Even if you do choose to remove
                            cookies by the companies listed at the above link,
                            not all companies that serve online behavioral
                            advertising are included in this list, and so you
                            may still receive some cookies and tailored adverts
                            from companies that are not listed.
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td width={145} height={63} valign="top">
                          <p>
                            <em>Social Media Cookies</em>
                          </p>
                        </td>
                        <td width={323} valign="top">
                          <p>
                            These cookies are used when you share information
                            using a social media sharing button or “like” button
                            on our website or you link your account or engage
                            with our content on or through a social networking
                            website such as Facebook, Twitter or Google+. The
                            social network will record that you have done this.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="body-text-16 text-justify font-weight-normal mb-3 mt-3">
                  <strong>Disabling cookies</strong>
                  <br />
                  You can typically remove or reject cookies via your browser
                  settings. In order to do this, follow the instructions
                  provided by your browser (usually located within the
                  “settings,” “help” “tools” or “edit” facility). Many browsers
                  are set to accept cookies until you change your settings.
                </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  {" "}
                  If you do not accept our cookies, you may experience some
                  inconvenience in your use of our website. For example, we may
                  not be able to recognize your computer or mobile device and
                  you may need to log in every time you visit our website.
                  <strong />
                </p>
                <h4 className="heading-4">Advertising</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We may use other companies to serve third-party advertisements
                  when you visit and use the website. These companies may
                  collect and use click stream information, browser type, time
                  and date, subject of advertisements clicked or scrolled over
                  during your visits to the website and other websites in order
                  to provide advertisements about goods and services likely to
                  be of interest to you. These companies typically use tracking
                  technologies to collect this information. Other companies' use
                  of their tracking technologies is subject to their own privacy
                  policies.
                </p>
                <ul>
                  <li>
                    <strong>Using Your Personal Data</strong>
                  </li>
                </ul>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We may use your personal data as follows:
                </p>
                <ul>
                  <li>
                    to operate, maintain, and improve our website, products, and
                    services;
                  </li>
                  <li>
                    to manage your account, including to communicate with you
                    regarding your account, if you have an account on our
                    website;
                  </li>
                  <li>
                    to operate and administer our rewards program and other
                    promotions you participate in on our website;
                  </li>
                  <li>
                    to respond to your comments and questions and to provide
                    customer service;
                  </li>
                  <li>
                    to send information including technical notices, updates,
                    security alerts, and support and administrative messages;
                  </li>
                  <li>
                    with your consent, to send you marketing e-mails about
                    upcoming promotions, and other news, including information
                    about products and services offered by us and our
                    affiliates. You may opt-out of receiving such information at
                    any time: such marketing emails tell you how to “opt-out.”
                    Please note, even if you opt out of receiving marketing
                    emails, we may still send you non-marketing emails.
                    Non-marketing emails include emails about your account with
                    us (if you have one) and our business dealings with you;
                  </li>
                  <li>to process payments you make via our website;</li>
                  <li>
                    as we believe necessary or appropriate (a) to comply with
                    applicable laws; (b) to comply with lawful requests and
                    legal process, including to respond to requests from public
                    and government authorities; (c) to enforce our Policy; and
                    (d) to protect our rights, privacy, safety or property,
                    and/or that of you or others;
                  </li>
                  <li>for analysis and study services; and</li>
                  <li>
                    as described in the “Sharing of your Personal Data” section
                    below.
                  </li>
                </ul>
                <h4 className="heading-4">Sharing Your Personal Data</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We may share your personal data as follows:
                </p>
                <ul>
                  <li>
                    <strong>Third Parties Designated by You.</strong> We may
                    share your personal data with third parties where you have
                    provided your consent to do so.
                  </li>
                  <li>
                    <strong>Our</strong>{" "}
                    <strong>Third Party Service Providers</strong>. We may share
                    your personal data with our third party service providers
                    who provide services such as data analysis, payment
                    processing, information technology and related
                    infrastructure provision, customer service, email delivery,
                    auditing and other similar services.
                  </li>
                  <li>
                    <strong>Third Party Sites </strong>
                  </li>
                </ul>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  Our website may contain links to third party websites and
                  features.<strong> </strong>This Policy does not cover the
                  privacy practices of such third parties.<strong> </strong>
                  These third parties have their own privacy policies and we do
                  not accept any responsibility or liability for their websites,
                  features or policies. Please read their privacy policies
                  before you submit any data to them.
                </p>
                <h4 className="heading-4">User Generated Content</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  You may share personal data with us when you submit user
                  generated content to our website, including via our rewards
                  program, forums, message boards and blogs on our website.
                  Please note that any information you post or disclose on our
                  website will become public information, and will be available
                  to other users of our website and to the general public. We
                  urge you to be very careful when deciding to disclose your
                  personal data, or any other information, on our website. Such
                  personal data and other information will not be private or
                  confidential once it is published on our website.
                </p>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  If you provide feedback to us, we may use and disclose such
                  feedback on our website, provided we do not associate such
                  feedback with your personal data. If you have provided your
                  consent to do so, we may post your first and last name along
                  with your feedback on our website. We will collect any
                  information contained in such feedback and will treat the
                  personal data in it in accordance with this Policy.
                </p>
                <h4 className="heading-4">International Data Transfer</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  Your information, including personal data that we collect from
                  you, may be transferred to, stored at and processed by us
                  outside the country in which you reside, where data protection
                  and privacy regulations may not offer the same level of
                  protection as in other parts of the world. By accepting this
                  Policy, you agree to this transfer, storing or processing. We
                  will take all steps reasonably necessary to ensure that your
                  data is treated securely and in accordance with this Policy.
                </p>
                <h4 className="heading-4">Security</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We seek to use reasonable organizational, technical and
                  administrative measures to protect personal data within our
                  organization. Unfortunately, no transmission or storage system
                  can be guaranteed to be completely secure, and transmission of
                  information via the Internet is not completely secure. If you
                  have reason to believe that your interaction with us is no
                  longer secure (for example, if you feel that the security of
                  any account you might have with us has been compromised),
                  please immediately notify us of the problem by contacting us.
                </p>
                <h4 className="heading-4">Retention</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We will only retain your personal data as long reasonably
                  required for you to use the website until you close your
                  account/cancel your subscription unless a longer retention
                  period is required or permitted by law (for example for
                  regulatory purposes).{" "}
                </p>
                <h4 className="heading-4">Our Policy on Children</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  Our website is/are not directed to children under 16.
                  <strong> </strong>If a parent or guardian becomes aware that
                  his or her child has provided us with information without
                  their consent, he or she should contact us. We will delete
                  such information from our files as soon as reasonably
                  practicable.
                </p>
                <strong>Your Rights</strong>
                <ul>
                  <li>
                    <strong>Opt-out. </strong>You may contact us anytime to
                    opt-out of: (i) direct marketing communications; (ii)
                    automated decision-making and/or profiling; (iii) our
                    collection of sensitive personal data; (iv) any new
                    processing of your personal data that we may carry out
                    beyond the original purpose; or (v) the transfer of your
                    personal data outside the EEA. Please note that your use of
                    some of the website may be ineffective upon opt-out.{" "}
                    <strong />
                  </li>
                  <li>
                    <strong>Access. </strong>You may access the information we
                    hold about you at any time via your profile/account or by
                    contacting us directly. <strong />
                  </li>
                  <li>
                    <strong>Amend. </strong>You can also contact us to update or
                    correct any inaccuracies in your personal data.
                  </li>
                  <li>
                    <strong>Move. </strong>Your personal data is portable – i.e.
                    you to have the flexibility to move your data to other
                    service providers as you wish.{" "}
                  </li>
                  <li>
                    <strong>Erase and forget. </strong>In certain situations,
                    for example when the information we hold about you is no
                    longer relevant or is incorrect, you can request that we
                    erase your data.{" "}
                  </li>
                </ul>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  If you wish to exercise any of these rights, please contact
                  us. In your request, please make clear: (i){" "}
                  <strong>what</strong> personal data is concerned; and (ii){" "}
                  <strong>which of the above rights</strong> you would like to
                  enforce. For your protection, we may only implement requests
                  with respect to the personal data associated with the
                  particular email address that you use to send us your request,
                  and we may need to verify your identity before implementing
                  your request. We will try to comply with your request as soon
                  as reasonably practicable and in any event, within one month
                  of your request. Please note that we may need to retain
                  certain information for recordkeeping purposes and/or to
                  complete any transactions that you began prior to requesting
                  such change or deletion.
                </p>
                <h4 className="heading-4">Complaints</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We are committed to resolve any complaints about our
                  collection or use of your personal data. If you would like to
                  make a complaint regarding this Policy or our practices in
                  relation to your personal data, please contact us through the
                  information listed on our website. We will reply to your
                  complaint as soon as we can and in any event, within 30 days.
                  We hope to resolve any complaint brought to our attention,
                  however if you feel that your complaint has not been
                  adequately resolved, you reserve the right to contact your
                  local data protection supervisory authority
                </p>
                <h4 className="heading-4">Contact Information</h4>
                <p className="body-text-16 text-justify font-weight-normal mb-3">
                  We welcome your comments or questions about this Policy. You
                  may contact us in writing or through our website
                  <strong />.
                </p>
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
                    <p className="body-text-18">
                      Get in touch and lets get those creative juices flowing
                    </p>
                  </div>
                  <div className="col-lg-8 mb-4 mb-lg-0">
                    <form action="#" className="contact_form">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input
                            type="text"
                            className="fireup-input"
                            placeholder="Full Name"
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <input
                            type="email"
                            className="fireup-input"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <input
                            type="number"
                            className="fireup-input"
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="col-md-6 mb-4">
                          <input
                            type="text"
                            className="fireup-input"
                            placeholder="Select Service"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 mb-4">
                          <textarea
                            name
                            id
                            className="fireup-textarea"
                            placeholder="Description Of Project"
                            cols={30}
                            rows={6}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12 text-center">
                          <button type="submit" className="form-submit">
                            Submit Request{" "}
                            <i className="fas fa-chevron-right ml-2" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4">
                    <ul className="connect">
                      <li>
                        <a href="mailto:Hello@fireupdesign.com">
                          hello@fireupdesign.com
                        </a>
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
                            <a
                              href="https://twitter.com/fireupdesign?s=08"
                              target="_blank"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com/fireupdesign/"
                              target="_blank"
                            >
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://instagram.com/fireupdesign?igshid=198v0grqib17l"
                              target="_blank"
                            >
                              <i className="fab fa-instagram" />
                            </a>
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
  );
};

export default PrivacyPolicy;
