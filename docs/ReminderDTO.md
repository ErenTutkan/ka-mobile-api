# KolayAsistanMobileApi.ReminderDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | id | [optional] 
**userId** | **Number** | userId | [optional] 
**medicineBarcode** | **String** | medicineBarcode | 
**medicineName** | **String** | medicineName | 
**usageItemCount** | **Number** | usageItemCount | 
**usageHours** | **[String]** | usageHours | 
**usageFrequency** | **String** | Usage Frequency | [default to &#39;EveryDay&#39;]
**reminderStartDate** | **Date** | reminderStartDate | 
**reminderEndDate** | **Date** | reminderEndDate | 
**tag** | **String** | tag | [optional] 
**note** | **String** | note | [optional] 
**sourceType** | **String** | Source type.  Must be Medicine or Retail. Default value is Retail | [default to &#39;Retail&#39;]
**imageUrl** | **String** | medicine image url | [optional] 



## Enum: UsageFrequencyEnum


* `None` (value: `"None"`)

* `EveryDay` (value: `"EveryDay"`)

* `EveryWeek` (value: `"EveryWeek"`)

* `EveryMonth` (value: `"EveryMonth"`)

* `Every2Days` (value: `"Every2Days"`)

* `Every3Days` (value: `"Every3Days"`)

* `Every4Days` (value: `"Every4Days"`)

* `Every5Days` (value: `"Every5Days"`)

* `Every6Days` (value: `"Every6Days"`)





## Enum: SourceTypeEnum


* `Retail` (value: `"Retail"`)

* `Recipe` (value: `"Recipe"`)




