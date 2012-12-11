Meteor._def_template("_loginButtonsRight",Handlebars.json_ast_to_func(["\r\n  <div class=\"login-buttons-dropdown-align-right\">\r\n    ",[">","_loginButtons"],"\r\n  </div>"]));
Meteor._def_template("_loginButtonsLeft",Handlebars.json_ast_to_func([[">","_loginButtons"]]));
Meteor._def_template("_loginButtons",Handlebars.json_ast_to_func(["<div id=\"login-buttons\">\r\n    ",["#",[[0,"if"],[0,"currentUser"]],["\r\n      ",[">","_loginButtonsLoggedIn"],"\r\n    "],["\r\n      ",[">","_loginButtonsLoggedOut"],"\r\n    "]],"\r\n  </div>"]));
Meteor._def_template("_loginButtonsLoggedIn",Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"dropdown"]],["\r\n    ",[">","_loginButtonsLoggedInDropdown"],"\r\n  "],["\r\n    <div class=\"login-header\">\r\n      ",["#",[[0,"if"],[0,"currentUserLoaded"]],["\r\n        ",["{",[[0,"displayName"]]],"\r\n      "],["\r\n        <div class=\"loading\">&nbsp;</div>\r\n      "]],"\r\n    </div>\r\n    <div class=\"login-button single-login-button\" id=\"login-buttons-logout\">Sign Out</div>\r\n  "]]]));
Meteor._def_template("_loginButtonsLoggedOut",Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"services"]],[" ","\r\n    ",["#",[[0,"if"],[0,"configurationLoaded"]],["\r\n      ",["#",[[0,"if"],[0,"dropdown"]],[" ","\r\n        ",[">","_loginButtonsLoggedOutDropdown"],"\r\n      "],["\r\n        ",["#",[[0,"with"],[0,"singleService"]],[" ","\r\n          ",[">","_loginButtonsLoggedOutSingleLoginButton"],"\r\n        "]],"\r\n      "]],"\r\n    "]],"\r\n  "],["\r\n    <div class=\"no-services\">No login services configured</div>\r\n  "]]]));
Meteor._def_template("_loginButtonsMessages",Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"errorMessage"]],["\r\n    <div class=\"message error-message\">",["{",[[0,"errorMessage"]]],"</div>\r\n  "]],"\r\n  ",["#",[[0,"if"],[0,"infoMessage"]],["\r\n    <div class=\"message info-message\">",["{",[[0,"infoMessage"]]],"</div>\r\n  "]]]));
