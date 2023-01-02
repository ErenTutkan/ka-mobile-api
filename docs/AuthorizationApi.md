# KolayAsistanMobileApi.AuthorizationApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerGetDeviceStatus**](AuthorizationApi.md#authControllerGetDeviceStatus) | **POST** /auth/get-device-status | Find Device
[**authControllerLoggedDetail**](AuthorizationApi.md#authControllerLoggedDetail) | **GET** /auth/me | Logged User Detail
[**authControllerLogin**](AuthorizationApi.md#authControllerLogin) | **POST** /auth/login | Login
[**authControllerRegisterUser**](AuthorizationApi.md#authControllerRegisterUser) | **POST** /auth/register | Register user



## authControllerGetDeviceStatus

> Enum authControllerGetDeviceStatus(deviceStatusDTO)

Find Device

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.AuthorizationApi();
let deviceStatusDTO = new KolayAsistanMobileApi.DeviceStatusDTO(); // DeviceStatusDTO | 
apiInstance.authControllerGetDeviceStatus(deviceStatusDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceStatusDTO** | [**DeviceStatusDTO**](DeviceStatusDTO.md)|  | 

### Return type

[**Enum**](Enum.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authControllerLoggedDetail

> UserDetailDTO authControllerLoggedDetail()

Logged User Detail

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.AuthorizationApi();
apiInstance.authControllerLoggedDetail().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserDetailDTO**](UserDetailDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authControllerLogin

> UserTokenDTO authControllerLogin(userLoginDTO)

Login

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.AuthorizationApi();
let userLoginDTO = new KolayAsistanMobileApi.UserLoginDTO(); // UserLoginDTO | User credentials. username field must be users email
apiInstance.authControllerLogin(userLoginDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userLoginDTO** | [**UserLoginDTO**](UserLoginDTO.md)| User credentials. username field must be users email | 

### Return type

[**UserTokenDTO**](UserTokenDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authControllerRegisterUser

> UserTokenDTO authControllerRegisterUser(userCreateDTO)

Register user

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.AuthorizationApi();
let userCreateDTO = new KolayAsistanMobileApi.UserCreateDTO(); // UserCreateDTO | 
apiInstance.authControllerRegisterUser(userCreateDTO).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userCreateDTO** | [**UserCreateDTO**](UserCreateDTO.md)|  | 

### Return type

[**UserTokenDTO**](UserTokenDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

