let sectionAttacktSelector = document.getElementById("attack-selector")
let selectorButton = document.getElementById("selector-button")

let waterButton = document.getElementById("water-button")
let fireButton = document.getElementById("fire-button")
let earthButton = document.getElementById("earth-button")

let sectionReset = document.getElementById("reset")
let resetButton = document.getElementById("reset-button")

let sectionPetSelector = document.getElementById("pet-selector")
let inputWadyrmon = document.getElementById("Wadyrmon")
let inputWynnamon = document.getElementById("Wynnamon")
let inputPyromon = document.getElementById("Pyromon")
let inputPryronumon = document.getElementById("Pyronumon")
let inputArkyteranomon = document.getElementById("Arkyteranomon")
let inputCinnamon = document.getElementById("Cinnamon")
let inputMezzopranomon = document.getElementById("Mezzopranomon")
let inputVulkanomon = document.getElementById("Vulkanomon")

let enemyPet = document.getElementById("enemy-pet")
let yourPet = document.getElementById("your-pet")
let randomPet = randomizer(1,8)

let spanPlayerHealth = document.getElementById("player-health")
let spanEnemyHealth = document.getElementById("enemy-health")

let sectionMessage = document.getElementById("result-section") 
let sectionPlayerAttack = document.getElementById("section-player-attack") 
let sectionEnemyAttack = document.getElementById("section-enemy-attack") 

let playerAttack, 
    enemyAttack, 
    playerHealth = 3, 
    enemyHealth = 3, 
    arkymons = [], 
    arkymonsOption

class Arkymon {
    constructor(name, icon, health, elementName , elementIcon){
        this.name = name
        this.icon = icon
        this.health = health
        this.elementName = elementName
        this.elementIcon = elementIcon
        this.attack = []
    }
}

let wadyrmon = new Arkymon("Wadyrmon", "Icons/Mokepones/wadyrmon.png", 5, "water" , "Icons/Elements/water.png")
let pyromon = new Arkymon("Pyromon", "Icons/Mokepones/pyromon.png", 5, "fire" , "Icons/Elements/fire.png")
let cinnamon = new Arkymon("Cinnamon", "Icons/Mokepones/cinnamon.png", 5, "earth" , "Icons/Elements/earth.png")

wadyrmon.attack.push(
    { name: "💧",  id: "water-button"},
    { name: "💧",  id: "water-button"},
    { name: "💧",  id: "water-button"},
    { name: "🔥",  id: "fire-button"},
    { name: "🌱",  id: "earth-button"}
)
pyromon.attack.push(
    { name: "🔥",  id: "fire-button"},
    { name: "🔥",  id: "fire-button"},
    { name: "🔥",  id: "fire-button"},
    { name: "💧",  id: "water-button"},
    { name: "🌱",  id: "earth-button"}
)
cinnamon.attack.push(
    { name: "🌱",  id: "earth-button"},
    { name: "🌱",  id: "earth-button"},
    { name: "🌱",  id: "earth-button"},
    { name: "🔥",  id: "fire-button"},
    { name: "💧",  id: "water-button"}
)

arkymons.push(wadyrmon, pyromon, cinnamon)



function startGame(){

    sectionAttacktSelector.style.display = "none"

    arkymons.forEach((Arkymon) =>{
        arkymonsOption = `
        <input type="radio" name="pet" id=${Arkymon.name} />
            <label class="mokecard" for=${Arkymon.name}>
                <img class="icon" src=${Arkymon.icon} alt=${Arkymon.name}>
                <p>${Arkymon.name}<br><img class="naturalElement" src=${Arkymon.elementIcon} alt=${Arkymon.elementName}></p>
            </label>
        `
    })

    sectionReset.style.display = "none"
    selectorButton.addEventListener("click", petSelector)
    waterButton.addEventListener("click", waterAttack)
    fireButton.addEventListener("click", fireAttack)
    earthButton.addEventListener("click", earthAttack)

    resetButton.addEventListener("click", resetGame)
}

function petSelector(){
    sectionPetSelector.style.display = "none"
    sectionAttacktSelector.style.display = "flex"
    let play = 1

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
    let newPlayerAttack = document.createElement("p")
    let newEnemyAttack = document.createElement("p")
    
    sectionMessage.innerHTML = resultado
    newPlayerAttack.innerHTML = playerAttack
    newEnemyAttack.innerHTML = enemyAttack
    
    sectionPlayerAttack.appendChild(newPlayerAttack)
    sectionEnemyAttack.appendChild(newEnemyAttack)
}

function finalMessage (resultadoFinal){
    sectionMessage.innerHTML = resultadoFinal
    
    waterButton.disabled = true
    fireButton.disabled = true
    earthButton.disabled = true

    sectionReset.style.display = "block"
}

function randomizer (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function resetGame(){
    location.reload()
}

window.addEventListener('load', startGame)
