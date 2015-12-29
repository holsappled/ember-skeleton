import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.store.findAll('employee');
  },

  afterModel: function() {
    Ember.$(document).attr('title', 'Employee Data');
  },

  actions: {
    createEmployee: function() {
      // This is the computed property that we created in
      // controllers/employee.js.
      var controller = this.get('controller');
      var employeeName = controller.get('newName');
      this.store.createRecord('employee', {
        first: employeeName,
        last: employeeName,
        position: 'Employee',
        salary: '0',
      }).save().then(function() {
        controller.set('newName', '');
      });
    }
  }
});
