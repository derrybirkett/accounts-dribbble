Accounts.oauth.registerService('dribbble');

if (Meteor.isClient) {
  Meteor.loginWithDribbble = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Dribbble.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    // not sure whether the Dribbble api can be used from the browser,
    // thus not sure if we should be sending access tokens; but we do it
    // for all other oauth2 providers, and it may come in handy.
    forLoggedInUser: ['services.dribbble'],
    forOtherUsers: ['services.dribbble.username']
  });
}
