const toggleButton = document.getElementById('toggle-btn');
const extraDetails = document.getElementById('extra-details');

if (toggleButton != null && extraDetails != null){
    toggleButton.addEventListener('click', function(){

        if(extraDetails.classList.contains('hidden')){
            extraDetails.classList.remove('hidden');
            toggleButton.textContent = "Show Less";
        }else{
            extraDetails.classList.add('hidden');
            toggleButton.textContent = "Show More";
        }

    });
}

const changeGameButton = document.getElementById('change-game-btn');
const gameImage = document.getElementById('featured-game-image');
const gameTitle = document.getElementById('featured-game-title');
const gameDescription = document.getElementById('featured-game-description');

if (changeGameButton != null && gameImage != null && gameTitle != null && gameDescription != null){
    changeGameButton.addEventListener('click', function(){

        if (gameTitle.textContent !== "Rocket League") {
            gameTitle.textContent = "Rocket League";
            gameImage.src = "images/rocket-league.jpg";
            gameImage.alt = "Rocket League";
            gameDescription.textContent = "Rocket League is a fast-paced competitive game that combines soccer with cars. I enjoy it because it requires teamwork, timing, and accurate control.";
            changeGameButton.textContent = "Show Rainbow Six Siege";
        }else{
            gameTitle.textContent = "Rainbow Six Siege";
            gameImage.src = "images/rainbow-six-siege.jpg";
            gameImage.alt = "Rainbow Six Siege";
            gameDescription.textContent = "Rainbow Six Siege is my favorite competitive game because it rewards teamwork, communication, and strategy. Every round is different, and learning new operators keeps the game interesting.";
            changeGameButton.textContent = "Show Rocket League";
        }
        
    });
}