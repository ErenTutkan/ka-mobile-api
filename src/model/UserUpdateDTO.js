/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 11.07.2023
 *
 * The version of the OpenAPI document: v4.0.0.4
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserUpdateDTO model module.
 * @module model/UserUpdateDTO
 * @version v4.0.0.4
 */
class UserUpdateDTO {
    /**
     * Constructs a new <code>UserUpdateDTO</code>.
     * @alias module:model/UserUpdateDTO
     * @param name {String} Name
     * @param surname {String} Surname
     * @param birthDay {Date} Birth day
     * @param gender {module:model/UserUpdateDTO.GenderEnum} Gender
     * @param mobilePhone {String} Mobile Phone
     */
    constructor(name, surname, birthDay, gender, mobilePhone) { 
        
        UserUpdateDTO.initialize(this, name, surname, birthDay, gender, mobilePhone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, surname, birthDay, gender, mobilePhone) { 
        obj['name'] = name;
        obj['surname'] = surname;
        obj['birthDay'] = birthDay;
        obj['gender'] = gender;
        obj['mobilePhone'] = mobilePhone;
    }

    /**
     * Constructs a <code>UserUpdateDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUpdateDTO} obj Optional instance to populate.
     * @return {module:model/UserUpdateDTO} The populated <code>UserUpdateDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdateDTO();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('identityNo')) {
                obj['identityNo'] = ApiClient.convertToType(data['identityNo'], 'String');
            }
            if (data.hasOwnProperty('birthDay')) {
                obj['birthDay'] = ApiClient.convertToType(data['birthDay'], 'Date');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
            }
            if (data.hasOwnProperty('height')) {
                obj['height'] = ApiClient.convertToType(data['height'], 'Number');
            }
            if (data.hasOwnProperty('mobilePhone')) {
                obj['mobilePhone'] = ApiClient.convertToType(data['mobilePhone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserUpdateDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserUpdateDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserUpdateDTO.RequiredProperties) {
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
        // ensure the json data is a string
        if (data['identityNo'] && !(typeof data['identityNo'] === 'string' || data['identityNo'] instanceof String)) {
            throw new Error("Expected the field `identityNo` to be a primitive type in the JSON string but got " + data['identityNo']);
        }
        // ensure the json data is a string
        if (data['gender'] && !(typeof data['gender'] === 'string' || data['gender'] instanceof String)) {
            throw new Error("Expected the field `gender` to be a primitive type in the JSON string but got " + data['gender']);
        }
        // ensure the json data is a string
        if (data['mobilePhone'] && !(typeof data['mobilePhone'] === 'string' || data['mobilePhone'] instanceof String)) {
            throw new Error("Expected the field `mobilePhone` to be a primitive type in the JSON string but got " + data['mobilePhone']);
        }

        return true;
    }


}

UserUpdateDTO.RequiredProperties = ["name", "surname", "birthDay", "gender", "mobilePhone"];

/**
 * Name
 * @member {String} name
 */
UserUpdateDTO.prototype['name'] = undefined;

/**
 * Surname
 * @member {String} surname
 */
UserUpdateDTO.prototype['surname'] = undefined;

/**
 * National identitiy no
 * @member {String} identityNo
 */
UserUpdateDTO.prototype['identityNo'] = undefined;

/**
 * Birth day
 * @member {Date} birthDay
 */
UserUpdateDTO.prototype['birthDay'] = undefined;

/**
 * Gender
 * @member {module:model/UserUpdateDTO.GenderEnum} gender
 */
UserUpdateDTO.prototype['gender'] = undefined;

/**
 * Weight
 * @member {Number} weight
 */
UserUpdateDTO.prototype['weight'] = undefined;

/**
 * Height
 * @member {Number} height
 */
UserUpdateDTO.prototype['height'] = undefined;

/**
 * Mobile Phone
 * @member {String} mobilePhone
 */
UserUpdateDTO.prototype['mobilePhone'] = undefined;





/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
UserUpdateDTO['GenderEnum'] = {

    /**
     * value: "Unselected"
     * @const
     */
    "Unselected": "Unselected",

    /**
     * value: "Male"
     * @const
     */
    "Male": "Male",

    /**
     * value: "Female"
     * @const
     */
    "Female": "Female",

    /**
     * value: "Other"
     * @const
     */
    "Other": "Other"
};



export default UserUpdateDTO;

