
function showImage(i) {
    document.querySelector('#img' + i).style.display = "block";
    for(var j = 1 ; j <= 5 ; j++) {
        if(j != i) {
            document.querySelector('#img' + j).style.display = "none";
        }
    }
}
