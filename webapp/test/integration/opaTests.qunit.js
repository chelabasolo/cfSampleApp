/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"SampleApp2/SampleApp2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});