Meteor._def_template("_loginButtonsLoggedOutSingleLoginButton",Handlebars.json_ast_to_func(["<div class=\"login-button ",["#",[[0,"unless"],[0,"configured"]],["configure-button"]],"\"\r\n       id=\"login-buttons-",["{",[[0,"name"]]],"\">\r\n    <div class=\"login-image\" id=\"login-buttons-image-",["{",[[0,"name"]]],"\"></div>\r\n    ",["#",[[0,"if"],[0,"configured"]],["\r\n      <span class=\"sign-in-text-",["{",[[0,"name"]]],"\">Sign in with ",["{",[[0,"capitalizedName"]]],"</span>\r\n    "],["\r\n      <span class=\"configure-text-",["{",[[0,"name"]]],"\">Configure ",["{",[[0,"capitalizedName"]]]," Login</span>\r\n    "]],"\r\n  </div>"]));
