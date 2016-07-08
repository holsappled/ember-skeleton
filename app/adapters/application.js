import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


var RestlessAdapter = DS.RESTAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:custom',
  shouldReloadAll: function() {
    return true;
  },
  host: 'http://127.0.0.1:5000',
  namespace: 'api',
  pathForType: function(type) {
    return Ember.String.underscore(type);
  },
});

export default RestlessAdapter;
