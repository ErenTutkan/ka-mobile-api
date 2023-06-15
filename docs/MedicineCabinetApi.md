# KolayAsistanMobileApi.MedicineCabinetApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cabinetControllerCreate**](MedicineCabinetApi.md#cabinetControllerCreate) | **POST** /cabinet | Add
[**cabinetControllerDelete**](MedicineCabinetApi.md#cabinetControllerDelete) | **DELETE** /cabinet/{id} | Delete
[**cabinetControllerFindUserAllItems**](MedicineCabinetApi.md#cabinetControllerFindUserAllItems) | **GET** /cabinet/findUserAllItems | Find User All Items
[**cabinetControllerFindUserItem**](MedicineCabinetApi.md#cabinetControllerFindUserItem) | **GET** /cabinet/findUserItem/{id} | Find User Item
[**cabinetControllerUpdate**](MedicineCabinetApi.md#cabinetControllerUpdate) | **PUT** /cabinet/{id} | Update
[**cabinetControllerUserCabinetSummary**](MedicineCabinetApi.md#cabinetControllerUserCabinetSummary) | **GET** /cabinet/userCabinetSummary | User Cabinet Summary



## cabinetControllerCreate

> Number cabinetControllerCreate(cabinetDTO)

Add

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineCabinetApi();
let cabinetDTO = new KolayAsistanMobileApi.CabinetDTO(); // CabinetDTO | 
apiInstance.cabinetControllerCreate(cabinetDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cabinetDTO** | [**CabinetDTO**](CabinetDTO.md)|  | 

### Return type

**Number**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cabinetControllerDelete

> Boolean cabinetControllerDelete(id)

Delete

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineCabinetApi();
let id = 3.4; // Number | 
apiInstance.cabinetControllerDelete(id).then((data) => {
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


## cabinetControllerFindUserAllItems

> [CabinetDTO] cabinetControllerFindUserAllItems()

Find User All Items

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineCabinetApi();
apiInstance.cabinetControllerFindUserAllItems().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[CabinetDTO]**](CabinetDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cabinetControllerFindUserItem

> CabinetDTO cabinetControllerFindUserItem(id)

Find User Item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineCabinetApi();
let id = 3.4; // Number | 
apiInstance.cabinetControllerFindUserItem(id).then((data) => {
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

[**CabinetDTO**](CabinetDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cabinetControllerUpdate

> Boolean cabinetControllerUpdate(id, cabinetDTO)

Update

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineCabinetApi();
let id = 3.4; // Number | 
let cabinetDTO = new KolayAsistanMobileApi.CabinetDTO(); // CabinetDTO | 
apiInstance.cabinetControllerUpdate(id, cabinetDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **cabinetDTO** | [**CabinetDTO**](CabinetDTO.md)|  | 

### Return type

**Boolean**

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cabinetControllerUserCabinetSummary

> CabinetSummaryDTO cabinetControllerUserCabinetSummary()

User Cabinet Summary

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineCabinetApi();
apiInstance.cabinetControllerUserCabinetSummary().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CabinetSummaryDTO**](CabinetSummaryDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

