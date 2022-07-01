console.log("Deam...")


const llamarJson = async() => {
    try {
        const respuesta = await fetch("familia.json")
        const resultado = await respuesta.json()

        console.log(resultado.familia)
        listarFamilias(resultado.familia)
    } catch (error) {
        return error
    }
}

const listarFamilias = (familia) =>{
    const mama = document.querySelector('.cardMama') 
    const papa = document.querySelector('.cardPapa')
    const hijo = document.querySelector('.cardHijo')
    const hija = document.querySelector('.cardHija')
    familia.forEach(element => {
        if(mama){
            mama.innerHTML = ` 
            <div class="card-image1"></div>
                <div class="card-text">
                    <span class="date rolfamiliar">${familia[0].rolFamiliar}</span>
                    <h2 class="nombrema">${familia[0].nombre}</h2>
                    <p class="descripcionma">${familia[0].descripcion}</p>
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <div class="value diama">${familia[0].diaDeNacimiento}</div>
                        <div class="type">Día</div>
                    </div>
                    <div class="stat border">
                        <div class="value mesma">${familia[0].mesDeNacimiento}</div>
                        <div class="type">Mes</div>
                    </div>
                    <div class="stat">
                        <div class="value añoma">${familia[0].añoDeNacimiento}</div>
                        <div class="type">Año</div>
                    </div>
                </div>`
        }
        if (papa){
            papa.innerHTML = ` 
            <div class="card-image2"></div>
                <div class="card-text">
                    <span class="date rolfamiliar">${familia[1].rolFamiliar}</span>
                    <h2 class="nombrepa">${familia[1].nombre}</h2>
                    <p class="descripcionpa">${familia[1].descripcion}</p>
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <div class="value diapa">${familia[1].diaDeNacimiento}</div>
                        <div class="type">Día</div>
                    </div>
                    <div class="stat border">
                        <div class="value mespa">${familia[1].mesDeNacimiento}</div>
                        <div class="type">Mes</div>
                    </div>
                    <div class="stat">
                        <div class="value añopa">${familia[1].añoDeNacimiento}</div>
                        <div class="type">Año</div>
                    </div>
                </div>`
        }
        if (hijo){
            hijo.innerHTML = ` 
            <div class="card-image3"></div>
                <div class="card-text">
                    <span class="date rolfamiliar">${familia[2].rolFamiliar}</span>
                    <h2 class="nombrejx">${familia[2].nombre}</h2>
                    <p class="descripcionjx">${familia[2].descripcion}</p>
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <div class="value diajx">${familia[2].diaDeNacimiento}</div>
                        <div class="type">Día</div>
                    </div>
                    <div class="stat border">
                        <div class="value mesjx">${familia[2].mesDeNacimiento}</div>
                        <div class="type">Mes</div>
                    </div>
                    <div class="stat">
                        <div class="value añojx">${familia[2].añoDeNacimiento}</div>
                        <div class="type">Año</div>
                    </div>
                </div>`
            
        }
        if (hija){
            hija.innerHTML = ` 
            <div class="card-image3"></div>
                <div class="card-text">
                    <span class="date rolfamiliar">${familia[3].rolFamiliar}</span>
                    <h2 class="nombrere">${familia[3].nombre}</h2>
                    <p class="descripcionre">${familia[3].descripcion}</p>
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <div class="value diare">${familia[3].diaDeNacimiento}</div>
                        <div class="type">Día</div>
                    </div>
                    <div class="stat border">
                        <div class="value mesre">${familia[3].mesDeNacimiento}</div>
                        <div class="type">Mes</div>
                    </div>
                    <div class="stat">
                        <div class="value añore">${familia[3].añoDeNacimiento}</div>
                        <div class="type">Año</div>
                    </div>
                </div>`
            
        }
        


        
    });
}

llamarJson()
