# KolayAsistanMobileApi.MedicineCabinetApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cabinetControllerCreate**](MedicineCabinetApi.md#cabinetControllerCreate) | **POST** /cabinet | Add
[**cabinetControllerDelete**](MedicineCabinetApi.md#cabinetControllerDelete) | **DELETE** /cabinet/{id} | Delete
[**cabinetControllerFindUserAllItems**](MedicineCabinetApi.md#cabinetControllerFindUserAllItems) | **GET** /cabinet/findUserAllItems | Find User All Items
[**cabinetControllerFindUserItem**](MedicineCabinetApi.md#cabinetControllerFindUserItem) | **GET** /cabinet/findUserItem/{id} | Find User Item
[**cabinetControllerUpdate**](MedicineCabinetApi.md#cabinetControllerUpdate) | **PUT** /cabinet/{id} | Update



## cabinetControllerCreate

> CabinetDTO cabinetControllerCreate(cabinetDTO)

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
apiInstance.cabinetControllerCreate(cabinetDTO, (error, data, response) => {
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
 **cabinetDTO** | [**CabinetDTO**](CabinetDTO.md)|  | 

### Return type

[**CabinetDTO**](CabinetDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cabinetControllerDelete

> cabinetControllerDelete(id)

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
apiInstance.cabinetControllerDelete(id, (error, data, response) => {
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


## cabinetControllerFindUserAllItems

> cabinetControllerFindUserAllItems()

Find User All Items

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineCabinetApi();
apiInstance.cabinetControllerFindUserAllItems((error, data, response) => {
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


## cabinetControllerFindUserItem

> cabinetControllerFindUserItem(id)

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
apiInstance.cabinetControllerFindUserItem(id, (error, data, response) => {
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


## cabinetControllerUpdate

> CabinetDTO cabinetControllerUpdate(id, cabinetDTO)

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
apiInstance.cabinetControllerUpdate(id, cabinetDTO, (error, data, response) => {
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
 **cabinetDTO** | [**CabinetDTO**](CabinetDTO.md)|  | 

### Return type

[**CabinetDTO**](CabinetDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

