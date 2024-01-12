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
 * The ApprovalDTO model module.
 * @module model/ApprovalDTO
 * @version v4.0.7
 */
class ApprovalDTO {
    /**
     * Constructs a new <code>ApprovalDTO</code>.
     * @alias module:model/ApprovalDTO
     * @param agreementId {Number} agreementId
     * @param ip {String} ip address
     * @param device {String} device
     * @param kvkk {String} kvkk approval
     * @param sms {String} sms approval
     * @param adv {String} adv approval
     * @param email {String} email approval
     * @param approvedDate {Date} approval date
     */
    constructor(agreementId, ip, device, kvkk, sms, adv, email, approvedDate) { 
        
        ApprovalDTO.initialize(this, agreementId, ip, device, kvkk, sms, adv, email, approvedDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, agreementId, ip, device, kvkk, sms, adv, email, approvedDate) { 
        obj['agreementId'] = agreementId;
        obj['ip'] = ip;
        obj['device'] = device;
        obj['kvkk'] = kvkk;
        obj['sms'] = sms;
        obj['adv'] = adv;
        obj['email'] = email;
        obj['approvedDate'] = approvedDate;
    }

    /**
     * Constructs a <code>ApprovalDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApprovalDTO} obj Optional instance to populate.
     * @return {module:model/ApprovalDTO} The populated <code>ApprovalDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApprovalDTO();

            if (data.hasOwnProperty('agreementId')) {
                obj['agreementId'] = ApiClient.convertToType(data['agreementId'], 'Number');
            }
            if (data.hasOwnProperty('ip')) {
                obj['ip'] = ApiClient.convertToType(data['ip'], 'String');
            }
            if (data.hasOwnProperty('device')) {
                obj['device'] = ApiClient.convertToType(data['device'], 'String');
            }
            if (data.hasOwnProperty('kvkk')) {
                obj['kvkk'] = ApiClient.convertToType(data['kvkk'], 'String');
            }
            if (data.hasOwnProperty('sms')) {
                obj['sms'] = ApiClient.convertToType(data['sms'], 'String');
            }
            if (data.hasOwnProperty('adv')) {
                obj['adv'] = ApiClient.convertToType(data['adv'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('approvedDate')) {
                obj['approvedDate'] = ApiClient.convertToType(data['approvedDate'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApprovalDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApprovalDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApprovalDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ip'] && !(typeof data['ip'] === 'string' || data['ip'] instanceof String)) {
            throw new Error("Expected the field `ip` to be a primitive type in the JSON string but got " + data['ip']);
        }
        // ensure the json data is a string
        if (data['device'] && !(typeof data['device'] === 'string' || data['device'] instanceof String)) {
            throw new Error("Expected the field `device` to be a primitive type in the JSON string but got " + data['device']);
        }
        // ensure the json data is a string
        if (data['kvkk'] && !(typeof data['kvkk'] === 'string' || data['kvkk'] instanceof String)) {
            throw new Error("Expected the field `kvkk` to be a primitive type in the JSON string but got " + data['kvkk']);
        }
        // ensure the json data is a string
        if (data['sms'] && !(typeof data['sms'] === 'string' || data['sms'] instanceof String)) {
            throw new Error("Expected the field `sms` to be a primitive type in the JSON string but got " + data['sms']);
        }
        // ensure the json data is a string
        if (data['adv'] && !(typeof data['adv'] === 'string' || data['adv'] instanceof String)) {
            throw new Error("Expected the field `adv` to be a primitive type in the JSON string but got " + data['adv']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }

        return true;
    }


}

ApprovalDTO.RequiredProperties = ["agreementId", "ip", "device", "kvkk", "sms", "adv", "email", "approvedDate"];

/**
 * agreementId
 * @member {Number} agreementId
 */
ApprovalDTO.prototype['agreementId'] = undefined;

/**
 * ip address
 * @member {String} ip
 */
ApprovalDTO.prototype['ip'] = undefined;

/**
 * device
 * @member {String} device
 */
ApprovalDTO.prototype['device'] = undefined;

/**
 * kvkk approval
 * @member {String} kvkk
 */
ApprovalDTO.prototype['kvkk'] = undefined;

/**
 * sms approval
 * @member {String} sms
 */
ApprovalDTO.prototype['sms'] = undefined;

/**
 * adv approval
 * @member {String} adv
 */
ApprovalDTO.prototype['adv'] = undefined;

/**
 * email approval
 * @member {String} email
 */
ApprovalDTO.prototype['email'] = undefined;

/**
 * approval date
 * @member {Date} approvedDate
 */
ApprovalDTO.prototype['approvedDate'] = undefined;






export default ApprovalDTO;

