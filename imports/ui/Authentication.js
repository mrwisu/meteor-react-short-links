import { Tracker } from 'meteor/tracker';

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export default ({ location, history }) => {
  Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    // console.log('isAuthenticated', isAuthenticated);

    const isUnauthenticatedPage = unauthenticatedPages.includes(location.pathname);
    const isAuthenticatedPage = authenticatedPages.includes(location.pathname);

    if (isUnauthenticatedPage && isAuthenticated)
    {
      history.replace('/links');
    }
    if (isAuthenticatedPage && !isAuthenticated)
    {
      history.replace('/');
    }
  });
  return null;
};
