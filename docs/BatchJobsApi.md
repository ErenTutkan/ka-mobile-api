# KolayAsistanMobileApi.BatchJobsApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchJobControllerCabinetUpdate**](BatchJobsApi.md#batchJobControllerCabinetUpdate) | **POST** /jobs/cabinetUpdate | Update medicines of cabinet 
[**batchJobControllerCreate**](BatchJobsApi.md#batchJobControllerCreate) | **POST** /jobs | Create
[**batchJobControllerDelete**](BatchJobsApi.md#batchJobControllerDelete) | **DELETE** /jobs/{id} | Delete By Id
[**batchJobControllerFindAll**](BatchJobsApi.md#batchJobControllerFindAll) | **GET** /jobs | Find All
[**batchJobControllerFindAllByUserId**](BatchJobsApi.md#batchJobControllerFindAllByUserId) | **GET** /jobs/findAllByUserId/{userId} | Find all items of user
[**batchJobControllerFindById**](BatchJobsApi.md#batchJobControllerFindById) | **GET** /jobs/{id} | Find By Id
[**batchJobControllerUpdate**](BatchJobsApi.md#batchJobControllerUpdate) | **PUT** /jobs | Update Item



## batchJobControllerCabinetUpdate

> batchJobControllerCabinetUpdate()

Update medicines of cabinet 

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.BatchJobsApi();
apiInstance.batchJobControllerCabinetUpdate().then(() => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## batchJobControllerCreate

> batchJobControllerCreate()

Create

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.BatchJobsApi();
apiInstance.batchJobControllerCreate().then(() => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## batchJobControllerDelete

> batchJobControllerDelete(id)

Delete By Id

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.BatchJobsApi();
let id = 3.4; // Number | 
apiInstance.batchJobControllerDelete(id).then(() => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## batchJobControllerFindAll

> batchJobControllerFindAll()

Find All

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.BatchJobsApi();
apiInstance.batchJobControllerFindAll().then(() => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## batchJobControllerFindAllByUserId

> batchJobControllerFindAllByUserId(userId)

Find all items of user

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.BatchJobsApi();
let userId = 3.4; // Number | 
apiInstance.batchJobControllerFindAllByUserId(userId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## batchJobControllerFindById

> batchJobControllerFindById(id)

Find By Id

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.BatchJobsApi();
let id = 3.4; // Number | 
apiInstance.batchJobControllerFindById(id).then(() => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## batchJobControllerUpdate

> batchJobControllerUpdate()

Update Item

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';

let apiInstance = new KolayAsistanMobileApi.BatchJobsApi();
apiInstance.batchJobControllerUpdate().then(() => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

