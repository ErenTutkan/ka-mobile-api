# KolayAsistanMobileApi.BloodPressureDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | id | [optional] 
**userId** | **Number** | userId | [optional] 
**measurementDate** | **Date** | measurementDate | 
**big** | **Number** | Measurement Value | 
**small** | **Number** | Measurement Small Value | 
**pulse** | **Number** | Pulse | 
**bodyPosition** | **String** | Body Position | [default to &#39;LeftArm&#39;]
**period** | **String** | period | [default to &#39;OtherTime&#39;]
**tag** | **String** | tag | [optional] 
**note** | **String** | note | [optional] 
**scaleCaption** | **String** | scaleCaption | [optional] 
**scaleValue** | **Number** | scaleValue | [optional] 



## Enum: BodyPositionEnum


* `LeftArm` (value: `"LeftArm"`)

* `RightArm` (value: `"RightArm"`)





## Enum: PeriodEnum


* `Morning` (value: `"Morning"`)

* `Noon` (value: `"Noon"`)

* `Evening` (value: `"Evening"`)

* `BeforeBed` (value: `"BeforeBed"`)

* `OtherTime` (value: `"OtherTime"`)




