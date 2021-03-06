import React from 'react';
import SEO from '../../components/smart/seo';
import AuthPageProps from '../../render-props/auth-page-props';
import AuthPageLayout from '../../layouts/auth-page';

//------------------------------------------------------------------------------
// CONSTANTS:
//------------------------------------------------------------------------------
const PAGE = {
  name: 'signup',
  title: 'Sign Up',
  subtitle: 'Already have an account?&nbsp;',
  linkTo: 'login',
  linkLabel: 'Log In',
  btnLabel: 'Sign Up',
};
//------------------------------------------------------------------------------
// COMPONENT:
//------------------------------------------------------------------------------
// OBSERVATION: in case of facebook authentication, authPageProps.handleSuccess
// is only reachable when using 'popup' loginStyle at serviceConfiguration. On
// the contrary, when loginStyle equals 'redirect', the page will be re-loaded
// just after the response is coming back from facebook and therefore this hook
// will never be fired.

// On the other hand, after authPageProps.handleSuccess is fired, the user
// logged-in-state will change from 'logged out' to 'logged in'. This will
// trigger the LoggedOutRoute component's logic (said component wraps the
// SignupPage component) which will result in redirecting the user to home page
// automatically.
const SignupPage = () => (
  <AuthPageProps>
    {authPageProps => (
      <div>
        <SEO
          schema="AboutPage"
          title="Signup Page"
          description="A starting point for Meteor applications."
          contentType="product"
        />
        <AuthPageLayout
          page={PAGE}
          // Pass all state values and methods from authPageProps
          {...authPageProps}
        />
      </div>
    )}
  </AuthPageProps>
);

export default SignupPage;
