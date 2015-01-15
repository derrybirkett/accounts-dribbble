Package.describe({
  summary: "Login service for Dribbble accounts",
  version: "1.0.0"
});

Package.onUse(function(api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('github', ['client', 'server']);

  api.addFiles('dribbble_login_button.css', 'client');

  api.addFiles("dribbble.js");
});
