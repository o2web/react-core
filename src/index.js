import BaseRoute from './app/components/BaseRoute';
import { asyncQuery, asyncMutation } from './config/graphql/async-action-creator';
import CrumbRoute from './app/components/router/CrumbRoute';
import LanguageSwitcher from './app/components/router/LanguageSwitcher';
import NavLink from './app/components/router/NavLink';
import Route from './app/components/router/Route';

export {
  BaseRoute,
  CrumbRoute,
  LanguageSwitcher,
  NavLink,
  Route,
  asyncQuery,
  asyncMutation,
};
