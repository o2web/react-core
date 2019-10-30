# o2web-react-core

[![NPM](https://img.shields.io/npm/v/o2web-react-core.svg)](https://www.npmjs.com/package/o2web-react-core) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save o2web-react-core
```

## Usage

### Available components and methods

```js
// using ES6 modules
import {
  BaseRoute,
  CacheBuster,
  CrumbRoute,
  LanguageSwitcher,
  GAListener,
  NavLink,
  Route,
  translateRoute,
  ValidateRoutes,
} from 'o2web-react-core';
```

Example in `/example`

### GraphQL Requests

This package uses [Apollo Client](https://github.com/apollographql/apollo-client) as GraphQL client.

Duplicate `.env.sample` file and add GraphQL endpoint

```bash
REACT_APP_API_URL=https://example.com/graphql
```

Check `/example/src/app/actions/artworks` directory for GraphQL queries definition examples

```js
export default {
  fetchArtwork: `
    query($id: ID!) {
      artwork(id: $id) {
        id
        name
        description
      }
    }
  `,
  fetchArtworks: `
    query($limit: Int) {
      artworks(limit: $limit) {
        artworks {
          id
          name
          description
        }
      }
    }
  `,
};

```

### Authentication

This package is intended to authenticate with a GraphQL Authentication with JWT. You can use the gem [graphql-auth](https://github.com/o2web/graphql-auth) if you are using rails for your api

The authentication forms Components are located in `example/src/app/components/user

### Redux

This package uses [Redux](https://github.com/reduxjs/redux) to manage data states

Check `/example/src/app/reducers` directory for reducers stucture

```js
import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';
import { reducer as formReducer } from 'redux-form';
import artworkReducer from './artwork';
import artworksReducer from './artworks';

const rootReducer = combineReducers({
  i18nState,
  form: formReducer,
  artwork: artworkReducer,
  artworks: artworksReducer,
});

export default rootReducer;

```

[react-redux](https://github.com/reduxjs/react-redux) is use to connect Redux data state to React components

```js
import { connect } from 'react-redux';

...

export default connect(mapStateToProps, actions)(Artworks);
```

This package also uses [redux-action-creator](https://github.com/andy-shea/redux-action-creator) to define Redux actions types

Check `/example/src/app/actions/artworks` directory for redux action types examples

```js
import { async, createTypes } from 'redux-action-creator';

export default createTypes([
  ...async('FETCH_ARTWORK'),
  ...async('FETCH_ARTWORKS'),
], 'ARTWORKS');
```

Define the Redux Store this way `src/config/redux/store.js`

```js
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../../app/reducers/index';

const middlewares = [reduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;

```

### Translations

This package uses [redux-i18n](https://github.com/APSL/redux-i18n) for texts translation

Check `/example/src/app/components/pages/About.js` for translation examples

```js
function About(pros, { t }) {
  return (
    <div>
      <h2>{t('pages.titles.about')}</h2>
    </div>
  );
}

About.contextTypes = {
  t: PropTypes.func,
};
```

Create a directory with translations in `/example/src/config/locales` directory

`t('pages.titles.about')` matches `/example/src/config/locales/en/pages.js` definition

```js
export default {
  titles: {
    home: 'Home page',
    about: 'About page',
  },
};
```

Translation keys can be nested

### Router

This package uses [react-router v4](https://github.com/ReactTraining/react-router) to define translated routes.
These routes must be named with their translations keys. 

Check `/example/src/config/locales/en/routes.js` for routes definitions

```js
export default {
  en: 'en',
  about: 'about',
  artworks: 'artworks',
  demo: 'demo-form',
};

```

`<BaseRoute />`, `<LanguageSwitcher />`, `<NavLink />`, `<Route />` can be used for translated routes

### Breadcrumbs

This package uses [react-breadcrumbs](https://github.com/svenanders/react-breadcrumbs) to generate automatic breadcrumbs.

Routes must be nested so react-breadcrumbs can generate breadcrumbs.
Check `/example/src/app/components/layouts/PrimaryLayout.js` for automatic breadcrumbs definition examples

```js
<main>
  <Breadcrumbs />
  <Route exact path="/en" component={HomePage} />
  <CrumbRoute exact path="/en/about" title="about" component={AboutPage} />
  <CrumbRoute
    path="/en/artworks"
    title="artworks"
    render={({ match }) =>
      <Switch>
        <Route exact path={match.url} component={Artworks} />
        <CrumbRoute path={`${match.url}/:artworkId`} title="artwork" component={Artwork} />
      </Switch>
    }
  />
  <CrumbRoute exact path="/en/demo" title="demo" component={DemoForm} />
</main>
```

`<CrumbRoute />` can be used for translated routes

### SEO

This package uses [react-helmet](https://github.com/nfl/react-helmet) to manage document head

`<Helmet />` can be used in nested components. The most nested definition will be displayed in the page.
Check `/example/src/app/components/App.js` for document head definition example

### Forms

This packages uses [redux-form](https://github.com/erikras/redux-form) for form definition

Check `/example/src/app/components/forms/Demo.js` for form example

```js
import { Field, reduxForm } from 'redux-form';
import Input from './fields/input/Input';

<form onSubmit={submitForm} className="form--demo">
  <Field
    name="firstName"
    component={Input}
    type="text"
    placeholder="Your name..."
  />
  
  ...
        
export default connect(mapStateToProps)(reduxForm({
  form: 'demo',
  enableReinitialize: true,
  validate,
}, mapStateToProps)(DemoForm));
```

### Cookies

This package uses [redux-cookie](https://github.com/reactivestack/cookies)

`<CookiesProvider />` is defined in `/example/src/app/components/App.js` so `cookies` prop is available to children components


### CacheBuster

> [This article](https://dev.to/flexdinesh/cache-busting-a-react-app-22lk) was used to create the CacheBuster component.

React apps can sometimes get stuck on the client's side cache (ex: when the app is added to the phone's homepage). You can use the CacheBuster component to help refresh the app. Here are the steps to help you set it up.

* Copy the `generate-build-version.js` script to your app folder
* Add the `generate-build-version` task to your app's `package.json` and call it with the prebuild hook. This will generate a meta.json file in your `static` folder.

```
"scripts": {
    "generate-build-version": "node ./generate-build-version.js",
    "pressr:build": "npm run generate-build-version",
    "prestatic:build": "npm run generate-build-version"
    [...]
},
```
* Add `REACT_APP_CURRENT_APP_VERSION=$npm_package_version` to your .env file.
* In the root component of your App (generally `src/app/components/App.js`), add the CacheBuster component around your app code
* The CacheBuster will now compare the current version, from your `.env` file, which should be cached, and the current build version, from the `generate-build-version.js`, which should not be cached, because we fetch it asynchronously and browsers don't cache XHR requests.



## Advanced usage

### Add custom Apollo client

You can add a custom Apollo client to further customize your app with advanced features. To do so, you need to create a custom client, import it in your action files and send it as a parameter to the async query object. You can find an example of this feature in the example folder (custom client in `example/src/config/graphql/client.js` and usage in `example/src/app/actions/artworks/index.js`).

## Development

Start package core

```bash
cd /
npm install
npm start
```

Start example app

```bash
cd /example
npm install
npm start
```

Run server build

To run the server build update `package.json` at the root of the project to point to the server build.

```
"ssr:serve": "nodemon -r dotenv/config ./example/build/server.js",
```


### Javascript Linting

This package uses [ESLint](https://github.com/eslint/eslint) with [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
as React/JSX style guide

----------------------------------------
Package created with [create-react-library](https://github.com/transitive-bullshit/create-react-library)

## License

MIT © [o2web](https://github.com/o2web)
