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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.ExternalIdentifierNested = factory(root.SmallEodClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ExternalIdentifierNested model module.
   * @module model/ExternalIdentifierNested
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>ExternalIdentifierNested</code>.
   * @alias module:model/ExternalIdentifierNested
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ExternalIdentifierNested</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalIdentifierNested} obj Optional instance to populate.
   * @return {module:model/ExternalIdentifierNested} The populated <code>ExternalIdentifierNested</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('nip')) {
        obj['nip'] = ApiClient.convertToType(data['nip'], 'String');
      }
      if (data.hasOwnProperty('regon')) {
        obj['regon'] = ApiClient.convertToType(data['regon'], 'String');
      }
    }
    return obj;
  }

  /**
   * Tax Identification Number.
   * @member {String} nip
   */
  exports.prototype['nip'] = undefined;
  /**
   * Statistical Identification Number.
   * @member {String} regon
   */
  exports.prototype['regon'] = undefined;



  return exports;
}));


