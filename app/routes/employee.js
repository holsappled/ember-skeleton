import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    // This uses the built in
    // http://emberjs.com/api/data/classes/DS.RESTAdapter.html to fetch data.
    //
    //return this.store.findAll('employee');
    return [{
      id: '0',
      first: 'Bill',
      last: 'Lumbergh',
      position: 'Boss',
      salary: '100000',
    },
    {
      id: '1',
      first: 'Peter',
      last: 'Gibbons',
      position: 'Employee',
      salary: '50000',
    },
    {
      id: '2',
      first: 'Michael',
      last: 'Bolton',
      position: 'Employee',
      salary: '50000',
    },
    {
      id: '3',
      first: 'Samir',
      last: 'Nagheenanajar',
      position: 'Employee',
      salary: '50000',
    },
    {
      id: '4',
      first: 'Milton',
      last: 'Waddams',
      position: 'Employee',
      salary: '0',
    }];
  },
  afterModel: function() {
    Ember.$(document).attr('title', 'Employee Data');
  },
});
