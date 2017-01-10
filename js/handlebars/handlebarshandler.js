/*global Handlebars */
/*global console */
/*global $ */

Handlebars.getTemplate = function (name) {
    "use strict";

    if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
        console.log("Handlebars template not avaialble: " + name);
        $.ajax({
            url : 'templates/' + name + '.handlebars',
            success : function (data) {
                if (Handlebars.templates === undefined) {
                    Handlebars.templates = {};
                }
                Handlebars.templates[name] = Handlebars.compile(data);
            },
            async : false
        });
    }
    return Handlebars.templates[name];
};

function writeTemplate(placeholder, templatename, data) {
    "use strict";
    var html,
        template;

    template = Handlebars.getTemplate(templatename);
    html = template(data);

    placeholder.html(html);
}
