import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

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
      // TODO(sholsapp): This action also needs to consider refreshing the
      // model (from the databse) so that we can make sure the paginated
      // context is correct. Right now, if you add too many employees this way,
      // when you split over into the next page, the next button isn't enabled
      // because none of the metadata is refreshed.
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
