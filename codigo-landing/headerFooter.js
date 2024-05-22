const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<div class="header">
            <a href="./index.html"><img class="logo-color" src="./img/1LOGO.png" alt="logo"></a>
            <nav>
                <ul>
                    <li class="link-nav">
                        <a href="./sobre_nosotros.html">Sobre nosotros</a>
                    </li>
                    <li class="link-nav">
                        <a href="#">Cursos</a>
                    </li>
                    <li class="link-carrito">
                        <a href="#"><img src="./icons/carrito V.png" alt="carrito"></a>
                    </li>
                    <li class="inicio-sesion">
                        <a href="./login.html">Iniciar sesión</a>
                    </li>
                    <li>
                        <a href="./register.html"><button class="btm">REGISTRARSE</button></a>
                    </li>
                </ul>
            </nav>
        </div>
`;

footer.innerHTML = `
<div class="footer">
<div class="left">
    <img src="./img/1logo-blanco.png" alt="">
    <p>Políticas de Privacidad | Términos y Condiciones</p>
</div>
<div class="right">
    <p>Buscanos en redes</p>
    <div class="icon-redes">
        <a href="#"><img class="ig" src="./icons/instagram-logo-240.png" alt="instagram"></a>
        <a href="#"><img class="in" src="./icons/linkedin-logo-240.png" alt="linkedin"></a>
    </div>
</div>

</div>
`;