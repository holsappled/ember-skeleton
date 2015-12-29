import Ember from 'ember';

export default Ember.Route.extend({

  queryParams: {
    page: {
      refreshModel: true,
    },
  },

  model: function(params) {
    return this.store.query('employee', params);
  },

  actions: {
    /**
     * Create an employee.
     *
     * This action will persist the new employee record to
     * the database.
     */
    createEmployee: function() {
      var route = this;
      var controller = this.get('controller');
      var employeeName = controller.get('newName');
      this.store.createRecord('employee', {
        first: employeeName,
        last: employeeName,
        position: 'Employee',
        salary: '0',
      }).save().then(function() {
        controller.set('newName', '');
        route.refresh();
      });
    }
  }
});
