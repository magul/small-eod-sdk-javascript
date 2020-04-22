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
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
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
    instance = new SmallEodClient.CaseCount();
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

  describe('CaseCount', function() {
    it('should create an instance of CaseCount', function() {
      // uncomment below and update the code to test CaseCount
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be.a(SmallEodClient.CaseCount);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property auditedInstitutions (base name: "auditedInstitutions")', function() {
      // uncomment below and update the code to test the property auditedInstitutions
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property responsibleUsers (base name: "responsibleUsers")', function() {
      // uncomment below and update the code to test the property responsibleUsers
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property notifiedUsers (base name: "notifiedUsers")', function() {
      // uncomment below and update the code to test the property notifiedUsers
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property featureoptions (base name: "featureoptions")', function() {
      // uncomment below and update the code to test the property featureoptions
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modifiedBy")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property letterCount (base name: "letterCount")', function() {
      // uncomment below and update the code to test the property letterCount
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property noteCount (base name: "noteCount")', function() {
      // uncomment below and update the code to test the property noteCount
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

    it('should have the property eventCount (base name: "eventCount")', function() {
      // uncomment below and update the code to test the property eventCount
      //var instance = new SmallEodClient.CaseCount();
      //expect(instance).to.be();
    });

  });

}));
