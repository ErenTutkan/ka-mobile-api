# KolayAsistanMobileApi.BloodPressureApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bloodPressureControllerCreate**](BloodPressureApi.md#bloodPressureControllerCreate) | **POST** /blood-pressure | Add
[**bloodPressureControllerDelete**](BloodPressureApi.md#bloodPressureControllerDelete) | **DELETE** /blood-pressure/{id} | De
[**bloodPressureControllerFindUserAllItems**](BloodPressureApi.md#bloodPressureControllerFindUserAllItems) | **GET** /blood-pressure/findUserAllItems | Find User All Items
[**bloodPressureControllerFindUserItem**](BloodPressureApi.md#bloodPressureControllerFindUserItem) | **GET** /blood-pressure/findUserItem/{id} | Find User Item
[**bloodPressureControllerUpdate**](BloodPressureApi.md#bloodPressureControllerUpdate) | **PUT** /blood-pressure/{id} | Update



## bloodPressureControllerCreate

> BloodPressureDTO bloodPressureControllerCreate(bloodPressureDTO)

Add

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodPressureApi();
let bloodPressureDTO = new KolayAsistanMobileApi.BloodPressureDTO(); // BloodPressureDTO | 
apiInstance.bloodPressureControllerCreate(bloodPressureDTO, (error, data, response) => {
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
 **bloodPressureDTO** | [**BloodPressureDTO**](BloodPressureDTO.md)|  | 

### Return type

[**BloodPressureDTO**](BloodPressureDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bloodPressureControllerDelete

> bloodPressureControllerDelete(id)

De

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodPressureApi();
let id = 3.4; // Number | 
apiInstance.bloodPressureControllerDelete(id, (error, data, response) => {
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


## bloodPressureControllerFindUserAllItems

> bloodPressureControllerFindUserAllItems()

Find User All Items

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodPressureApi();
apiInstance.bloodPressureControllerFindUserAllItems((error, data, response) => {
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


## bloodPressureControllerFindUserItem

> bloodPressureControllerFindUserItem(id)

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
apiInstance.bloodPressureControllerFindUserItem(id, (error, data, response) => {
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


## bloodPressureControllerUpdate

> BloodPressureDTO bloodPressureControllerUpdate(id, bloodPressureDTO)

Update

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
apiInstance.bloodPressureControllerUpdate(id, bloodPressureDTO, (error, data, response) => {
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
 **bloodPressureDTO** | [**BloodPressureDTO**](BloodPressureDTO.md)|  | 

### Return type

[**BloodPressureDTO**](BloodPressureDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

