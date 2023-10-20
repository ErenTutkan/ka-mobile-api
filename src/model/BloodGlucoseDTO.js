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
 * The BloodGlucoseDTO model module.
 * @module model/BloodGlucoseDTO
 * @version v4.0.3
 */
class BloodGlucoseDTO {
    /**
     * Constructs a new <code>BloodGlucoseDTO</code>.
     * @alias module:model/BloodGlucoseDTO
     * @param measurementDate {Date} Measurement Date
     * @param glucoseValue {Number} Measurement Value
     * @param hungryStatus {module:model/BloodGlucoseDTO.HungryStatusEnum} Hungry Status
     */
    constructor(measurementDate, glucoseValue, hungryStatus) { 
        
        BloodGlucoseDTO.initialize(this, measurementDate, glucoseValue, hungryStatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, measurementDate, glucoseValue, hungryStatus) { 
        obj['measurementDate'] = measurementDate;
        obj['glucoseValue'] = glucoseValue;
        obj['hungryStatus'] = hungryStatus || 'AfterMeal';
    }

    /**
     * Constructs a <code>BloodGlucoseDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BloodGlucoseDTO} obj Optional instance to populate.
     * @return {module:model/BloodGlucoseDTO} The populated <code>BloodGlucoseDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BloodGlucoseDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('measurementDate')) {
                obj['measurementDate'] = ApiClient.convertToType(data['measurementDate'], 'Date');
            }
            if (data.hasOwnProperty('glucoseValue')) {
                obj['glucoseValue'] = ApiClient.convertToType(data['glucoseValue'], 'Number');
            }
            if (data.hasOwnProperty('hungryStatus')) {
                obj['hungryStatus'] = ApiClient.convertToType(data['hungryStatus'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('scaleCaption')) {
                obj['scaleCaption'] = ApiClient.convertToType(data['scaleCaption'], 'String');
            }
            if (data.hasOwnProperty('scaleValue')) {
                obj['scaleValue'] = ApiClient.convertToType(data['scaleValue'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BloodGlucoseDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BloodGlucoseDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BloodGlucoseDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['hungryStatus'] && !(typeof data['hungryStatus'] === 'string' || data['hungryStatus'] instanceof String)) {
            throw new Error("Expected the field `hungryStatus` to be a primitive type in the JSON string but got " + data['hungryStatus']);
        }
        // ensure the json data is a string
        if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
            throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }
        // ensure the json data is a string
        if (data['scaleCaption'] && !(typeof data['scaleCaption'] === 'string' || data['scaleCaption'] instanceof String)) {
            throw new Error("Expected the field `scaleCaption` to be a primitive type in the JSON string but got " + data['scaleCaption']);
        }

        return true;
    }


}

BloodGlucoseDTO.RequiredProperties = ["measurementDate", "glucoseValue", "hungryStatus"];

/**
 * id
 * @member {Number} id
 */
BloodGlucoseDTO.prototype['id'] = undefined;

/**
 * userId
 * @member {Number} userId
 */
BloodGlucoseDTO.prototype['userId'] = undefined;

/**
 * Measurement Date
 * @member {Date} measurementDate
 */
BloodGlucoseDTO.prototype['measurementDate'] = undefined;

/**
 * Measurement Value
 * @member {Number} glucoseValue
 */
BloodGlucoseDTO.prototype['glucoseValue'] = undefined;

/**
 * Hungry Status
 * @member {module:model/BloodGlucoseDTO.HungryStatusEnum} hungryStatus
 * @default 'AfterMeal'
 */
BloodGlucoseDTO.prototype['hungryStatus'] = 'AfterMeal';

/**
 * tag
 * @member {String} tag
 */
BloodGlucoseDTO.prototype['tag'] = undefined;

/**
 * note
 * @member {String} note
 */
BloodGlucoseDTO.prototype['note'] = undefined;

/**
 * scaleCaption
 * @member {String} scaleCaption
 */
BloodGlucoseDTO.prototype['scaleCaption'] = undefined;

/**
 * scaleValue
 * @member {Number} scaleValue
 */
BloodGlucoseDTO.prototype['scaleValue'] = undefined;





/**
 * Allowed values for the <code>hungryStatus</code> property.
 * @enum {String}
 * @readonly
 */
BloodGlucoseDTO['HungryStatusEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "BeforeMeal"
     * @const
     */
    "BeforeMeal": "BeforeMeal",

    /**
     * value: "AfterMeal"
     * @const
     */
    "AfterMeal": "AfterMeal"
};



export default BloodGlucoseDTO;

