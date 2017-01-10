(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['listpage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"list-group\">\r\n  <li class=\"list-group-item\">Cras justo odio</li>\r\n  <li class=\"list-group-item\">Dapibus ac facilisis in</li>\r\n  <li class=\"list-group-item\">Morbi leo risus</li>\r\n  <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n  <li class=\"list-group-item\">Vestibulum at eros</li>\r\n</ul>\r\n";
},"useData":true});
templates['nav'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"nav nav-pills nav-justified\">\n  <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\n  <li role=\"presentation\"><a href=\"#\">Profile</a></li>\n  <li role=\"presentation\"><a href=\"#\">Messages</a></li>\n</ul>\n";
},"useData":true});
})();