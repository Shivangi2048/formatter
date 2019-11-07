/*global QUnit*/

sap.ui.define([
	"formatter/formatter/controller/formatter.controller"
], function (Controller) {
	"use strict";

	QUnit.module("formatter Controller");

	QUnit.test("I should test the formatter controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});