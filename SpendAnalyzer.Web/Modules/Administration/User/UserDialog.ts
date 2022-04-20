namespace SpendAnalyzer.Administration {

    @Serenity.Decorators.registerClass()
    export class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey() { return UserForm.formKey; }
        protected getIdProperty() { return UserRow.idProperty; }
        protected getIsActiveProperty() { return UserRow.isActiveProperty; }
        protected getLocalTextPrefix() { return UserRow.localTextPrefix; }
        protected getNameProperty() { return UserRow.nameProperty; }
        protected getService() { return UserService.baseUrl; }

        protected form = new UserForm(this.idPrefix);
        private userSynfusinDlg: ej.popups.Dialog;
        private treeVw: ej.navigations.TreeView;
        private data:any

        constructor() {
            super();

            this.form.Password.addValidationRule(this.uniqueName, e => {
                if (this.form.Password.value.length < 7)
                    return "Password must be at least 7 characters!";
            });
           
            this.form.PasswordConfirm.addValidationRule(this.uniqueName, e => {
                if (this.form.Password.value != this.form.PasswordConfirm.value)
                    return "The passwords entered doesn't match!";
            });


        }

        protected validateBeforeSave() {
            super.validateBeforeSave()
            if(this.treeVw)
            this.form.Tenants.value = BusinessObjects.SpdAnlyzrUtil.GetChckdBrnchs(this.treeVw)
                   
            return true;
        }

        protected getToolbarButtons()
        {

            let buttons = super.getToolbarButtons();

            buttons.push({
                title: Q.text('Site.UserDialog.EditRolesButton'),
                cssClass: 'edit-roles-button',
                icon: 'fa-users text-blue',
                onClick: () =>
                {
                    new UserRoleDialog({
                        userID: this.entity.UserId,
                        username: this.entity.Username
                    }).dialogOpen();
                }
            });

            buttons.push({
                title: Q.text('Site.UserDialog.EditPermissionsButton'),
                cssClass: 'edit-permissions-button',
                icon: 'fa-lock text-green',
                onClick: () =>
                {
                    new UserPermissionDialog({
                        userID: this.entity.UserId,
                        username: this.entity.Username
                    }).dialogOpen();
                }
            });

            buttons.push({
                cssClass: 'branch-access',
                title: 'Region/Zones/Branches Access',
                icon:"fa fa-eye text-blue",
                onClick: () => {


                    Q.serviceRequest('/Services/Administration/User/ProcessRequest', new SpendAnalyzer.BusinessObjects.AppRpstry().GetAdminBranches(), res => {
                       
                        this.SetTree(BusinessObjects.SpdAnlyzrUtil.FormatTreeVwData(res, this.form.Tenants.value))
                        //BusinessObjects.SpdAnlyzrUtil.CheckNodes(this.treeVw);
                    }, { error: function (x, y, z) { alert("Error: " + JSON.stringify(x) + '\\n' + y + '\\n' + z); } })


                },
            })

            return buttons;
        }


        public SetTree(data) {

            if (!this.userSynfusinDlg) {
                try { ej.base.getComponent<ej.popups.Dialog>(document.getElementById("user-synfsn-dlg"), "dialog").destroy() } catch(e){}
                this.userSynfusinDlg = new ej.popups.Dialog({
                    header: "Region/Zone/Branches Access",
                    //position: {X:"CENTER", Y:"CENTER"},
                    width: "457px",
                    height: "488px",
                    showCloseIcon: true,
                    enableResize: true,
                    allowDragging: true

                })
                this.userSynfusinDlg.appendTo("#user-synfsn-dlg")
                
            }
            else
                this.userSynfusinDlg.show();


            if (!this.treeVw) {
                this.treeVw = new ej.navigations.TreeView({

                    fields: { dataSource: data, id: 'nodeId', text: 'nodeText', child: 'nodeChild', hasChildren :"hasChildren", isChecked:"isChecked", expanded : "expand", },
                    //fields: {
                    //    dataSource: data, id: 'nodeId', text: 'nodeText', parentID: 'parentNode', hasChildren :"hasChildren",
                    //},
                    showCheckBox: true,
                    autoCheck: true,
                    

                });
               
                this.treeVw.appendTo("#tr-syncfsn");
                this.treeVw.refresh();
                BusinessObjects.SpdAnlyzrUtil.ExandNodes(this.treeVw)

            }

        }





        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
            this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted()); 
            this.toolbar.findButton("branch-access").toggleClass("disabled", this.isNewOrDeleted());
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // these fields are only required in new record mode
            this.form.Password.element.toggleClass('required', this.isNew())
                .closest('.field').find('sup').toggle(this.isNew());
            this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                .closest('.field').find('sup').toggle(this.isNew());
        }
    }
}