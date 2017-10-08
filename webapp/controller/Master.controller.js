sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("FragmentsFragments.controller.Master", {
     onNavBack:function(){

     	history.go(-1); //this will also take back to the previous page
			
     }
     });
});