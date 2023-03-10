// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from './application';

import AdminController from './admin_controller';
application.register('admin', AdminController);

import BookingsSearchFormController from './bookings_search_form_controller';
application.register('bookings-search-form', BookingsSearchFormController);

import HelloController from './hello_controller';
application.register('hello', HelloController);

import NavbarController from './navbar_controller';
application.register('navbar', NavbarController);

import NavtabsController from './navtabs_controller';
application.register('navtabs', NavtabsController);
