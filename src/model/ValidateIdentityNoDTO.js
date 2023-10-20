/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 08.10.2023
 *
 * The version of the OpenAPI document: v4.0.3
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ValidateIdentityNoDTO model module.
 * @module model/ValidateIdentityNoDTO
 * @version v4.0.3
 */
class ValidateIdentityNoDTO {
    /**
     * Constructs a new <code>ValidateIdentityNoDTO</code>.
     * @alias module:model/ValidateIdentityNoDTO
     * @param identityNo {Number} User ID
     * @param name {String} Name
     * @param surname {String} Surname
     * @param year {Number} Year of birthday
     */
    constructor(identityNo, name, surname, year) { 
        
        ValidateIdentityNoDTO.initialize(this, identityNo, name, surname, year);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, identityNo, name, surname, year) { 
        obj['identityNo'] = identityNo;
        obj['name'] = name;
        obj['surname'] = surname;
        obj['year'] = year;
    }

    /**
     * Constructs a <code>ValidateIdentityNoDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidateIdentityNoDTO} obj Optional instance to populate.
     * @return {module:model/ValidateIdentityNoDTO} The populated <code>ValidateIdentityNoDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ValidateIdentityNoDTO();

            if (data.hasOwnProperty('identityNo')) {
                obj['identityNo'] = ApiClient.convertToType(data['identityNo'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('year')) {
                obj['year'] = ApiClient.convertToType(data['year'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidateIdentityNoDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidateIdentityNoDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ValidateIdentityNoDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['surname'] && !(typeof data['surname'] === 'string' || data['surname'] instanceof String)) {
            throw new Error("Expected the field `surname` to be a primitive type in the JSON string but got " + data['surname']);
        }

        return true;
    }


}

ValidateIdentityNoDTO.RequiredProperties = ["identityNo", "name", "surname", "year"];

/**
 * User ID
 * @member {Number} identityNo
 */
ValidateIdentityNoDTO.prototype['identityNo'] = undefined;

/**
 * Name
 * @member {String} name
 */
ValidateIdentityNoDTO.prototype['name'] = undefined;

/**
 * Surname
 * @member {String} surname
 */
ValidateIdentityNoDTO.prototype['surname'] = undefined;

/**
 * Year of birthday
 * @member {Number} year
 */
ValidateIdentityNoDTO.prototype['year'] = undefined;






export default ValidateIdentityNoDTO;

