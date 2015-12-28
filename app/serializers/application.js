import Ember from 'ember';
import DS from 'ember-data';


export default DS.JSONAPISerializer.extend({

  /**
   * Flask-Restless always uses underscores.
   */
  keyForAttribute: function(attr) {
    return Ember.String.underscore(attr);
  },

  /**
   * Flask-Restless does not follow http://jsonapi.org/.
   */
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    var json = {
      data: []
    };

    // Handle normalization of response with a single entity.
    if (!payload.hasOwnProperty('objects')) {
      return this._super(...arguments);
    }

    // Handle normalization of response with many entities.
    for (var i = 0; i < payload['objects'].length; i++) {
      json['data'].push({
        type: primaryModelClass.modelName,
        id: payload['objects'][i]['id'],
        attributes: payload['objects'][i],
      });
    }
    // TODO(sholsapp): Handle pagination here somehow, we're only returning
    // part of the data.
    return this._super(store, primaryModelClass, json, id, requestType);
  },

  /**
   * Flask-Restless does not follow http://jsonapi.org/.
   */
  serialize(snapshot, options) {
    var json = {};
    snapshot.eachAttribute(function(name) {
      json[name] = snapshot.attr(name);
    });
    return json;
  },

});
