// Se selecciona el primer elemento con la clase '.pantalla'
// Este elemento representa la pantalla de la calculadora 
const pantalla = document.querySelector(".pantalla");
// Se esta seleccionando todos los elementos con la clase '.btn'
const botones = document.querySelectorAll(".btn");

// Itera sobre cada botón seleccionado
botones.forEach(boton => {
    // Cuando se hace click en un botón, se ejecuta la función de flecha que sigue
    boton.addEventListener("click",()=>{
        //console.log(boton.textContent);

        // Obtiene el texto contenido dentro del botón que fue presionado
        const botonApretado = boton.textContent;
        // Verifica si el botón presionado tiene el id 'c'
        if(boton.id === "c") { // Si es así, resetea la pantalla a 0
            pantalla.textContent = "0";
            return;
        }

        // Verifica si el botón presionado tiene el id 'borrar'
        if (boton.id === "borrar") {
            // Si la pantalla contiene solo un dígito o muestra "Error!", la pantalla se resetea a 0
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else { // Si no, elimina el último carácter de la pantalla
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                
            }
            return;
        }

        // Verifica si el botón presionado tiene el id 'igual'
        if(boton.id === "igual") {
            try {
                // Evalua la expresión matemática
                pantalla.textContent = eval(pantalla.textContent);
            } catch { // Muestra "Error!" en pantalla si encuentra una expresión matemática invalida
                pantalla.textContent = "Error!";
            }
            
            return;
        }

        // Verifica si la pantalla muestra "0" o "Error!"
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            // Imprime el valor en pantalla una vez que se presiona el 'botonApretado'
            pantalla.textContent = botonApretado;
        } else { // de lo contrario, concatena el texto del botón presionado a lo que ya está en la pantalla
            pantalla.textContent += botonApretado;
        }
        
    })
})