Meteor._def_template("all_questions",Handlebars.json_ast_to_func(["<div class=\"row\">\n        <div class=\"span12\">\n    <table class=\"table table-striped\">\n        <thead>\n            <tr>\n                <th>Stadt</th>\n                <th>Einwohnerzahl</th>\n                <th>Flaeche</th>\n                <th>Staat</th>\n                <th>ID</th>\n\t\t\t\t<th>Kuerzel</th>\n            </tr>\n        </thead>0\n        <tbody>\n            ",["#",[[0,"each"],[0,"question"]],["\n            <tr>\n                <td>",["{",[[0,"Stadt"]]],"</td>\n                <td>",["{",[[0,"Einwohnerzahl"]]],"</td>\n                <td>",["{",[[0,"Flaeche"]]],"</td>\n\t\t\t\t<td>",["{",[[0,"Staat"]]],"</td>\n                <td>",["{",[[0,"ID"]]],"</td>\n                <td>",["{",[[0,"kuerzel"]]],"</td>\n               \n               \n\t\t\t\t<td>\n                    <button class=\"btn btn-danger btn-mini edit-user\"\n                        docid=\"",["{",[[0,"_id"]]],"\">Bearbeiten</button>\n                </td>\n            </tr>\n            "]],"\n        </tbody>\n    </table>\n</div>\n</div>"]));
