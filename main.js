function characterChanged() {
    const options = document.getElementById('weapon').options
    document.getElementById('weapon').selectedIndex = 0

    const characterElement = document.getElementById('character')
    const selectedClass = characterElement.options[characterElement.selectedIndex].value
    for (let i = 1; i < options.length; i++) {
        options[i].hidden = options[i].value != selectedClass
    }
}

function changeWeapon(){
    const options1 = document.getElementById('weaponLevel')
    const options2 = document.getElementById('weaponBreak')
    document.getElementById('weaponLevel').selectedIndex = 0
    document.getElementById('weaponBreak').selectedIndex = 0

    const weaponElement = document.getElementById('weapon')
    const selectedClass = weaponElement.options[weaponElement.selectedIndex].value
    for(let i = 1; i< options1.length; i++){
        if(selectedClass[-1].match(/1|2/)){
            options[i].hidden = option[i] < 3
        }else{
            {}
        }
    }
}