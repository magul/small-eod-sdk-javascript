/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmallEodClient);
  }
}(this, function(expect, SmallEodClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SmallEodClient.EventsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EventsApi', function() {
    describe('eventsCreate', function() {
      it('should call eventsCreate successfully', function(done) {
        //uncomment below and update the code to test eventsCreate
        //instance.eventsCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventsDelete', function() {
      it('should call eventsDelete successfully', function(done) {
        //uncomment below and update the code to test eventsDelete
        //instance.eventsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventsList', function() {
      it('should call eventsList successfully', function(done) {
        //uncomment below and update the code to test eventsList
        //instance.eventsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventsPartialUpdate', function() {
      it('should call eventsPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test eventsPartialUpdate
        //instance.eventsPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventsRead', function() {
      it('should call eventsRead successfully', function(done) {
        //uncomment below and update the code to test eventsRead
        //instance.eventsRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('eventsUpdate', function() {
      it('should call eventsUpdate successfully', function(done) {
        //uncomment below and update the code to test eventsUpdate
        //instance.eventsUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
