﻿// Name:        Common.JQueryToolkitScripts.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1005
// FileVersion: 4.1.7.1005
if (Sys && Sys.WebForms && Sys.WebForms.PageRequestManager && $act) {
    if (!$act.isPostBackActivatorHandled) {
        $act.isPostBackActivatorHandled = true;

        function pageLoaded(sender, args) {
            var panelsUpdated = args.get_panelsUpdated();
            for (var i = 0; i < panelsUpdated.length; i++) {
                $act.activateWidgets('#' + panelsUpdated[i].id + ' *');
            }
        }
        
        var prm = Sys.WebForms.PageRequestManager.getInstance();
        prm.add_pageLoaded(pageLoaded);
    }
}
