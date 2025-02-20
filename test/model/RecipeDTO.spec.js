/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 08.10.2023
 *
 * The version of the OpenAPI document: v4.0.0.6
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KolayAsistanMobileApi);
  }
}(this, function(expect, KolayAsistanMobileApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KolayAsistanMobileApi.RecipeDTO();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RecipeDTO', function() {
    it('should create an instance of RecipeDTO', function() {
      // uncomment below and update the code to test RecipeDTO
      //var instance = new KolayAsistanMobileApi.RecipeDTO();
      //expect(instance).to.be.a(KolayAsistanMobileApi.RecipeDTO);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new KolayAsistanMobileApi.RecipeDTO();
      //expect(instance).to.be();
    });

    it('should have the property hospital (base name: "hospital")', function() {
      // uncomment below and update the code to test the property hospital
      //var instance = new KolayAsistanMobileApi.RecipeDTO();
      //expect(instance).to.be();
    });

    it('should have the property doctor (base name: "doctor")', function() {
      // uncomment below and update the code to test the property doctor
      //var instance = new KolayAsistanMobileApi.RecipeDTO();
      //expect(instance).to.be();
    });

    it('should have the property prescriptionNo (base name: "prescriptionNo")', function() {
      // uncomment below and update the code to test the property prescriptionNo
      //var instance = new KolayAsistanMobileApi.RecipeDTO();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new KolayAsistanMobileApi.RecipeDTO();
      //expect(instance).to.be();
    });

    it('should have the property medicines (base name: "medicines")', function() {
      // uncomment below and update the code to test the property medicines
      //var instance = new KolayAsistanMobileApi.RecipeDTO();
      //expect(instance).to.be();
    });

  });

}));
