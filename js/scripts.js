const flagsElement = document.getElementById("flags")

const textsToChange= document.querySelectorAll("[data-section]");

const changeLanguage = async (language)=>{
    const requesJson= await fetch (`./languages/${language}.json`);
    const texts = await requesJson.json();
    
    for(const textToChange of textsToChange){
        // console.log(textToChange)
        const section= textToChange.dataset.section;
        const value= textToChange.dataset.value;

        textToChange.innerHTML=texts[section][value];
    }

}

flagsElement.addEventListener("click",(e)=>{
    // Verifica si el elemento clicado es un enlace
    console.log(e.target.tagName)
    if (e.target.tagName === "A") {
        // Remueve la clase 'active' de todos los enlaces
        document.querySelectorAll("#flags a").forEach(function(link) {
            link.classList.remove("active-lenguage");
        });

        // Añade la clase 'active' al enlace clicado
        e.target.classList.add("active-lenguage");
    }
    changeLanguage(e.target.dataset.lenguage);
});

