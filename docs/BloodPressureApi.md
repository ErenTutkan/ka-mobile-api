# KolayAsistanMobileApi.BloodPressureApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bloodPressureControllerCreate**](BloodPressureApi.md#bloodPressureControllerCreate) | **POST** /blood-pressure | Add new item
[**bloodPressureControllerDelete**](BloodPressureApi.md#bloodPressureControllerDelete) | **DELETE** /blood-pressure/{id} | Delete item
[**bloodPressureControllerFindUserAllItems**](BloodPressureApi.md#bloodPressureControllerFindUserAllItems) | **GET** /blood-pressure/findUserAllItems | Find User All Items
[**bloodPressureControllerFindUserItem**](BloodPressureApi.md#bloodPressureControllerFindUserItem) | **GET** /blood-pressure/findUserItem/{id} | Find User Item
[**bloodPressureControllerUpdate**](BloodPressureApi.md#bloodPressureControllerUpdate) | **PUT** /blood-pressure/{id} | Update item



## bloodPressureControllerCreate

> Number bloodPressureControllerCreate(bloodPressureDTO)

Add new item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodPressureApi();
let bloodPressureDTO = new KolayAsistanMobileApi.BloodPressureDTO(); // BloodPressureDTO | 
apiInstance.bloodPressureControllerCreate(bloodPressureDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bloodPressureDTO** | [**BloodPressureDTO**](BloodPressureDTO.md)|  | 

### Return type

**Number**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bloodPressureControllerDelete

> Boolean bloodPressureControllerDelete(id)

Delete item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodPressureApi();
let id = 3.4; // Number | 
apiInstance.bloodPressureControllerDelete(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

**Boolean**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bloodPressureControllerFindUserAllItems

> [BloodPressureDTO] bloodPressureControllerFindUserAllItems()

Find User All Items

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodPressureApi();
apiInstance.bloodPressureControllerFindUserAllItems().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[BloodPressureDTO]**](BloodPressureDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bloodPressureControllerFindUserItem

> BloodPressureDTO bloodPressureControllerFindUserItem(id)

Find User Item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodPressureApi();
let id = 3.4; // Number | 
apiInstance.bloodPressureControllerFindUserItem(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**BloodPressureDTO**](BloodPressureDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## bloodPressureControllerUpdate

> Boolean bloodPressureControllerUpdate(id, bloodPressureDTO)

Update item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodPressureApi();
let id = 3.4; // Number | 
let bloodPressureDTO = new KolayAsistanMobileApi.BloodPressureDTO(); // BloodPressureDTO | 
apiInstance.bloodPressureControllerUpdate(id, bloodPressureDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **bloodPressureDTO** | [**BloodPressureDTO**](BloodPressureDTO.md)|  | 

### Return type

**Boolean**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

