const datosVentas = [
  {
    tipo: "Departamento a estrenar",
    precio: "43.000 USD",
    img: "https://cdn-thumbnailer-properties.inmokey.com/p/w1920/8/7/p-143487-010622033604-624049.jpg?v=3",
    ubicacion: "Ciudad, Mendoza",
    descripcion:
      "Ubicado en calle Aristides Villanueva 3100. Consta de 3 ambientes, 1 dormitorio, 1 baño y balcón. Cuenta con 42mts cuadrados cubiertos",
  },
  {
    tipo: "Casa",
    precio: "75.000 USD",
    img: "https://cdn-thumbnailer-properties.inmokey.com/p/w1920/2/9/p-400729-310822113010-864392.jpg?v=3",
    ubicacion: "Alta Córdoba, Córdoba",
    descripcion:
      " Ubicada sobre calle Trafalgar 500, Barrio Alta Córdoba. Consta de 401 mts2 cubiertos, 5 ambientes, 3 dormitorios y 2 baños. Patio interno parquizado. ",
  },
  {
    tipo: "Duplex",
    precio: "380.000 USD",
    img: "https://cdn-thumbnailer-properties.inmokey.com/p/w1920/us-east-1/8/0/p-970480-020322120742-976322.jpeg?v=3",
    ubicacion: "El Challao, Mendoza",
    descripcion:
      " Ubicado en el barrio privado La Yaya, El challao. Diseño moderno y funcional. Lugar perfecto para conectar con la naturaleza en el pedemonte mendocino. Consta de 225 mts2 cubiertos compuesto por dos pisos, 6 ambientes, 3 dormitorios y 2 baños. Parquizado de 15mts2",
  },
  {
    tipo: "Local comercial",
    img: "https://cdn-thumbnailer-properties.inmokey.com/p/w1920/us-east-1/5/7/p-532457-310720044419-173955.jpg?v=3",
    precio: "60.000 USD",
    ubicacion: "Alta Córdoba, Córdoba",
    descripcion:
      " Ubicado en barrio residencial con gran afluencia de transito en calle Isabel La Católica 300. Consta de 45mts2 cubiertos compuestos por el local y un baño. No paga expensas. ",
  },
  {
    tipo: "Casa",
    img: "https://casasparaconstruir.com/projetos/140/01.jpg",
    precio: "3.850.000 USD",
    ubicacion: "Tigre, Buenos Aires",
    descripcion:
      " Ubicada en barrio residencial porteño. Consta de 1000 mts2 compuesto por 10 ambientes y 6 habitaciones en suite, dos garages delanteros, pileta de fibrocemento de 6mts x 4,80 x 2,20 de profundidad. Parquizado con diseño francés.  ",
  }
]

const seccionVentas= document.getElementById("container-ventas");

datosVentas.forEach((item)=> {
  console.log(item)
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

     seccionVentas.appendChild(div)
})
