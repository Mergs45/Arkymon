const sectionAttacktSelector = document.getElementById("attack-selector")
const selectorButton = document.getElementById("selector-button")
const sectionReset = document.getElementById("reset")
const resetButton = document.getElementById("reset-button")
sectionReset.style.display = "none"

const sectionPetSelector = document.getElementById("pet-selector")
const yourPet = document.getElementById("your-pet")

const enemyPet = document.getElementById("enemy-pet")

const spanPlayerHealth = document.getElementById("player-health")
const spanEnemyHealth = document.getElementById("enemy-health")

const sectionMessage = document.getElementById("result-section") 
const sectionPlayerAttack = document.getElementById("section-player-attack") 
const sectionEnemyAttack = document.getElementById("section-enemy-attack") 
const cardContainer = document.getElementById("cardContainer")
const attacksContainer = document.getElementById("attacks-container")

let arkymons = []
let playerAttack = []
let enemyAttack = []
let arkymonsOption

let inputWadyrmon
let inputWynnamon
let inputPyromon
let inputPryronumon
let inputArkyteranomon
let inputCinnamon
let inputMezzopranomon
let inputVulkanomon

let playerPet
let arkymonAttacks
let enemyArkymonAttacks

let waterButton
let fireButton
let earthButton

let buttons = []
let indexPlayerAttack
let indexEnemyAttack
let playerVictories = 0
let enemyVictories = 0

let playerHealth = 3
let enemyHealth = 3



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

let wadyrmon = new Arkymon("Wadyrmon", "Icons/Mokepones/wadyrmon.png", 5, "water", "Icons/Elements/water.png")
let wynnamon = new Arkymon("Wynnamon", "Icons/Mokepones/Wynnamon.png", 5, "water", "Icons/Elements/water.png")
let pyromon = new Arkymon("Pyromon", "Icons/Mokepones/pyromon.png", 5, "fire" , "Icons/Elements/fire.png")
let pyronumon = new Arkymon("Pyronumon", "Icons/Mokepones/Pyronumon.png", 5, "fire" , "Icons/Elements/fire.png")
let cinnamon = new Arkymon("Cinnamon", "Icons/Mokepones/cinnamon.png", 5, "earth", "Icons/Elements/earth.png")
let arkyteranomon = new Arkymon("Arkyteranomon", "Icons/Mokepones/arkyteranomon.png", 5, "earth", "Icons/Elements/earth.png")
let mezzopranomon = new Arkymon("Mezzopranomon", "Icons/Mokepones/mezzopranomon.png", 5, "earth", "Icons/Elements/earth-water.png")
let vulkanomon = new Arkymon("Vulkanomon", "Icons/Mokepones/vulkanomon.png", 5, "earth", "Icons/Elements/earth-fire.png")

