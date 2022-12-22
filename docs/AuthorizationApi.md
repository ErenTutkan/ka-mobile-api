# KolayAsistanMobileApi.AuthorizationApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerLogin**](AuthorizationApi.md#authControllerLogin) | **POST** /auth/login | Login
[**authControllerUserDetail**](AuthorizationApi.md#authControllerUserDetail) | **GET** /auth/me | Logged User Detail
[**authControllerUserRegister**](AuthorizationApi.md#authControllerUserRegister) | **POST** /auth/register | Register user



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


## authControllerUserDetail

> UserDetailDTO authControllerUserDetail()

Logged User Detail

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.AuthorizationApi();
apiInstance.authControllerUserDetail().then((data) => {
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


## authControllerUserRegister

> UserTokenDTO authControllerUserRegister(userCreateDTO)

Register user

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.AuthorizationApi();
let userCreateDTO = new KolayAsistanMobileApi.UserCreateDTO(); // UserCreateDTO | 
apiInstance.authControllerUserRegister(userCreateDTO).then((data) => {
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

