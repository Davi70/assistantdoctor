// Función para cambiar al siguiente testimonio
function siguienteTestimonio() {
    const testimonios = document.querySelectorAll('.testimonio');
    let testimonioActivoIndex = 0;

    // Encuentra el índice del testimonio activo
    testimonios.forEach((testimonio, index) => {
        if (testimonio.classList.contains('active')) {
            testimonioActivoIndex = index;
            testimonio.classList.remove('active'); // Oculta el testimonio actual
        }
    });

    // Calcula el índice del siguiente testimonio
    const siguienteIndex = (testimonioActivoIndex + 1) % testimonios.length;

    // Muestra el siguiente testimonio
    testimonios[siguienteIndex].classList.add('active');
}

// Función para desplazar la página a la mitad
function scrollToMiddle() {
    const middle = document.body.scrollHeight / 2;
    window.scrollTo({
        top: middle,
        behavior: 'smooth'
    });
}
// Efecto de cambio de color en la barra al hacer scroll
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#4CA89D"; // Color más oscuro al hacer scroll
    } else {
        nav.style.backgroundColor = "#5EBBB0"; // Color original
    }
});




// 💡 Función para redirigir a otra página cuando se hace clic en botones específicos
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn-all-posts").addEventListener("click", function () {
        window.location.href = "blog.html"; // Redirige a la página del blog
    });

    document.querySelectorAll(".categories button").forEach(button => {
        button.addEventListener("click", function () {
            alert("Esta función está en desarrollo 🚀");
        });
    });
});

// 🔄 Agregar animaciones al hacer scroll
window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".fade-in");
    let screenHeight = window.innerHeight;

    elements.forEach(element => {
        let position = element.getBoundingClientRect().top;
        if (position < screenHeight - 50) {
            element.classList.add("visible");
        }
    });
});

