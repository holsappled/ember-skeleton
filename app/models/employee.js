import DS from 'ember-data';

export default DS.Model.extend({
  id: DS.attr('string'),
  first: DS.attr('first'),
  last: DS.attr('last'),
  position: DS.attr('position'),
  salary: DS.attr('salary'),
});
