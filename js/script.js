// $(document).ready(function () {
//     $('#startButton').click(function () {
//         startGame();
//     });
// });
    


function changeItem(itemId) {
    var item = document.getElementById(itemId);
    var characterImage = document.getElementById("emojieImage");

    characterImage.src = item.src;
}

