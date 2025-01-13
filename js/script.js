  const sfondoElm = document.getElementById("Sfondo-ecchi")
  function checkAge() {
    let isValid = false; 

    while (!isValid) {
        const age = prompt("Quanti anni hai?");
        
        
        if (age === null || age === "" || isNaN(age)) {
            alert("Per favore, inserisci un'età valida.");} 

        else if (age >= 16) {
            
            document.getElementById("content").style.display = "block";
            document.getElementById("Ecchi-1").style.display = "flex";
            document.getElementById("Ecchi-2").style.display = "flex";
            document.getElementById("denied").style.display = "none";
            isValid = true; 
        } else {
            document.getElementById("denied").style.display = "block";
            alert("Sei troppo piccolo XD");
            
            
            
            isValid = false; 
        }
    }
}


checkAge();