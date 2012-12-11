function showAddUserForm() {
    $('#create-user-form').show(100);
    $('#add-user-button').hide();
    $('#userEmail').focus();
}

function hideAddUserForm() {
    $('#create-user-form').hide(100);
    $('#add-user-button').show();
}

Template.edit_questions.events = {
    'click #add-user-button': function (e) {
        e.preventDefault();
        showAddUserForm();
    },

    'click #user-cancel': function (e) {
        e.preventDefault();
        hideAddUserForm();
    },

    'click #refresh': function (e) {
	  e.preventDefault();
	 console.log("asdasd")
        var stadt = $('#stadt').val(),
            einwohnerzahl = $('#einwohnerzahl').val(),
            flaeche = $('#flaeche').val(),
			 id = $('#id').val(),
			  kuerzel = $('#kuerzel').val(),
            staat = $('#staat').val();

        console.log("asdasd")
        Questions.update({
			kuerzel: kuerzel},
            {Stadt: stadt,
            Einwohnerzahl: einwohnerzahl,
            Flaeche: flaeche,
			Staat: staat,
			ID: id
			
         
        });
		 console.log("asdasd")
        hideAddUserForm();
    }
};
