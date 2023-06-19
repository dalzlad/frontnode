registrar = async() => {
    console.log('Registrar')
    // datos mandados con la solicutud POST
    let _datos = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value, 
        password: document.getElementById('password').value,
        rol: document.getElementById('rol').value,
        estado: document.getElementById('estado').value
    }
  
  fetch('http://127.0.0.1:8086/api/usuarios', {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(_datos),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => 
    {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: json.msg,
        showConfirmButton: false,
        timer: 1500
      })
    })
  .catch(err => console.log(err))
    
}


document.getElementById('btnRegistrar')
.addEventListener('click', registrar)
