import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

/**
 * A Flask-Skeleton authenticator.
 *
 * The authenticator implemented in this file is capable of authentication
 * against a Flask-Skeleton server, currently hosted at
 * https://github.com/sholsapp/flask-skeleton.
 */
export default Base.extend({
  session: Ember.inject.service('session'),
  /**
   * Try to authenticate the user.
   */
  authenticate(options) {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:5000/login',
        contentType: 'application/json',
        xhrFields: {
          withCredentials: true,
        },
        data: JSON.stringify({
          username: options.identification,
          email: options.identification,
          password: options.password,
        })
      }).then(function(response, text, jqXHR) {
        Ember.run(function() {
          // All data the authenticator resolves with will be accessible via
          // the session data's authenticated property. Save the relevant part
          // of the login response JSON payload that contains the
          // authentication token (see authorizers/custom.js for usage).
          resolve(jqXHR.responseJSON.response.user);
        });
      }, function(xhr, status, error) {
        Ember.run(function() {
          reject(xhr.responseJSON || xhr.responseText);
        });
      });
    });
  },
  /**
   * Invalidate the current session.
   */
  invalidate(data) {
    console.log("INVALIDATE ", data);
    Ember.$.ajax({
      type: 'GET',
      url: 'http://127.0.0.1:5000/logout',
    });
    return Ember.RSVP.resolve();
  },
  /**
   * Try to restore a user's session.
   */
  restore(data) {
    console.log("RESTORE ", data);
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.authentication_token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  }
});
