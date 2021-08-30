import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ChatExp from "./components/chat";
import ChatUser from './components/chatUser';
import { isAdminAuth, userType } from "./config";
import Exprofile from "./containers/Profile";
import TheAboutLayout from "./containers/TheAboutLayout";
import TheBlogLayout from "./containers/TheBlogLayout";
import TheContactLayout from "./containers/TheContactLayout";
import TheExpertsLayout from "./containers/TheExpertsLayout";
import TheFaqLayout from "./containers/TheFaqLayout";
import TheHomeLayout from "./containers/TheHomeLayout";
import TheForgotLayout from "./containers/TheForgotLayout";
import TheResetLayout from "./containers/TheResetLayout";
import OTPLayout from "./containers/OTPLayout";
import "./scss/style.scss";
import Eorg from "./views/experts/Orgnization";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheExpertLayout = React.lazy(() =>
  import("./containers/TheExpertLayout")
);
const TheCustomerLayout = React.lazy(() =>
  import("./containers/TheCustomerLayout")
);

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));
const SignUp = React.lazy(() => import("./views/experts/SignUp"));
const ExpertRegistration = React.lazy(() =>
  import("./ExpertSide/Views/ExpertRegistration")
);
const ExpertLogin = React.lazy(() => import("./views/pages/login/ExpertLogin"));
const Clogin = React.lazy(() => import("./views/customer/Login"));
const Cotplogin = React.lazy(() => import("./views/customer/OTPLoginLayout"));
const CsignUp = React.lazy(() => import("./views/customer/SignUp"));
const Org = React.lazy(() => import("./views/experts/Orgnization"));

class App extends Component {
  render() {
    console.log(isAdminAuth());
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          {isAdminAuth() ? (
            <Switch>
              <Route
                exact
                path="/register"
                name="Register Page"
                render={(props) => <Register {...props} />}
              />
              <Route path="/experts" exact>
                <TheExpertsLayout />
              </Route>
              <Route
                exact
                path="/expert"
                name="Expert Home"
                render={(props) => <TheExpertLayout {...props} />}
              />
              <Route exact path="/exp-chat">
                <ChatExp/>
              </Route>
              <Route exact path="/user-chat">
                <ChatUser/>
              </Route>
              <Route
                path="/expert/registration"
                name="Expert Registration"
                render={(props) => <ExpertRegistration {...props} />}
                exact
              />
              <Route
                exact
                path="/404"
                name="Page 404"
                render={(props) => <Page404 {...props} />}
              />
              <Route
                exact
                path="/500"
                name="Page 500"
                render={(props) => <Page500 {...props} />}
              />

              <Route
                exact
                path="/sign-up"
                name="Sign Up"
                render={(props) => <SignUp {...props} />}
              />
              
              <Route
                exact
                path="/expert-org"
                render={(props) => <Org {...props} />}
              />
              <Route exact path="/home">
                <TheHomeLayout />
              </Route>
              <Route
                path="/"
                name="Home"
                render={
                  userType === "expert"
                    ? (props) => <TheExpertLayout {...props} />
                    : (props) => <TheCustomerLayout />
                }
              />

              <Route exact path="/home/blog">
                <TheBlogLayout />
              </Route>

              <Route exact path="/home/faq">
                <TheFaqLayout />
              </Route>

              <Route exact path="/home/about-us">
                <TheAboutLayout />
              </Route>
    
               <Route exact path="/home/forgot-password">
              <TheForgotLayout />
              </Route>
    
              <Route exact path="/home/Reset-password">
              <TheResetLayout />
              </Route>

              <Route exact path="/home/OTP">
              <OTPLayout />
              </Route>
  
              <Route exact path="/home/contact-us">
                <TheContactLayout />
              </Route>

              <Route exact path="/home/login">
                <TheHomeLayout />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route
                exact
                path="/expert"
                name="Expert Home"
                render={(props) => <TheExpertLayout {...props} />}
              />
              <Route
                exact
                path="/login"
                name="Login Page"
                render={(props) => <Login {...props} />}
              />
              <Route exact path="/org">
                <Eorg />
              </Route>
              <Route
                exact
                path="/expert/login"
                name="Log In"
                render={(props) => <ExpertLogin {...props} />}
              />
              <Route
                exact
                path="/user/login"
                name="Log In"
                render={(props) => <Clogin {...props} />}
              />
              <Route
                exact
                path="/user/loginotp"
                name="OTP Log In"
                render={(props) => <Cotplogin {...props} />}
              />
              <Route
                exact
                path="/user/sign-up"
                name="Sign Up"
                render={(props) => <CsignUp {...props} />}
              />
              <Route
                exact
                path="/expert"
                name="Expert Home"
                render={(props) => <TheExpertLayout {...props} />}
              />

              <Route
                exact
                path="/sign-up"
                name="Sign Up"
                render={(props) => <SignUp {...props} />}
              />
              <Route
                exact
                path="/expert"
                name="Expert Home"
                render={(props) => <TheExpertLayout {...props} />}
              />
              <Route
                exact
                path="/expert-org"
                render={(props) => <Org {...props} />}
              />
              <Route path="/experts" exact>
                <TheExpertsLayout />
              </Route>

              <Route exact path="/home">
                <TheHomeLayout />
              </Route>

              <Route exact path="/home/blog">
                <TheBlogLayout />
              </Route>

              <Route exact path="/home/faq">
                <TheFaqLayout />
              </Route>

              <Route exact path="/home/about-us">
                <TheAboutLayout />
              </Route>
    
              <Route exact path="/home/forgot-password">
              <TheForgotLayout />
              </Route>
               
              <Route exact path="/home/OTP">
              <OTPLayout />
              </Route>

               <Route exact path="/home/Reset-password">
              <TheResetLayout />
              </Route>
              <Route exact path="/home/contact-us">
                <TheContactLayout />
              </Route>

              <Route exact path="/user/login"></Route>

              <Route
                path="/expert/registration"
                name="Expert Registration"
                render={(props) => <ExpertRegistration {...props} />}
                exact
              />
              <Route exact path="/profile">
                <Exprofile />
              </Route>

              <Redirect from="/" to="/home" />
            </Switch>
          )}
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
