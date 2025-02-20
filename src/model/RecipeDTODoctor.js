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
import DoctorDTO from './DoctorDTO';

/**
 * The RecipeDTODoctor model module.
 * @module model/RecipeDTODoctor
 * @version v4.0.7
 */
class RecipeDTODoctor {
    /**
     * Constructs a new <code>RecipeDTODoctor</code>.
     * Doctor info
     * @alias module:model/RecipeDTODoctor
     * @implements module:model/DoctorDTO
     * @param id {Number} Doctor ID
     * @param nameSurname {String} Doctor name and surname
     * @param title {String} Doctor Title
     * @param branch {String} Doctor branch
     * @param imagePath {String} Doctor profile photo ul
     */
    constructor(id, nameSurname, title, branch, imagePath) { 
        DoctorDTO.initialize(this, id, nameSurname, title, branch, imagePath);
        RecipeDTODoctor.initialize(this, id, nameSurname, title, branch, imagePath);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, nameSurname, title, branch, imagePath) { 
        obj['id'] = id;
        obj['nameSurname'] = nameSurname;
        obj['title'] = title;
        obj['branch'] = branch;
        obj['imagePath'] = imagePath;
    }

    /**
     * Constructs a <code>RecipeDTODoctor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecipeDTODoctor} obj Optional instance to populate.
     * @return {module:model/RecipeDTODoctor} The populated <code>RecipeDTODoctor</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecipeDTODoctor();
            DoctorDTO.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('nameSurname')) {
                obj['nameSurname'] = ApiClient.convertToType(data['nameSurname'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('branch')) {
                obj['branch'] = ApiClient.convertToType(data['branch'], 'String');
            }
            if (data.hasOwnProperty('imagePath')) {
                obj['imagePath'] = ApiClient.convertToType(data['imagePath'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RecipeDTODoctor</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RecipeDTODoctor</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RecipeDTODoctor.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['nameSurname'] && !(typeof data['nameSurname'] === 'string' || data['nameSurname'] instanceof String)) {
            throw new Error("Expected the field `nameSurname` to be a primitive type in the JSON string but got " + data['nameSurname']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['branch'] && !(typeof data['branch'] === 'string' || data['branch'] instanceof String)) {
            throw new Error("Expected the field `branch` to be a primitive type in the JSON string but got " + data['branch']);
        }
        // ensure the json data is a string
        if (data['imagePath'] && !(typeof data['imagePath'] === 'string' || data['imagePath'] instanceof String)) {
            throw new Error("Expected the field `imagePath` to be a primitive type in the JSON string but got " + data['imagePath']);
        }

        return true;
    }


}

RecipeDTODoctor.RequiredProperties = ["id", "nameSurname", "title", "branch", "imagePath"];

/**
 * Doctor ID
 * @member {Number} id
 */
RecipeDTODoctor.prototype['id'] = undefined;

/**
 * Doctor name and surname
 * @member {String} nameSurname
 */
RecipeDTODoctor.prototype['nameSurname'] = undefined;

/**
 * Doctor Title
 * @member {String} title
 */
RecipeDTODoctor.prototype['title'] = undefined;

/**
 * Doctor branch
 * @member {String} branch
 */
RecipeDTODoctor.prototype['branch'] = undefined;

/**
 * Doctor profile photo ul
 * @member {String} imagePath
 */
RecipeDTODoctor.prototype['imagePath'] = undefined;


// Implement DoctorDTO interface:
/**
 * Doctor ID
 * @member {Number} id
 */
DoctorDTO.prototype['id'] = undefined;
/**
 * Doctor name and surname
 * @member {String} nameSurname
 */
DoctorDTO.prototype['nameSurname'] = undefined;
/**
 * Doctor Title
 * @member {String} title
 */
DoctorDTO.prototype['title'] = undefined;
/**
 * Doctor branch
 * @member {String} branch
 */
DoctorDTO.prototype['branch'] = undefined;
/**
 * Doctor profile photo ul
 * @member {String} imagePath
 */
DoctorDTO.prototype['imagePath'] = undefined;




export default RecipeDTODoctor;

