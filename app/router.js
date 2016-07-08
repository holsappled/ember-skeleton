import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('employee', { path: '/employee' }, function() {
    this.route('profile', { path: ':id' });
  });
  this.route('about', { path: '/about' });
  this.route('login', { path: '/login' });
  this.route('logout', { path: '/logout' });
});

export default Router;
