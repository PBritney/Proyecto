function log(){
    
    contra = document.getElementById('pass');
    if (contra.value == "1234") {
        alert("Bienvenido a su cuenta");
        window.location="producto.html";
    } else {
        alert("Credenciales Incorrectas");
    }
}