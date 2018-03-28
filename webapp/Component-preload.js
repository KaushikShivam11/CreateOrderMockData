/**
* This file was auto-generated by SAP Web IDE build and includes all
* the source files required by SAPUI5 runtime for performance optimization.
* PLEASE DO NOT EDIT THIS FILE!! Changes will be overwritten the next time the build is run.
*/
jQuery.sap.registerPreloadedModules({
	"version": "2.0",
	"name": "com/sapCreateMaintenenceOrder/Component-preload",
	"modules": {
		"com/sapCreateMaintenenceOrder/model/models.js": "sap.ui.define([\r\n\t\"sap/ui/model/json/JSONModel\",\r\n\t\"sap/ui/Device\"\r\n], function(JSONModel, Device) {\r\n\t\"use strict\";\r\n\r\n\treturn {\r\n\r\n\t\tcreateDeviceModel: function() {\r\n\t\t\tvar oModel = new JSONModel(Device);\r\n\t\t\toModel.setDefaultBindingMode(\"OneWay\");\r\n\t\t\treturn oModel;\r\n\t\t}\r\n\r\n\t};\r\n});",
		"com/sapCreateMaintenenceOrder/view/View1.view.xml": "<mvc:View controllerName=\"com.sapCreateMaintenenceOrder.controller.View1\" xmlns:html=\"http://www.w3.org/1999/xhtml\"\n\txmlns:mvc=\"sap.ui.core.mvc\" displayBlock=\"true\" xmlns=\"sap.m\" xmlns:f=\"sap.ui.layout.form\">\n\t<App>\n\t\t<pages>\n\t\t\t<Page title=\"{i18n>title}\">\n\t\t\t\t<content>\n\t\t\t\t\t<f:SimpleForm id=\"SimpleFormChange354\" editable=\"true\" title=\"{i18n>createOrder}\" layout=\"ResponsiveGridLayout\" labelSpanXL=\"3\"\n\t\t\t\t\t\tlabelSpanL=\"3\" labelSpanM=\"3\" labelSpanS=\"12\" adjustLabelSpan=\"false\" emptySpanXL=\"4\" emptySpanL=\"2\" emptySpanM=\"4\" emptySpanS=\"0\"\n\t\t\t\t\t\tcolumnsXL=\"1\" columnsL=\"1\" columnsM=\"1\" singleContainerFullSize=\"false\">\n\t\t\t\t\t\t<f:content>\n\t\t\t\t\t\t\t<Label required=\"true\" text=\"{i18n>orderType}\"/>\n\t\t\t\t\t\t\t<Input id=\"orderTypeId\" value=\"{createOrderModel>/OrderType}\" showValueHelp=\"true\" valueHelpRequest=\"onOrderTypePress\"/>\n\t\t\t\t\t\t\t<Label required=\"true\" text=\"{i18n>mainWorkCenter_Plant}\"/>\n\t\t\t\t\t\t\t<Input id=\"plantId\" value=\"{createOrderModel>/WorkCenterPlant}\" showValueHelp=\"true\" valueHelpRequest=\"onWorkCenterPlantPress\"/>\n\t\t\t\t\t\t\t<Label required=\"true\" text=\"{i18n>equipment}\"/>\n\t\t\t\t\t\t\t<Input id=\"equipmentId\" value=\"{createOrderModel>/Equipment}\" showValueHelp=\"true\" valueHelpRequest=\"onEquipmentPress\"/>\n\t\t\t\t\t\t\t<Label required=\"true\" text=\"{i18n>Opr_ShortText}\"/>\n\t\t\t\t\t\t\t<Input value=\"{createOrderModel>/Description}\"/>\n\t\t\t\t\t\t\t<Label required=\"true\" text=\"{i18n>reportedBy}\"/>\n\t\t\t\t\t\t\t<Input id=\"reportedById\" value=\"{createOrderModel>/ReportedBy}\" showValueHelp=\"true\" valueHelpRequest=\"onReportedByPress\"/>\n\t\t\t\t\t\t\t<Label required=\"true\" text=\"{i18n>workCenter}\"/>\n\t\t\t\t\t\t\t<Input id=\"workCenterId\" value=\"{createOrderModel>/WorkCenterCode}\" showValueHelp=\"true\" valueHelpRequest=\"onWorkCenterPress\"/>\n\t\t\t\t\t\t</f:content>\n\t\t\t\t\t</f:SimpleForm>\n\t\t\t\t\t<Table id=\"reservationTableID\">\n\t\t\t\t\t\t<headerToolbar>\n\t\t\t\t\t\t\t<Toolbar>\n\t\t\t\t\t\t\t\t<content>\n\t\t\t\t\t\t\t\t\t<Title text=\"{i18n>reservation}\" level=\"H2\"/>\n\t\t\t\t\t\t\t\t\t<ToolbarSpacer/>\n\t\t\t\t\t\t\t\t\t<Button icon=\"sap-icon://add\" press=\"onAddIconPress\"/>\n\t\t\t\t\t\t\t\t</content>\n\t\t\t\t\t\t\t</Toolbar>\n\t\t\t\t\t\t</headerToolbar>\n\t\t\t\t\t\t<columns>\n\t\t\t\t\t\t\t<Column>\n\t\t\t\t\t\t\t\t<Text text=\"{i18n>material}\"/>\n\t\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t\t<Column>\n\t\t\t\t\t\t\t\t<Text text=\"{i18n>materialDescription}\"/>\n\t\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t\t<Column>\n\t\t\t\t\t\t\t\t<Text text=\"{i18n>plant}\"/>\n\t\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t\t<Column>\n\t\t\t\t\t\t\t\t<Text text=\"{i18n>quantity}\"/>\n\t\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t\t<Column>\n\t\t\t\t\t\t\t\t<Text text=\"\"/>\n\t\t\t\t\t\t\t</Column>\n\t\t\t\t\t\t</columns>\n\t\t\t\t\t</Table>\n\t\t\t\t</content>\n\t\t\t\t<footer>\n\t\t\t\t\t<Toolbar>\n\t\t\t\t\t\t<ToolbarSpacer/>\n\t\t\t\t\t\t<Button text=\"{i18n>createorder}\" type=\"Accept\" press=\"onCreateOrder\"/>\n\t\t\t\t\t\t<Button text=\"{i18n>reset}\" type=\"Reject\" press=\"onResetOrder\"/>\n\t\t\t\t\t</Toolbar>\n\t\t\t\t</footer>\n\t\t\t</Page>\n\t\t</pages>\n\t</App>\n</mvc:View>",
		"com/sapCreateMaintenenceOrder/controller/View1.controller.js": "sap.ui.define([\r\n\t\"sap/ui/core/mvc/Controller\",\r\n\t\"sap/ui/model/Filter\",\r\n\t\"sap/ui/model/FilterOperator\",\r\n\t\"sap/ui/model/json/JSONModel\",\r\n\t\"sap/m/MessageBox\"\r\n], function(Controller, Filter, FilterOperator, JSONModel, MessageBox) {\r\n\t\"use strict\";\r\n\r\n\treturn Controller.extend(\"com.sapCreateMaintenenceOrder.controller.View1\", {\r\n\r\n\t\tonInit: function() {\r\n\t\t\tvar oCreateOrderModel = new JSONModel({\r\n\t\t\t\tOrderType: \"\",\r\n\t\t\t\tEquipment: \"\",\r\n\t\t\t\tDescription: \"\",\r\n\t\t\t\tReportedBy: \"\",\r\n\t\t\t\tWorkCenterPlant: \"\",\r\n\t\t\t\tWorkCenterCode: \"\"\r\n\t\t\t});\r\n\t\t\tthis.getView().setModel(oCreateOrderModel, \"createOrderModel\");\r\n\t\t\tvar oReservationModel = new JSONModel({\r\n\t\t\t\t\"results\": [{\r\n\t\t\t\t\t\"Material\": \"\",\r\n\t\t\t\t\t\"MaterialDescription\": \"\",\r\n\t\t\t\t\t\"Plant\": \"\",\r\n\t\t\t\t\t\"Quantity\": \"\",\r\n\t\t\t\t\t\"visible\": true\r\n\t\t\t\t}]\r\n\t\t\t});\r\n\t\t\tthis.getView().setModel(oReservationModel, \"reservationModel\");\r\n\t\t\tvar oTable = this.getView().byId(\"reservationTableID\");\r\n\t\t\tvar oTemplate = sap.ui.xmlfragment(this.getView().getId(), \"com.sapCreateMaintenenceOrder.fragments.Reservation\", this);\r\n\t\t\toTable.bindAggregation(\"items\", {\r\n\t\t\t\tpath: \"reservationModel>/results\",\r\n\t\t\t\ttemplate: oTemplate\r\n\t\t\t});\r\n\t\t},\r\n\t\tonOrderTypePress: function() {\r\n\t\t\tvar oDataModel = this.getView().getModel();\r\n\t\t\toDataModel.read(\"/F4OrderTypes\", {\r\n\t\t\t\tsuccess: this.onOrderTypeSuccess.bind(this),\r\n\t\t\t\terror: this.onOrderTypeError.bind(this)\r\n\t\t\t});\r\n\t\t\tif (this.orderTypeDialog == undefined) {\r\n\t\t\t\tthis.orderTypeDialog = sap.ui.xmlfragment(this.getView().getId(), \"com.sapCreateMaintenenceOrder.fragments.OrderType\", this);\r\n\t\t\t}\r\n\t\t\tthis.getView().addDependent(this.orderTypeDialog);\r\n\t\t\tjQuery.sap.delayedCall(0, this, function() {\r\n\t\t\t\tthis.orderTypeDialog.open();\r\n\t\t\t});\r\n\t\t},\r\n\t\tonOrderTypeSuccess: function(oData, response) {\r\n\t\t\tvar oOrderSuccessModel = new JSONModel(oData);\r\n\t\t\tthis.getView().setModel(oOrderSuccessModel, \"orderSuccessModel\");\r\n\t\t},\r\n\t\tonOrderTypeError: function(oError) {\r\n\r\n\t\t},\r\n\t\tonEquipmentPress: function() {\r\n\t\t\tvar sEquipmentFilter = this.getView().byId(\"plantId\").getValue();\r\n\t\t\tvar oEquipmentFilter = new Filter(\"PlanningPlant\", FilterOperator.EQ, sEquipmentFilter);\r\n\t\t\tvar oDataModel = this.getView().getModel();\r\n\t\t\toDataModel.read(\"/F4Equipments\", {\r\n\t\t\t\tsuccess: this.EquipmentSuccess.bind(this),\r\n\t\t\t\terror: this.onEquipmentError.bind(this),\r\n\t\t\t\tfilters: [oEquipmentFilter]\r\n\t\t\t});\r\n\t\t\tif (this.equipmentDialog == undefined) {\r\n\t\t\t\tthis.equipmentDialog = sap.ui.xmlfragment(this.getView().getId(), \"com.sapCreateMaintenenceOrder.fragments.Equipment\", this);\r\n\t\t\t}\r\n\t\t\tthis.getView().addDependent(this.equipmentDialog);\r\n\t\t\tthis.equipmentDialog.open();\r\n\t\t},\r\n\t\tEquipmentSuccess: function(oData, response) {\r\n\t\t\tvar oEquipmentSuccessModel = new JSONModel(oData);\r\n\t\t\tthis.getView().setModel(oEquipmentSuccessModel, \"equipmentSuccessModel\");\r\n\t\t},\r\n\t\tonEquipmentError: function(oError) {\r\n\r\n\t\t},\r\n\t\tonReportedByPress: function() {\r\n\t\t\tvar oDataModel = this.getView().getModel();\r\n\t\t\toDataModel.read(\"/F4Users\", {\r\n\t\t\t\tsuccess: this.onReportedBySuccess.bind(this),\r\n\t\t\t\terror: this.onReportedByError.bind(this)\r\n\t\t\t});\r\n\t\t\tif (this.reportedByDialog == undefined) {\r\n\t\t\t\tthis.reportedByDialog = sap.ui.xmlfragment(this.getView().getId(), \"com.sapCreateMaintenenceOrder.fragments.ReportedBy\", this);\r\n\t\t\t}\r\n\t\t\tthis.getView().addDependent(this.reportedByDialog);\r\n\t\t\tthis.reportedByDialog.open();\r\n\t\t},\r\n\t\tonReportedBySuccess: function(oData, response) {\r\n\t\t\tvar oReportedBySuccessModel = new JSONModel(oData);\r\n\t\t\tthis.getView().setModel(oReportedBySuccessModel, \"reportedBySuccessModel\");\r\n\t\t},\r\n\t\tonReportedByError: function(oError) {\r\n\r\n\t\t},\r\n\t\tonWorkCenterPress: function() {\r\n\t\t\tvar oModel = this.getView().getModel();\r\n\t\t\toModel.read(\"/F4WorkCenters\", {\r\n\t\t\t\tsuccess: this.onWorkCenterSuccess.bind(this),\r\n\t\t\t\terror: this.onWorkCenterError.bind(this)\r\n\t\t\t});\r\n\t\t\tif (this.oWorkCenterDialog == undefined) {\r\n\t\t\t\tthis.oWorkCenterDialog = sap.ui.xmlfragment(this.getView().getId(), \"com.sapCreateMaintenenceOrder.fragments.WorkCenter\", this);\r\n\r\n\t\t\t}\r\n\t\t\tthis.getView().addDependent(this.oWorkCenterDialog);\r\n\t\t\tvar oTable = this.byId(\"workCentertableId\");\r\n\t\t\tvar oTemplate = new sap.m.ColumnListItem({\r\n\t\t\t\tcells: [\r\n\t\t\t\t\tnew sap.m.Text({\r\n\t\t\t\t\t\ttext: \"{workCenterSuccessModel>Plant}\"\r\n\t\t\t\t\t}),\r\n\t\t\t\t\tnew sap.m.Text({\r\n\t\t\t\t\t\ttext: \"{workCenterSuccessModel>WorkCenterCode}\"\r\n\t\t\t\t\t}),\r\n\t\t\t\t\tnew sap.m.Text({\r\n\t\t\t\t\t\ttext: \"{workCenterSuccessModel>WorkCenterDescription}\"\r\n\t\t\t\t\t})\r\n\t\t\t\t],\r\n\t\t\t\ttype: \"Navigation\",\r\n\t\t\t\tpress: this.onWorkCenterItemPress.bind(this)\r\n\t\t\t});\r\n\t\t\tvar sQuery = this.getView().byId(\"plantId\").getValue();\r\n\t\t\tvar oFilter = new Filter(\"Plant\", FilterOperator.EQ, sQuery);\r\n\t\t\tvar aFilter = [];\r\n\t\t\taFilter.push(oFilter);\r\n\t\t\toTable.bindAggregation(\"items\", {\r\n\t\t\t\tpath: \"workCenterSuccessModel>/results\",\r\n\t\t\t\ttemplate: oTemplate,\r\n\t\t\t\tfilters: aFilter\r\n\t\t\t});\r\n\t\t\tthis.oWorkCenterDialog.open();\r\n\t\t},\r\n\t\tonWorkCenterSuccess: function(oData, response) {\r\n\t\t\tvar oWorkCenterSuccessModel = new JSONModel(oData);\r\n\t\t\tthis.getView().setModel(oWorkCenterSuccessModel, \"workCenterSuccessModel\");\r\n\t\t},\r\n\t\tonWorkCenterError: function(oError) {\r\n\r\n\t\t},\r\n\t\tonWorkCenterPlantPress: function() {\r\n\t\t\tvar oDataModel = this.getView().getModel();\r\n\t\t\toDataModel.read(\"/F4Plants\", {\r\n\t\t\t\tsuccess: this.onPlantSuccess.bind(this),\r\n\t\t\t\terror: this.onPlantError.bind(this)\r\n\t\t\t});\r\n\t\t\tif (this.oMainWorkCenterDialog == undefined) {\r\n\t\t\t\tthis.oMainWorkCenterDialog = sap.ui.xmlfragment(this.getView().getId(), \"com.sapCreateMaintenenceOrder.fragments.MainWorkCenter\",\r\n\t\t\t\t\tthis);\r\n\t\t\t}\r\n\t\t\tthis.getView().addDependent(this.oMainWorkCenterDialog);\r\n\t\t\tthis.oMainWorkCenterDialog.open();\r\n\t\t},\r\n\t\tonPlantSuccess: function(oData, response) {\r\n\t\t\tvar oPlantSuccessModel = new JSONModel(oData);\r\n\t\t\tthis.getView().setModel(oPlantSuccessModel, \"plantSuccessModel\");\r\n\t\t},\r\n\t\tonPlantError: function(oError) {\r\n\r\n\t\t},\r\n\t\tonReservationPlantPress: function(oEvent) {\r\n\t\t\tvar oDataModel = this.getView().getModel();\r\n\t\t\toDataModel.read(\"/F4Plants\", {\r\n\t\t\t\tsuccess: this.onPlantSuccess.bind(this),\r\n\t\t\t\terror: this.onPlantError.bind(this)\r\n\t\t\t});\r\n\t\t\tvar sPath = oEvent.getSource().getParent().getBindingContext(\"reservationModel\").getPath();\r\n\t\t\tthis.nMatIndex = sPath.split(\"/\")[2];\r\n\t\t\tif (this.oReservationPlantDialog == undefined) {\r\n\t\t\t\tthis.oReservationPlantDialog = sap.ui.xmlfragment(this.getView().getId(),\r\n\t\t\t\t\t\"com.sapCreateMaintenenceOrder.fragments.ReservationPlant\", this);\r\n\t\t\t}\r\n\t\t\tthis.getView().addDependent(this.oReservationPlantDialog);\r\n\t\t\tthis.oReservationPlantDialog.open();\r\n\t\t},\r\n\t\tonEquipmentPressOK: function() {\r\n\t\t\tthis.equipmentDialog.close();\r\n\t\t\tthis.byId(\"eqSearch\").setValue(\"\");\r\n\t\t},\r\n\t\tonMainWorkPressOK: function() {\r\n\t\t\tthis.oMainWorkCenterDialog.close();\r\n\t\t\tthis.byId(\"plantSearch\").setValue(\"\");\r\n\t\t},\r\n\t\tonOrderTypePressOK: function() {\r\n\t\t\tthis.orderTypeDialog.close();\r\n\t\t\tthis.byId(\"orderSearch\").setValue(\"\");\r\n\t\t},\r\n\t\tonReportedByPressOK: function() {\r\n\t\t\tthis.reportedByDialog.close();\r\n\t\t\tthis.byId(\"reportedSearch\").setValue(\"\");\r\n\t\t},\r\n\t\tonWorkCenterPressOK: function() {\r\n\t\t\tthis.oWorkCenterDialog.close();\r\n\t\t\tthis.byId(\"workCenterSearch\").setValue(\"\");\r\n\t\t},\r\n\t\tonMaterialPressOK: function() {\r\n\t\t\tthis.oMaterialFragment.close();\r\n\t\t\tthis.byId(\"matSearch\").setValue(\"\");\r\n\t\t},\r\n\t\tonReservationPlantPressOK: function() {\r\n\t\t\tthis.oReservationPlantDialog.close();\r\n\t\t},\r\n\t\tonReportedItemPress: function(oEvent) {\r\n\t\t\tvar oItem = oEvent.getSource();\r\n\t\t\tvar oContext = oItem.getBindingContext(\"reportedBySuccessModel\");\r\n\t\t\tvar sName = oContext.getObject().Bname;\r\n\t\t\tthis.getView().byId(\"reportedById\").setValue(sName);\r\n\t\t\tthis.onReportedByPressOK();\r\n\t\t},\r\n\t\tonEquipmentItemPress: function(oEvent) {\r\n\t\t\tvar oItem = oEvent.getSource();\r\n\t\t\tvar oContext = oItem.getBindingContext(\"equipmentSuccessModel\");\r\n\t\t\tvar sEquipment = oContext.getObject().Equipment;\r\n\t\t\tthis.getView().byId(\"equipmentId\").setValue(sEquipment);\r\n\t\t\tthis.onEquipmentPressOK();\r\n\t\t},\r\n\t\tonOrderTypeItemPress: function(oEvent) {\r\n\t\t\tvar oItem = oEvent.getSource();\r\n\t\t\tvar oContext = oItem.getBindingContext(\"orderSuccessModel\");\r\n\t\t\tvar sType = oContext.getObject().OrderType;\r\n\t\t\tthis.getView().byId(\"orderTypeId\").setValue(sType);\r\n\t\t\tthis.onOrderTypePressOK();\r\n\t\t},\r\n\t\tonPlantItemPress: function(oEvent) {\r\n\t\t\tvar oItem = oEvent.getSource();\r\n\t\t\tvar oContext = oItem.getBindingContext(\"plantSuccessModel\");\r\n\t\t\tvar sPlant = oContext.getObject().Plant;\r\n\t\t\tthis.getView().byId(\"plantId\").setValue(sPlant);\r\n\t\t\tthis.onMainWorkPressOK();\r\n\t\t},\r\n\t\tonWorkCenterItemPress: function(oEvent) {\r\n\t\t\tvar oItem = oEvent.getSource();\r\n\t\t\tvar oContext = oItem.getBindingContext(\"workCenterSuccessModel\");\r\n\t\t\tvar sWorkCenter = oContext.getObject().WorkCenterCode;\r\n\t\t\tthis.getView().byId(\"workCenterId\").setValue(sWorkCenter);\r\n\t\t\tthis.onWorkCenterPressOK();\r\n\t\t},\r\n\t\tonMaterialItemPress: function(oEvent) {\r\n\t\t\tvar oItem = oEvent.getSource();\r\n\t\t\tvar oContext = oItem.getBindingContext(\"MatModel\");\r\n\t\t\tvar sMaterial = oContext.getObject().Material;\r\n\t\t\tvar sMaterialDescription = oContext.getObject().MaterialDescription;\r\n\t\t\tvar sPlant = oContext.getObject().Plant;\r\n\t\t\tthis.getView().getModel(\"reservationModel\").setProperty(\"/results/\" + this.nMatIndex + \"/Material\", sMaterial);\r\n\t\t\tthis.getView().getModel(\"reservationModel\").setProperty(\"/results/\" + this.nMatIndex + \"/MaterialDescription\", sMaterialDescription);\r\n\t\t\tthis.getView().getModel(\"reservationModel\").setProperty(\"/results/\" + this.nMatIndex + \"/Plant\", sPlant);\r\n\t\t\tthis.onMaterialPressOK();\r\n\t\t},\r\n\t\tonAddIconPress: function() {\r\n\t\t\tvar oTemplate = sap.ui.xmlfragment(this.getView().getId(), \"com.sapCreateMaintenenceOrder.fragments.Reservation\", this);\r\n\t\t\tvar oTable = this.getView().byId(\"reservationTableID\");\r\n\t\t\tvar oMaterial = {\r\n\t\t\t\t\"Material\": \"\",\r\n\t\t\t\t\"MaterialDescription\": \"\",\r\n\t\t\t\t\"Plant\": \"\",\r\n\t\t\t\t\"Quantity\": \"\",\r\n\t\t\t\t\"visible\": true\r\n\t\t\t};\r\n\t\t\tvar nlength = this.getView().getModel(\"reservationModel\").getData().results.length;\r\n\t\t\tthis.getView().getModel(\"reservationModel\").setProperty(\"/results/\" + nlength + \"/\", oMaterial);\r\n\t\t},\r\n\t\tonMaterialPress: function(oEvent) {\r\n\t\t\tvar oDataModel = this.getView().getModel();\r\n\t\t\tvar sPlant = this.getView().byId(\"plantId\").getValue();\r\n\t\t\tvar oFilterPlantMat = new Filter(\"Plant\", FilterOperator.Contains, sPlant);\r\n\t\t\toDataModel.read(\"/F4MaterialPlants\", {\r\n\t\t\t\tsuccess: this._materialReadSuccess.bind(this),\r\n\t\t\t\terror: this._materialReadError.bind(this),\r\n\t\t\t\tfilters:[oFilterPlantMat]\r\n\t\t\t});\r\n\t\t\tvar sPath = oEvent.getSource().getParent().getBindingContext(\"reservationModel\").getPath();\r\n\t\t\tthis.nMatIndex = sPath.split(\"/\")[2];\r\n\t\t\tif (this.oMaterialFragment == undefined) {\r\n\t\t\t\tthis.oMaterialFragment = sap.ui.xmlfragment(this.getView().getId(), \"com.sapCreateMaintenenceOrder.fragments.Material\", this);\r\n\t\t\t}\r\n\t\t\tthis.getView().addDependent(this.oMaterialFragment);\r\n\t\t\tthis.oMaterialFragment.open();\r\n\t\t},\r\n\t\t_materialReadSuccess: function(oData) {\r\n\t\t\tvar oMatModel = new JSONModel(oData);\r\n\t\t\tthis.getView().setModel(oMatModel, \"MatModel\");\r\n\t\t},\r\n\t\t_materialReadError: function() {\r\n\r\n\t\t},\r\n\t\tonRowDelete: function(oEvent) {\r\n\t\t\tvar sPath = oEvent.getSource().getParent().getBindingContext(\"reservationModel\").getPath();\r\n\t\t\tthis.nMatIndex = sPath.split(\"/\")[2];\r\n\t\t\tvar aData = this.getView().getModel(\"reservationModel\").getData();\r\n\t\t\taData.results.splice(this.nMatIndex, 1);\r\n\t\t\tthis.getView().getModel(\"reservationModel\").refresh();\r\n\t\t\t// var oitem = oEvent.getSource().getParent();\r\n\t\t\t// var oTable = oEvent.getSource().getParent().getParent();\r\n\t\t\t// oTable.removeItem(oitem);\r\n\t\t},\r\n\t\tonReservationPlantItemPress: function(oEvent) {\r\n\t\t\tvar oItem = oEvent.getSource();\r\n\t\t\tvar oContext = oItem.getBindingContext(\"plantSuccessModel\");\r\n\t\t\tvar sPlant = oContext.getObject().Plant;\r\n\t\t\tthis.getView().getModel(\"reservationModel\").setProperty(\"/results/\" + this.nMatIndex + \"/Plant\", sPlant);\r\n\t\t\tthis.oReservationPlantDialog.close();\r\n\t\t},\r\n\t\tonCreateOrder: function() {\r\n\t\t\tvar aLineItems = this.getView().getModel(\"reservationModel\").getData().results;\r\n\t\t\taLineItems.splice();\r\n\t\t\tvar oCreateOrder = this.getView().getModel(\"createOrderModel\").getData();\r\n\t\t\tif (oCreateOrder.OrderType == \"\" || oCreateOrder.Equipment == \"\" || oCreateOrder.Description == \"\" || oCreateOrder.WorkCenterPlant ==\r\n\t\t\t\t\"\" || oCreateOrder.WorkCenterCode == \"\" || oCreateOrder.ReportedBy == \"\") {\r\n\t\t\t\tMessageBox.error(\r\n\t\t\t\t\t\"Please Fill all Mandatory Fields\"\r\n\t\t\t\t);\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\t\t\tthis.getView().setBusy(true);\r\n\t\t\tvar nId = 100 * Math.random(),\r\n\t\t\t\tsId = nId.toFixed(2),\r\n\t\t\t\tsQuantity, nQuantity, aPayload = [],\r\n\t\t\t\toLineItem = {};\r\n\t\t\toCreateOrder.MaintenanceOrderId = sId;\r\n\t\t\tfor (var i = 0; i < aLineItems.length; i++) {\r\n\t\t\t\toLineItem.MaintenanceOrderId = oCreateOrder.MaintenanceOrderId;\r\n\t\t\t\toLineItem.RowNumber = i.toString();\r\n\t\t\t\tsQuantity = aLineItems[i].Quantity;\r\n\t\t\t\tnQuantity = Number(sQuantity);\r\n\t\t\t\toLineItem.Quantity = nQuantity;\r\n\t\t\t\toLineItem.Material = aLineItems[i].Material;\r\n\t\t\t\toLineItem.MaterialDescription = aLineItems[i].MaterialDescription;\r\n\t\t\t\toLineItem.Plant = aLineItems[i].Plant;\r\n\t\t\t\taPayload.push(oLineItem);\r\n\t\t\t}\r\n\t\t\toCreateOrder.MaintenanceOrderReservations = aPayload;\r\n\t\t\tvar oDataModel = this.getView().getModel();\r\n\t\t\toDataModel.create(\"/MaintenanceOrders\", oCreateOrder, {\r\n\t\t\t\tsuccess: this.onCreateSuccess.bind(this),\r\n\t\t\t\terror: this.onCreateError.bind(this)\r\n\t\t\t});\r\n\t\t},\r\n\t\tonCreateSuccess: function(oData, response) {\r\n\t\t\tMessageBox.success(\r\n\t\t\t\tresponse.data.Message\r\n\t\t\t);\r\n\t\t\tjQuery.sap.delayedCall(10, this, function() {\r\n\t\t\t\tthis.getView().setBusy(false);\r\n\t\t\t});\r\n\t\t\tthis.getView().getModel(\"reservationModel\").setData({\r\n\t\t\t\t\"results\": [{\r\n\t\t\t\t\t\"Material\": \"\",\r\n\t\t\t\t\t\"MaterialDescription\": \"\",\r\n\t\t\t\t\t\"Plant\": \"\",\r\n\t\t\t\t\t\"Quantity\": \"\",\r\n\t\t\t\t\t\"visible\": true\r\n\t\t\t\t}]\r\n\t\t\t});\r\n\t\t\tthis.getView().getModel(\"createOrderModel\").setData({\r\n\t\t\t\tOrderType: \"\",\r\n\t\t\t\tEquipment: \"\",\r\n\t\t\t\tDescription: \"\",\r\n\t\t\t\tWorkCenterPlant: \"\",\r\n\t\t\t\tWorkCenterCode: \"\"\r\n\t\t\t});\r\n\t\t},\r\n\t\tonCreateError: function(oError) {\r\n\t\t\tMessageBox.error(\r\n\t\t\t\tJSON.parse(oError.responseText).error.message.value\r\n\t\t\t);\r\n\t\t\tthis.getView().setBusy(false);\r\n\t\t},\r\n\t\tonEquipmentSearch: function(oEvent) {\r\n\t\t\tvar sQuery = oEvent.getParameter(\"newValue\");\r\n\t\t\tvar sPlantQ = this.getView().byId(\"plantId\").getValue();\r\n\t\t\tvar oFilterEq = new Filter(\"Equipment\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterEqD = new Filter(\"EquipmentDescription\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterPlant = new Filter(\"PlanningPlant\", FilterOperator.EQ, sPlantQ);\r\n\t\t\tvar aFilters = [];\r\n\t\t\taFilters.push(oFilterEq);\r\n\t\t\taFilters.push(oFilterEqD);\r\n\t\t\tvar oTable = this.byId(\"equipmentTbId\");\r\n\t\t\tvar oBinding = oTable.getBinding(\"items\");\r\n\t\t\toBinding.filter(new Filter([new Filter(aFilters, false), oFilterPlant], true));\r\n\t\t},\r\n\t\tonOrderTypeSearch: function(oEvent) {\r\n\t\t\tvar sQuery = oEvent.getParameter(\"newValue\");\r\n\t\t\tvar oFilter = new Filter(\"OrderType\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterName = new Filter(\"OrderType\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar aFilters = [];\r\n\t\t\taFilters.push(oFilter);\r\n\t\t\taFilters.push(oFilterName);\r\n\t\t\tvar oTable = this.byId(\"orderTypeTbId\");\r\n\t\t\tvar oBinding = oTable.getBinding(\"items\");\r\n\t\t\toBinding.filter(new Filter(aFilters, false));\r\n\t\t},\r\n\t\tonReportedSearchSearch: function(oEvent) {\r\n\t\t\tvar sQuery = oEvent.getParameter(\"newValue\");\r\n\t\t\tvar oFilter = new Filter(\"Bname\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar aFilters = [];\r\n\t\t\taFilters.push(oFilter);\r\n\t\t\tvar oTable = this.byId(\"reportedByTbId\");\r\n\t\t\tvar oBinding = oTable.getBinding(\"items\");\r\n\t\t\toBinding.filter(aFilters);\r\n\t\t},\r\n\t\tonPlantSearch: function(oEvent) {\r\n\t\t\tvar sQuery = oEvent.getParameter(\"newValue\");\r\n\t\t\tvar oFilter = new Filter(\"Plant\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterCity = new Filter(\"City\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterName = new Filter(\"Name\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar aFilters = [];\r\n\t\t\taFilters.push(oFilter);\r\n\t\t\taFilters.push(oFilterCity);\r\n\t\t\taFilters.push(oFilterName);\r\n\t\t\tvar oTable = this.byId(\"plantTbId\");\r\n\t\t\tvar oBinding = oTable.getBinding(\"items\");\r\n\t\t\toBinding.filter(new Filter(aFilters, false));\r\n\t\t},\r\n\t\tonWorkCenterSearch: function(oEvent) {\r\n\t\t\tvar sQuery = oEvent.getParameter(\"newValue\");\r\n\t\t\tvar sPlantQ = this.getView().byId(\"plantId\").getValue();\r\n\t\t\tvar oFilter = new Filter(\"WorkCenterCode\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterDes = new Filter(\"WorkCenterDescription\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterPlant = new Filter(\"Plant\", FilterOperator.Contains, sPlantQ);\r\n\t\t\tvar aFilters = [];\r\n\t\t\taFilters.push(oFilter);\r\n\t\t\taFilters.push(oFilterDes);\r\n\t\t\tvar oTable = this.byId(\"workCentertableId\");\r\n\t\t\tvar oBinding = oTable.getBinding(\"items\");\r\n\t\t\toBinding.filter(new Filter([new Filter(aFilters, false), oFilterPlant], true));\r\n\t\t},\r\n\t\tonMatSearch: function(oEvent) {\r\n\t\t\tvar sQuery = oEvent.getParameter(\"newValue\");\r\n\t\t\tvar oFilter = new Filter(\"Material\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterMD = new Filter(\"MaterialDescription\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar aFilters = [];\r\n\t\t\taFilters.push(oFilter);\r\n\t\t\taFilters.push(oFilterMD);\r\n\t\t\tvar oTable = this.byId(\"MatResTbId\");\r\n\t\t\tvar oBinding = oTable.getBinding(\"items\");\r\n\t\t\toBinding.filter(new Filter(aFilters, false));\r\n\t\t},\r\n\t\tonEquipmentBackendSearch: function(oEvent) {\r\n\t\t\tvar sQuery = oEvent.getParameter(\"query\");\r\n\t\t\tvar sPlantQ = this.getView().byId(\"plantId\").getValue();\r\n\t\t\tvar oFilterPlant = new Filter(\"PlanningPlant\", FilterOperator.EQ, sPlantQ);\r\n\t\t\tvar oFilterEq = new Filter(\"EquipmentDescription\", FilterOperator.EQ, sQuery);\r\n\t\t\tvar oModel = this.getView().getModel();\r\n\t\t\toModel.read(\"/F4Equipments\", {\r\n\t\t\t\tsuccess: this.onBackendEqSuccess.bind(this),\r\n\t\t\t\terror: this.onBackendEqError.bind(this),\r\n\t\t\t\tfilters: [new Filter([oFilterPlant, oFilterEq], true)]\r\n\t\t\t});\r\n\t\t},\r\n\t\tonBackendEqSuccess: function(oData) {\r\n\t\t\tthis.getView().getModel(\"equipmentSuccessModel\").setData(oData);\r\n\t\t\tthis.getView().getModel(\"equipmentSuccessModel\").refresh();\r\n\t\t},\r\n\t\tonBackendEqError: function() {\r\n\r\n\t\t},\r\n\t\tonMatBackendSearch: function(oEvent) {\r\n\t\t\tvar sQuery = oEvent.getParameter(\"query\");\r\n\t\t\tvar oFilterMD = new Filter(\"MaterialDescription\", FilterOperator.EQ, sQuery);\r\n\t\t\tvar sPlant = this.getView().byId(\"plantId\").getValue();\r\n\t\t\tvar oFilterPlantMat = new Filter(\"Plant\", FilterOperator.Contains, sPlant);\r\n\t\t\tvar aFilters = [];\r\n\t\t\taFilters.push(oFilterMD);\r\n\t\t\tvar oModel = this.getView().getModel();\r\n\t\t\toModel.read(\"/F4MaterialPlants\", {\r\n\t\t\t\tsuccess: this.onBackendMatSuccess.bind(this),\r\n\t\t\t\terror: this.onBackendMatError.bind(this),\r\n\t\t\t\tfilters: [new Filter([oFilterMD, oFilterPlantMat], true)]\r\n\t\t\t});\r\n\t\t},\r\n\r\n\t\tonBackendMatSuccess: function(oData) {\r\n\t\t\tthis.getView().getModel(\"MatModel\").setData(oData);\r\n\t\t\tthis.getView().getModel(\"MatModel\").refresh();\r\n\t\t},\r\n\t\tonBackendMatError: function() {\r\n\r\n\t\t},\r\n\r\n\t\tonPlantResSearch: function(oEvent) {\r\n\t\t\tvar sQuery = oEvent.getParameter(\"newValue\");\r\n\t\t\tvar oFilter = new Filter(\"Plant\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterCity = new Filter(\"City\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar oFilterName = new Filter(\"Name\", FilterOperator.Contains, sQuery);\r\n\t\t\tvar aFilters = [];\r\n\t\t\taFilters.push(oFilter);\r\n\t\t\taFilters.push(oFilterCity);\r\n\t\t\taFilters.push(oFilterName);\r\n\t\t\tvar oTable = this.byId(\"PlantResTbId\");\r\n\t\t\tvar oBinding = oTable.getBinding(\"items\");\r\n\t\t\toBinding.filter(new Filter(aFilters, false));\r\n\t\t},\r\n\t\tonResetOrder: function() {\r\n\t\t\tthis.getView().getModel(\"reservationModel\").setData({\r\n\t\t\t\t\"results\": [{\r\n\t\t\t\t\t\"Material\": \"\",\r\n\t\t\t\t\t\"MaterialDescription\": \"\",\r\n\t\t\t\t\t\"Plant\": \"\",\r\n\t\t\t\t\t\"Quantity\": \"\",\r\n\t\t\t\t\t\"visible\": true\r\n\t\t\t\t}]\r\n\t\t\t});\r\n\t\t\tthis.getView().getModel(\"createOrderModel\").setData({\r\n\t\t\t\tOrderType: \"\",\r\n\t\t\t\tEquipment: \"\",\r\n\t\t\t\tDescription: \"\",\r\n\t\t\t\tWorkCenterPlant: \"\",\r\n\t\t\t\tWorkCenterCode: \"\"\r\n\t\t\t});\r\n\t\t}\r\n\t});\r\n});",
		"com/sapCreateMaintenenceOrder/Component.js": "sap.ui.define([\r\n\t\"sap/ui/core/UIComponent\",\r\n\t\"sap/ui/Device\",\r\n\t\"com/sapCreateMaintenenceOrder/model/models\"\r\n], function(UIComponent, Device, models) {\r\n\t\"use strict\";\r\n\r\n\treturn UIComponent.extend(\"com.sapCreateMaintenenceOrder.Component\", {\r\n\r\n\t\tmetadata: {\r\n\t\t\tmanifest: \"json\"\r\n\t\t},\r\n\r\n\t\t/**\r\n\t\t * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.\r\n\t\t * @public\r\n\t\t * @override\r\n\t\t */\r\n\t\tinit: function() {\r\n\t\t\t// call the base component's init function\r\n\t\t\tUIComponent.prototype.init.apply(this, arguments);\r\n\r\n\t\t\t// set the device model\r\n\t\t\tthis.setModel(models.createDeviceModel(), \"device\");\r\n\t\t}\r\n\t});\r\n});",
		"com/sapCreateMaintenenceOrder/fragments/Equipment.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\r\n\t<Dialog title=\"{i18n>equipment}\">\r\n\t\t<content>\r\n\t\t\t<Table id = \"equipmentTbId\" items=\"{equipmentSuccessModel>/results}\">\r\n\t\t\t\t<headerToolbar>\r\n\t\t\t\t\t<Toolbar>\r\n\t\t\t\t\t\t<content>\r\n\t\t\t\t\t\t\t<ToolbarSpacer/>\r\n\t\t\t\t\t\t\t<SearchField id = \"eqSearch\" width=\"40%\" liveChange = \"onEquipmentSearch\" search = \"onEquipmentBackendSearch\"/>\r\n\t\t\t\t\t\t</content>\r\n\t\t\t\t\t</Toolbar>\r\n\t\t\t\t</headerToolbar>\r\n\t\t\t\t<columns>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>equipment}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>description}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t</columns>\r\n\t\t\t\t<items>\r\n\t\t\t\t\t<ColumnListItem type = \"Navigation\" press = \"onEquipmentItemPress\">\r\n\t\t\t\t\t\t<Text text=\"{equipmentSuccessModel>Equipment}\"/>\r\n\t\t\t\t\t\t<Text text=\"{equipmentSuccessModel>EquipmentDescription}\"/>\r\n\t\t\t\t\t</ColumnListItem>\r\n\t\t\t\t</items>\r\n\t\t\t</Table>\r\n\t\t</content>\r\n\t\t<buttons>\r\n\t\t\t<Button text=\"Cancel\" press=\"onEquipmentPressOK\"/>\r\n\t\t</buttons>\r\n\t</Dialog>\r\n</core:FragmentDefinition>",
		"com/sapCreateMaintenenceOrder/fragments/Reservation.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\r\n\t<ColumnListItem press=\"onPlantItemPress\">\r\n\t\t<Input showValueHelp=\"true\"  value =\"{reservationModel>Material}\" valueHelpRequest=\"onMaterialPress\"/>\r\n\t\t<Input  value =\"{reservationModel>MaterialDescription}\" enabled=\"false\"/>\r\n\t\t<Input  value =\"{reservationModel>Plant}\" enabled=\"false\"/>\r\n\t\t<Input value =\"{reservationModel>Quantity}\" />\r\n\t\t<Button icon = \"sap-icon://delete\" visible=\"{reservationModel>visible}\" press = \"onRowDelete\" class= \"sapUiLargeMarginBegin\"/>\r\n\t</ColumnListItem>\r\n</core:FragmentDefinition>",
		"com/sapCreateMaintenenceOrder/fragments/ReportedBy.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\r\n\t<Dialog title=\"{i18n>reportedBy}\">\r\n\t\t<content>\r\n\t\t\t<Table id=\"reportedByTbId\" items=\"{reportedBySuccessModel>/results}\">\r\n\t\t\t\t<headerToolbar>\r\n\t\t\t\t\t<Toolbar>\r\n\t\t\t\t\t\t<content>\r\n\t\t\t\t\t\t\t<ToolbarSpacer/>\r\n\t\t\t\t\t\t\t<SearchField id =\"reportedSearch\" width=\"40%\" liveChange=\"onReportedSearchSearch\"/>\r\n\t\t\t\t\t\t</content>\r\n\t\t\t\t\t</Toolbar>\r\n\t\t\t\t</headerToolbar>\r\n\t\t\t\t<columns>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>names}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t</columns>\r\n\t\t\t\t<items>\r\n\t\t\t\t\t<ColumnListItem type=\"Navigation\" press=\"onReportedItemPress\">\r\n\t\t\t\t\t\t<Text text=\"{reportedBySuccessModel>Bname}\"/>\r\n\t\t\t\t\t</ColumnListItem>\r\n\t\t\t\t</items>\r\n\t\t\t</Table>\r\n\t\t</content>\r\n\t\t<buttons>\r\n\t\t\t<Button text=\"Cancel\" press=\"onReportedByPressOK\"/>\r\n\t\t</buttons>\r\n\t</Dialog>\r\n</core:FragmentDefinition>",
		"com/sapCreateMaintenenceOrder/fragments/MainWorkCenter.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\r\n\t<Dialog title=\"{i18n>mainWorkCenter_Plant}\">\r\n\t\t<content>\r\n\t\t\t<Table id=\"plantTbId\" items=\"{plantSuccessModel>/results}\">\r\n\t\t\t\t<headerToolbar>\r\n\t\t\t\t\t<Toolbar>\r\n\t\t\t\t\t\t<content>\r\n\t\t\t\t\t\t\t<ToolbarSpacer/>\r\n\t\t\t\t\t\t\t<SearchField id = \"plantSearch\" width=\"40%\" liveChange=\"onPlantSearch\"/>\r\n\t\t\t\t\t\t</content>\r\n\t\t\t\t\t</Toolbar>\r\n\t\t\t\t</headerToolbar>\r\n\t\t\t\t<columns>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>plant}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>city}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>name}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t</columns>\r\n\t\t\t\t<items>\r\n\t\t\t\t\t<ColumnListItem type=\"Navigation\" press=\"onPlantItemPress\">\r\n\t\t\t\t\t\t<Text text=\"{plantSuccessModel>Plant}\"/>\r\n\t\t\t\t\t\t<Text text=\"{plantSuccessModel>City}\"/>\r\n\t\t\t\t\t\t<Text text=\"{plantSuccessModel>Name}\"/>\r\n\t\t\t\t\t</ColumnListItem>\r\n\t\t\t\t</items>\r\n\t\t\t</Table>\r\n\t\t</content>\r\n\t\t<buttons>\r\n\t\t\t<Button text=\"Cancel\" press=\"onMainWorkPressOK\"/>\r\n\t\t</buttons>\r\n\t</Dialog>\r\n</core:FragmentDefinition>",
		"com/sapCreateMaintenenceOrder/fragments/WorkCenter.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\r\n\t<Dialog title = \"{i18n>workCenter}\">\r\n\t\t<content>\r\n\t\t\t<Table id = \"workCentertableId\">\r\n\t\t\t\t<headerToolbar>\r\n\t\t\t\t\t<Toolbar>\r\n\t\t\t\t\t\t<content>\r\n\t\t\t\t\t\t\t<ToolbarSpacer/>\r\n\t\t\t\t\t\t\t<SearchField id = \"workCenterSearch\" width=\"40%\" liveChange= \"onWorkCenterSearch\"/>\r\n\t\t\t\t\t\t</content>\r\n\t\t\t\t\t</Toolbar>\r\n\t\t\t\t</headerToolbar>\r\n\t\t\t\t<columns>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>plant}\" />\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>workCenter}\" />\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>shortDescription}\" />\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t</columns>\r\n\t\t\t</Table>\r\n\t\t</content>\r\n\t\t<buttons>\r\n\t\t\t<Button text=\"Cancel\" press=\"onWorkCenterPressOK\"/>\r\n\t\t</buttons>\r\n\t</Dialog>\r\n</core:FragmentDefinition>",
		"com/sapCreateMaintenenceOrder/fragments/OrderType.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\r\n\t<Dialog title=\"{i18n>orderType}\">\r\n\t\t<content>\r\n\t\t\t<Table id =\"orderTypeTbId\" items=\"{orderSuccessModel>/results}\">\r\n\t\t\t\t<headerToolbar>\r\n\t\t\t\t\t<Toolbar>\r\n\t\t\t\t\t\t<content>\r\n\t\t\t\t\t\t\t<ToolbarSpacer/>\r\n\t\t\t\t\t\t\t<SearchField id =\"orderSearch\" width=\"40%\" liveChange = \"onOrderTypeSearch\"/>\r\n\t\t\t\t\t\t</content>\r\n\t\t\t\t\t</Toolbar>\r\n\t\t\t\t</headerToolbar>\r\n\t\t\t\t<columns>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>type}\" />\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>name}\" />\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t</columns>\r\n\t\t\t\t<items >\r\n\t\t\t\t\t<ColumnListItem type = \"Navigation\" press = \"onOrderTypeItemPress\">\r\n\t\t\t\t\t\t<Text text=\"{orderSuccessModel>OrderType}\"/>\r\n\t\t\t\t\t\t<Text text=\"{orderSuccessModel>Text}\"/>\r\n\t\t\t\t\t</ColumnListItem>\r\n\t\t\t\t</items>\r\n\t\t\t</Table>\r\n\t\t</content>\r\n\t\t<buttons>\r\n\t\t\t<Button text=\"Cancel\" press=\"onOrderTypePressOK\"/>\r\n\t\t</buttons>\r\n\t</Dialog>\r\n</core:FragmentDefinition>",
		"com/sapCreateMaintenenceOrder/fragments/Material.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\r\n\t<Dialog title=\"{i18n>material}\">\r\n\t\t<content>\r\n\t\t\t<Table id = \"MatResTbId\" items=\"{MatModel>/results}\">\r\n\t\t\t\t<headerToolbar>\r\n\t\t\t\t\t<Toolbar>\r\n\t\t\t\t\t\t<content>\r\n\t\t\t\t\t\t\t<ToolbarSpacer/>\r\n\t\t\t\t\t\t\t<SearchField id =\"matSearch\" width=\"40%\" liveChange=\"onMatSearch\" search = \"onMatBackendSearch\"/>\r\n\t\t\t\t\t\t</content>\r\n\t\t\t\t\t</Toolbar>\r\n\t\t\t\t</headerToolbar>\r\n\t\t\t\t<columns>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>materialcode}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>description}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>plant}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t</columns>\r\n\t\t\t\t<items>\r\n\t\t\t\t\t<ColumnListItem type=\"Navigation\" press=\"onMaterialItemPress\">\r\n\t\t\t\t\t\t<Text text=\"{MatModel>Material}\"/>\r\n\t\t\t\t\t\t<Text text=\"{MatModel>MaterialDescription}\"/>\r\n\t\t\t\t\t\t<Text text=\"{MatModel>Plant}\"/>\r\n\t\t\t\t\t</ColumnListItem>\r\n\t\t\t\t</items>\r\n\t\t\t</Table>\r\n\t\t</content>\r\n\t\t<buttons>\r\n\t\t\t<Button text=\"Cancel\" press=\"onMaterialPressOK\"/>\r\n\t\t</buttons>\r\n\t</Dialog>\r\n</core:FragmentDefinition>",
		"com/sapCreateMaintenenceOrder/fragments/ReservationPlant.fragment.xml": "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\r\n\t<Dialog title=\"{i18n>mainWorkCenter_Plant}\">\r\n\t\t<content>\r\n\t\t\t<Table id = \"PlantResTbId\" items=\"{plantSuccessModel>/results}\">\r\n\t\t\t\t<headerToolbar>\r\n\t\t\t\t\t<Toolbar>\r\n\t\t\t\t\t\t<content>\r\n\t\t\t\t\t\t\t<ToolbarSpacer/>\r\n\t\t\t\t\t\t\t<SearchField id = \"resPlantSearch\" width=\"40%\" liveChange = \"onPlantResSearch\"/>\r\n\t\t\t\t\t\t</content>\r\n\t\t\t\t\t</Toolbar>\r\n\t\t\t\t</headerToolbar>\r\n\t\t\t\t<columns>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>plant}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>city}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t\t<Column>\r\n\t\t\t\t\t\t<Text text=\"{i18n>name}\"/>\r\n\t\t\t\t\t</Column>\r\n\t\t\t\t</columns>\r\n\t\t\t\t<items>\r\n\t\t\t\t\t<ColumnListItem type = \"Navigation\" press = \"onReservationPlantItemPress\">\r\n\t\t\t\t\t\t<Text text=\"{plantSuccessModel>Plant}\"/>\r\n\t\t\t\t\t\t<Text text=\"{plantSuccessModel>City}\"/>\r\n\t\t\t\t\t\t<Text text=\"{plantSuccessModel>Name}\"/>\r\n\t\t\t\t\t</ColumnListItem>\r\n\t\t\t\t</items>\r\n\t\t\t</Table>\r\n\t\t</content>\r\n\t\t<buttons>\r\n\t\t\t<Button text=\"Cancel\" press=\"onReservationPlantPressOK\"/>\r\n\t\t</buttons>\r\n\t</Dialog>\r\n</core:FragmentDefinition>"
	}
});