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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NestedFeatureOption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NestedFeatureOption'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.Feature = factory(root.SmallEodClient.ApiClient, root.SmallEodClient.NestedFeatureOption);
  }
}(this, function(ApiClient, NestedFeatureOption) {
  'use strict';



  /**
   * The Feature model module.
   * @module model/Feature
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>Feature</code>.
   * @alias module:model/Feature
   * @class
   * @param name {String} Name of feature.
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>Feature</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Feature} obj Optional instance to populate.
   * @return {module:model/Feature} The populated <code>Feature</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('minOptions')) {
        obj['minOptions'] = ApiClient.convertToType(data['minOptions'], 'Number');
      }
      if (data.hasOwnProperty('maxOptions')) {
        obj['maxOptions'] = ApiClient.convertToType(data['maxOptions'], 'Number');
      }
      if (data.hasOwnProperty('featureoptions')) {
        obj['featureoptions'] = ApiClient.convertToType(data['featureoptions'], [NestedFeatureOption]);
      }
    }
    return obj;
  }

  /**
   * Name of feature.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Minimum number of selected option (if any).
   * @member {Number} minOptions
   */
  exports.prototype['minOptions'] = undefined;
  /**
   * Maximum number of selected option.
   * @member {Number} maxOptions
   */
  exports.prototype['maxOptions'] = undefined;
  /**
   * @member {Array.<module:model/NestedFeatureOption>} featureoptions
   */
  exports.prototype['featureoptions'] = undefined;



  return exports;
}));


