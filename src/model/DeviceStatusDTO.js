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
 * The DeviceStatusDTO model module.
 * @module model/DeviceStatusDTO
 * @version v4.0.0.7
 */
class DeviceStatusDTO {
    /**
     * Constructs a new <code>DeviceStatusDTO</code>.
     * @alias module:model/DeviceStatusDTO
     * @param uuid {String} Device UUID
     */
    constructor(uuid) { 
        
        DeviceStatusDTO.initialize(this, uuid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid) { 
        obj['uuid'] = uuid;
    }

    /**
     * Constructs a <code>DeviceStatusDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceStatusDTO} obj Optional instance to populate.
     * @return {module:model/DeviceStatusDTO} The populated <code>DeviceStatusDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeviceStatusDTO();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeviceStatusDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeviceStatusDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeviceStatusDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }

        return true;
    }


}

DeviceStatusDTO.RequiredProperties = ["uuid"];

/**
 * Device UUID
 * @member {String} uuid
 */
DeviceStatusDTO.prototype['uuid'] = undefined;






export default DeviceStatusDTO;

