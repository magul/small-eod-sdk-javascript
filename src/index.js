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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddressDataNested', 'model/CaseCount', 'model/Channel', 'model/Collection', 'model/Description', 'model/Event', 'model/ExternalIdentifierNested', 'model/Feature', 'model/FeatureOption', 'model/File', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse20010', 'model/InlineResponse20011', 'model/InlineResponse20012', 'model/InlineResponse20013', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/InlineResponse2008', 'model/InlineResponse2009', 'model/Institution', 'model/Letter', 'model/ModelCase', 'model/NestedFeatureOption', 'model/Note', 'model/RefreshTokenRequest', 'model/Request', 'model/SignRequest', 'model/Tag', 'model/TokenResponse', 'model/TokenSet', 'model/User', 'small_eod/CasesApi', 'small_eod/ChannelsApi', 'small_eod/CollectionsApi', 'small_eod/DescriptionsApi', 'small_eod/EventsApi', 'small_eod/FeaturesApi', 'small_eod/InstitutionsApi', 'small_eod/LettersApi', 'small_eod/NotesApi', 'small_eod/TagsApi', 'small_eod/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddressDataNested'), require('./model/CaseCount'), require('./model/Channel'), require('./model/Collection'), require('./model/Description'), require('./model/Event'), require('./model/ExternalIdentifierNested'), require('./model/Feature'), require('./model/FeatureOption'), require('./model/File'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse20010'), require('./model/InlineResponse20011'), require('./model/InlineResponse20012'), require('./model/InlineResponse20013'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/InlineResponse2008'), require('./model/InlineResponse2009'), require('./model/Institution'), require('./model/Letter'), require('./model/ModelCase'), require('./model/NestedFeatureOption'), require('./model/Note'), require('./model/RefreshTokenRequest'), require('./model/Request'), require('./model/SignRequest'), require('./model/Tag'), require('./model/TokenResponse'), require('./model/TokenSet'), require('./model/User'), require('./small_eod/CasesApi'), require('./small_eod/ChannelsApi'), require('./small_eod/CollectionsApi'), require('./small_eod/DescriptionsApi'), require('./small_eod/EventsApi'), require('./small_eod/FeaturesApi'), require('./small_eod/InstitutionsApi'), require('./small_eod/LettersApi'), require('./small_eod/NotesApi'), require('./small_eod/TagsApi'), require('./small_eod/UsersApi'));
  }
}(function(ApiClient, AddressDataNested, CaseCount, Channel, Collection, Description, Event, ExternalIdentifierNested, Feature, FeatureOption, File, InlineResponse200, InlineResponse2001, InlineResponse20010, InlineResponse20011, InlineResponse20012, InlineResponse20013, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, InlineResponse2008, InlineResponse2009, Institution, Letter, ModelCase, NestedFeatureOption, Note, RefreshTokenRequest, Request, SignRequest, Tag, TokenResponse, TokenSet, User, CasesApi, ChannelsApi, CollectionsApi, DescriptionsApi, EventsApi, FeaturesApi, InstitutionsApi, LettersApi, NotesApi, TagsApi, UsersApi) {
  'use strict';

  /**
   * JS API client generated by OpenAPI Generator.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SmallEodClient = require('index'); // See note below*.
   * var xxxSvc = new SmallEodClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SmallEodClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SmallEodClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SmallEodClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.4
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddressDataNested model constructor.
     * @property {module:model/AddressDataNested}
     */
    AddressDataNested: AddressDataNested,
    /**
     * The CaseCount model constructor.
     * @property {module:model/CaseCount}
     */
    CaseCount: CaseCount,
    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel: Channel,
    /**
     * The Collection model constructor.
     * @property {module:model/Collection}
     */
    Collection: Collection,
    /**
     * The Description model constructor.
     * @property {module:model/Description}
     */
    Description: Description,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The ExternalIdentifierNested model constructor.
     * @property {module:model/ExternalIdentifierNested}
     */
    ExternalIdentifierNested: ExternalIdentifierNested,
    /**
     * The Feature model constructor.
     * @property {module:model/Feature}
     */
    Feature: Feature,
    /**
     * The FeatureOption model constructor.
     * @property {module:model/FeatureOption}
     */
    FeatureOption: FeatureOption,
    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File: File,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse20010 model constructor.
     * @property {module:model/InlineResponse20010}
     */
    InlineResponse20010: InlineResponse20010,
    /**
     * The InlineResponse20011 model constructor.
     * @property {module:model/InlineResponse20011}
     */
    InlineResponse20011: InlineResponse20011,
    /**
     * The InlineResponse20012 model constructor.
     * @property {module:model/InlineResponse20012}
     */
    InlineResponse20012: InlineResponse20012,
    /**
     * The InlineResponse20013 model constructor.
     * @property {module:model/InlineResponse20013}
     */
    InlineResponse20013: InlineResponse20013,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The InlineResponse2008 model constructor.
     * @property {module:model/InlineResponse2008}
     */
    InlineResponse2008: InlineResponse2008,
    /**
     * The InlineResponse2009 model constructor.
     * @property {module:model/InlineResponse2009}
     */
    InlineResponse2009: InlineResponse2009,
    /**
     * The Institution model constructor.
     * @property {module:model/Institution}
     */
    Institution: Institution,
    /**
     * The Letter model constructor.
     * @property {module:model/Letter}
     */
    Letter: Letter,
    /**
     * The ModelCase model constructor.
     * @property {module:model/ModelCase}
     */
    ModelCase: ModelCase,
    /**
     * The NestedFeatureOption model constructor.
     * @property {module:model/NestedFeatureOption}
     */
    NestedFeatureOption: NestedFeatureOption,
    /**
     * The Note model constructor.
     * @property {module:model/Note}
     */
    Note: Note,
    /**
     * The RefreshTokenRequest model constructor.
     * @property {module:model/RefreshTokenRequest}
     */
    RefreshTokenRequest: RefreshTokenRequest,
    /**
     * The Request model constructor.
     * @property {module:model/Request}
     */
    Request: Request,
    /**
     * The SignRequest model constructor.
     * @property {module:model/SignRequest}
     */
    SignRequest: SignRequest,
    /**
     * The Tag model constructor.
     * @property {module:model/Tag}
     */
    Tag: Tag,
    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse: TokenResponse,
    /**
     * The TokenSet model constructor.
     * @property {module:model/TokenSet}
     */
    TokenSet: TokenSet,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The CasesApi service constructor.
     * @property {module:small_eod/CasesApi}
     */
    CasesApi: CasesApi,
    /**
     * The ChannelsApi service constructor.
     * @property {module:small_eod/ChannelsApi}
     */
    ChannelsApi: ChannelsApi,
    /**
     * The CollectionsApi service constructor.
     * @property {module:small_eod/CollectionsApi}
     */
    CollectionsApi: CollectionsApi,
    /**
     * The DescriptionsApi service constructor.
     * @property {module:small_eod/DescriptionsApi}
     */
    DescriptionsApi: DescriptionsApi,
    /**
     * The EventsApi service constructor.
     * @property {module:small_eod/EventsApi}
     */
    EventsApi: EventsApi,
    /**
     * The FeaturesApi service constructor.
     * @property {module:small_eod/FeaturesApi}
     */
    FeaturesApi: FeaturesApi,
    /**
     * The InstitutionsApi service constructor.
     * @property {module:small_eod/InstitutionsApi}
     */
    InstitutionsApi: InstitutionsApi,
    /**
     * The LettersApi service constructor.
     * @property {module:small_eod/LettersApi}
     */
    LettersApi: LettersApi,
    /**
     * The NotesApi service constructor.
     * @property {module:small_eod/NotesApi}
     */
    NotesApi: NotesApi,
    /**
     * The TagsApi service constructor.
     * @property {module:small_eod/TagsApi}
     */
    TagsApi: TagsApi,
    /**
     * The UsersApi service constructor.
     * @property {module:small_eod/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
