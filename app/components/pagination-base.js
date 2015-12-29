import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: 'btn btn-secondary btn-sm'.w(),
  attributeBindings: ['disabled'],
  enabled: false,
  disabled: Ember.computed.not('enabled'),
  action: null,
  click: function(){
    this.sendAction();
  }
});
