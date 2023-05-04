# KolayAsistanMobileApi.BloodPressureDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | id | 
**userId** | **Number** | userId | 
**measurementDate** | **Date** | measurementDate | 
**big** | **Number** | Measurement Value | 
**small** | **Number** | Measurement Small Value | 
**pulse** | **Number** | Pulse | 
**bodyPosition** | **String** | Body Position | [default to &#39;LeftArm&#39;]
**period** | **String** | period | [default to &#39;OtherTime&#39;]
**tag** | **String** | tag | 
**note** | **String** | note | 
**scaleCaption** | **String** | scaleCaption | 
**scaleValue** | **Number** | scaleValue | 



## Enum: BodyPositionEnum


* `LeftArm` (value: `"LeftArm"`)

* `RightArm` (value: `"RightArm"`)





## Enum: PeriodEnum


* `Morning` (value: `"Morning"`)

* `Noon` (value: `"Noon"`)

* `Evening` (value: `"Evening"`)

* `BeforeBed` (value: `"BeforeBed"`)

* `OtherTime` (value: `"OtherTime"`)




