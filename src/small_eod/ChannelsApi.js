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
    define(['ApiClient', 'model/Channel', 'model/InlineResponse2002'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Channel'), require('../model/InlineResponse2002'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.ChannelsApi = factory(root.SmallEodClient.ApiClient, root.SmallEodClient.Channel, root.SmallEodClient.InlineResponse2002);
  }
}(this, function(ApiClient, Channel, InlineResponse2002) {
  'use strict';

  /**
   * Channels service.
   * @module small_eod/ChannelsApi
   * @version 1.0.4
   */

  /**
   * Constructs a new ChannelsApi. 
   * @alias module:small_eod/ChannelsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Channel} and HTTP response
     */
    this.channelsCreateWithHttpInfo = function(data) {
      var postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling channelsCreate");
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
      var returnType = Channel;
      return this.apiClient.callApi(
        '/channels/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Channel}
     */
    this.channelsCreate = function(data) {
      return this.channelsCreateWithHttpInfo(data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.channelsDeleteWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling channelsDelete");
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
        '/channels/{id}/', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.channelsDelete = function(id) {
      return this.channelsDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    this.channelsListWithHttpInfo = function(opts) {
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

      var authNames = ['Basic'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/channels/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Number of results to return per page.
     * @param {Number} opts.offset The initial index from which to return the results.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    this.channelsList = function(opts) {
      return this.channelsListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Channel} and HTTP response
     */
    this.channelsPartialUpdateWithHttpInfo = function(id, data) {
      var postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling channelsPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling channelsPartialUpdate");
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
      var returnType = Channel;
      return this.apiClient.callApi(
        '/channels/{id}/', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Channel}
     */
    this.channelsPartialUpdate = function(id, data) {
      return this.channelsPartialUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Channel} and HTTP response
     */
    this.channelsReadWithHttpInfo = function(id) {
      var postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling channelsRead");
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
      var returnType = Channel;
      return this.apiClient.callApi(
        '/channels/{id}/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Channel}
     */
    this.channelsRead = function(id) {
      return this.channelsReadWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Channel} and HTTP response
     */
    this.channelsUpdateWithHttpInfo = function(id, data) {
      var postBody = data;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling channelsUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling channelsUpdate");
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
      var returnType = Channel;
      return this.apiClient.callApi(
        '/channels/{id}/', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * @param {Number} id A unique integer value identifying this channel.
     * @param {module:model/Channel} data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Channel}
     */
    this.channelsUpdate = function(id, data) {
      return this.channelsUpdateWithHttpInfo(id, data)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
