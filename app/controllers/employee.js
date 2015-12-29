import Ember from 'ember';

var Paginated = Ember.Mixin.create({
  /**
   * Paginated controls the page query parameter.
   */
  queryParams: [
    'page',
  ],
  /**
   * Paginated maintains the current page.
   */
  page: 1,
  /**
   * Expose pagination metadata as a property.
   */
  pagination: Ember.computed('model', function() {
    let metadata = this.get('model').get('meta');
    return Ember.get(metadata, 'pagination');
  }),
  /**
   * True if there exists a previous page.
   *
   * Computed property depends on 'page' property to determine if there is a
   * previous page.
   */
  hasPreviousPage: function() {
    return this.get('page') > 1;
  }.property('page'),
  /**
   * True if there exists a next page.
   *
   * Computed property depends on 'page' property to determine if there is a
   * next page.
   */
  hasNextPage: function() {
    return this.get('page') < this.get('pagination').totalPages;
  }.property('page'),
  /**
   * The controller's actions.
   */
  actions: {
    /**
     * Increment the page.
     */
    nextPage() {
      if (this.hasNextPage) {
        this.incrementProperty('page');
      }
    },
    /**
     * Decrement the page.
     */
    previousPage() {
      if (this.hasPreviousPage) {
        this.decrementProperty('page');
      }
    }
  },
});


export default Ember.Controller.extend(Paginated, {
  newName: "",
  disabled: function() {
    return Ember.isEmpty(this.get('newName'));
  }.property('newName'),
});
