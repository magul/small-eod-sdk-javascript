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
    instance = new SmallEodClient.Feature();
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

  describe('Feature', function() {
    it('should create an instance of Feature', function() {
      // uncomment below and update the code to test Feature
      //var instance = new SmallEodClient.Feature();
      //expect(instance).to.be.a(SmallEodClient.Feature);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SmallEodClient.Feature();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SmallEodClient.Feature();
      //expect(instance).to.be();
    });

    it('should have the property minOptions (base name: "minOptions")', function() {
      // uncomment below and update the code to test the property minOptions
      //var instance = new SmallEodClient.Feature();
      //expect(instance).to.be();
    });

    it('should have the property maxOptions (base name: "maxOptions")', function() {
      // uncomment below and update the code to test the property maxOptions
      //var instance = new SmallEodClient.Feature();
      //expect(instance).to.be();
    });

    it('should have the property featureoptions (base name: "featureoptions")', function() {
      // uncomment below and update the code to test the property featureoptions
      //var instance = new SmallEodClient.Feature();
      //expect(instance).to.be();
    });

  });

}));
