
// gives the selected laisse the class you want.
//takes the input field and turns it into a laisse number
function select_laisse(){
    var laisse = document.getElementById("selected_laisse").value;
    return parseInt(laisse);
};

function hide_laisse(){
    // cleans out previously visible laisses if they exist.
    $(document).find(".visible").removeClass("visible");

}

function reveal_laisse(){
    hide_laisse();

    // looks to the input field to and loads that in to select the appropiate laisse.
    var selected_laisse = select_laisse();

    // makes that laisse vissible.
    if(selected_laisse){
        $("lg[n=" + selected_laisse + "], #bottom-buttons, #tei-hr-1").addClass("visible");
    };
};

function reveal_all(){
    // makes all laisses visible
    $("lg, #bottom-buttons, #tei-hr-1").addClass('visible');
};

function hide_all(){
    // hides all laisses
    $("lg, #bottom-buttons, #tei-hr-1").removeClass("visible");
};

function browse_next(){
    var current_laisse = document.getElementById("selected_laisse").value;
    hide_laisse();
    $("lg[n=" + (parseInt(current_laisse) + 1) + "], #bottom-buttons,#tei-hr-1").addClass("visible");
    $("#selected_laisse").val(parseInt(current_laisse)+1);
};

function browse_previous(){
    var current_laisse = document.getElementById("selected_laisse").value;
    hide_laisse();
    //reveal the new laisse
     $("lg[n=" + (parseInt(current_laisse) - 1) + "], #bottom-buttons,#tei-hr-1").addClass("visible");
    
    // change the old value
    $("#selected_laisse").val(parseInt(current_laisse)-1);
};

// This will have a default laisse loaded.
// $("#selected_laisse").val(parseInt(1));
