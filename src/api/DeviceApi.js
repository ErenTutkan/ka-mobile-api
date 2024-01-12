/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 08.10.2023
 *
 * The version of the OpenAPI document: v4.0.7
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import DeviceDTO from '../model/DeviceDTO';

/**
* Device service.
* @module api/DeviceApi
* @version v4.0.7
*/
export default class DeviceApi {

    /**
    * Constructs a new DeviceApi. 
    * @alias module:api/DeviceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add new device
     * @param {module:model/DeviceDTO} deviceDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Number} and HTTP response
     */
    deviceControllerAddNewDeviceWithHttpInfo(deviceDTO) {
      let postBody = deviceDTO;
      // verify the required parameter 'deviceDTO' is set
      if (deviceDTO === undefined || deviceDTO === null) {
        throw new Error("Missing the required parameter 'deviceDTO' when calling deviceControllerAddNewDevice");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'Number';
      return this.apiClient.callApi(
        '/device', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add new device
     * @param {module:model/DeviceDTO} deviceDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Number}
     */
    deviceControllerAddNewDevice(deviceDTO) {
      return this.deviceControllerAddNewDeviceWithHttpInfo(deviceDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    deviceControllerDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deviceControllerDelete");
      }

      let pathParams = {
        'id': id
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
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/device/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    deviceControllerDelete(id) {
      return this.deviceControllerDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/DeviceDTO>} and HTTP response
     */
    deviceControllerFindUserAllItemsWithHttpInfo() {
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
      let returnType = [DeviceDTO];
      return this.apiClient.callApi(
        '/device/findUserAllItems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/DeviceDTO>}
     */
    deviceControllerFindUserAllItems() {
      return this.deviceControllerFindUserAllItemsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeviceDTO} and HTTP response
     */
    deviceControllerFindUserItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deviceControllerFindUserItem");
      }

      let pathParams = {
        'id': id
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
      let returnType = DeviceDTO;
      return this.apiClient.callApi(
        '/device/findUserItem/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeviceDTO}
     */
    deviceControllerFindUserItem(id) {
      return this.deviceControllerFindUserItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update device info
     * @param {Number} id 
     * @param {module:model/DeviceDTO} deviceDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Boolean} and HTTP response
     */
    deviceControllerUpdateWithHttpInfo(id, deviceDTO) {
      let postBody = deviceDTO;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deviceControllerUpdate");
      }
      // verify the required parameter 'deviceDTO' is set
      if (deviceDTO === undefined || deviceDTO === null) {
        throw new Error("Missing the required parameter 'deviceDTO' when calling deviceControllerUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'Boolean';
      return this.apiClient.callApi(
        '/device/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update device info
     * @param {Number} id 
     * @param {module:model/DeviceDTO} deviceDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Boolean}
     */
    deviceControllerUpdate(id, deviceDTO) {
      return this.deviceControllerUpdateWithHttpInfo(id, deviceDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
