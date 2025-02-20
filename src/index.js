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


import ApiClient from './ApiClient';
import ApprovalDTO from './model/ApprovalDTO';
import BloodGlucoseDTO from './model/BloodGlucoseDTO';
import BloodPressureDTO from './model/BloodPressureDTO';
import CabinetDTO from './model/CabinetDTO';
import CabinetSummaryDTO from './model/CabinetSummaryDTO';
import DeviceDTO from './model/DeviceDTO';
import DeviceStatusDTO from './model/DeviceStatusDTO';
import DoctorDTO from './model/DoctorDTO';
import MedicineDTO from './model/MedicineDTO';
import MedicineDTOPharmacy from './model/MedicineDTOPharmacy';
import PharmacyDTO from './model/PharmacyDTO';
import RecipeDTO from './model/RecipeDTO';
import RecipeDTODoctor from './model/RecipeDTODoctor';
import ReminderDTO from './model/ReminderDTO';
import UserCreateDTO from './model/UserCreateDTO';
import UserCreateDTODeviceInfo from './model/UserCreateDTODeviceInfo';
import UserDetailDTO from './model/UserDetailDTO';
import UserLoginDTO from './model/UserLoginDTO';
import UserStatusDTO from './model/UserStatusDTO';
import UserTokenDTO from './model/UserTokenDTO';
import UserUpdateDTO from './model/UserUpdateDTO';
import ValidateIdentityNoDTO from './model/ValidateIdentityNoDTO';
import AuthorizationApi from './api/AuthorizationApi';
import BatchJobsApi from './api/BatchJobsApi';
import BloodGlucoseApi from './api/BloodGlucoseApi';
import BloodPressureApi from './api/BloodPressureApi';
import DeviceApi from './api/DeviceApi';
import MedicineCabinetApi from './api/MedicineCabinetApi';
import MedicineRecipeApi from './api/MedicineRecipeApi';
import MedicineReminderApi from './api/MedicineReminderApi';
import UserApi from './api/UserApi';
import UserApprovalsApi from './api/UserApprovalsApi';


/**
* Kolay Asistan mobile application api layer. Revision Date: 08.10.2023.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var KolayAsistanMobileApi = require('index'); // See note below*.
* var xxxSvc = new KolayAsistanMobileApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new KolayAsistanMobileApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new KolayAsistanMobileApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new KolayAsistanMobileApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v4.0.7
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApprovalDTO model constructor.
     * @property {module:model/ApprovalDTO}
     */
    ApprovalDTO,

    /**
     * The BloodGlucoseDTO model constructor.
     * @property {module:model/BloodGlucoseDTO}
     */
    BloodGlucoseDTO,

    /**
     * The BloodPressureDTO model constructor.
     * @property {module:model/BloodPressureDTO}
     */
    BloodPressureDTO,

    /**
     * The CabinetDTO model constructor.
     * @property {module:model/CabinetDTO}
     */
    CabinetDTO,

    /**
     * The CabinetSummaryDTO model constructor.
     * @property {module:model/CabinetSummaryDTO}
     */
    CabinetSummaryDTO,

    /**
     * The DeviceDTO model constructor.
     * @property {module:model/DeviceDTO}
     */
    DeviceDTO,

    /**
     * The DeviceStatusDTO model constructor.
     * @property {module:model/DeviceStatusDTO}
     */
    DeviceStatusDTO,

    /**
     * The DoctorDTO model constructor.
     * @property {module:model/DoctorDTO}
     */
    DoctorDTO,

    /**
     * The MedicineDTO model constructor.
     * @property {module:model/MedicineDTO}
     */
    MedicineDTO,

    /**
     * The MedicineDTOPharmacy model constructor.
     * @property {module:model/MedicineDTOPharmacy}
     */
    MedicineDTOPharmacy,

    /**
     * The PharmacyDTO model constructor.
     * @property {module:model/PharmacyDTO}
     */
    PharmacyDTO,

    /**
     * The RecipeDTO model constructor.
     * @property {module:model/RecipeDTO}
     */
    RecipeDTO,

    /**
     * The RecipeDTODoctor model constructor.
     * @property {module:model/RecipeDTODoctor}
     */
    RecipeDTODoctor,

    /**
     * The ReminderDTO model constructor.
     * @property {module:model/ReminderDTO}
     */
    ReminderDTO,

    /**
     * The UserCreateDTO model constructor.
     * @property {module:model/UserCreateDTO}
     */
    UserCreateDTO,

    /**
     * The UserCreateDTODeviceInfo model constructor.
     * @property {module:model/UserCreateDTODeviceInfo}
     */
    UserCreateDTODeviceInfo,

    /**
     * The UserDetailDTO model constructor.
     * @property {module:model/UserDetailDTO}
     */
    UserDetailDTO,

    /**
     * The UserLoginDTO model constructor.
     * @property {module:model/UserLoginDTO}
     */
    UserLoginDTO,

    /**
     * The UserStatusDTO model constructor.
     * @property {module:model/UserStatusDTO}
     */
    UserStatusDTO,

    /**
     * The UserTokenDTO model constructor.
     * @property {module:model/UserTokenDTO}
     */
    UserTokenDTO,

    /**
     * The UserUpdateDTO model constructor.
     * @property {module:model/UserUpdateDTO}
     */
    UserUpdateDTO,

    /**
     * The ValidateIdentityNoDTO model constructor.
     * @property {module:model/ValidateIdentityNoDTO}
     */
    ValidateIdentityNoDTO,

    /**
    * The AuthorizationApi service constructor.
    * @property {module:api/AuthorizationApi}
    */
    AuthorizationApi,

    /**
    * The BatchJobsApi service constructor.
    * @property {module:api/BatchJobsApi}
    */
    BatchJobsApi,

    /**
    * The BloodGlucoseApi service constructor.
    * @property {module:api/BloodGlucoseApi}
    */
    BloodGlucoseApi,

    /**
    * The BloodPressureApi service constructor.
    * @property {module:api/BloodPressureApi}
    */
    BloodPressureApi,

    /**
    * The DeviceApi service constructor.
    * @property {module:api/DeviceApi}
    */
    DeviceApi,

    /**
    * The MedicineCabinetApi service constructor.
    * @property {module:api/MedicineCabinetApi}
    */
    MedicineCabinetApi,

    /**
    * The MedicineRecipeApi service constructor.
    * @property {module:api/MedicineRecipeApi}
    */
    MedicineRecipeApi,

    /**
    * The MedicineReminderApi service constructor.
    * @property {module:api/MedicineReminderApi}
    */
    MedicineReminderApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi,

    /**
    * The UserApprovalsApi service constructor.
    * @property {module:api/UserApprovalsApi}
    */
    UserApprovalsApi
};
