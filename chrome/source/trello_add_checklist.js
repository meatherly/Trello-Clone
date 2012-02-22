// attach an additional click event to the card-menu element which will add a "Add C-list 1" link to the popover
$(".card-operation.js-card-menu").livequery("click", function() { 
	var addCLists = $(this).parents(".list-card:first");

	// set a short timeout to wait for the popover to appear
	setTimeout(function() {
		addCloneClists(addCLists.data("card"));
	}, 50);
});

/** Adds a "Add C-list 1" link to the currently active popover. */
var addCloneClists = function(cardModel) {

	// create the link
	var cloneC1Link = $("<a>Add C-list 1</a>");
	
	//the JSON of the checklist that will be add to the card.
	var CListJSON = {"checklists": [
        {
        "id": "4f4552ed251057f904fe6149",
        "name": "Checklist --cardId:4f4552ed251057f904fe60d1",
        "idBoard": "4f1468a0f2093fbc30079220",
        "checkitems": [
            {
            "id": "4f4552ee251057f904fe6216",
            "name": "Invite your team",
            "type": "check"
        }, {
            "id": "4f4552ee19160eeb05278cb4",
            "name": "Enjoy an ice-cold lemonade",
            "type": "check"
        }, {
            "id": "4f4552eed647f67d15b2e41f",
            "name": "Make your own boards",
            "type": "check"
        }]};

	// bind a click event that copies a checklist from above to the card that the pop-over list came from.
	cloneC1Link.bind("click", function() {
		copyChecklist(cardModel.getBoard().id, cardModel.getList().id, cardModel.getCard().id, CListJSON);
		$(".pop-over").hide();
	});

	// add the link to the end of the pop over menu
	$(".pop-over-list").append(
		$("<li>").append(cloneC1Link)
	);	
};