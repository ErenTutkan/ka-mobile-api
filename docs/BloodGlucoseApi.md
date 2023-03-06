# KolayAsistanMobileApi.BloodGlucoseApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bloodGlucoseControllerCreate**](BloodGlucoseApi.md#bloodGlucoseControllerCreate) | **POST** /blood-glucose | Add
[**bloodGlucoseControllerDelete**](BloodGlucoseApi.md#bloodGlucoseControllerDelete) | **DELETE** /blood-glucose/{id} | De
[**bloodGlucoseControllerFindUserAllItems**](BloodGlucoseApi.md#bloodGlucoseControllerFindUserAllItems) | **GET** /blood-glucose/findUserAllItems | Find User All Items
[**bloodGlucoseControllerFindUserItem**](BloodGlucoseApi.md#bloodGlucoseControllerFindUserItem) | **GET** /blood-glucose/findUserItem/{id} | Find User Item
[**bloodGlucoseControllerUpdate**](BloodGlucoseApi.md#bloodGlucoseControllerUpdate) | **PUT** /blood-glucose/{id} | Update



## bloodGlucoseControllerCreate

> BloodGlucoseDTO bloodGlucoseControllerCreate(bloodGlucoseDTO)

Add

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodGlucoseApi();
let bloodGlucoseDTO = new KolayAsistanMobileApi.BloodGlucoseDTO(); // BloodGlucoseDTO | 
apiInstance.bloodGlucoseControllerCreate(bloodGlucoseDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bloodGlucoseDTO** | [**BloodGlucoseDTO**](BloodGlucoseDTO.md)|  | 

### Return type

[**BloodGlucoseDTO**](BloodGlucoseDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## bloodGlucoseControllerDelete

> bloodGlucoseControllerDelete(id)

De

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodGlucoseApi();
let id = 3.4; // Number | 
apiInstance.bloodGlucoseControllerDelete(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


## bloodGlucoseControllerFindUserAllItems

> bloodGlucoseControllerFindUserAllItems()

Find User All Items

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodGlucoseApi();
apiInstance.bloodGlucoseControllerFindUserAllItems().then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


## bloodGlucoseControllerFindUserItem

> bloodGlucoseControllerFindUserItem(id)

Find User Item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodGlucoseApi();
let id = 3.4; // Number | 
apiInstance.bloodGlucoseControllerFindUserItem(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
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


## bloodGlucoseControllerUpdate

> BloodGlucoseDTO bloodGlucoseControllerUpdate(id, bloodGlucoseDTO)

Update

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.BloodGlucoseApi();
let id = 3.4; // Number | 
let bloodGlucoseDTO = new KolayAsistanMobileApi.BloodGlucoseDTO(); // BloodGlucoseDTO | 
apiInstance.bloodGlucoseControllerUpdate(id, bloodGlucoseDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **bloodGlucoseDTO** | [**BloodGlucoseDTO**](BloodGlucoseDTO.md)|  | 

### Return type

[**BloodGlucoseDTO**](BloodGlucoseDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

