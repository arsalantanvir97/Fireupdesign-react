import React, { Fragment, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './Screens/Routing/logo.png'
// Redux
import ScrollToTop from './Components/ScrollToTop'
import $ from 'jquery'

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const Routes = lazy(() => import("./Screens/Routing/Routes"))
const App = () => {


  useEffect(() => {
   
    var ddTogglerpseudo = window.CSSRulePlugin.getRule(
      "button.dropdown-toggler:after"
    );
    let serviceMenu = document.querySelector(".services_dropDown");
    let sManimation = window?.gsap.timeline();
    let sManimation2 = window?.gsap.timeline();

  

    sManimation.to(serviceMenu, {
      opacity: 1,
      y: 0,
    });
    sManimation2.to(ddTogglerpseudo, 0.5, {
      cssRule: {
        rotate: 0,
      },
    });


   
    if (window.innerWidth < 1000) {
      document.addEventListener("click", function (e) {
        if (
          e.target.classList.contains("serviceCard") ||
          e.target.classList.contains("dropdown-toggler")
        ) {
          console.log(e.target.classList);
          sManimation.reversed(!sManimation.reversed());
          sManimation2.reversed(!sManimation2.reversed());
        } else {
          sManimation.reverse();
          sManimation2.reverse();
        }
      });
    }

 
  }, [window?.gsap, window?.CSSRulePlugin]);

 
  


  return (
    <Fragment>
        <BrowserRouter >
          <ScrollToTop />
          <Suspense
            fallback={
              <>
                {" "}
                <div
                  style={{
                    width: "100vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={logo}
                  />
                </div>
               
              </>
            }
          >
            <Fragment>
              <Header />
              <Switch>

                <Route component={Routes} />
              </Switch>
            </Fragment>
            <Footer />
          </Suspense>
        </BrowserRouter>
    </Fragment>
  );
};





export default App;
