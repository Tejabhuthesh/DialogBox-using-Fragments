sap.ui.define([
    "sap/ui/core/mvc/Controller"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
       
        return Controller.extend("dilogboxid.dilogbox.controller.View1", {
            onInit: function () {

                var data = [
                    {
                        "Name": "Teja",
                        "Age": "23",
                        "Designation": "intern"
                    },
                    {
                        "Name": "Bhuthesh",
                        "Age": "21",
                        "Designation": "fiori"
                    },
                    {
                        "Name": "Sandeep",
                        "Age": "25",
                        "Designation": "employee"
                    }
                ];

                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData(data);
                this.getView().setModel(oModel, "Data1");

            },
            onPress: function () {
                var myView = this.getView();
                var oDialog = myView.byId("idDialog");
                if (!oDialog) {
                    oDialog = sap.ui.xmlfragment(myView.getId(), "dilogboxid.dilogbox.view.View1");
                    myView.addDependent(oDialog);
                }
                oDialog.open();

            },
            CancelPress: function () {
                this.byId("idDialog").close();
            },

            //  okPress: function() {
            //      this.byId("idDialog").close();
            // },

            onClick: function (oEvent) {

                var oSelectedItem = oEvent.oSource.mProperties;

                var oInput = this.byId("employee");
                
                oInput.setValue(oSelectedItem.title);
                //oInput.setValue(oSelectedItem.description);
            }


        });
    });
