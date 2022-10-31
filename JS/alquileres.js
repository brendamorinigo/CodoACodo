const datosAquiler = [
  {
    tipo: "Departamento",
    precio: "105.000 AR$",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/306723341.jpg?k=8900c04106d313e5c8e1c21d0f5831a6e27f5c220040d6d37591ae5500db2f87&o=&hp=1",
    ubicacion: "Palermo Hollywood, Buenos Aires.",
    descripcion:
      "Ubicado en calle Arévalo 560 en el barrio de Palermo. Consta de 1 ambiente con 1 baño y balcón. 25mts cuadrados cubiertos",
  },
  {
    tipo: "Casa",
    precio: "150.000 AR$",
    img: "https://static1.sosiva451.com/38423021/c3c9625d-8843-4c3f-979f-cb10dcb3a4f9_u_small.jpg",
    ubicacion: "Barrio Dalvian, Mendoza",
    descripcion:
      " Ubicada en barrio privado Dalvian, residencial y exclusivo de la provincia de Mendoza. Consta de 300 mts2, 5 ambientes, 3 dormitorios, 2 baños y parquizado. Perfecto lugar para conectar con la naturaleza y disfrutar la exclusividad ofrecida por este barrio",
  },
  {
    tipo: "Casa",
    precio: "60.000 AR$ ",
    img: "https://portals-365-prd.s3.amazonaws.com/mendozaprop/properties/5/7/p-932073-191221060646-216435.jpg",
    ubicacion: "Barrio Dalvian, Mendoza",
    descripcion:
      " Ubicada en barrio Village, zona residencial de Las Heras. Consta de 350 mts2, 6 ambientes, 3 dormitorios, 2 baños y garage. Posee patio interno con churrasquera. La zona tiene muchos comercios aledaños.",},
  {
    tipo: "Local comercial",
    img: "https://imgar.zonapropcdn.com/avisos/1/00/50/19/87/21/1200x1200/1826609926.jpg",
    precio: "100.000 ARS",
    ubicacion: "Villa Carlos Paz, Córdoba",
    descripcion:
      " Ubicado en importante zona turistica con gran afluencia de transito en calle Humberto Primo 35. Consta de 140 mts2 cubiertos, compuesto por un gran salón, oficina, deposito de 40mts2 y un baño. Ofrece importantes rentas, gran oportunidad.  ",
  },
  
  ]
  
  const seccionAlquiler= document.getElementById("container-alquiler");
  
  datosAquiler.forEach((item)=>{
        const div= document.createElement('div')
      div.classList.add ('cards')
       div.innerHTML = `        <div>
       <div class="imgCard">
       <img src=${item.img} alt=""/>
       </div>
       <div class="informacion">
       <h4>${item.tipo}</h4>
       <h5>${item.ubicacion}</h5>
       <h4>${item.precio}</h4>
       <p> ${item.descripcion}</p>
     </div>
   </div>`
  
       seccionAlquiler.appendChild(div)
  })