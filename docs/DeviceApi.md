# KolayAsistanMobileApi.DeviceApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceControllerAddNewDevice**](DeviceApi.md#deviceControllerAddNewDevice) | **POST** /device | Add new device
[**deviceControllerDelete**](DeviceApi.md#deviceControllerDelete) | **DELETE** /device/{id} | Delete
[**deviceControllerFindUserAllItems**](DeviceApi.md#deviceControllerFindUserAllItems) | **GET** /device/findUserAllItems | Find User All Items
[**deviceControllerFindUserItem**](DeviceApi.md#deviceControllerFindUserItem) | **GET** /device/findUserItem/{id} | Find User Item
[**deviceControllerUpdate**](DeviceApi.md#deviceControllerUpdate) | **PUT** /device/{id} | Update device info



## deviceControllerAddNewDevice

> DeviceDTO deviceControllerAddNewDevice(deviceDTO)

Add new device

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.DeviceApi();
let deviceDTO = new KolayAsistanMobileApi.DeviceDTO(); // DeviceDTO | 
apiInstance.deviceControllerAddNewDevice(deviceDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceDTO** | [**DeviceDTO**](DeviceDTO.md)|  | 

### Return type

[**DeviceDTO**](DeviceDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deviceControllerDelete

> deviceControllerDelete(id)

Delete

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.DeviceApi();
let id = 3.4; // Number | 
apiInstance.deviceControllerDelete(id).then(() => {
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


## deviceControllerFindUserAllItems

> deviceControllerFindUserAllItems()

Find User All Items

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.DeviceApi();
apiInstance.deviceControllerFindUserAllItems().then(() => {
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


## deviceControllerFindUserItem

> deviceControllerFindUserItem(id)

Find User Item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.DeviceApi();
let id = 3.4; // Number | 
apiInstance.deviceControllerFindUserItem(id).then(() => {
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


## deviceControllerUpdate

> DeviceDTO deviceControllerUpdate(id, deviceDTO)

Update device info

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.DeviceApi();
let id = 3.4; // Number | 
let deviceDTO = new KolayAsistanMobileApi.DeviceDTO(); // DeviceDTO | 
apiInstance.deviceControllerUpdate(id, deviceDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **deviceDTO** | [**DeviceDTO**](DeviceDTO.md)|  | 

### Return type

[**DeviceDTO**](DeviceDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

