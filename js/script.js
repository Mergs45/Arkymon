let playerAttack, enemyAttack, playerHealth = 3, enemyHealth = 3


function startGame(){
    let sectionAttacktSelector = document.getElementById("attack-selector")
    sectionAttacktSelector.style.display = "none"

    let sectionReset = document.getElementById("reset")
    sectionReset.style.display = "none"

    let selectorButton = document.getElementById("selector-button")
    selectorButton.addEventListener("click", petSelector)
    let waterButton = document.getElementById("water-button")
    waterButton.addEventListener("click", waterAttack)
    let fireButton = document.getElementById("fire-button")
    fireButton.addEventListener("click", fireAttack)
    let earthButton = document.getElementById("earth-button")
    earthButton.addEventListener("click", earthAttack)

    let resetButton = document.getElementById("reset-button")
    resetButton.addEventListener("click", resetGame)
}



function petSelector(){
    let sectionPetSelector = document.getElementById("pet-selector")
    sectionPetSelector.style.display = "none"

    let sectionAttacktSelector = document.getElementById("attack-selector")
    sectionAttacktSelector.style.display = "flex"
    
    let play = 1
    let inputWadyrmon = document.getElementById("Wadyrmon")
    let inputWynnamon = document.getElementById("Wynnamon")
    let inputPyromon = document.getElementById("Pyromon")
    let inputPryronumon = document.getElementById("Pyronumon")
    let inputArkyteranomon = document.getElementById("Arkyteranomon")
    let inputCinnamon = document.getElementById("Cinnamon")
    let inputMezzopranomon = document.getElementById("Mezzopranomon")
    let inputVulkanomon = document.getElementById("Vulkanomon")

    let yourPet = document.getElementById("your-pet")

    if(inputWadyrmon.checked){
        yourPet.innerHTML = "Wadyrmon"
    }else if(inputWynnamon.checked){
        yourPet.innerHTML = "Wynnamon"
    }else if(inputPyromon.checked){
        yourPet.innerHTML = "Pyromon"
    }else if(inputPryronumon.checked){
        yourPet.innerHTML = "Pyronumon"
    }else if(inputArkyteranomon.checked){
        yourPet.innerHTML = "Arkyteranomon"
    }else if(inputCinnamon.checked){
        yourPet.innerHTML = "Cinnamon"
    }else if(inputMezzopranomon.checked){
        yourPet.innerHTML = "Mezzopranomon"
    }else if(inputVulkanomon.checked){
        yourPet.innerHTML = "Vulkanomon"
    }else{
        alert("Unknown selected, selecciona una mascota")
        play = 0
        resetGame()
    }
    if(play == 1){
        enemyPetSelector()
    }
}


function enemyPetSelector(){
    let randomPet = randomizer(1,8)
    let enemyPet = document.getElementById("enemy-pet")
    
    if (randomPet == 1){
        enemyPet.innerHTML = "Wadyrmon"
    }else if (randomPet == 2){
        enemyPet.innerHTML = "Wynnamon"
    }else if (randomPet == 3){
        enemyPet.innerHTML = "Pyromon"
    }else if (randomPet == 4){
        enemyPet.innerHTML = "Pyronumon"
    }else if (randomPet == 5){
        enemyPet.innerHTML = "Arkyteranomon"
    }else if (randomPet == 6){
        enemyPet.innerHTML = "Cinnamon"
    }else if (randomPet == 7){
        enemyPet.innerHTML = "Mezzopranomon"
    }else if (randomPet == 8){
        enemyPet.innerHTML = "Vulkanomon"
    }
}

function waterAttack(){
    playerAttack = "Water"
    enemyRandomAttack()
}
function fireAttack() {
    playerAttack = "Fire"
    enemyRandomAttack()    
}
function earthAttack() {
    playerAttack = "Earth"
    enemyRandomAttack()
}

function enemyRandomAttack(){
    let randomAttack = randomizer(1,3)
    
    if (randomAttack == 1){
        enemyAttack = "Water"
    }else if (randomAttack == 2){
        enemyAttack = "Fire"
    }else {
        enemyAttack = "Earth"
    }
    combat()
}

function combat(){
    let spanPlayerHealth = document.getElementById("player-health")
    let spanEnemyHealth = document.getElementById("enemy-health")
    
    
    if(enemyAttack == playerAttack){
        message("EMPATE")
    }else if(playerAttack == "Water" && enemyAttack == "Fire"){
        message("GANASTE")
        enemyHealth--
        spanEnemyHealth.innerHTML = enemyHealth
    }else if(playerAttack == "Fire" && enemyAttack == "Earth"){
        message("GANASTE")
        enemyHealth--
        spanEnemyHealth.innerHTML = enemyHealth
    }else if(playerAttack == "Earth" && enemyAttack == "Water"){
        message("GANASTE")
        enemyHealth--
        spanEnemyHealth.innerHTML = enemyHealth
    }else{
        message("PERDISTE")
        playerHealth--
        spanPlayerHealth.innerHTML = playerHealth
    }
    checkHealth()
}

function checkHealth() {
    if (enemyHealth == 0){
        finalMessage("Felicidades, ganaste :)")
    }else if (playerHealth == 0){
        finalMessage("Derrota, perdiste :(")
    }
}

function message (resultado){
    let sectionMessage = document.getElementById("result-section") 
    let sectionPlayerAttack = document.getElementById("section-player-attack") 
    let sectionEnemyAttack = document.getElementById("section-enemy-attack") 

    let newPlayerAttack = document.createElement("p")
    let newEnemyAttack = document.createElement("p")
    
    sectionMessage.innerHTML = resultado
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemyAttack
    
    sectionPlayerAttack.appendChild(newPlayerAttack)
    sectionEnemyAttack.appendChild(newEnemyAttack)
}

function finalMessage (resultadoFinal){
    let sectionMessage = document.getElementById("result-section") 
    
    sectionMessage.innerHTML = resultadoFinal
    
    let waterButton = document.getElementById("water-button")
    waterButton.disabled = true
    let fireButton = document.getElementById("fire-button")
    fireButton.disabled = true
    let earthButton = document.getElementById("earth-button")
    earthButton.disabled = true

    let sectionReset = document.getElementById("reset")
    sectionReset.style.display = "block"
}

function randomizer (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function resetGame(){
    location.reload()
}

window.addEventListener('load', startGame)
