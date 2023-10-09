# KolayAsistanMobileApi.MedicineRecipeApi

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recipeControllerFindUserMedicines**](MedicineRecipeApi.md#recipeControllerFindUserMedicines) | **GET** /recipe | Find User Recipes



## recipeControllerFindUserMedicines

> RecipeDTO recipeControllerFindUserMedicines()

Find User Recipes

### Example

```javascript
import KolayAsistanMobileApi from 'kolay_asistan_mobile_api';
let defaultClient = KolayAsistanMobileApi.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new KolayAsistanMobileApi.MedicineRecipeApi();
apiInstance.recipeControllerFindUserMedicines().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**RecipeDTO**](RecipeDTO.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

