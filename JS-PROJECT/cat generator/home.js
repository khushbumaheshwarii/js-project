var div = document.getElementById('flex-cat-gen');
function generatorCat(){
    var image = document.createElement('img');
    
    image.src  ="http://thecatapi.com/api/images/get?format=src&type=gif&timestamp"
    image.id="remove-image";
    image.width="150"
    div.appendChild(image);
}
function reset(){
    document.getElementById('remove-image').remove();
}
