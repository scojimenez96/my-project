

function buscar(){
    let nom = document.getElementById("escribir").value;
    
    let nombreori = nom.split(' ').join('');
 //   alert(nombreori);
    fetch("https://api.github.com/users/"+nombreori)
    .then(XPathResult => XPathResult.json())
    .then(data => {console.log(data)
    let username = `${data.name}`;
    let userlogin = `${data.login}`;
         
    console.log(username);
    console.log(userlogin);
    
                   
    if(nom === userlogin){
      document.getElementById("container").style.display = "block";
      let cambio = document.getElementsByTagName("h3");
        console.log(cambio);
        cambio.innerHTML = username;
        console.log(cambio);
      }else{
            alert('Digite el nombre del Repositorio');
          document.getElementById("container").style.display = "none";
      }
    
 });

}

function LoadMore(){
   document.getElementById("mas").style.display = "block";
}
       