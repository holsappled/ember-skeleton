import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

/**
 * A Flask-Skeleton authorizer.
 *
 * The authorizer implemented in this capable of authorizing requests against a
 * Flask-Skeleton server, currently hosted at https://github.com/sholsapp/flask-skeleton.
 */
export default Base.extend({
  session: Ember.inject.service('session'),
  authorize: function(sessionData, block) {
    var self = this;
    // TODO(sholsapp): Move the string 'Auth-Token' into a constant in
    // configuration. It must correspond to the header key looked for by the
    // API server.
    block('Auth-Token', sessionData.authentication_token);
  }
});
