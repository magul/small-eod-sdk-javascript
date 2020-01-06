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
    define(['ApiClient', 'model/AdministrativeUnit', 'model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdministrativeUnit'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.AdministrativeUnitApi = factory(root.SmallEodClient.ApiClient, root.SmallEodClient.AdministrativeUnit, root.SmallEodClient.Error);
  }
}(this, function(ApiClient, AdministrativeUnit, Error) {
  'use strict';

  /**
   * AdministrativeUnit service.
   * @module small_eod_client/AdministrativeUnitApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AdministrativeUnitApi. 
   * @alias module:small_eod_client/AdministrativeUnitApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a administrative unit
     * @param {module:model/AdministrativeUnit} administrativeUnit New administrative unit
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdministrativeUnit} and HTTP response
     */
    this.createAdministrativeUnitWithHttpInfo = function(administrativeUnit) {
      var postBody = administrativeUnit;
      // verify the required parameter 'administrativeUnit' is set
      if (administrativeUnit === undefined || administrativeUnit === null) {
        throw new Error("Missing the required parameter 'administrativeUnit' when calling createAdministrativeUnit");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['sessionAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AdministrativeUnit;
      return this.apiClient.callApi(
        '/administrativeUnit', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a administrative unit
     * @param {module:model/AdministrativeUnit} administrativeUnit New administrative unit
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdministrativeUnit}
     */
    this.createAdministrativeUnit = function(administrativeUnit) {
      return this.createAdministrativeUnitWithHttpInfo(administrativeUnit)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a single administrative unit based on the ID supplied
     * @param {Number} administrativeUnitId The id of the administrativeUnit to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteAdministrativeUnitWithHttpInfo = function(administrativeUnitId) {
      var postBody = null;
      // verify the required parameter 'administrativeUnitId' is set
      if (administrativeUnitId === undefined || administrativeUnitId === null) {
        throw new Error("Missing the required parameter 'administrativeUnitId' when calling deleteAdministrativeUnit");
      }

      var pathParams = {
        'administrativeUnitId': administrativeUnitId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['sessionAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi(
        '/administrativeUnit/{administrativeUnitId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a single administrative unit based on the ID supplied
     * @param {Number} administrativeUnitId The id of the administrativeUnit to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteAdministrativeUnit = function(administrativeUnitId) {
      return this.deleteAdministrativeUnitWithHttpInfo(administrativeUnitId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all administrative units
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {Number} opts.offset How many items skip in return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/AdministrativeUnit>} and HTTP response
     */
    this.listAdministrativeUnitWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['sessionAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [AdministrativeUnit];
      return this.apiClient.callApi(
        '/administrativeUnit', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all administrative units
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {Number} opts.offset How many items skip in return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/AdministrativeUnit>}
     */
    this.listAdministrativeUnit = function(opts) {
      return this.listAdministrativeUnitWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Info for a specific administrative unit
     * @param {Number} administrativeUnitId The id of the administrative unit to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AdministrativeUnit} and HTTP response
     */
    this.showAdministrativeUnitByIdWithHttpInfo = function(administrativeUnitId) {
      var postBody = null;
      // verify the required parameter 'administrativeUnitId' is set
      if (administrativeUnitId === undefined || administrativeUnitId === null) {
        throw new Error("Missing the required parameter 'administrativeUnitId' when calling showAdministrativeUnitById");
      }

      var pathParams = {
        'administrativeUnitId': administrativeUnitId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['sessionAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AdministrativeUnit;
      return this.apiClient.callApi(
        '/administrativeUnit/{administrativeUnitId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Info for a specific administrative unit
     * @param {Number} administrativeUnitId The id of the administrative unit to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AdministrativeUnit}
     */
    this.showAdministrativeUnitById = function(administrativeUnitId) {
      return this.showAdministrativeUnitByIdWithHttpInfo(administrativeUnitId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
