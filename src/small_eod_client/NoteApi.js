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
    define(['ApiClient', 'model/Error', 'model/Note'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Note'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.NoteApi = factory(root.SmallEodClient.ApiClient, root.SmallEodClient.Error, root.SmallEodClient.Note);
  }
}(this, function(ApiClient, Error, Note) {
  'use strict';

  /**
   * Note service.
   * @module small_eod_client/NoteApi
   * @version 1.0.0
   */

  /**
   * Constructs a new NoteApi. 
   * @alias module:small_eod_client/NoteApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a note
     * @param {module:model/Note} note New note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Note} and HTTP response
     */
    this.createNoteWithHttpInfo = function(note) {
      var postBody = note;
      // verify the required parameter 'note' is set
      if (note === undefined || note === null) {
        throw new Error("Missing the required parameter 'note' when calling createNote");
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
      var returnType = Note;
      return this.apiClient.callApi(
        '/note', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a note
     * @param {module:model/Note} note New note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Note}
     */
    this.createNote = function(note) {
      return this.createNoteWithHttpInfo(note)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a single note based on the ID supplied
     * @param {Number} noteId The id of the note to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteNoteWithHttpInfo = function(noteId) {
      var postBody = null;
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling deleteNote");
      }

      var pathParams = {
        'noteId': noteId
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
        '/note/{noteId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a single note based on the ID supplied
     * @param {Number} noteId The id of the note to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteNote = function(noteId) {
      return this.deleteNoteWithHttpInfo(noteId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all notes of case
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {Number} opts.offset How many items skip in return
     * @param {Number} opts._case Case ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Note>} and HTTP response
     */
    this.listNoteWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'case': opts['_case'],
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
      var returnType = [Note];
      return this.apiClient.callApi(
        '/note', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all notes of case
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {Number} opts.offset How many items skip in return
     * @param {Number} opts._case Case ID
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Note>}
     */
    this.listNote = function(opts) {
      return this.listNoteWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Info for a specific note
     * @param {Number} noteId The id of the note to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Note} and HTTP response
     */
    this.showNoteByIdWithHttpInfo = function(noteId) {
      var postBody = null;
      // verify the required parameter 'noteId' is set
      if (noteId === undefined || noteId === null) {
        throw new Error("Missing the required parameter 'noteId' when calling showNoteById");
      }

      var pathParams = {
        'noteId': noteId
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
      var returnType = Note;
      return this.apiClient.callApi(
        '/note/{noteId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Info for a specific note
     * @param {Number} noteId The id of the note to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Note}
     */
    this.showNoteById = function(noteId) {
      return this.showNoteByIdWithHttpInfo(noteId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
