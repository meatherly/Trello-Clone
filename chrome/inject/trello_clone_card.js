var trello_clone_card_source = "\x2F\x2F attach an additional click event to the card-menu element which will add a \"Clone Card\" link to the popover\n$(\".card-operation.js-card-menu\").livequery(\"click\", function() { \n\tvar cardEl = $(this).parents(\".list-card:first\");\n\n\t\x2F\x2F set a short timeout to wait for the popover to appear\n\tsetTimeout(function() {\n\t\taddClone(cardEl.data(\"card\"));\n\t}, 50);\n});\n\n\x2F** Adds a \"Clone Card\" link to the currently active popover. *\x2F\nvar addClone = function(cardModel) {\n\n\t\x2F\x2F create the link\n\tvar cloneCardLink = $(\"\x3Ca\x3EClone Card\x3C\x2Fa\x3E\");\n\n\t\x2F\x2F bind a click event that copies the card to the same list\n\tcloneCardLink.bind(\"click\", function() {\n\t\tcopyCard(cardModel.getBoard().id, cardModel.getList().id, cardModel);\n\t\t$(\".pop-over\").hide();\n\t});\n\n\t\x2F\x2F add the link to the end of the pop over menu\n\t$(\".pop-over-list\").append(\n\t\t$(\"\x3Cli\x3E\").append(cloneCardLink)\n\t);\n};\n";
