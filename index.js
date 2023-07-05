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