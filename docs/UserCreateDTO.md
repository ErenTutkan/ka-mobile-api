# KolayAsistanMobileApi.UserCreateDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authType** | **Number** | Loging type | 
**email** | **String** | Email address | 
**password** | **String** | Password | 
**registerProvider** | **String** | Register provider | [default to &#39;Manuel&#39;]
**aggrementId** | **Number** | Accepted aggrement Id | 
**deviceInfo** | [**UserCreateDTODeviceInfo**](UserCreateDTODeviceInfo.md) |  | 
**socialAccessToken** | **Number** | Social provider access token | 



## Enum: AuthTypeEnum


* `null` (value: `null`)





## Enum: RegisterProviderEnum


* `Manuel` (value: `"Manuel"`)

* `Facebook` (value: `"Facebook"`)

* `Google` (value: `"Google"`)

* `Device` (value: `"Device"`)




