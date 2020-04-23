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
 * OpenAPI Generator version: 4.3.1-SNAPSHOT
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
    root.SmallEodClient.Letter = factory(root.SmallEodClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Letter model module.
   * @module model/Letter
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>Letter</code>.
   * @alias module:model/Letter
   * @class
   * @param name {String} Description of the letter.
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>Letter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Letter} obj Optional instance to populate.
   * @return {module:model/Letter} The populated <code>Letter</code> instance.
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
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'Number');
      }
      if (data.hasOwnProperty('final')) {
        obj['final'] = ApiClient.convertToType(data['final'], 'Boolean');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('institution')) {
        obj['institution'] = ApiClient.convertToType(data['institution'], 'Number');
      }
      if (data.hasOwnProperty('case')) {
        obj['case'] = ApiClient.convertToType(data['case'], 'Number');
      }
      if (data.hasOwnProperty('attachment')) {
        obj['attachment'] = ApiClient.convertToType(data['attachment'], [File]);
      }
      if (data.hasOwnProperty('ordering')) {
        obj['ordering'] = ApiClient.convertToType(data['ordering'], 'Number');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('excerpt')) {
        obj['excerpt'] = ApiClient.convertToType(data['excerpt'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'Number');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'Date');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Number');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'Date');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Description of the letter.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Direction for letter.
   * @member {module:model/Letter.DirectionEnum} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {Number} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * Indicates whether the document has final content or is, for example, a draft
   * @member {Boolean} final
   */
  exports.prototype['final'] = undefined;
  /**
   * Date of sending or receiving.
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Identifier of letter.
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * @member {Number} institution
   */
  exports.prototype['institution'] = undefined;
  /**
   * @member {Number} case
   */
  exports.prototype['case'] = undefined;
  /**
   * @member {Array.<File>} attachment
   */
  exports.prototype['attachment'] = undefined;
  /**
   * Order of letter.
   * @member {Number} ordering
   */
  exports.prototype['ordering'] = undefined;
  /**
   * Comment for letter.
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * Excerpt of letter.
   * @member {String} excerpt
   */
  exports.prototype['excerpt'] = undefined;
  /**
   * @member {Number} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Date} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * @member {Number} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {Date} modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;
  /**
   * @member {Number} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;


  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "IN"
     * @const
     */
    "IN": "IN",
    /**
     * value: "OUT"
     * @const
     */
    "OUT": "OUT"  };


  return exports;
}));


