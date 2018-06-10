 function clp_clear() {
            var content=window.clipboardData.getData("Text");
            if (content==null) {
                window.clipboardData.clearData();
            }
            setTimeout("clp_clear();",1000);
        }


function block_screen(){
    window.document.body.style.display = "none";
    return true;
}
window.document.addEventListener("mouseenter",function(e){
    e.preventDefault();
})

window.document.addEventListener("mouseleave",function(e){
    e.preventDefault();
})

window.addEventListener("blur",function(e){
    // console.log("blur event");
    block_screen();
    // alert("false");
    e.preventDefault();
})

window.addEventListener("focus",function(e){
    // console.log("focus event");
    window.document.body.style.display = "initial";
    // alert("false");
    e.preventDefault();
})

window.addEventListener("keydown",function(event){
    console.log(event);
    var keyCode = event.keyCode;
    console.log(keyCode);
    if([16,91].indexOf(keyCode) != -1){
        alert("false");
        event.preventDefault();
        return false;
    }
})