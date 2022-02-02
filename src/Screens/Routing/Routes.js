import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";


const NotFound = lazy(() => import("../../Components/NotFound"));

const Home = lazy(() => import("../../Screens/Home"));
const WebDesign = lazy(() => import("../../Screens/WebDesign"));

const Contact = lazy(() => import("../../Screens/Contact"));
const GraphicDesign = lazy(() => import("../../Screens/GraphicDesign/index"));
const SearchEngineOptimzation = lazy(() => import("../../Screens/SearchEngineOptimzation/index"));
const OurStory = lazy(() => import("../../Screens/OurStory/OurStory"));
const Blog = lazy(() => import("../../Screens/Blog/index"));
const PrivacyPolicy = lazy(() => import("../../Screens/PrivacyPolicy/PrivacyPolicy"));
const Termsconditions = lazy(() => import("../../Screens/TermsConditions/Termsconditions"));
const AppDevelopment = lazy(() => import("../../Screens/AppDevelopment/index"));
const Chapters = lazy(() => import("../../Screens/Chapters/OurChapters"));
const OurCollection = lazy(() => import("../../Screens/OurCollection/index"));

const PortfolioDetail = lazy(() => import("../../Screens/Home/PortfolioDetail"));

const SocialMedia = lazy(() => import("../../Screens/SocialMediaMarketing"));

const Routes = () => {
  return (
    <section>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/web-design" component={WebDesign} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/graphic-design" component={GraphicDesign} />
        <Route exact path="/search-engine-optimisation" component={SearchEngineOptimzation} />
        <Route exact path="/our-story" component={OurStory} />
        <Route exact path="/mobile-app-development" component={AppDevelopment} />
        <Route exact path="/our-chapters" component={Chapters} />
        <Route exact path="/our-collections" component={OurCollection} />
        <Route exact path="/social-media-marketing" component={SocialMedia} />

        <Route exact path="/blogs" component={Blog} />
        <Route exact path="/privacy-policy" component={PrivacyPolicy} />
        <Route exact path="/terms-conditions" component={Termsconditions} />
        <Route exact path="/portfolio/:id" component={PortfolioDetail} />

        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
