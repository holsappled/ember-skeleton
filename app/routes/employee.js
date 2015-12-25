import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // This uses the built in
    // http://emberjs.com/api/data/classes/DS.RESTAdapter.html to fetch data.
    //
    //return this.store.findAll('employee');
    return [{
      id: '0',
      first: 'Bob',
      last: 'Jones',
      position: 'Boss',
      salary: '100000',
    },
    {
      id: '1',
      first: 'Alice',
      last: 'Jones',
      position: 'Employee',
      salary: '50000',
    },
    {
      id: '2',
      first: 'Jim',
      last: 'Jones',
      position: 'Employee',
      salary: '50000',
    }];
  },
  afterModel: function() {
    Ember.$(document).attr('title', 'Employee Data');
  },
});
