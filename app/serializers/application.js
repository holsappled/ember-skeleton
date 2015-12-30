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
   * Normalize a Flask-Restless response.
   *
   * A Flask-Restless response needs additionally normalizing since it does not
   * currently follow the JSON API specification at http://jsonapi.org/.
   *
   */
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    var json = {
      data: [],
      meta: null,
    };

    // Handle normalization of response with a single entity.
    if (!payload.hasOwnProperty('objects')) {
      json['data'] = {
        'id': payload['id'],
        'type': primaryModelClass.modelName,
        'attributes': payload,
      };

    // Handle normalization of response with many entities.
    } else {
      json['meta'] = {
        pagination: {
          totalPages: payload['total_pages'],
          page: payload['page'],
        }
      };
      for (let i = 0; i < payload['objects'].length; i++) {
        json['data'].push({
          type: primaryModelClass.modelName,
          id: payload['objects'][i]['id'],
          attributes: payload['objects'][i],
        });
      }
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
    // JSHint is being annoying
    options = options;
    snapshot.eachAttribute(function(name) {
      json[name] = snapshot.attr(name);
    });
    return json;
  },
});