// 🌟 Smooth Scroll (desplazamiento suave)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth"
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    
    // 📌 Mostrar más publicaciones al hacer clic en "Ver todas las publicaciones"
    const showPostsBtn = document.querySelector(".post-preview button");
    const extraPosts = document.createElement("div");
    extraPosts.classList.add("extra-posts");
    extraPosts.innerHTML = `
        <article><h3>Gestión del estrés en el trabajo</h3><p>Estrategias para reducir el estrés laboral...</p></article>
        <article><h3>Postura y ergonomía</h3><p>Cómo evitar dolores con una mejor postura...</p></article>
        <article><h3>Importancia del descanso</h3><p>Por qué las pausas activas son esenciales...</p></article>
    `;
    extraPosts.style.display = "none"; // Inicialmente oculto
    showPostsBtn.insertAdjacentElement("afterend", extraPosts);

    showPostsBtn.addEventListener("click", function () {
        if (extraPosts.style.display === "none") {
            extraPosts.style.display = "block";
            showPostsBtn.textContent = "Ocultar publicaciones";
        } else {
            extraPosts.style.display = "none";
            showPostsBtn.textContent = "Ver todas las publicaciones";
        }
    });

    // 📌 Función para desplegar las categorías del blog
    const categoryButtons = document.querySelectorAll(".categories button");

    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const existingDropdown = document.querySelector(".dropdown-content");
            if (existingDropdown) existingDropdown.remove(); // Cierra otros desplegables

            const dropdown = document.createElement("div");
            dropdown.classList.add("dropdown-content");

            let categoryContent = "";
            switch (this.textContent) {
                case "Salud Mental":
                    categoryContent = "<p>Consejos para manejar el estrés y la ansiedad.</p>";
                    break;
                case "Actividad Física":
                    categoryContent = "<p>Rutinas para mejorar la salud en el trabajo.</p>";
                    break;
                case "Nutrición":
                    categoryContent = "<p>Alimentos para mejorar la productividad.</p>";
                    break;
                case "Ergonomía":
                    categoryContent = "<p>Posturas y herramientas para evitar lesiones.</p>";
                    break;
                case "Ver todas las categorías":
                    categoryContent = "<p>Explora todas las categorías en nuestro blog.</p>";
                    break;
                default:
                    categoryContent = "<p>Contenido en desarrollo.</p>";
            }

            dropdown.innerHTML = categoryContent;
            this.insertAdjacentElement("afterend", dropdown);

            // Cierra el desplegable si se hace clic fuera de él
            document.addEventListener("click", function closeDropdown(e) {
                if (!button.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.remove();
                    document.removeEventListener("click", closeDropdown);
                }
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    
    // 📌 Mostrar más publicaciones al hacer clic en "Ver todas las publicaciones"
    const showPostsBtn = document.getElementById("showMorePosts");
    const extraPosts = document.createElement("div");
    extraPosts.classList.add("extra-posts");
    extraPosts.innerHTML = `
        <article>
        <h3><a href="https://www.rankmi.com/blog/manejo-del-estres-laboral-clave-en-la-gestion-de-personas">Gestión del estrés en el trabajo<a/></h3>
        <p>Estrategias para reducir el estrés laboral...</p>
        </article>
        <article>
        <h3><a href="https://www.spmas.es/blog/buenas-posturas-en-trabajo-buenas-para-salud/">Postura y ergonomía</a></h3>
        <p>Cómo evitar dolores con una mejor postura...</p>
        </article>
        <article>
        <h3><a href="https://www.esteveteijin.com/por-que-es-importante-tener-un-buen-descanso/">Importancia del descanso<a/></h3>
        <p>Por qué las pausas activas son esenciales...</p>
        </article>
    `;
    extraPosts.style.display = "none"; 
    showPostsBtn.insertAdjacentElement("beforebegin", extraPosts);

    showPostsBtn.addEventListener("click", function () {
        if (extraPosts.style.display === "none") {
            extraPosts.style.display = "block";
            showPostsBtn.textContent = "Ocultar publicaciones";
        } else {
            extraPosts.style.display = "none";
            showPostsBtn.textContent = "Ver todas las publicaciones";
        }
    });

    // 📌 Función para desplegar las categorías del blog
    const categoryButtons = document.querySelectorAll(".category-btn");

    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const existingDropdown = document.querySelector(".dropdown-content");
            if (existingDropdown) existingDropdown.remove(); 

            const dropdown = document.createElement("div");
            dropdown.classList.add("dropdown-content");

            let categoryContent = "";
            switch (this.textContent) {
                case "Salud Mental":
                    categoryContent = "<p>Consejos para manejar el estrés y la ansiedad.</p>";
                    break;
                case "Actividad Física":
                    categoryContent = "<p>Rutinas para mejorar la salud en el trabajo.</p>";
                    break;
                case "Nutrición":
                    categoryContent = "<p>Alimentos para mejorar la productividad.</p>";
                    break;
                case "Ergonomía":
                    categoryContent = "<p>Posturas y herramientas para evitar lesiones.</p>";
                    break;
                case "Ver todas las categorías":
                    categoryContent = "<p>Explora todas las categorías en nuestro blog.</p>";
                    break;
            }

            dropdown.innerHTML = categoryContent;
            this.insertAdjacentElement("afterend", dropdown);

            document.addEventListener("click", function closeDropdown(e) {
                if (!button.contains(e.target) && !dropdown.contains(e.target)) {
                    dropdown.remove();
                    document.removeEventListener("click", closeDropdown);
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".categories button");

    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Cierra cualquier otro menú desplegable abierto
            document.querySelectorAll(".dropdown-content").forEach(dropdown => {
                if (dropdown !== this.nextElementSibling) {
                    dropdown.remove();
                }
            });

            // Si ya existe un desplegable en este botón, lo elimina
            if (this.nextElementSibling && this.nextElementSibling.classList.contains("dropdown-content")) {
                this.nextElementSibling.remove();
                return;
            }

            // Crear el menú desplegable
            const dropdown = document.createElement("div");
            dropdown.classList.add("dropdown-content");

            let categoryContent = "";
            switch (this.textContent) {
                case "Salud Mental":
                    categoryContent = "<p>Consejos para manejar el estrés y la ansiedad.</p>";
                    break;
                case "Actividad Física":
                    categoryContent = "<p>Rutinas para mejorar la salud en el trabajo.</p>";
                    break;
                case "Nutrición":
                    categoryContent = "<p>Alimentos para mejorar la productividad.</p>";
                    break;
                case "Ergonomía":
                    categoryContent = "<p>Posturas y herramientas para evitar lesiones.</p>";
                    break;
                case "Ver todas las categorías":
                    categoryContent = "<p>Explora todas las categorías en nuestro blog.</p>";
                    break;
            }

            dropdown.innerHTML = categoryContent;
            this.insertAdjacentElement("afterend", dropdown);
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("AfFhHHvYue_2nvbM0"); // Reemplaza con tu User ID de EmailJS

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("email-input").value;
        let message = document.getElementById("message-input").value;

        // Validación de los campos
        if (!validateEmail(email)) {
            alert("Por favor, ingresa un correo válido.");
            return;
        }
        if (message.trim() === "") {
            alert("El mensaje no puede estar vacío.");
            return;
        }

        // Enviar correo con EmailJS
        emailjs.send("service_4t5w66n", "TU_TEMPLATE_ID", {
            email: email,
            message: message
        }).then(
            function (response) {
                alert("Mensaje enviado correctamente.");
                document.getElementById("contact-form").reset();
            },
            function (error) {
                alert("Error al enviar el mensaje. Intenta nuevamente.");
                console.error("Error:", error);
            }
        );
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }
});
