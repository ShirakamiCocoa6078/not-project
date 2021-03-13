const ElementList = [
    'characterLevel',
    'characterBreak',
    'weapon',
    'weaponLevel',
    'weaponBreak',
    'talents1',
    'talents2',
    'talents3'
]
function characterChanged() { //캐릭터 변경시
    const characterLevelOptions = document.getElementById('characterLevel').options
    const characterSelectedClass = document.getElementById('character').selectedIndex
    for(let i = 1; i < ElementList.length; i++){
        document.getElementById(ElementList[i]).selectedIndex = 0
    }
    for(let i = 1; i < characterLevelOptions.length; i++){
        if(characterSelectedClass != 0){
            characterLevelOptions[i].hidden = false
        }else{
            characterLevelOptions[i].hidden = i != 0
        }
    }
    const options = document.getElementById('weapon').options
    document.getElementById('weapon').selectedIndex = 0

    const characterElement = document.getElementById('character')
    const selectedClass = characterElement.options[characterElement.selectedIndex].value
    for (let i = 1; i < options.length; i++) {
        options[i].hidden = !options[i].value.includes(selectedClass)
    }
}

function changeWeapon(){//무기 변경시
    const options = document.getElementById('weaponLevel')
    document.getElementById('weaponLevel').selectedIndex = 0

    const weaponElement = document.getElementById('weapon')
    const selectedClass = weaponElement.options[weaponElement.selectedIndex].value
    for(let i = 1; i< options.length; i++){
        if(selectedClass[selectedClass.length-1] === '0'){
            options[i].hidden = true
        }else if(selectedClass[selectedClass.length-1].match(/1|2/)){
            options[i].hidden = i >= 7
        }else{
            options[i].hidden = false
        }
    }
}
function changeCLevel(){//캐릭터 레벨 변경시
    const options = document.getElementById('characterBreak')
    document.getElementById('characterBreak').selectedIndex = 0

    const characterElement = document.getElementById('characterLevel')
    const selectedClass = characterElement.options[characterElement.selectedIndex].value
    for(let i = 1;i < options.length; i++){
        if(i===0){
            options[i].hidden = i != 0
            continue
        }
        switch(selectedClass){
            case 'C1':
                options[i].hidden = i != 1
                break
            case 'C20':
                options[i].hidden = ![1,2].includes(i) 
                break
            case 'C40':
                options[i].hidden = ![2,3].includes(i) 
                break
            case 'C50':
                options[i].hidden = ![3,4].includes(i) 
                break
            case 'C60':
                options[i].hidden = ![4,5].includes(i) 
                break
            case 'C70':
                options[i].hidden = ![5,6].includes(i)
                break
            case 'C80':
                options[i].hidden = ![6,7].includes(i) 
                break
            case 'C90':
                options[i].hidden = i != 7
        }
    }
}
function changeLevel(){//무기 레벨 변경시
    const options = document.getElementById('weaponBreak')
    document.getElementById('weaponBreak').selectedIndex = 0

    const weaponBElement = document.getElementById('weaponLevel')
    const selectedClass = weaponBElement.options[weaponBElement.selectedIndex].value
    for(let i = 1; i < options.length; i++){
        if(i===0){
            options[i].hidden = i != 0
            continue
        }
        switch(selectedClass){
            case 'WL1':
                options[i].hidden = i != 1
                break
            case 'WL20':
                options[i].hidden = ![1,2].includes(i) 
                break
            case 'WL40':
                options[i].hidden = ![2,3].includes(i) 
                break
            case 'WL50':
                options[i].hidden = ![3,4].includes(i) 
                break
            case 'WL60':
                options[i].hidden = ![4,5].includes(i) 
                break
            case 'WL70':
                options[i].hidden = ![5,6].includes(i) 
                break
            case 'WL80':
                options[i].hidden = ![6,7].includes(i) 
                break
            case 'WL90':
                options[i].hidden = i != 7
        }
    }
}

//$('.stats').delegate()