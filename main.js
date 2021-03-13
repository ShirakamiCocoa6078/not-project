function characterChanged() {
    const options = document.getElementById('weapon').options
    document.getElementById('weapon').selectedIndex = 0

    const characterElement = document.getElementById('character')
    const selectedClass = characterElement.options[characterElement.selectedIndex].text
    for (let i = 1; i < options.length; i++) {
        options[i].hidden = options[i].value != selectedClass
    }
}
characterChanged()