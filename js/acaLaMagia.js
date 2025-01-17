const productos = [
    // Pizzas
    {
        categoria: "pizzas",
        nombre: "Muzzarella",
        descripcion: "Clásica pizza con muzzarella y salsa de tomate.",
        img: "./img/default.jpg",
        precio: {
            chica: 1200,
            grande: 1800
        }
    },
    {
        categoria: "pizzas",
        nombre: "Napolitana",
        descripcion: "Con rodajas de tomate fresco y ajo.",
        img: "./img/default.jpg",
        precio: {
            chica: 1300,
            grande: 1900
        }
    },
    {
        categoria: "pizzas",
        nombre: "Cuatro Quesos",
        descripcion: "Muzzarella, roquefort, parmesano y provolone.",
        img: "./img/default.jpg",
        precio: {
            chica: 1500,
            grande: 2200
        }
    },
    {
        categoria: "pizzas",
        nombre: "Rúcula y Jamón Crudo",
        descripcion: "Base de muzzarella con rúcula y jamón crudo.",
        img: "./img/default.jpg",
        precio: {
            chica: 1600,
            grande: 2300
        }
    },

    // Empanadas
    {
        categoria: "empanadas",
        nombre: "Carne",
        descripcion: "Empanada de carne cortada a cuchillo.",
        img: "./img/default.jpg",
        precio: {
            chica: 300
        }
    },
    {
        categoria: "empanadas",
        nombre: "Jamón y Queso",
        descripcion: "Clásica combinación de jamón y queso.",
        img: "./img/default.jpg",
        precio: {
            chica: 300
        }
    },
    {
        categoria: "empanadas",
        nombre: "Humita",
        descripcion: "Delicioso relleno de choclo cremoso.",
        img: "./img/default.jpg",
        precio: {
            chica: 300
        }
    },
    {
        categoria: "empanadas",
        nombre: "Verdura",
        descripcion: "Relleno de espinaca y queso.",
        img: "./img/default.jpg",
        precio: {
            chica: 300
        }
    },

    // Postres
    {
        categoria: "postres",
        nombre: "Chocotorta",
        descripcion: "Postre clásico argentino de chocolate y dulce de leche.",
        img: "./img/default.jpg",
        precio: {
            chica: 700,
            grande: 1200
        }
    },
    {
        categoria: "postres",
        nombre: "Helado",
        descripcion: "Helado artesanal de varios sabores.",
        img: "./img/default.jpg",
        precio: {
            chica: 500,
            grande: 900
        }
    },
    {
        categoria: "postres",
        nombre: "Flan Casero",
        descripcion: "Flan de huevo con caramelo.",
        img: "./img/default.jpg",
        precio: {
            chica: 400,
            grande: 700
        }
    },
    {
        categoria: "postres",
        nombre: "Brownie con Helado",
        descripcion: "Brownie de chocolate acompañado de helado.",
        img: "./img/default.jpg",
        precio: {
            chica: 800,
            grande: 1400
        }
    },

    // Bebidas
    {
        categoria: "bebidas",
        nombre: "Agua Mineral",
        descripcion: "Botella de agua natural sin gas.",
        img: "./img/default.jpg",
        precio: {
            chica: 200,
            grande: 350
        }
    },
    {
        categoria: "bebidas",
        nombre: "Cerveza Artesanal",
        descripcion: "Cerveza artesanal rubia, roja o negra.",
        img: "./img/default.jpg",
        precio: {
            chica: 500,
            grande: 900
        }
    },
    {
        categoria: "bebidas",
        nombre: "Jugo Natural",
        descripcion: "Jugo exprimido de naranja o limón.",
        img: "./img/default.jpg",
        precio: {
            chica: 300,
            grande: 500
        }
    },
    {
        categoria: "bebidas",
        nombre: "Gaseosa",
        descripcion: "Lata de gaseosa de varios sabores.",
        img: "./img/default.jpg",
        precio: {
            chica: 300,
            grande: 600
        }
    }
];
const secciones = {
    pizzas: document.querySelector("#sectionPizza"),
    empanadas: document.querySelector("#sectionEmpanada"),
    postres: document.querySelector("#sectionPostre"),
    bebidas: document.querySelector("#sectionBebida"),
    popup: document.querySelector(".pop-up")
};

window.addEventListener("load", () => {
    renderProductos(productos)
})

