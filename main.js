function leerJSON1() {
    var url = "https://demo6497253.mockable.io/noticias";
    fetch(url)
        .then(response => response.json())
        // .then(data =>console.log(data))
        .then(data => pintar(data))
        .catch(error => { });
}
function leerJSON2() {
    var url = "https://demo6497253.mockable.io/deporte";
    fetch(url)
        .then(response => response.json())
        // .then(data =>console.log(data))
        .then(data => pintarDeportes(data))
        .catch(error => { });
}
function leerJSON3() {
    var url = "https://demo6497253.mockable.io/tecnologia";
    fetch(url)
        .then(response => response.json())
        // .then(data =>console.log(data))
        .then(data3 => pintarTecnologia(data3))
        .catch(error => { });
}



function pintar(data) {
    
      localStorage.setItem("data", JSON.stringify(data));
           console.log(data);

         var  arr= JSON.parse(localStorage.getItem("data"));
         console.log(arr);
         for (var ttt in arr.id) {
            console.log(arr.id[i].id);
         }
      

	

         arr.forEach(comida =>{
             var texto1;
            document.write('comida.descripcion');
            console.log(comida.descripcion);

            var zParrafos = document.querySelectorAll("p")

           console.log(comida.descripcion);
           var zEnlace = document.createElement("p");
	        zEnlace.href="#";
	        zEnlace.innerHTML = "+ info" + ${comida.descripcion[0]};
	        zParrafos[0].appendChild(zEnlace);
         });
               
}

function pintarDeportes(data) {
    
    localStorage.setItem("data", JSON.stringify(data2));
         console.log(data2);

       var  arr= JSON.parse(localStorage.getItem("data2"));
       console.log(arr);
       for (var ttt in arr.id) {
          console.log(arr.id[i].id);
       }
       var primero;
       
       arr.forEach(comida =>{

          console.log(comida.tituto);
           primero=(comida.tituto[0]);
       });
       let cont = document.getElementById("cont");
       
       let parr = cont.getElementsByTagName('p');
       var primero = document.createElement('p');
       
       
             
}
function pintarTecnologia(data) {
    
    localStorage.setItem("data", JSON.stringify(data3));
         console.log(data);

       var  arr= JSON.parse(localStorage.getItem("data3"));
       console.log(arr);
       for (var ttt in arr.id) {
          console.log(arr.id[i].id);
       }

       arr.forEach(comida =>{

         console.log(comida.titulo);
       });
             
}


function pintare(data) {
    data.id.array.forEach(element => {
        console.log(element);
    });
    let cont = document.getElementById("cont");
    let parr = cont.getElementsByTagName('p');
    let parrafohtml = document.createElement('p');
    parrafohtml.innerText = 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh';
    cont.appendChild(parrafohtml);
    parrafohtml.setAttribute("class", 'p');
    var on = data;
    console.log(on.descripcion[0])
    const element = array[index];
    let parra = document.createElement('p');
    document.querySelector("cont").appendChild(parra);
    parra.innerHTML = Element;
    let res = document.querySelector('noticia');
    console.log('objetoObtenido: ', on);
    res.innerHTML = '';
    for (let item of on) {
        res.innerHTML += `<p>${item.descripcion}</p>`;
    }




}
leerJSON1();