# KolayAsistanMobileApi.CabinetDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | id | [optional] 
**userId** | **Number** | userId | [optional] 
**medicineBarcode** | **String** | medicineBarcode | 
**medicineName** | **String** | medicineName | 
**packType** | **String** | packType | [optional] 
**packCount** | **Number** | packCount | 
**expireDate** | **Date** | expireDate | 
**comment** | **String** | comment | [optional] 
**isActive** | **Number** | isActive | [optional] 
**remainingDays** | **Number** | remainingDays | [optional] 
**isExpired** | **Number** | isExpired | [optional] 
**isRecipeMedicine** | **Number** | isRecipeMedicine - !!! Dont use. Please set sourceType field | [optional] 
**sourceType** | **String** | Source type.  Must be Medicine or Retail. Default value is Retail | [default to &#39;Retail&#39;]
**imageUrl** | **String** | medicine image url | [optional] 



## Enum: SourceTypeEnum


* `Retail` (value: `"Retail"`)

* `Recipe` (value: `"Recipe"`)




