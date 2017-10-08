sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("FragmentsFragments.controller.view2", {
     onNavBack:function(){

/*     	history.go(-1); //this will also take back to the previous page
*/			
			var loRouter1 = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter1.navTo("view1");
     	
     },
     		onClick  :function(){
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("Master");
		}
	});
});