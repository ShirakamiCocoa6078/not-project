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
    const options = document.getElementById('weaponLevel')
    document.getElementById('weaponLevel').selectedIndex = 0

    const weaponElement = document.getElementById('weapon')
    const selectedClass = weaponElement.options[weaponElement.selectedIndex].value
    for(let i = 1; i< options.length; i++){
        if(selectedClass[-1].match(/1|2/)){
            options[i].hidden = i <= 6
        }else{
            {}
        }
    }
}

function changeLevel(){
    const options = document.getElementById('weaponBreak')
    document.getElementById('weaponBreak').selectedIndex = 0

    const weaponBElement = document.getElementById('weaponLevel')
    const selectedClass = weaponBElement.options[weaponBElement.selectedIndex].value
    for(let i = 1; i < options.length; i++){
        if(i===0){
            continue
        }
        switch(selectedClass){
            case 'WL1':
                options[i].hidden = i != 1
                break
            case 'WL20':
                options[i].hidden = i != 1 || i != 2 
                break
            case 'WL40':
                options[i].hidden = i != 2 || i != 3
                break
            case 'WL50':
                options[i].hidden = i != 3 || i != 4
                break
            case 'WL60':
                options[i].hidden = i != 4 || i != 5
                break
            case 'WL70':
                options[i].hidden = i != 5 || i != 6
            case 'WL80':
                options[i].hidden = i != 6 || i != 7
                break
            case 'WL90':
                options[i].hidden = i != 7
                break
        }
    }

}