//*var nombres = [];*/
function buscar(){
    let nom = document.getElementById("escribir").value;
    if(nom === 'Repository Name'){
      document.getElementById("container").style.display = "block"; 
      }else{
            alert('Digite el nombre del Repositorio');
          document.getElementById("container").style.display = "none";
      }
}

function LoadMore(){
   document.getElementById("mas").style.display = "block";
}
       