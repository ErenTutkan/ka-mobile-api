# KolayAsistanMobileApi.UserApprovalsApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approvalControllerCreate**](UserApprovalsApi.md#approvalControllerCreate) | **POST** /approval | Add
[**approvalControllerDelete**](UserApprovalsApi.md#approvalControllerDelete) | **DELETE** /approval/{id} | De
[**approvalControllerFindUserAllItems**](UserApprovalsApi.md#approvalControllerFindUserAllItems) | **GET** /approval/findUserAllItems | Find User All Items
[**approvalControllerFindUserItem**](UserApprovalsApi.md#approvalControllerFindUserItem) | **GET** /approval/findUserItem/{id} | Find User Item
[**approvalControllerUpdate**](UserApprovalsApi.md#approvalControllerUpdate) | **PUT** /approval/{id} | Update



## approvalControllerCreate

> ApprovalDTO approvalControllerCreate(approvalDTO)

Add

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.UserApprovalsApi();
let approvalDTO = new KolayAsistanMobileApi.ApprovalDTO(); // ApprovalDTO | 
apiInstance.approvalControllerCreate(approvalDTO, (error, data, response) => {
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
 **approvalDTO** | [**ApprovalDTO**](ApprovalDTO.md)|  | 

### Return type

[**ApprovalDTO**](ApprovalDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## approvalControllerDelete

> approvalControllerDelete(id)

De

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.UserApprovalsApi();
let id = 3.4; // Number | 
apiInstance.approvalControllerDelete(id, (error, data, response) => {
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


## approvalControllerFindUserAllItems

> approvalControllerFindUserAllItems()

Find User All Items

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.UserApprovalsApi();
apiInstance.approvalControllerFindUserAllItems((error, data, response) => {
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


## approvalControllerFindUserItem

> approvalControllerFindUserItem(id)

Find User Item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.UserApprovalsApi();
let id = 3.4; // Number | 
apiInstance.approvalControllerFindUserItem(id, (error, data, response) => {
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


## approvalControllerUpdate

> ApprovalDTO approvalControllerUpdate(id, approvalDTO)

Update

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.UserApprovalsApi();
let id = 3.4; // Number | 
let approvalDTO = new KolayAsistanMobileApi.ApprovalDTO(); // ApprovalDTO | 
apiInstance.approvalControllerUpdate(id, approvalDTO, (error, data, response) => {
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
 **approvalDTO** | [**ApprovalDTO**](ApprovalDTO.md)|  | 

### Return type

[**ApprovalDTO**](ApprovalDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

