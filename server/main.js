import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simple-schema-configuration';
import { Links } from '../imports/api/links';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    const _id = req.url.slice(1);
    const link = Links.findOne({ _id });
    if (link)
    {
      res.statusCode = 302;
      res.setHeader('Location', link.url);
      res.write('<h1>Overriten all the body!</h1>');
      res.end();

      Meteor.call('links.trackVisit', _id);
    }
    else
    {
      next();
    }
  });
});
  // WebApp.connectHandlers.use((req, res, next) => {
    // console.log(req.url, req.method, req.headers, req.query);
    // set HTTP status code
    // res.statusCode = 302;
    // set HTTP headers
    // res.setHeader('Location', 'http://www.google.com');
    // set HTTP body
    // res.write('<h1>Overriten all the body!</h1>');
    // end HTTP request
    // res.end();
    // next();
  // });
