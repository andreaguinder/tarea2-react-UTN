let formButton = document.querySelector("#formButton");
let inputNombre = document.querySelector("#nombre");
let inputEdad = document.querySelector("#edad");

let mensajeParaElUsuario = document.querySelector("h3.mensajeParaElUsuario");
let rellenarDatosForm = document.querySelector("p.rellenarDatosForm");

let validarInputs = () => {
    if (inputNombre.value !== "" || inputEdad.value !== "") {
        formButton.removeAttribute("disabled");
    } else {
        formButton.setAttribute("disabled", true);
    }
}

inputNombre.addEventListener("input", validarInputs);
inputEdad.addEventListener("input", validarInputs);

formButton.addEventListener("click", (e) => {
    e.preventDefault();

    let nombre = inputNombre.value;
    let edad = inputEdad.value;

    let esMayor = () => {
        if (edad >= 18) {
            mensajeParaElUsuario.textContent = `✅ Bienvenido, ${nombre}, tienes acceso al evento.`
            mensajeParaElUsuario.classList.add("entra");
        } else {
            mensajeParaElUsuario.textContent = `❌ Lo sentimos, ${nombre}, debes ser mayor de edad.`
            mensajeParaElUsuario.classList.add("noentra");
        }
    }

    if (nombre !== "" && edad !== "") {
        esMayor();
    } else if ((nombre !== "" && edad === "") || (edad !== "" && nombre === "")) {
        setTimeout
        rellenarDatosForm.textContent = "❌ Debe rellenar todos los datos ❌"
        setTimeout(() => {
            rellenarDatosForm.textContent = "";
        }, 2000);
    }


})