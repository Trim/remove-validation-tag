function RemoveValidationTag(attribute, tid){ 
    let node = browser.menus.getTargetElement(tid); // Target ID

    // start from parent because for some radio buttons the radio is a sibling
    recusriveRemoveTag(attribute, node.parentNode);
}

function recusriveRemoveTag(attribute, node){

    // if this node has the attribute, remove it
    if(node.hasAttribute(attribute)){
        node.removeAttribute(attribute);
    }

    // call this function for each of the nested elements
    // in PEGA the buttons are usually nested inside other elements
    for(var i=0; i < node.children.length; i++){
        recusriveRemoveTag(attribute, node.children[i]);
    }
}
