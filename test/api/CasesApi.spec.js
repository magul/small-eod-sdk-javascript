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
 * OpenAPI Generator version: 4.3.1
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
    instance = new SmallEodClient.CasesApi();
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

  describe('CasesApi', function() {
    describe('casesCreate', function() {
      it('should call casesCreate successfully', function(done) {
        //uncomment below and update the code to test casesCreate
        //instance.casesCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesDelete', function() {
      it('should call casesDelete successfully', function(done) {
        //uncomment below and update the code to test casesDelete
        //instance.casesDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesList', function() {
      it('should call casesList successfully', function(done) {
        //uncomment below and update the code to test casesList
        //instance.casesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesNotifiedUserList', function() {
      it('should call casesNotifiedUserList successfully', function(done) {
        //uncomment below and update the code to test casesNotifiedUserList
        //instance.casesNotifiedUserList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesNotifiedUserRead', function() {
      it('should call casesNotifiedUserRead successfully', function(done) {
        //uncomment below and update the code to test casesNotifiedUserRead
        //instance.casesNotifiedUserRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesPartialUpdate', function() {
      it('should call casesPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test casesPartialUpdate
        //instance.casesPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesRead', function() {
      it('should call casesRead successfully', function(done) {
        //uncomment below and update the code to test casesRead
        //instance.casesRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesResponsibleUserList', function() {
      it('should call casesResponsibleUserList successfully', function(done) {
        //uncomment below and update the code to test casesResponsibleUserList
        //instance.casesResponsibleUserList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesResponsibleUserRead', function() {
      it('should call casesResponsibleUserRead successfully', function(done) {
        //uncomment below and update the code to test casesResponsibleUserRead
        //instance.casesResponsibleUserRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('casesUpdate', function() {
      it('should call casesUpdate successfully', function(done) {
        //uncomment below and update the code to test casesUpdate
        //instance.casesUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
