
// window.onload= document.getElementById('backOfMessage').style.display= 'inline';
// onclick.document.getElementById('cloud_forest')=document.getElementById('cloud_forest_img');
// onclick.document.getElementsByClassName('slots')=document.getElementById('overlay').style.display='inline';
// // document.getElementsByClassName('slots')

// var id_zone = onclick.document.addEventListener

// //
// var slotsElements = document.getElementsByClassName('slots');
// for (var i = 0; i < slotsElements.length; i++) {
//     slotsElements[i].addEventListener('click', function() {
//         // Setting the display style property of an element with id 'overlay' to 'inline'
//         document.getElementById('overlay').style.display = 'inline';
//     });
// }

//falta testear, pon un id para una variable que vaya a existir para testear, name_menu+ '_info' para crear los menus de info de cada zona
var name_menu= null;
function select_click(singleSlot){
    if(singleSlot.target.classList.contains('slots')){
        name_menu= singleSlot.target.id;
    }
    document.getElementById (name_menu)
}

var id_zone= document.querySelectorAll('.slots');
id_zone.forEach(function(select_zone){
    select_zone.addEventListener('click',select_click);
});