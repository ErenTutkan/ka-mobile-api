# KolayAsistanMobileApi.MedicineReminderApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reminderControllerCreate**](MedicineReminderApi.md#reminderControllerCreate) | **POST** /reminder | Add
[**reminderControllerDelete**](MedicineReminderApi.md#reminderControllerDelete) | **DELETE** /reminder/{id} | Delete
[**reminderControllerFindUserAllItems**](MedicineReminderApi.md#reminderControllerFindUserAllItems) | **GET** /reminder/findUserAllItems | Find User All Items
[**reminderControllerFindUserItem**](MedicineReminderApi.md#reminderControllerFindUserItem) | **GET** /reminder/findUserItem/{id} | Find User Item
[**reminderControllerUpdate**](MedicineReminderApi.md#reminderControllerUpdate) | **PUT** /reminder/{id} | Update



## reminderControllerCreate

> ReminderDTO reminderControllerCreate(reminderDTO)

Add

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineReminderApi();
let reminderDTO = new KolayAsistanMobileApi.ReminderDTO(); // ReminderDTO | 
apiInstance.reminderControllerCreate(reminderDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reminderDTO** | [**ReminderDTO**](ReminderDTO.md)|  | 

### Return type

[**ReminderDTO**](ReminderDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## reminderControllerDelete

> reminderControllerDelete(id)

Delete

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineReminderApi();
let id = 3.4; // Number | 
apiInstance.reminderControllerDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reminderControllerFindUserAllItems

> reminderControllerFindUserAllItems()

Find User All Items

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineReminderApi();
apiInstance.reminderControllerFindUserAllItems((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reminderControllerFindUserItem

> reminderControllerFindUserItem(id)

Find User Item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineReminderApi();
let id = 3.4; // Number | 
apiInstance.reminderControllerFindUserItem(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reminderControllerUpdate

> ReminderDTO reminderControllerUpdate(id, reminderDTO)

Update

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineReminderApi();
let id = 3.4; // Number | 
let reminderDTO = new KolayAsistanMobileApi.ReminderDTO(); // ReminderDTO | 
apiInstance.reminderControllerUpdate(id, reminderDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **reminderDTO** | [**ReminderDTO**](ReminderDTO.md)|  | 

### Return type

[**ReminderDTO**](ReminderDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

