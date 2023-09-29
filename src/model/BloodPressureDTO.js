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
 * The BloodPressureDTO model module.
 * @module model/BloodPressureDTO
 * @version v4.0.0.4
 */
class BloodPressureDTO {
    /**
     * Constructs a new <code>BloodPressureDTO</code>.
     * @alias module:model/BloodPressureDTO
     * @param measurementDate {Date} measurementDate
     * @param big {Number} Measurement Value
     * @param small {Number} Measurement Small Value
     * @param pulse {Number} Pulse
     * @param bodyPosition {module:model/BloodPressureDTO.BodyPositionEnum} Body Position
     * @param period {module:model/BloodPressureDTO.PeriodEnum} period
     */
    constructor(measurementDate, big, small, pulse, bodyPosition, period) { 
        
        BloodPressureDTO.initialize(this, measurementDate, big, small, pulse, bodyPosition, period);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, measurementDate, big, small, pulse, bodyPosition, period) { 
        obj['measurementDate'] = measurementDate;
        obj['big'] = big;
        obj['small'] = small;
        obj['pulse'] = pulse;
        obj['bodyPosition'] = bodyPosition || 'LeftArm';
        obj['period'] = period || 'OtherTime';
    }

    /**
     * Constructs a <code>BloodPressureDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BloodPressureDTO} obj Optional instance to populate.
     * @return {module:model/BloodPressureDTO} The populated <code>BloodPressureDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BloodPressureDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('measurementDate')) {
                obj['measurementDate'] = ApiClient.convertToType(data['measurementDate'], 'Date');
            }
            if (data.hasOwnProperty('big')) {
                obj['big'] = ApiClient.convertToType(data['big'], 'Number');
            }
            if (data.hasOwnProperty('small')) {
                obj['small'] = ApiClient.convertToType(data['small'], 'Number');
            }
            if (data.hasOwnProperty('pulse')) {
                obj['pulse'] = ApiClient.convertToType(data['pulse'], 'Number');
            }
            if (data.hasOwnProperty('bodyPosition')) {
                obj['bodyPosition'] = ApiClient.convertToType(data['bodyPosition'], 'String');
            }
            if (data.hasOwnProperty('period')) {
                obj['period'] = ApiClient.convertToType(data['period'], 'String');
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
     * Validates the JSON data with respect to <code>BloodPressureDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BloodPressureDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BloodPressureDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['bodyPosition'] && !(typeof data['bodyPosition'] === 'string' || data['bodyPosition'] instanceof String)) {
            throw new Error("Expected the field `bodyPosition` to be a primitive type in the JSON string but got " + data['bodyPosition']);
        }
        // ensure the json data is a string
        if (data['period'] && !(typeof data['period'] === 'string' || data['period'] instanceof String)) {
            throw new Error("Expected the field `period` to be a primitive type in the JSON string but got " + data['period']);
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

BloodPressureDTO.RequiredProperties = ["measurementDate", "big", "small", "pulse", "bodyPosition", "period"];

/**
 * id
 * @member {Number} id
 */
BloodPressureDTO.prototype['id'] = undefined;

/**
 * userId
 * @member {Number} userId
 */
BloodPressureDTO.prototype['userId'] = undefined;

/**
 * measurementDate
 * @member {Date} measurementDate
 */
BloodPressureDTO.prototype['measurementDate'] = undefined;

/**
 * Measurement Value
 * @member {Number} big
 */
BloodPressureDTO.prototype['big'] = undefined;

/**
 * Measurement Small Value
 * @member {Number} small
 */
BloodPressureDTO.prototype['small'] = undefined;

/**
 * Pulse
 * @member {Number} pulse
 */
BloodPressureDTO.prototype['pulse'] = undefined;

/**
 * Body Position
 * @member {module:model/BloodPressureDTO.BodyPositionEnum} bodyPosition
 * @default 'LeftArm'
 */
BloodPressureDTO.prototype['bodyPosition'] = 'LeftArm';

/**
 * period
 * @member {module:model/BloodPressureDTO.PeriodEnum} period
 * @default 'OtherTime'
 */
BloodPressureDTO.prototype['period'] = 'OtherTime';

/**
 * tag
 * @member {String} tag
 */
BloodPressureDTO.prototype['tag'] = undefined;

/**
 * note
 * @member {String} note
 */
BloodPressureDTO.prototype['note'] = undefined;

/**
 * scaleCaption
 * @member {String} scaleCaption
 */
BloodPressureDTO.prototype['scaleCaption'] = undefined;

/**
 * scaleValue
 * @member {Number} scaleValue
 */
BloodPressureDTO.prototype['scaleValue'] = undefined;





/**
 * Allowed values for the <code>bodyPosition</code> property.
 * @enum {String}
 * @readonly
 */
BloodPressureDTO['BodyPositionEnum'] = {

    /**
     * value: "LeftArm"
     * @const
     */
    "LeftArm": "LeftArm",

    /**
     * value: "RightArm"
     * @const
     */
    "RightArm": "RightArm"
};


/**
 * Allowed values for the <code>period</code> property.
 * @enum {String}
 * @readonly
 */
BloodPressureDTO['PeriodEnum'] = {

    /**
     * value: "Morning"
     * @const
     */
    "Morning": "Morning",

    /**
     * value: "Noon"
     * @const
     */
    "Noon": "Noon",

    /**
     * value: "Evening"
     * @const
     */
    "Evening": "Evening",

    /**
     * value: "BeforeBed"
     * @const
     */
    "BeforeBed": "BeforeBed",

    /**
     * value: "OtherTime"
     * @const
     */
    "OtherTime": "OtherTime"
};



export default BloodPressureDTO;

