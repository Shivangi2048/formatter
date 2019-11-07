sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"formatter/formatter/ReusableFolder/reusables" ], 
	function (Controller, reusables) {
	"use strict";

	return Controller.extend("formatter.formatter.controller.formatter", 
	{
		 test:reusables
	});
});