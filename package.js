Package.describe({
  summary: "Login service for Dribbble accounts",
  version: "1.0.0",
  git: "https://github.com/d2tstudio/accounts-dribbble.git"
});

Package.onUse(function(api) {
  api.use('accounts-base@1.1.3', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.1.3', ['client', 'server']);
  api.use('accounts-oauth@1.1.3', ['client', 'server']);
  api.use('github@1.1.2', ['client', 'server']);

  api.addFiles('dribbble_login_button.css', 'client');

  api.addFiles("dribbble.js");
});
