Meteor._def_template("edit_questions",Handlebars.json_ast_to_func(["<form id=\"create-user-form\" class=\"form-horizontal\">\n        <fieldset>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"stadt\">Stadt</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"stadt\" />\n                </div>\n            </div>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"einwohnerzahl\">Einwohnerzahl</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"einwohnerzahl\" />\n                </div>\n            </div>\n            <div class=\"control-group\">\n                <label class=\"control-label\" for=\"flaeche\">Flaeche</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"flaeche\" />\n                </div>\n            </div>\n\t\t\t<div class=\"control-group\">\n                <label class=\"control-label\" for=\"staat\">Staat</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"staat\" />\n                </div>\n            </div>\n\t\t\t<div class=\"control-group\">\n                <label class=\"control-label\" for=\"id\">ID</label>\n                <div class=\"controls\">\n                    <input type=\"text\" class=\"input-xlarge\" id=\"id\" />\n                </div>\n            </div>\n\t\t\t\n            \n\n\n            <div class=\"form-actions\">\n                \n\t\t\t\t<button id=\"refresh\"\n    class=\"btn btn-primary\">Aktualisieren</button>\n                <button id=\"user-cancel\" class=\"btn\">Abbrechen</button>\n            </div>\n        </fieldset>\n\n    </form>"]));