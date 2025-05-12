document.addEventListener("DOMContentLoaded",() => {
    fetch("../Redundancia/menu1.html").
        then(Response => Response.text()).
        then(data => {document.getElementById("menu1").innerHTML = data;}).
        catch(Error => {console.error("Error al cargar página", Error);});
// })

// document.addEventListener("DOMContentLoaded",() => {
    fetch("../Redundancia/Footer.html").
        then(Response => Response.text()).
        then(data => {document.getElementById("templatemo_footer").innerHTML = data;}).
        catch(Error => {console.error("Error al cargar página", Error);});
// })

// document.addEventListener("DOMContentLoaded",() => {
    fetch("../Redundancia/Encabezado.html").
        then(Response => Response.text()).
        then(data => {
            document.getElementById("templatemo_nav_top").innerHTML = data;
            if (typeof actualizarCarrito === 'function') {
                actualizarCarrito();
            }
            actualizarContadorCarrito();
        }).
        catch(Error => {console.error("Error al cargar página", Error);});
   
});

