const url = "http://localhost:4002/api/categorias/";

export const getcategorias = async ()=>{
    try {
        const data = await fetch(`${url}`);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
    
}

export const  addCategories = async ()=>{
    try {
        const data = await fetch(`${url}/${id}`);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}


export const getcategoria = async (addCategories)=>{
    try {
        await fetch(url,{
            method:'POST',
            body: JSON.stringify(addCategories),
            headers: {
                'Content-Type': 'application/json'
                }
        })
        window.location.href = "producto.html";
    } catch (error) {
        console.log(error);
    }
    
}

export const  updateCategories = async (id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            }
        })
        window.location.href = "producto.html";
    } catch (error) {
        console.log(error);
    }
}

export const deletecategoria = async (categoriasUp,id)=>{
    try {
        await fetch(`${url}/${id}`,{
            method:'DELETE',
            body: JSON.stringify(categoriasUp),
            headers:{
                'Content-type':'application/json'
            }
        })
        window.location.href = "producto.html";
    } catch (error) {
        console.log(error);
    }
    
}

