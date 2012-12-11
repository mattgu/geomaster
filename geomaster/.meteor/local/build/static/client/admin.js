

//asdasd

function showAddUserForm(docid) {
    $('#create-user-form').show(100);
    $('#add-user-button').hide();
    $('#userEmail').focus();
  
	var question = Questions.find({'_id': docid}).fetch()[0];
	console.log(question);
	document.getElementById("stadt").value = question.Stadt;
	document.getElementById("einwohnerzahl").value = question.Einwohnerzahl;
	document.getElementById("flaeche").value = question.Flaeche;
	document.getElementById("staat").value = question.Staat;
	document.getElementById("id").value = question.ID;
	document.getElementById("kuerzel").value = question.kuerzel;
	//stadt.value = question.Stadt
	
	};
	
	
	
	if (Meteor.user()._id == "46c13b6f-e0d3-4bc5-a42a-d6dec2f62ddb")
		{
		Session.set("isAdmin", true);
		console.log("admintest");
		};	 
	Template.admin.isAdmin = function () {
  return Session.get("isAdmin");
};
	
	
    Meteor.subscribe("users");

    Template.all_questions.question = function () {
        var query = Session.get('searchQuery') || '';
            searchByQuery = (query !== '');
        if(searchByQuery) {
            return Questions.find({Staat: query});
        }
        return Questions.find({});
 
    };
    
        Template.users.user = function () {
        var query = Session.get('searchQuery') || '';
            searchByQuery = (query !== '');
        if(searchByQuery) {
            return Meteor.users.find({username: query});
        }
        return Meteor.users.find({});    
    }; 
     Template.users.counter = function (status) {
        return Meteor.users.find({}).count();
    };
    Template.all_questions.active_is = function (status) {
        return this.active === status;
    };
    Template.all_questions.active_isnt = function (status) {
        return this.active !== status;
    };


    Template.all_questions.events = {
        'change .activate-checkbox': function(e) {
            var $target = $(e.target),
                docid = $target.attr('docid'),
                isActive = $target.is(':checked');

            Users.update({'_id': docid}, {'$set':
                {
                    active: (isActive ? "yes" : "no")
                }
            });
        },

        'click .delete-user': function(e) {
            var $target = $(e.target),
                docid = $target.attr('docid');
            e.preventDefault();

            Users.remove({'_id': docid});
        },
		 'click .edit-user': function(e) {
            var $target = $(e.target),
                docid = $target.attr('docid');
            e.preventDefault();
			showAddUserForm(docid); 
        }
    };