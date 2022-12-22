# KolayAsistanMobileApi.UserApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userControllerUserDetail**](UserApi.md#userControllerUserDetail) | **GET** /user | Logged User Detail
[**userControllerUserUpdate**](UserApi.md#userControllerUserUpdate) | **PUT** /user | Logged user update
[**userControllerUserUpdateStatus**](UserApi.md#userControllerUserUpdateStatus) | **PATCH** /user | Logged User Update Status



## userControllerUserDetail

> userControllerUserDetail()

Logged User Detail

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.UserApi();
apiInstance.userControllerUserDetail((error, data, response) => {
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


## userControllerUserUpdate

> UserUpdateDTO userControllerUserUpdate(userUpdateDTO)

Logged user update

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.UserApi();
let userUpdateDTO = new KolayAsistanMobileApi.UserUpdateDTO(); // UserUpdateDTO | 
apiInstance.userControllerUserUpdate(userUpdateDTO, (error, data, response) => {
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
 **userUpdateDTO** | [**UserUpdateDTO**](UserUpdateDTO.md)|  | 

### Return type

[**UserUpdateDTO**](UserUpdateDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## userControllerUserUpdateStatus

> userControllerUserUpdateStatus(userStatusDTO)

Logged User Update Status

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.UserApi();
let userStatusDTO = new KolayAsistanMobileApi.UserStatusDTO(); // UserStatusDTO | 
apiInstance.userControllerUserUpdateStatus(userStatusDTO, (error, data, response) => {
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
 **userStatusDTO** | [**UserStatusDTO**](UserStatusDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

