const registrar = async() =>{
    let datos = {
        nombre: document.getElementById('nombre').value,
        email:  document.getElementById('email').value,
        password: document.getElementById('password').value,
        rol: document.getElementById('rol').value,
        estado: document.getElementById('estado').value
    }

    //fetch('http://127.0.0.1:8086/api/usuarios', {
    fetch('https://backendapi-2t9z.onrender.com/api/usuarios', {
        method: 'POST',
        mode: 'cors',
        body:JSON.stringify(datos),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => alert(json.msg))
    .catch(err => console.log(err))
}

const modificar = async() =>{
  let datos = {
      nombre: document.getElementById('nombre').value,
      email:  document.getElementById('email').value,
      password: document.getElementById('password').value,
      rol: document.getElementById('rol').value,
      estado: document.getElementById('estado').value
  }

  //fetch('http://127.0.0.1:8086/api/usuarios', {
    fetch('https://backendapi-2t9z.onrender.com/api/usuarios', {
      method: 'PUT',
      mode: 'cors',
      body:JSON.stringify(datos),
      headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json())
  .then(json => alert(json.msg))
  .catch(err => console.log(err))
}

if(document.getElementById('btnActualizar'))
{
  document.getElementById('btnActualizar')
  .addEventListener('click', modificar)
  }


  if(document.getElementById('btnRegistrar'))
  {
    document.getElementById('btnRegistrar')
    .addEventListener('click', registrar)
    }

    
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

if( document.getElementById('resultado') ){
const div = document.getElementById('resultado');
//const url = 'https://randomuser.me/api/?results=10';
//const url = 'https://apiproyecto-production.up.railway.app/api/insumo';
//const url = 'http://localhost:8086/api/usuarios'
const url = 'https://backendapi-2t9z.onrender.com/api/usuarios'
let resultado = ''
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.usuarios;
  let index = 0
  return authors.map(function(author) {
    index++
    if(index == 1)
    {
       /* resultado = '<table id="myTable"  class="display">'+
        '<thead>' +
          '<tr>' +
              '<th>Nombre</th>'+
              '<th>Rol</th>' +
              '<th>Estado</th>' +
          '</tr>' +
        '</thead>' +
        '<tbody>'
        */
    }
    estado = 'Inactivo'
    prueba = JSON.stringify(author)
    if(author.estado){estado = 'Activo'}
    /*resultado += `<tr><td>${author.nombre}</td><td> ${author.email}</td> <td> ${estado}</td>
    <td><a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${prueba})'>Modal</a>
    </td>
    </tr>`;
*/
resultado += `<tr><td> ${author.nombre}</td><td> ${author.email}</td> <td> ${estado}</td>
    <td>xxxx</td>
    </tr>`;
console.log(resultado)
    if(index == authors.length){
        //resultado += `<tr><td>aa</td><td>bbb</td><td>ccc</td></tr></tbody></table>`;
    }

    div.innerHTML = resultado

  })


})
.then(

)
.catch(function(error) {
  console.log(error);
});

}

const editar = (auth) =>{
 document.getElementById('nombre').value = auth.nombre
 document.getElementById('email').value = auth.email
 document.getElementById('password').value = auth.password
 document.getElementById('rol').value = auth.rol
 document.getElementById('estado').value = auth.estado
}

/*let table = new DataTable('#myTable', {
  // options
});
*/


/*

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.insumo;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    //img.src = author.picture.medium;
    span.innerHTML = `${author.Nombre} ${author.Cantidad}`;
    //append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});

*/

