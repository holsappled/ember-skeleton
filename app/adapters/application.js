import Ember from 'ember';
import DS from 'ember-data';

var RestlessAdapter = DS.RESTAdapter.extend({
  shouldReloadAll: function() {
    return true;
  },
  host: 'http://localhost:5000',
  namespace: 'api',
  pathForType: function(type) {
    return Ember.String.underscore(type);
  }
});

export default RestlessAdapter;
