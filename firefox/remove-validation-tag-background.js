
// create context menu button
browser.menus.create({
    id: "remove-validation-tag-disable",
    title: "Enable the field",
    contexts: ["all"]
});

browser.menus.create({
    id: "remove-validation-tag-required",
    title: "Allow empty values",
    contexts: ["all"]
});

// listen for context menu click and check if it's our menu item
browser.menus.onClicked.addListener(info => {
    /*
     * Execute the RemoveValidationTag function in the active tab context
     * to be able to modify HTML elements.
     */
    if(info.menuItemId === "remove-validation-tag-disable"){
        browser.tabs.executeScript({
            code: `RemoveValidationTag('disabled', ${info.targetElementId});`,
        });
    }
    
    if(info.menuItemId === "remove-validation-tag-required"){
        browser.tabs.executeScript({
            code: `RemoveValidationTag('required', ${info.targetElementId});`,
        });
    }
});
