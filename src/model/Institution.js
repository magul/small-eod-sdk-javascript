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
    define(['ApiClient', 'model/AddressDataNested', 'model/ExternalIdentifierNested'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressDataNested'), require('./ExternalIdentifierNested'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.Institution = factory(root.SmallEodClient.ApiClient, root.SmallEodClient.AddressDataNested, root.SmallEodClient.ExternalIdentifierNested);
  }
}(this, function(ApiClient, AddressDataNested, ExternalIdentifierNested) {
  'use strict';



  /**
   * The Institution model module.
   * @module model/Institution
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>Institution</code>.
   * @alias module:model/Institution
   * @class
   * @param name {String} Name of institution
   * @param externalIdentifier {module:model/ExternalIdentifierNested} 
   * @param administrativeUnit {String} 
   * @param address {module:model/AddressDataNested} 
   */
  var exports = function(name, externalIdentifier, administrativeUnit, address) {
    var _this = this;

    _this['name'] = name;
    _this['externalIdentifier'] = externalIdentifier;
    _this['administrativeUnit'] = administrativeUnit;
    _this['address'] = address;
  };

  /**
   * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Institution} obj Optional instance to populate.
   * @return {module:model/Institution} The populated <code>Institution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('externalIdentifier')) {
        obj['externalIdentifier'] = ExternalIdentifierNested.constructFromObject(data['externalIdentifier']);
      }
      if (data.hasOwnProperty('administrativeUnit')) {
        obj['administrativeUnit'] = ApiClient.convertToType(data['administrativeUnit'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressDataNested.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'Number');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Name of institution
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/ExternalIdentifierNested} externalIdentifier
   */
  exports.prototype['externalIdentifier'] = undefined;
  /**
   * @member {String} administrativeUnit
   */
  exports.prototype['administrativeUnit'] = undefined;
  /**
   * @member {module:model/AddressDataNested} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;
  /**
   * @member {Number} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {Date} modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;
  /**
   * @member {Date} createdOn
   */
  exports.prototype['createdOn'] = undefined;



  return exports;
}));


