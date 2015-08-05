'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Account, app, auth, database) {

  app.get('/api/account/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/account/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/account/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/account/render', function(req, res, next) {
    Account.render('index', {
      package: 'account'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
