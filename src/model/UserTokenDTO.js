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

import ApiClient from '../ApiClient';

/**
 * The UserTokenDTO model module.
 * @module model/UserTokenDTO
 * @version v4.0.0.7
 */
class UserTokenDTO {
    /**
     * Constructs a new <code>UserTokenDTO</code>.
     * @alias module:model/UserTokenDTO
     * @param accessToken {String} access_token
     * @param refreshToken {String} refreshToken
     */
    constructor(accessToken, refreshToken) { 
        
        UserTokenDTO.initialize(this, accessToken, refreshToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessToken, refreshToken) { 
        obj['accessToken'] = accessToken;
        obj['refreshToken'] = refreshToken;
    }

    /**
     * Constructs a <code>UserTokenDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserTokenDTO} obj Optional instance to populate.
     * @return {module:model/UserTokenDTO} The populated <code>UserTokenDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserTokenDTO();

            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
            }
            if (data.hasOwnProperty('refreshToken')) {
                obj['refreshToken'] = ApiClient.convertToType(data['refreshToken'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserTokenDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserTokenDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserTokenDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accessToken'] && !(typeof data['accessToken'] === 'string' || data['accessToken'] instanceof String)) {
            throw new Error("Expected the field `accessToken` to be a primitive type in the JSON string but got " + data['accessToken']);
        }
        // ensure the json data is a string
        if (data['refreshToken'] && !(typeof data['refreshToken'] === 'string' || data['refreshToken'] instanceof String)) {
            throw new Error("Expected the field `refreshToken` to be a primitive type in the JSON string but got " + data['refreshToken']);
        }

        return true;
    }


}

UserTokenDTO.RequiredProperties = ["accessToken", "refreshToken"];

/**
 * access_token
 * @member {String} accessToken
 */
UserTokenDTO.prototype['accessToken'] = undefined;

/**
 * refreshToken
 * @member {String} refreshToken
 */
UserTokenDTO.prototype['refreshToken'] = undefined;






export default UserTokenDTO;

