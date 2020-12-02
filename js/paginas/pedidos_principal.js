var div = document.getElementById("cardDiv");

// var btnPedidos = document.getElementById('btn-pedidos').addEventListener('click', fetchPedidos);

fetchPedidos();


function fetchPedidos() {
        targetUrl = 'http://arcane-river-03994.herokuapp.com/pedido'

    fetch(targetUrl)
    .then((res) => {
        console.log(res);
        console.log(res.body);
        // console.log(res.json())
        // return res.json()
    })
    .then((response) => {
        console.log(response);
        let listaPedidos = response.pedidos;
        
        console.log(listaPedidos);

        for(let i = 0; i < listaPedidos.length; i++) {
            let detalle = listaPedidos[i].detalle;

            console.log(detalle);
            div.innerHTML += `
                <h3>Pedido${i + 1} - (${listaPedidos[i].nombre_usr})</h3>
            `;
            
            for (let index = 0; index < detalle.length; index++) {
                
                console.log(detalle[index]);
                div.innerHTML += `
                <div class="card" style="width: 18rem;"> -->
                    <img class="card-img-top" src="http://sipc.inti.com.bo/ImagenClient/${detalle[index].id_prod}.png" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${detalle[index].nombre}</h5>
                      <p class="card-text">Bs. ${detalle[index].precio}</p>
                      <p class="card-text">Cantidad: ${detalle[index].cantidad}</p>
                    </div>
                </div>            
             `
            }
        }
    })
}