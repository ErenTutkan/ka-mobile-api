/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 08.10.2023
 *
 * The version of the OpenAPI document: v4.0.0.7
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DeviceStatusDTO from '../model/DeviceStatusDTO';
import UserCreateDTO from '../model/UserCreateDTO';
import UserDetailDTO from '../model/UserDetailDTO';
import UserLoginDTO from '../model/UserLoginDTO';
import UserTokenDTO from '../model/UserTokenDTO';

/**
* Authorization service.
* @module api/AuthorizationApi
* @version v4.0.0.7
*/
export default class AuthorizationApi {

    /**
    * Constructs a new AuthorizationApi. 
    * @alias module:api/AuthorizationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Find Device
     * @param {module:model/DeviceStatusDTO} deviceStatusDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link String} and HTTP response
     */
    authControllerGetDeviceStatusWithHttpInfo(deviceStatusDTO) {
      let postBody = deviceStatusDTO;
      // verify the required parameter 'deviceStatusDTO' is set
      if (deviceStatusDTO === undefined || deviceStatusDTO === null) {
        throw new Error("Missing the required parameter 'deviceStatusDTO' when calling authControllerGetDeviceStatus");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/auth/get-device-status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find Device
     * @param {module:model/DeviceStatusDTO} deviceStatusDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link String}
     */
    authControllerGetDeviceStatus(deviceStatusDTO) {
      return this.authControllerGetDeviceStatusWithHttpInfo(deviceStatusDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Logged User Detail
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserDetailDTO} and HTTP response
     */
    authControllerLoggedDetailWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserDetailDTO;
      return this.apiClient.callApi(
        '/auth/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Logged User Detail
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserDetailDTO}
     */
    authControllerLoggedDetail() {
      return this.authControllerLoggedDetailWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Login
     * @param {module:model/UserLoginDTO} userLoginDTO User credentials. username field must be users email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserTokenDTO} and HTTP response
     */
    authControllerLoginWithHttpInfo(userLoginDTO) {
      let postBody = userLoginDTO;
      // verify the required parameter 'userLoginDTO' is set
      if (userLoginDTO === undefined || userLoginDTO === null) {
        throw new Error("Missing the required parameter 'userLoginDTO' when calling authControllerLogin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserTokenDTO;
      return this.apiClient.callApi(
        '/auth/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Login
     * @param {module:model/UserLoginDTO} userLoginDTO User credentials. username field must be users email
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserTokenDTO}
     */
    authControllerLogin(userLoginDTO) {
      return this.authControllerLoginWithHttpInfo(userLoginDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register user
     * @param {module:model/UserCreateDTO} userCreateDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UserTokenDTO} and HTTP response
     */
    authControllerRegisterUserWithHttpInfo(userCreateDTO) {
      let postBody = userCreateDTO;
      // verify the required parameter 'userCreateDTO' is set
      if (userCreateDTO === undefined || userCreateDTO === null) {
        throw new Error("Missing the required parameter 'userCreateDTO' when calling authControllerRegisterUser");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserTokenDTO;
      return this.apiClient.callApi(
        '/auth/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Register user
     * @param {module:model/UserCreateDTO} userCreateDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserTokenDTO}
     */
    authControllerRegisterUser(userCreateDTO) {
      return this.authControllerRegisterUserWithHttpInfo(userCreateDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
