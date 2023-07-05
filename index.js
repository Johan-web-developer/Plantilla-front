import {getcategorias,addCategories,getcategoria,deletecategoria,updateCategories} from "./API.js";

document.addEventListener("DOMContentLoaded",showCategories);
const tableCate = document.querySelector('#categories');


/* LISTAR CATEGORIAS  - CRUD (R) */
async function showCategories(){
    const data = await getcategorias()
    console.log(data);
    data.forEach(element => {
        const{CategoriaID,CategoriaNombre,Descripcion,Imagen} = element;
        tableCate.innerHTML+=`
        <tr>
            <td>${CategoriaID}</td>
            <td>${CategoriaNombre}</td>
            <td>${Descripcion}</td>
            <td>${Imagen}</td>
            <td> <button type="button" class="btn btn-danger delete" id="${CategoriaID}">Delete</button></td>
            <td> <button type="button" class="btn btn-warning update" id="${CategoriaID}" data-bs-toggle="modal"
            data-bs-target="#modalCategoria">Editar</button></td>
        </tr>
        `
    });
}

tableCate.addEventListener('click',(e)=>{
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('id');
        borrar(id);
    }else if (e.target.classList.contains('update')) {
        const id = e.target.getAttribute('id');
        getcategoria(id);
    }
})


const borrar = (id) => {
    const confir=confirm("Desea borrar este registro?");
    if (confir) {
        console.log("one");
        deletecategoria(id);
    }
}



const formInsert = document.querySelector('#insertForm');

formInsert.addEventListener('submit',(e) => {
    insert(e);
})

const insert= (e) => {
    e.preventDefault();
    const CategoriaNombre = document.querySelector('#name').value;
    const Descripcion = document.querySelector('#descripcion').value;
    const Imagen = document.querySelector('#imagen').value;
    const categoria = {
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    console.log(categoria);
    if (validation(categoria)) {
        alert("Todos los campos deben ser llenados");
    }else{
        return addCategories(categoria);
    }
}


const updateCategories= async(id)=>{
    const data = await categoria(id);
    const{CategoriaID,CategoriaNombre,Descripcion,Imagen}=data[0];
    console.log(data);
    console.log(CategoriaID);
    document.querySelector('#idUpdate').value = CategoriaID;
    document.querySelector('#nameUpdate').value = CategoriaNombre;
    document.querySelector('#descripcionUpdate').value = Descripcion;
    document.querySelector('#imageUpdate').value = Imagen;
}
const updateForm = document.querySelector('#updateForm');

updateForm.addEventListener('submit',(e) => {
    e.preventDefault();
    updateCa();
})


function updateCa(){
    const id = document.querySelector('#idUpdate').value;
    const CategoriaNombre =document.querySelector('#nameUpdate').value ;
    const Descripcion = document.querySelector('#descripcionUpdate').value;
    const Imagen = document.querySelector('#imagenUpdate').value;

    const categoria={
        CategoriaNombre,
        Descripcion,
        Imagen
    }
    console.log(categoria,id);
    if (validation(categoria)) {
        alert("Todos los campos deben ser rellenados");
    }else{
        return updateCa(categoria,id);
    }
}


function validation(obj){
    return !Object.values(obj).every(element=> element !== '');
}