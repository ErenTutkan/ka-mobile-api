# KolayAsistanMobileApi.BloodGlucoseDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | id | [optional] 
**userId** | **Number** | userId | [optional] 
**measurementDate** | **Date** | Measurement Date | 
**glucoseValue** | **Number** | Measurement Value | 
**hungryStatus** | **String** | Hungry Status | [default to &#39;AfterMeal&#39;]
**tag** | **String** | tag | [optional] 
**note** | **String** | note | [optional] 
**scaleCaption** | **String** | scaleCaption | [optional] 
**scaleValue** | **Number** | scaleValue | [optional] 



## Enum: HungryStatusEnum


* `None` (value: `"None"`)

* `BeforeMeal` (value: `"BeforeMeal"`)

* `AfterMeal` (value: `"AfterMeal"`)