function generarId(lista) {
    let id = 1
    for (let i = 0; i < lista.length; i++) {
        lista[i].id = id
        id++
    }
    return lista
}
function toggleSecciones() {
    const headers = document.querySelectorAll(".toggle-header");
    headers.forEach((header) => {
        header.addEventListener("click", () => {
            const section = header.nextElementSibling;
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
}
function restar(event) {
    event.preventDefault()
    const input = event.target.parentNode.querySelector('.valorInputs');
    if (input.value == "") {
        input.value = 0
    }
    input.value = parseInt(input.value) - 1;
}
function sumar(event) {
    event.preventDefault()
    const input = event.target.parentNode.querySelector('.valorInputs');
    if (input.value == "") {
        input.value = 0
    }
    input.value = parseInt(input.value) + 1;
}
function generarOpcionesProducto(categoria, precio, incluirInputs = false) {
    if (categoria === "pizzas") {
        return `
            <div class="opcionesPopup">
                <div class= "inputPopup">
                    <label for="">Chica: $${precio.chica || "-"}</label>
                    ${incluirInputs ? `<input type="radio" name="tamaño" value="chica">` : ""}
                </div>
                <div class= "inputPopup"> 
                    <label for="">Grande: $${precio.grande || "-"}</label>
                    ${incluirInputs ? `<input type="radio" name="tamaño" value="grande">` : ""}
                </div>
            </div>
        `
    } else {
        return `
            <div>
                <label for="">Unidad: $${precio.chica || "-"}</label>
                ${incluirInputs ? `<input type="radio" name="unidad" checked>` : ""}
            </div>
        `
    }
}
function crearHTMLProducto({ categoria, nombre, descripcion, img, precio, id }) {
    const opciones = generarOpcionesProducto(categoria, precio, false); // No incluye inputs
    return `
        <article class="box" id="${id}">
            <img src="${img}" alt="">
            <div class="divBox">
                <h4 class="text-box">${nombre}</h4>
                <h5 class="text-box">${descripcion}</h5>
                ${opciones}
            </div>
        </article>`;
}
function agregarEventosClick() {
    document.querySelectorAll(".box").forEach((product) => {
        product.addEventListener("click", () => {
            const productId = parseInt(product.id, 10);
            const productoSeleccionado = productos.find((item) => item.id === productId);
            if (productoSeleccionado) {
                mostrarPopup(productoSeleccionado);
            } else {
                console.error("Producto no encontrado");
            }
        });
    });
}
function mostrarPopup(productoSeleccionado) {
    secciones.popup.style.display = "block";
    const opciones = generarOpcionesProducto(productoSeleccionado.categoria, productoSeleccionado.precio, true); // Incluye inputs
    secciones.popup.innerHTML = `
        <button id="closePopup">
            <i class="fa-solid fa-circle-xmark"></i>
        </button>
        <img src="${productoSeleccionado.img}" alt="${productoSeleccionado.nombre}">
        <div class="descriptioPopup">
            <h2>${productoSeleccionado.nombre}</h2>
            <p>- ${productoSeleccionado.descripcion}</p>
            ${opciones}
            <hr>
        </div>
        <span class="spanContinuar">Seleccione una opcion para continuar</span>
        <div class="contenidoAdicional"></div>
    `;
    document.getElementById("closePopup").addEventListener("click", (e) => {
        e.preventDefault();
        secciones.popup.style.display = "none";
    });
    variablesPopup()
}
function variablesPopup() {
    const radioInputs = secciones.popup.querySelectorAll('input[name="tamaño"]');
    const span = document.querySelector(".spanContinuar")
    const contenidoAdicional = secciones.popup.querySelector(".contenidoAdicional")
    radioInputs.forEach((input) => {
        input.addEventListener("change", () => {
            if (input.checked) {
                if (span) {
                    span.style.display = "none";
                }
                const bebidas = productos.filter(producto => producto.categoria === "bebidas").slice(0, 3);
                const postres = productos.filter(producto => producto.categoria === "postres").slice(0, 3);

                // Generar el HTML de las bebidas
                const bebidasHTML = bebidas.map(bebida => `
                    <div class="bebida-item estiloOpciones">
                        <p>${bebida.nombre} - $${bebida.precio.chica || "-"}</p>
                        <div class="divBtn">
                            <button onclick="restar(event)" class="btnMas">-</button>
                            <input  class="styleInput valorInputs"
                                    type="number"
                                    value="0"
                                    readonly>
                            <button onclick="sumar(event)" class="btnMas">+</button>
                        </div> 
                    </div>    
                `).join("");
                // Generar el HTML de los postres
                const postresHTML = postres.map(postre => `
                    <div class="postre-item estiloOpciones">
                        <p>${postre.nombre} - $${postre.precio.chica || "-"}</p>
                        <div class="divBtn">
                            <button onclick="restar(event)" class="btnMas">-</button>
                            <input  class="styleInput valorInputs"   
                                    type="number"
                                    value="0"
                                    readonly>
                            <button onclick="sumar(event)" class="btnMas">+</button>
                        </div> 
                    </div>
                `).join("");

                contenidoAdicional.innerHTML = `
                    <div class="estiloContenidoAdicional">
                        <h4>¿Queres alguna bebida?</h4>
                        <div class="bebidas-list">
                           ${bebidasHTML}
                           <hr>
                        </div>
                        <h4>¿Queres algún postre?</h4>
                        <div class="postres-list">
                           ${postresHTML}
                           <hr>
                        </div>
                        <input placeholder="observaciones"                   type="textarea"
                        class="observaciones"
                        >
                        <div class="divBtnPopup">
                            <label>Cantidad: </label>
                            <div>
                            <button onclick="restar(event)" class="btnMas">-</button>
                            <input class="styleInput valorInputs" value="1" placeholer="Cant." type="number" readonly>
                            <button onclick="sumar(event)" class="btnMas">+</button>
                            </div>
                        </div> 
                        <div class="divBtnPop">
                            <button class="btnPop" >Cancelar</button>
                            <button class="btnPop">Agregar Pedido</button>
                        </div>
                    </div>
                `;
            }
        });
    });
}
function renderProductos(lista) {
    generarId(productos)
    lista.forEach((producto) => {
        secciones[producto.categoria].innerHTML += crearHTMLProducto(producto);
    });
    toggleSecciones()
    agregarEventosClick();
}














// function restar(event) {
//     event.preventDefault()
//     const input = event.target.parentNode.querySelector('.valorInputs');
//     if (input.value == "") {
//         input.value = 0
//     }
//     input.value = parseInt(input.value) - 1;
// }


// function sumar(event) {
//     event.preventDefault()
//     const input = event.target.parentNode.querySelector('.valorInputs');
//     if (input.value == "") {
//         input.value = 0
//     }
//     input.value = parseInt(input.value) + 1;
// }

{/* <div class="divBtn">
                            <button onclick="restar(event)" class="btnMas">-</button>
                            <input id="${id}" class="styleInput valorInputs" placeholder="Cant." type="number">
                            <button onclick="sumar(event)" class="btnMas">+</button>
                        </div> */}