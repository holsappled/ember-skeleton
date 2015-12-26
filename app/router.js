import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('employee', { path: '/employee' });
  this.route('about', { path: '/about' });
});

export default Router;
