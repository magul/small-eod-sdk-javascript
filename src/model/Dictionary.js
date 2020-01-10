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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NestedFeature'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedFeature'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.Dictionary = factory(root.SmallEodClient.ApiClient, root.SmallEodClient.NestedFeature);
  }
}(this, function(ApiClient, NestedFeature) {
  'use strict';



  /**
   * The Dictionary model module.
   * @module model/Dictionary
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>Dictionary</code>.
   * @alias module:model/Dictionary
   * @class
   * @param name {String} 
   * @param values {Array.<module:model/NestedFeature>} 
   */
  var exports = function(name, values) {
    var _this = this;

    _this['name'] = name;
    _this['values'] = values;
  };

  /**
   * Constructs a <code>Dictionary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dictionary} obj Optional instance to populate.
   * @return {module:model/Dictionary} The populated <code>Dictionary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('minItems')) {
        obj['minItems'] = ApiClient.convertToType(data['minItems'], 'Number');
      }
      if (data.hasOwnProperty('maxItems')) {
        obj['maxItems'] = ApiClient.convertToType(data['maxItems'], 'Number');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], [NestedFeature]);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Number} minItems
   */
  exports.prototype['minItems'] = undefined;
  /**
   * @member {Number} maxItems
   */
  exports.prototype['maxItems'] = undefined;
  /**
   * @member {Array.<module:model/NestedFeature>} values
   */
  exports.prototype['values'] = undefined;



  return exports;
}));


