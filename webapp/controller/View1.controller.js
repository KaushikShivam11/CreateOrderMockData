sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageBox"
], function(Controller, Filter, FilterOperator, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("com.sapCreateMaintenenceOrder.controller.View1", {

		onInit: function() {
			var oCreateOrderModel = new JSONModel({
				OrderType: "",
				Equipment: "",
				Description: "",
				ReportedBy: "",
				WorkCenterPlant: "",
				WorkCenterCode: ""
			});
			this.getView().setModel(oCreateOrderModel, "createOrderModel");
			var oReservationModel = new JSONModel({
				"results": [{
					"Material": "",
					"MaterialDescription": "",
					"Plant": "",
					"Quantity": "",
					"visible": true
				}]
			});
			this.getView().setModel(oReservationModel, "reservationModel");
			var oTable = this.getView().byId("reservationTableID");
			var oTemplate = sap.ui.xmlfragment(this.getView().getId(), "com.sapCreateMaintenenceOrder.fragments.Reservation", this);
			oTable.bindAggregation("items", {
				path: "reservationModel>/results",
				template: oTemplate
			});
		},
		onOrderTypePress: function() {
			var oDataModel = this.getView().getModel();
			oDataModel.read("/F4OrderTypes", {
				success: this.onOrderTypeSuccess.bind(this),
				error: this.onOrderTypeError.bind(this)
			});
			if (this.orderTypeDialog == undefined) {
				this.orderTypeDialog = sap.ui.xmlfragment(this.getView().getId(), "com.sapCreateMaintenenceOrder.fragments.OrderType", this);
			}
			this.getView().addDependent(this.orderTypeDialog);
			jQuery.sap.delayedCall(0, this, function() {
				this.orderTypeDialog.open();
			});
		},
		onOrderTypeSuccess: function(oData, response) {
			var oOrderSuccessModel = new JSONModel(oData);
			this.getView().setModel(oOrderSuccessModel, "orderSuccessModel");
		},
		onOrderTypeError: function(oError) {

		},
		onEquipmentPress: function() {
			var sEquipmentFilter = this.getView().byId("plantId").getValue();
			var oEquipmentFilter = new Filter("PlanningPlant", FilterOperator.EQ, sEquipmentFilter);
			var oDataModel = this.getView().getModel();
			oDataModel.read("/F4Equipments", {
				success: this.EquipmentSuccess.bind(this),
				error: this.onEquipmentError.bind(this),
				filters: [oEquipmentFilter]
			});
			if (this.equipmentDialog == undefined) {
				this.equipmentDialog = sap.ui.xmlfragment(this.getView().getId(), "com.sapCreateMaintenenceOrder.fragments.Equipment", this);
			}
			this.getView().addDependent(this.equipmentDialog);
			this.equipmentDialog.open();
		},
		EquipmentSuccess: function(oData, response) {
			var oEquipmentSuccessModel = new JSONModel(oData);
			this.getView().setModel(oEquipmentSuccessModel, "equipmentSuccessModel");
		},
		onEquipmentError: function(oError) {

		},
		onReportedByPress: function() {
			var oDataModel = this.getView().getModel();
			oDataModel.read("/F4Users", {
				success: this.onReportedBySuccess.bind(this),
				error: this.onReportedByError.bind(this)
			});
			if (this.reportedByDialog == undefined) {
				this.reportedByDialog = sap.ui.xmlfragment(this.getView().getId(), "com.sapCreateMaintenenceOrder.fragments.ReportedBy", this);
			}
			this.getView().addDependent(this.reportedByDialog);
			this.reportedByDialog.open();
		},
		onReportedBySuccess: function(oData, response) {
			var oReportedBySuccessModel = new JSONModel(oData);
			this.getView().setModel(oReportedBySuccessModel, "reportedBySuccessModel");
		},
		onReportedByError: function(oError) {

		},
		onWorkCenterPress: function() {
			var oModel = this.getView().getModel();
			oModel.read("/F4WorkCenters", {
				success: this.onWorkCenterSuccess.bind(this),
				error: this.onWorkCenterError.bind(this)
			});
			if (this.oWorkCenterDialog == undefined) {
				this.oWorkCenterDialog = sap.ui.xmlfragment(this.getView().getId(), "com.sapCreateMaintenenceOrder.fragments.WorkCenter", this);

			}
			this.getView().addDependent(this.oWorkCenterDialog);
			var oTable = this.byId("workCentertableId");
			var oTemplate = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{workCenterSuccessModel>Plant}"
					}),
					new sap.m.Text({
						text: "{workCenterSuccessModel>WorkCenterCode}"
					}),
					new sap.m.Text({
						text: "{workCenterSuccessModel>WorkCenterDescription}"
					})
				],
				type: "Navigation",
				press: this.onWorkCenterItemPress.bind(this)
			});
			var sQuery = this.getView().byId("plantId").getValue();
			var oFilter = new Filter("Plant", FilterOperator.EQ, sQuery);
			var aFilter = [];
			aFilter.push(oFilter);
			oTable.bindAggregation("items", {
				path: "workCenterSuccessModel>/results",
				template: oTemplate,
				filters: aFilter
			});
			this.oWorkCenterDialog.open();
		},
		onWorkCenterSuccess: function(oData, response) {
			var oWorkCenterSuccessModel = new JSONModel(oData);
			this.getView().setModel(oWorkCenterSuccessModel, "workCenterSuccessModel");
		},
		onWorkCenterError: function(oError) {

		},
		onWorkCenterPlantPress: function() {
			var oDataModel = this.getView().getModel();
			oDataModel.read("/F4Plants", {
				success: this.onPlantSuccess.bind(this),
				error: this.onPlantError.bind(this)
			});
			if (this.oMainWorkCenterDialog == undefined) {
				this.oMainWorkCenterDialog = sap.ui.xmlfragment(this.getView().getId(), "com.sapCreateMaintenenceOrder.fragments.MainWorkCenter",
					this);
			}
			this.getView().addDependent(this.oMainWorkCenterDialog);
			this.oMainWorkCenterDialog.open();
		},
		onPlantSuccess: function(oData, response) {
			var oPlantSuccessModel = new JSONModel(oData);
			this.getView().setModel(oPlantSuccessModel, "plantSuccessModel");
		},
		onPlantError: function(oError) {

		},
		onReservationPlantPress: function(oEvent) {
			var oDataModel = this.getView().getModel();
			oDataModel.read("/F4Plants", {
				success: this.onPlantSuccess.bind(this),
				error: this.onPlantError.bind(this)
			});
			var sPath = oEvent.getSource().getParent().getBindingContext("reservationModel").getPath();
			this.nMatIndex = sPath.split("/")[2];
			if (this.oReservationPlantDialog == undefined) {
				this.oReservationPlantDialog = sap.ui.xmlfragment(this.getView().getId(),
					"com.sapCreateMaintenenceOrder.fragments.ReservationPlant", this);
			}
			this.getView().addDependent(this.oReservationPlantDialog);
			this.oReservationPlantDialog.open();
		},
		onEquipmentPressOK: function() {
			this.equipmentDialog.close();
			this.byId("eqSearch").setValue("");
		},
		onMainWorkPressOK: function() {
			this.oMainWorkCenterDialog.close();
			this.byId("plantSearch").setValue("");
		},
		onOrderTypePressOK: function() {
			this.orderTypeDialog.close();
			this.byId("orderSearch").setValue("");
		},
		onReportedByPressOK: function() {
			this.reportedByDialog.close();
			this.byId("reportedSearch").setValue("");
		},
		onWorkCenterPressOK: function() {
			this.oWorkCenterDialog.close();
			this.byId("workCenterSearch").setValue("");
		},
		onMaterialPressOK: function() {
			this.oMaterialFragment.close();
			this.byId("matSearch").setValue("");
		},
		onReservationPlantPressOK: function() {
			this.oReservationPlantDialog.close();
		},
		onReportedItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oContext = oItem.getBindingContext("reportedBySuccessModel");
			var sName = oContext.getObject().Bname;
			this.getView().byId("reportedById").setValue(sName);
			this.onReportedByPressOK();
		},
		onEquipmentItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oContext = oItem.getBindingContext("equipmentSuccessModel");
			var sEquipment = oContext.getObject().Equipment;
			this.getView().byId("equipmentId").setValue(sEquipment);
			this.onEquipmentPressOK();
		},
		onOrderTypeItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oContext = oItem.getBindingContext("orderSuccessModel");
			var sType = oContext.getObject().OrderType;
			this.getView().byId("orderTypeId").setValue(sType);
			this.onOrderTypePressOK();
		},
		onPlantItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oContext = oItem.getBindingContext("plantSuccessModel");
			var sPlant = oContext.getObject().Plant;
			this.getView().byId("plantId").setValue(sPlant);
			this.onMainWorkPressOK();
		},
		onWorkCenterItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oContext = oItem.getBindingContext("workCenterSuccessModel");
			var sWorkCenter = oContext.getObject().WorkCenterCode;
			this.getView().byId("workCenterId").setValue(sWorkCenter);
			this.onWorkCenterPressOK();
		},
		onMaterialItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oContext = oItem.getBindingContext("MatModel");
			var sMaterial = oContext.getObject().Material;
			var sMaterialDescription = oContext.getObject().MaterialDescription;
			var sPlant = oContext.getObject().Plant;
			this.getView().getModel("reservationModel").setProperty("/results/" + this.nMatIndex + "/Material", sMaterial);
			this.getView().getModel("reservationModel").setProperty("/results/" + this.nMatIndex + "/MaterialDescription", sMaterialDescription);
			this.getView().getModel("reservationModel").setProperty("/results/" + this.nMatIndex + "/Plant", sPlant);
			this.onMaterialPressOK();
		},
		onAddIconPress: function() {
			var oTemplate = sap.ui.xmlfragment(this.getView().getId(), "com.sapCreateMaintenenceOrder.fragments.Reservation", this);
			var oTable = this.getView().byId("reservationTableID");
			var oMaterial = {
				"Material": "",
				"MaterialDescription": "",
				"Plant": "",
				"Quantity": "",
				"visible": true
			};
			var nlength = this.getView().getModel("reservationModel").getData().results.length;
			this.getView().getModel("reservationModel").setProperty("/results/" + nlength + "/", oMaterial);
		},
		onMaterialPress: function(oEvent) {
			var oDataModel = this.getView().getModel();
			var sPlant = this.getView().byId("plantId").getValue();
			var oFilterPlantMat = new Filter("Plant", FilterOperator.Contains, sPlant);
			oDataModel.read("/F4MaterialPlants", {
				success: this._materialReadSuccess.bind(this),
				error: this._materialReadError.bind(this),
				filters:[oFilterPlantMat]
			});
			var sPath = oEvent.getSource().getParent().getBindingContext("reservationModel").getPath();
			this.nMatIndex = sPath.split("/")[2];
			if (this.oMaterialFragment == undefined) {
				this.oMaterialFragment = sap.ui.xmlfragment(this.getView().getId(), "com.sapCreateMaintenenceOrder.fragments.Material", this);
			}
			this.getView().addDependent(this.oMaterialFragment);
			this.oMaterialFragment.open();
		},
		_materialReadSuccess: function(oData) {
			var oMatModel = new JSONModel(oData);
			this.getView().setModel(oMatModel, "MatModel");
		},
		_materialReadError: function() {

		},
		onRowDelete: function(oEvent) {
			var sPath = oEvent.getSource().getParent().getBindingContext("reservationModel").getPath();
			this.nMatIndex = sPath.split("/")[2];
			var aData = this.getView().getModel("reservationModel").getData();
			aData.results.splice(this.nMatIndex, 1);
			this.getView().getModel("reservationModel").refresh();
			// var oitem = oEvent.getSource().getParent();
			// var oTable = oEvent.getSource().getParent().getParent();
			// oTable.removeItem(oitem);
		},
		onReservationPlantItemPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var oContext = oItem.getBindingContext("plantSuccessModel");
			var sPlant = oContext.getObject().Plant;
			this.getView().getModel("reservationModel").setProperty("/results/" + this.nMatIndex + "/Plant", sPlant);
			this.oReservationPlantDialog.close();
		},
		onCreateOrder: function() {
			var aLineItems = this.getView().getModel("reservationModel").getData().results;
			aLineItems.splice();
			var oCreateOrder = this.getView().getModel("createOrderModel").getData();
			if (oCreateOrder.OrderType == "" || oCreateOrder.Equipment == "" || oCreateOrder.Description == "" || oCreateOrder.WorkCenterPlant ==
				"" || oCreateOrder.WorkCenterCode == "" || oCreateOrder.ReportedBy == "") {
				MessageBox.error(
					"Please Fill all Mandatory Fields"
				);
				return;
			}
			this.getView().setBusy(true);
			var nId = 100 * Math.random(),
				sId = nId.toFixed(2),
				sQuantity, nQuantity, aPayload = [],
				oLineItem = {};
			oCreateOrder.MaintenanceOrderId = sId;
			for (var i = 0; i < aLineItems.length; i++) {
				oLineItem.MaintenanceOrderId = oCreateOrder.MaintenanceOrderId;
				oLineItem.RowNumber = i.toString();
				sQuantity = aLineItems[i].Quantity;
				nQuantity = Number(sQuantity);
				oLineItem.Quantity = nQuantity;
				oLineItem.Material = aLineItems[i].Material;
				oLineItem.MaterialDescription = aLineItems[i].MaterialDescription;
				oLineItem.Plant = aLineItems[i].Plant;
				aPayload.push(oLineItem);
			}
			oCreateOrder.MaintenanceOrderReservations = aPayload;
			var oDataModel = this.getView().getModel();
			oDataModel.create("/MaintenanceOrders", oCreateOrder, {
				success: this.onCreateSuccess.bind(this),
				error: this.onCreateError.bind(this)
			});
		},
		onCreateSuccess: function(oData, response) {
			MessageBox.success(
				response.statusText
			);
			jQuery.sap.delayedCall(10, this, function() {
				this.getView().setBusy(false);
			});
			this.getView().getModel("reservationModel").setData({
				"results": [{
					"Material": "",
					"MaterialDescription": "",
					"Plant": "",
					"Quantity": "",
					"visible": true
				}]
			});
			this.getView().getModel("createOrderModel").setData({
				OrderType: "",
				Equipment: "",
				Description: "",
				WorkCenterPlant: "",
				WorkCenterCode: ""
			});
		},
		onCreateError: function(oError) {
			MessageBox.error(
				JSON.parse(oError.responseText).error.message.value
			);
			this.getView().setBusy(false);
		},
		onEquipmentSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("newValue");
			var sPlantQ = this.getView().byId("plantId").getValue();
			var oFilterEq = new Filter("Equipment", FilterOperator.Contains, sQuery);
			var oFilterEqD = new Filter("EquipmentDescription", FilterOperator.Contains, sQuery);
			var oFilterPlant = new Filter("PlanningPlant", FilterOperator.EQ, sPlantQ);
			var aFilters = [];
			aFilters.push(oFilterEq);
			aFilters.push(oFilterEqD);
			var oTable = this.byId("equipmentTbId");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(new Filter([new Filter(aFilters, false), oFilterPlant], true));
		},
		onOrderTypeSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("newValue");
			var oFilter = new Filter("OrderType", FilterOperator.Contains, sQuery);
			var oFilterName = new Filter("OrderType", FilterOperator.Contains, sQuery);
			var aFilters = [];
			aFilters.push(oFilter);
			aFilters.push(oFilterName);
			var oTable = this.byId("orderTypeTbId");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(new Filter(aFilters, false));
		},
		onReportedSearchSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("newValue");
			var oFilter = new Filter("Bname", FilterOperator.Contains, sQuery);
			var aFilters = [];
			aFilters.push(oFilter);
			var oTable = this.byId("reportedByTbId");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(aFilters);
		},
		onPlantSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("newValue");
			var oFilter = new Filter("Plant", FilterOperator.Contains, sQuery);
			var oFilterCity = new Filter("City", FilterOperator.Contains, sQuery);
			var oFilterName = new Filter("Name", FilterOperator.Contains, sQuery);
			var aFilters = [];
			aFilters.push(oFilter);
			aFilters.push(oFilterCity);
			aFilters.push(oFilterName);
			var oTable = this.byId("plantTbId");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(new Filter(aFilters, false));
		},
		onWorkCenterSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("newValue");
			var sPlantQ = this.getView().byId("plantId").getValue();
			var oFilter = new Filter("WorkCenterCode", FilterOperator.Contains, sQuery);
			var oFilterDes = new Filter("WorkCenterDescription", FilterOperator.Contains, sQuery);
			var oFilterPlant = new Filter("Plant", FilterOperator.Contains, sPlantQ);
			var aFilters = [];
			aFilters.push(oFilter);
			aFilters.push(oFilterDes);
			var oTable = this.byId("workCentertableId");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(new Filter([new Filter(aFilters, false), oFilterPlant], true));
		},
		onMatSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("newValue");
			var oFilter = new Filter("Material", FilterOperator.Contains, sQuery);
			var oFilterMD = new Filter("MaterialDescription", FilterOperator.Contains, sQuery);
			var aFilters = [];
			aFilters.push(oFilter);
			aFilters.push(oFilterMD);
			var oTable = this.byId("MatResTbId");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(new Filter(aFilters, false));
		},
		onEquipmentBackendSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("query");
			var sPlantQ = this.getView().byId("plantId").getValue();
			var oFilterPlant = new Filter("PlanningPlant", FilterOperator.EQ, sPlantQ);
			var oFilterEq = new Filter("EquipmentDescription", FilterOperator.EQ, sQuery);
			var oModel = this.getView().getModel();
			oModel.read("/F4Equipments", {
				success: this.onBackendEqSuccess.bind(this),
				error: this.onBackendEqError.bind(this),
				filters: [new Filter([oFilterPlant, oFilterEq], true)]
			});
		},
		onBackendEqSuccess: function(oData) {
			this.getView().getModel("equipmentSuccessModel").setData(oData);
			this.getView().getModel("equipmentSuccessModel").refresh();
		},
		onBackendEqError: function() {

		},
		onMatBackendSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("query");
			var oFilterMD = new Filter("MaterialDescription", FilterOperator.EQ, sQuery);
			var sPlant = this.getView().byId("plantId").getValue();
			var oFilterPlantMat = new Filter("Plant", FilterOperator.Contains, sPlant);
			var aFilters = [];
			aFilters.push(oFilterMD);
			var oModel = this.getView().getModel();
			oModel.read("/F4MaterialPlants", {
				success: this.onBackendMatSuccess.bind(this),
				error: this.onBackendMatError.bind(this),
				filters: [new Filter([oFilterMD, oFilterPlantMat], true)]
			});
		},

		onBackendMatSuccess: function(oData) {
			this.getView().getModel("MatModel").setData(oData);
			this.getView().getModel("MatModel").refresh();
		},
		onBackendMatError: function() {

		},

		onPlantResSearch: function(oEvent) {
			var sQuery = oEvent.getParameter("newValue");
			var oFilter = new Filter("Plant", FilterOperator.Contains, sQuery);
			var oFilterCity = new Filter("City", FilterOperator.Contains, sQuery);
			var oFilterName = new Filter("Name", FilterOperator.Contains, sQuery);
			var aFilters = [];
			aFilters.push(oFilter);
			aFilters.push(oFilterCity);
			aFilters.push(oFilterName);
			var oTable = this.byId("PlantResTbId");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(new Filter(aFilters, false));
		},
		onResetOrder: function() {
			this.getView().getModel("reservationModel").setData({
				"results": [{
					"Material": "",
					"MaterialDescription": "",
					"Plant": "",
					"Quantity": "",
					"visible": true
				}]
			});
			this.getView().getModel("createOrderModel").setData({
				OrderType: "",
				Equipment: "",
				Description: "",
				WorkCenterPlant: "",
				WorkCenterCode: ""
			});
		}
	});
});