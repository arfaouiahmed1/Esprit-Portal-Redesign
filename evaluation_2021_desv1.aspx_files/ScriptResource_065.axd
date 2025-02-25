// Name:        jQuery.Start.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1005
// FileVersion: 4.1.7.1005
// (c) 2010 CodePlex Foundation
var actJQuery = jQuery.noConflict(true);
(function (window, $) {
    var act = {
        
        jQueryVersion: $.fn.jquery,

        browser: {
            InternetExplorer: {},
            Firefox: {},
            Safari: {},
            Opera: {},
            agent: null,
            hasDebuggerStatement: false,
            name: navigator.appName,
            version: parseFloat(navigator.appVersion),
            documentMode: 0
        },
        
        widgets: [],
        
        createWidget: function(name, base, prototype) {
            if (!prototype) {
                prototype = base;
                base = $.Widget;
            }

            var attrKey = 'act' + name.substr(0, 1).toLocaleUpperCase()
                + name.toLocaleLowerCase().substr(1);
            act.widgets[attrKey] = name;

            var createFunc = prototype._create;
            prototype._create = function () {
                
                this.dataAttrName = 'act-' + name.toLowerCase();

                var self = this,
                    strMetadata = self.element.data(self.dataAttrName);
                
                if (!strMetadata) {
                    var dataElement = $("data[data-act-target='" + self.element.attr('id') + "']");
                    if (dataElement)
                        strMetadata = dataElement.data(self.dataAttrName);
                }

                if (!strMetadata)
                    throw "Could not resolve meta-data. Please ensure that data-" + self.dataAttrName + " attribute is not empty.";

                var rgx = /(\w+)(.|\s+)(:)/g, pimp = function(s) {
                        return '#$%<*' + s + '$%@#<';
                    },
                    props = strMetadata.match(rgx),
                    tmpMetadata = strMetadata.replace(rgx, pimp('$1$2$3')),
                    obj = {};
                
                for (var i = 0; i < props.length; i++) {
                    var prop = pimp(props[i]),
                        idx = tmpMetadata.indexOf(prop) + prop.length,
                        nextIdx = (i < props.length - 1)
                            ? tmpMetadata.indexOf(pimp(props[i + 1])) - 1
                            : tmpMetadata.length,
                        propVal = tmpMetadata.substring(idx, nextIdx);

                    if (propVal.startsWith("'") && propVal.endsWith("'"))
                        propVal = $('<div/>').html(propVal.substr(1, propVal.length - 2)).text();
                    
                    obj[props[i].trim().slice(0, -1)] = propVal;
                }

                self.metadata = obj;
                self.config = $.extend({}, self.defaults, self.options, self.metadata);

                if (createFunc)
                    createFunc.apply(self);
            };
            $.widget('ajaxControlToolkit.' + name, base, prototype);
        },
        
        activateWidgets: function(elements) {
            var targets = $(elements).map(function () {
                var self = this,
                    data = $(self).data(),
                    results = [];

                for (var key in data) {
                    if (key.indexOf('act') === 0)
                        results.push({ key: key, value: self });
                }
                return results;
            }).get();

            $.each(targets, function (key, obj) {
                var widget = $act.widgets[obj.key];
                if (widget)
                    $(obj.value)[widget]();
            });
        }
    };


    $(document).ready(function () {
        $act.activateWidgets('*');
    });
    

    var agent = navigator.userAgent, browser = act.browser;
    
    if (agent.indexOf(' MSIE ') > -1) {
        browser.agent = browser.InternetExplorer;
        browser.version = parseFloat(agent.match(/MSIE (\d+\.\d+)/)[1]);
        if ((browser.version > 7) && (document.documentMode > 6)) {
            browser.documentMode = document.documentMode;
        }
        browser.hasDebuggerStatement = true;
    }
    else if (agent.indexOf(' Firefox/') > -1) {
        browser.agent = browser.Firefox;
        browser.version = parseFloat(agent.match(/ Firefox\/(\d+\.\d+)/)[1]);
        browser.name = 'Firefox';
        browser.hasDebuggerStatement = true;
    }
    else if (agent.indexOf(' AppleWebKit/') > -1) {
        browser.agent = browser.Safari;
        browser.version = parseFloat(agent.match(/ AppleWebKit\/(\d+(\.\d+)?)/)[1]);
        browser.name = 'Safari';
    }
    else if (agent.indexOf('Opera/') > -1) {
        browser.agent = browser.Opera;
    }

    window.$act = act;

})(window, actJQuery);
