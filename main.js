

function buscar(){
    let nom = document.getElementById("escribir").value;
    if(nom === 'Repository Name'){
      document.getElementById("container").style.display = "block"; 
      }else{
            alert('Digite el nombre del Repositorio');
          document.getElementById("container").style.display = "none";
      }
    let nombreori = nom.split(' ').join('');
    console.log(nombreori);
    alert(nombreori);
    fetch("https://api.github.com/users/"+nombreori)
    .then(XPathResult => XPathResult.json())
    .then(data => console.log(data));
}

function LoadMore(){
   document.getElementById("mas").style.display = "block";
}
       