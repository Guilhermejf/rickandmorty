const data = {
    name: document.getElementById('name'),
    status: document.getElementById("status"),
    species: document.getElementById("species"),
    type: document.getElementById("type"),
    gender: document.getElementById("gender"),
    picture: document.querySelector(".picture")
}

function lifeStatus(apidata){
    if(apidata.status == 'Alive'){
        data.status.classList.add("alive")
    }else if(apidata.status == 'Dead'){
        data.status.classList.add("dead")
    }else{
        data.status.classList.add("unknown")
    }
}

function insetDataHtml(apidata){
    data.name.innerText = apidata.name
    data.status.innerText = apidata.status
    data.species.innerText = apidata.species
    data.type.innerText = apidata.type
    data.gender.innerText = apidata.gender
    data.picture.src = apidata.image
    lifeStatus(apidata)
}

getApi()