wadyrmon.attack.push(
    { name: "💧",  id: "water-button"},
    { name: "💧",  id: "water-button"},
    { name: "💧",  id: "water-button"},
    { name: "🔥",  id: "fire-button"},
    { name: "🌱",  id: "earth-button"}
)
wynnamon.attack.push(
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
pyronumon.attack.push(
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
arkyteranomon.attack.push(
    { name: "🌱",  id: "earth-button"},
    { name: "🌱",  id: "earth-button"},
    { name: "🌱",  id: "earth-button"},
    { name: "🔥",  id: "fire-button"},
    { name: "💧",  id: "water-button"}
)
mezzopranomon.attack.push(
    { name: "🌱",  id: "earth-button"},
    { name: "🌱",  id: "earth-button"},
    { name: "💧",  id: "water-button"},
    { name: "💧",  id: "water-button"},
    { name: "🔥",  id: "fire-button"}
)
vulkanomon.attack.push(
    { name: "🌱",  id: "earth-button"},
    { name: "🌱",  id: "earth-button"},
    { name: "🔥",  id: "fire-button"},
    { name: "🔥",  id: "fire-button"},
    { name: "💧",  id: "water-button"}
)

arkymons.push(wadyrmon, wynnamon, pyromon, pyronumon ,cinnamon, arkyteranomon, mezzopranomon, vulkanomon)

function startGame(){

    sectionAttacktSelector.style.display = "none"

    arkymons.forEach((arkymon) => {
        arkymonsOption = `
        <input type="radio" name="pet" id=${arkymon.name} />
            <label class="mokecard" for=${arkymon.name}>
                <img class="icon" src=${arkymon.icon} alt=${arkymon.name}>
                <p>${arkymon.name}<br><img class="naturalElement" src=${arkymon.elementIcon} alt=${arkymon.elementName}></p>
            </label>
        `
        cardContainer.innerHTML += arkymonsOption

        inputWadyrmon = document.getElementById("Wadyrmon")
        inputWynnamon = document.getElementById("Wynnamon")
        inputPyromon = document.getElementById("Pyromon")
        inputPryronumon = document.getElementById("Pyronumon")
        inputArkyteranomon = document.getElementById("Arkyteranomon")
        inputCinnamon = document.getElementById("Cinnamon")
        inputMezzopranomon = document.getElementById("Mezzopranomon")
        inputVulkanomon = document.getElementById("Vulkanomon")
    })

    selectorButton.addEventListener("click", playerPetSelector)
    
    resetButton.addEventListener("click", resetGame)
}

function playerPetSelector(){
    let play = 1
    sectionPetSelector.style.display = "none"
    sectionAttacktSelector.style.display = "flex"

    if(inputWadyrmon.checked){
        yourPet.innerHTML = inputWadyrmon.id
        playerPet = inputWadyrmon.id
    }else if(inputWynnamon.checked){
        yourPet.innerHTML = inputWynnamon.id
        playerPet = inputWynnamon.id
    }else if(inputPyromon.checked){
        yourPet.innerHTML = inputPyromon.id
        playerPet = inputPyromon.id
    }else if(inputPryronumon.checked){
        yourPet.innerHTML = inputPryronumon.id
        playerPet = inputPryronumon.id
    }else if(inputArkyteranomon.checked){
        yourPet.innerHTML = inputArkyteranomon.id
        playerPet = inputArkyteranomon.id
    }else if(inputCinnamon.checked){
        yourPet.innerHTML = inputCinnamon.id
        playerPet = inputCinnamon.id
    }else if(inputMezzopranomon.checked){
        yourPet.innerHTML = inputMezzopranomon.id
        playerPet = inputMezzopranomon.id
    }else if(inputVulkanomon.checked){
        yourPet.innerHTML = inputVulkanomon.id
        playerPet = inputVulkanomon.id
    }else{
        alert("Selecciona una mascota")
        play = 0
        resetGame()
    }
    if(play == 1){
        extractAttack(playerPet)
        enemyPetSelector()
    }
}

function extractAttack (playerPet){
    let attacks
    //solución 1
    //arkymons.forEach((arkymon) => {
      //  if (playerPet === arkymon.name) {
        //    attacks = arkymon.attack
        //}
    //})
    //solución 2
    for (let i = 0; i < arkymons.length; i++){
        if (playerPet === arkymons[i].name){
            attacks = arkymons[i].attack
        }
    }
    showAttacks(attacks)
}

function showAttacks (attacks) {
    attacks.forEach((attack) => {
        arkymonAttacks = `
        <button class="attackButton attackBTN" id=${attack.id}>${attack.name}</button>
        `
        attacksContainer.innerHTML += arkymonAttacks
    })
    waterButton = document.getElementById("water-button")
    fireButton = document.getElementById("fire-button")
    earthButton = document.getElementById("earth-button")
    buttons = document.querySelectorAll(".attackBTN")
}

function attackSequency(){
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            console.log(e)
            if (e.target.textContent === "🔥"){
                playerAttack.push("Fire")
                console.log(playerAttack)
                button.style.background = "#008080"
                button.disabled = true
            }
            else if (e.target.textContent === "💧") {
                    playerAttack.push("Water")
                    console.log(playerAttack)
                    button.style.background = "#008080"
                    button.disabled = true
            }else {
                playerAttack.push("Earth")
                console.log(playerAttack)
                button.style.background = "#008080"
                button.disabled = true
            }
            enemyRandomAttack()
        })
    })
}

function enemyPetSelector(){
    let randomPet = randomizer(0, arkymons.length -1)
    enemyPet.innerHTML = arkymons[randomPet].name
    enemyArkymonAttacks = arkymons[randomPet].attack
    attackSequency()
}


function enemyRandomAttack(){
    let randomAttack = randomizer(0, enemyArkymonAttacks.length -1)
    
    if (randomAttack == 0 || randomAttack == 1){
        enemyAttack.push("Water")
    }else if (randomAttack == 3 || randomAttack == 4){
        enemyAttack.push("Fire")
    }else {
        enemyAttack.push("Earth")
    }
    console.log(enemyAttack)
    startCombat()
}

function startCombat(){
    if (playerAttack.length === 5){
        combat()
    }
}

function indexAllPlayers(player, enemy){
    indexPlayerAttack = playerAttack[player]
    indexEnemyAttack = enemyAttack[enemy]
}

function combat(){
    for (let index = 0; index < playerAttack.length; index++) {
        if(playerAttack[index] === enemyAttack[index]){
            indexAllPlayers(index, index)
            message("EMPATE")
            spanPlayerHealth.innerHTML = playerVictories
        }else if(playerAttack[index] === "Fire" && enemyAttack[index] == "Earth"){
            indexAllPlayers(index, index)
            message("GANASTE")
            playerVictories++
            spanPlayerHealth.innerHTML = playerVictories
        }else if(playerAttack[index] === "Water" && enemyAttack[index] == "Fire"){
            indexAllPlayers(index, index)
            message("GANASTE")
            playerVictories++
            spanPlayerHealth.innerHTML = playerVictories
        }else if(playerAttack[index] === "Earth" && enemyAttack[index] == "Water"){
            indexAllPlayers(index, index)
            message("GANASTE")
            playerVictories++
            spanPlayerHealth.innerHTML = playerVictories
        }else{
            indexAllPlayers(index, index)
            message("PERDISTE")
            enemyVictories++
            spanEnemyHealth.innerHTML = enemyVictories
        }
    }
    checkHealth()
}

function checkHealth() {
    if (playerVictories === enemyVictories){
        finalMessage("Terminó en empate!")
    }else if (playerVictories > enemyVictories){
        finalMessage("VICTORIA!!")
    }else{
        finalMessage("DERROTA")
    }
}

function message (resultado){
    let newPlayerAttack = document.createElement("p")
    let newEnemyAttack = document.createElement("p")
    
    sectionMessage.innerHTML = resultado
    newPlayerAttack.innerHTML = indexPlayerAttack
    newEnemyAttack.innerHTML = indexEnemyAttack
    
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
