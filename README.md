# Meteor, Apollo, React, PWA, Styled-Components boilerplate

A simple kit to start experimenting with Apollo, Meteor, React, PWA and Styled Components.

Code is deployed here: https://meteor-apollo-starter.herokuapp.com/

Lighthouse audit:
![meteor-apollo-starterkit-lighthouse](https://user-images.githubusercontent.com/16927407/32450606-f0650318-c314-11e7-9a75-3b3ec3d21c6d.png)

### This project includes the following libraries/functionality
- GraphQL server running with Express bound to the Meteor app
- Apollo client
- React 16
- Redux
- Meteor accounts (password & facebook)
- ES6 syntax
- [styled components](https://youtu.be/qu4U7lwZTRI)
- ant design
- sanitize.css
- basscss
- Progressive Web App

### Running the app
```
meteor npm install
meteor --settings settings-dev.json
```
GraphiQL is available at [http://localhost:3000/graphiql](http://localhost:3000/graphiql).

### Running storybook
```
npm i -g @storybook/cli
npm run storybook
```
Stroybook is available at [http://localhost:6006/](http://localhost:6006/).

#### Favicon / manifest generator
https://realfavicongenerator.net/

#### Configure facebook account
https://medium.com/@jaaaco/add-facebook-login-to-meteor-app-in-2-minutes-3c744b46009e

### Bundle-visualizer
```
cd app/
meteor --extra-packages bundle-visualizer --production --settings settings-dev.json
```

Then got to: [http://localhost:3000/](http://localhost:3000/)

Before deploying to production, if you used --extra-packages, simply remove bundle-visualizer from the list of included packages and run meteor as normal.


#### Deploy to heroku
```
1. git clone https://github.com/fede-rodes/meteor-apollo-starter-kit.git
2. cd meteor-apollo-starter-kit
3. heroku login (enter your credentials)
4. heroku create <YOUR_APP_NAME>
5. heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git
6. heroku addons:create mongolab
OR
6. heroku config:set MONGO_URL=mongodb://<dbuser>:<dbpassword>@<something>.mlab.com:<port>/<dbname>
7. heroku config:set ROOT_URL=https://<YOUR_APP_NAME>.herokuapp.com
8. heroku config:add METEOR_SETTINGS="$(cat settings.json)"
9. git push heroku mongo:master
10. heroku open
```

### Resources

#### Meteor Apollo
- [Meteor `apollo` package docs](http://dev.apollodata.com/core/meteor.html)
- [Apollo docs](http://dev.apollodata.com/)
- https://blog.meteor.com/create-a-simple-hello-world-app-with-meteor-and-apollo-64bab66a456f


#### Progressive Web Apps
- https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12
- https://www.made-on-mars.com/blog/how-to-pwa-an-introduction-on-progressive-web-app-and-a-tutorial-to-create-one-with-full-features-push-notification-service-worker-offline-mode/
- https://github.com/NitroBAY/meteor-service-worker
- https://github.com/saurshaz/pwa-meteor/blob/master/client/serviceWorker.js
- https://developers.google.com/web/tools/workbox/
- https://youtu.be/cmGr0RszHc8

### TODO LIST
- need a message/alert component such as s-alert or Bert
- replace check with simpl-schema in ErrorHandling and other places
- storybook: we need a global and a local theme for each component
- welcome screen: open your email btn
- css outside imports folder (lazy load) is better for performance?
- Better to load from DNS?

- dynamic imports
- bundle-visualizer to see what is taking up the most memory.
- ssr to speed-up first load and SEO
  - https://github.com/meteor/meteor/blob/devel/packages/server-render/README.md#usage


- react helmet
- PWA: push notifications + sync (take a look at workbox)
- clean Redux folder
- tests

- https://www.webpagetest.org
- https://stackify.com/what-is-real-user-monitoring/


https://guide.meteor.com/accounts.html
```
Accounts.onResetPasswordLink
Accounts.onEnrollmentLink
Accounts.onEmailVerificationLink
Here’s how you would use one of these functions:

Accounts.onResetPasswordLink((token, done) => {
  // Display the password reset UI, get the new password...
  Accounts.resetPassword(token, newPassword, (err) => {
    if (err) {
      // Display error
    } else {
      // Resume normal operation
      done();
    }
  });
})
```

### DONE BUT COULD BE IMPROVED
- welcome page/loggedInRoute check for current loggedIn service instead

### UI components library with styled components:
- https://ak-mk-2-prod.netlify.com/packages/elements/datetime-picker
