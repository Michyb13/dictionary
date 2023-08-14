const searchInput = document.getElementById("search")
const searchBtn = document.getElementById("search-btn")
const word = document.getElementById("word")
const definition = document.getElementById("definition")
const apiUrl = "https://api.api-ninjas.com/v1/dictionary?word="


searchBtn.addEventListener("click", function(){
    dictData(searchInput.value)
    searchInput.value =""
})



async function dictData(Word){
    const response = await fetch(apiUrl + Word, { headers: { 'X-Api-Key': 'oyi6tJ5IwA6MjuMUASBmNw==tfXj1pHGFygWDLI2'}} )
    if(response.status === "404" || Word === ""){
        word.innerHTML = ""
        definition.innerHTML = ""
        alert("Invalid Input. Please Try Again.")
    }else{
    let data = await response.json()
    word.innerHTML = data.word
    definition.innerHTML = data.definition
}
}
