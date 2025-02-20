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

import ApiClient from '../ApiClient';

/**
 * The UserDetailDTO model module.
 * @module model/UserDetailDTO
 * @version v4.0.7
 */
class UserDetailDTO {
    /**
     * Constructs a new <code>UserDetailDTO</code>.
     * @alias module:model/UserDetailDTO
     * @param email {String} User email address
     * @param password {String} user password
     * @param registerProvider {module:model/UserDetailDTO.RegisterProviderEnum} User register provider
     * @param name {String} Name
     * @param surname {String} Surname
     * @param identityNo {String} National identitiy no
     * @param birthDay {Date} Birth day
     * @param gender {module:model/UserDetailDTO.GenderEnum} Gender
     * @param mobilePhone {String} Mobile Phone
     * @param aggrementId {Number} Accepted aggrement Id
     */
    constructor(email, password, registerProvider, name, surname, identityNo, birthDay, gender, mobilePhone, aggrementId) { 
        
        UserDetailDTO.initialize(this, email, password, registerProvider, name, surname, identityNo, birthDay, gender, mobilePhone, aggrementId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password, registerProvider, name, surname, identityNo, birthDay, gender, mobilePhone, aggrementId) { 
        obj['email'] = email;
        obj['password'] = password;
        obj['registerProvider'] = registerProvider || 'Manuel';
        obj['name'] = name;
        obj['surname'] = surname;
        obj['identityNo'] = identityNo;
        obj['birthDay'] = birthDay;
        obj['gender'] = gender;
        obj['mobilePhone'] = mobilePhone;
        obj['aggrementId'] = aggrementId;
    }

    /**
     * Constructs a <code>UserDetailDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDetailDTO} obj Optional instance to populate.
     * @return {module:model/UserDetailDTO} The populated <code>UserDetailDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserDetailDTO();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('registerProvider')) {
                obj['registerProvider'] = ApiClient.convertToType(data['registerProvider'], 'String');
            }
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
            if (data.hasOwnProperty('aggrementId')) {
                obj['aggrementId'] = ApiClient.convertToType(data['aggrementId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserDetailDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserDetailDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserDetailDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['registerProvider'] && !(typeof data['registerProvider'] === 'string' || data['registerProvider'] instanceof String)) {
            throw new Error("Expected the field `registerProvider` to be a primitive type in the JSON string but got " + data['registerProvider']);
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

UserDetailDTO.RequiredProperties = ["email", "password", "registerProvider", "name", "surname", "identityNo", "birthDay", "gender", "mobilePhone", "aggrementId"];

/**
 * User email address
 * @member {String} email
 */
UserDetailDTO.prototype['email'] = undefined;

/**
 * user password
 * @member {String} password
 */
UserDetailDTO.prototype['password'] = undefined;

/**
 * User register provider
 * @member {module:model/UserDetailDTO.RegisterProviderEnum} registerProvider
 * @default 'Manuel'
 */
UserDetailDTO.prototype['registerProvider'] = 'Manuel';

/**
 * Name
 * @member {String} name
 */
UserDetailDTO.prototype['name'] = undefined;

/**
 * Surname
 * @member {String} surname
 */
UserDetailDTO.prototype['surname'] = undefined;

/**
 * National identitiy no
 * @member {String} identityNo
 */
UserDetailDTO.prototype['identityNo'] = undefined;

/**
 * Birth day
 * @member {Date} birthDay
 */
UserDetailDTO.prototype['birthDay'] = undefined;

/**
 * Gender
 * @member {module:model/UserDetailDTO.GenderEnum} gender
 */
UserDetailDTO.prototype['gender'] = undefined;

/**
 * Weight
 * @member {Number} weight
 */
UserDetailDTO.prototype['weight'] = undefined;

/**
 * Height
 * @member {Number} height
 */
UserDetailDTO.prototype['height'] = undefined;

/**
 * Mobile Phone
 * @member {String} mobilePhone
 */
UserDetailDTO.prototype['mobilePhone'] = undefined;

/**
 * Accepted aggrement Id
 * @member {Number} aggrementId
 */
UserDetailDTO.prototype['aggrementId'] = undefined;





/**
 * Allowed values for the <code>registerProvider</code> property.
 * @enum {String}
 * @readonly
 */
UserDetailDTO['RegisterProviderEnum'] = {

    /**
     * value: "Manuel"
     * @const
     */
    "Manuel": "Manuel",

    /**
     * value: "Facebook"
     * @const
     */
    "Facebook": "Facebook",

    /**
     * value: "Google"
     * @const
     */
    "Google": "Google",

    /**
     * value: "Device"
     * @const
     */
    "Device": "Device"
};


/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
UserDetailDTO['GenderEnum'] = {

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



export default UserDetailDTO;

