/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.AdministrativeUnit = factory(root.SmallEodClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AdministrativeUnit model module.
   * @module model/AdministrativeUnit
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AdministrativeUnit</code>.
   * @alias module:model/AdministrativeUnit
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param level {Number} 
   * @param category {String} 
   * @param terc {String} 
   */
  var exports = function(id, name, level, category, terc) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['level'] = level;
    _this['category'] = category;
    _this['terc'] = terc;
  };

  /**
   * Constructs a <code>AdministrativeUnit</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdministrativeUnit} obj Optional instance to populate.
   * @return {module:model/AdministrativeUnit} The populated <code>AdministrativeUnit</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'Number');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('terc')) {
        obj['terc'] = ApiClient.convertToType(data['terc'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} level
   */
  exports.prototype['level'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {String} terc
   */
  exports.prototype['terc'] = undefined;



  return exports;
}));


