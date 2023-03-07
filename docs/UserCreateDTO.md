# KolayAsistanMobileApi.UserCreateDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authType** | **Object** | Loging type | 
**email** | **String** | Email address | 
**password** | **String** | Password | 
**registerProvider** | **Object** | Register provider | 
**aggrementId** | **Number** | Accepted aggrement Id | 
**deviceInfo** | [**UserCreateDTODeviceInfo**](UserCreateDTODeviceInfo.md) |  | 
**socialAccessToken** | **Number** | Social provider access token | 



## Enum: AuthTypeEnum


* `Anonymous` (value: `"Anonymous"`)

* `Registered` (value: `"Registered"`)

* `Unknown` (value: `"Unknown"`)





## Enum: RegisterProviderEnum


* `Manuel` (value: `"Manuel"`)

* `Facebook` (value: `"Facebook"`)

* `Google` (value: `"Google"`)

* `Device` (value: `"Device"`)




