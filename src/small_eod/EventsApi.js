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
    define(['ApiClient', 'model/Event'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Event'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.EventsApi = factory(root.SmallEodClient.ApiClient, root.SmallEodClient.Event);
  }
}(this, function(ApiClient, Event) {
  'use strict';

  /**
   * Events service.
   * @module small_eod/EventsApi
   * @version 1.0.1
   */

  /**
   * Constructs a new EventsApi. 
   * @alias module:small_eod/EventsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    this.eventsCreateWithHttpInfo = function(data) {
      var postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling eventsCreate");
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

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Event;
      return this.apiClient.callApi(
        '/events/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    this.eventsCreate = function(data) {
      return this.eventsCreateWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.eventsDeleteWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/events/{id}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.eventsDelete = function(id) {
      return this.eventsDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Event>} and HTTP response
     */
    this.eventsListWithHttpInfo = function() {
      var postBody = null;

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

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Event];
      return this.apiClient.callApi(
        '/events/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Event>}
     */
    this.eventsList = function() {
      return this.eventsListWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this event.
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    this.eventsPartialUpdateWithHttpInfo = function(id, data) {
      var postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling eventsPartialUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Event;
      return this.apiClient.callApi(
        '/events/{id}/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this event.
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    this.eventsPartialUpdate = function(id, data) {
      return this.eventsPartialUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    this.eventsReadWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsRead");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Event;
      return this.apiClient.callApi(
        '/events/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this event.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    this.eventsRead = function(id) {
      return this.eventsReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this event.
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Event} and HTTP response
     */
    this.eventsUpdateWithHttpInfo = function(id, data) {
      var postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling eventsUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling eventsUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Basic'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Event;
      return this.apiClient.callApi(
        '/events/{id}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this event.
     * @param {module:model/Event} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Event}
     */
    this.eventsUpdate = function(id, data) {
      return this.eventsUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
