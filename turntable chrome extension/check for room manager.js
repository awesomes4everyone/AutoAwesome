//checks if you are in a room (as opposed to lobby?)

  var ttObj = null;
 
 // Get the room manager object
    for (var prop in window) { 
        if (window.hasOwnProperty(prop) && window[prop] instanceof roommanager){ 
            ttObj = window[prop];
            break;
        } 
    }

    if(ttObj === null){
        alert("Couldn't auto find the roommanger object.");
        return;
    }