function saklar(action, lamp) {
    let lampu1 = document.getElementById("lampu1");
    let lampu2 = document.getElementById("lampu2");
    let lampu3 = document.getElementById("lampu3");
    if(action  == "on"){
        if(lamp == 1) {
            lampu1.src= "assets/images/on.jpg";  
        }
        if(lamp == 2) {
            lampu2.src= "assets/images/on.jpg";  
        }
        if(lamp == 3) {
            lampu3.src= "assets/images/on.jpg";  
        }

        //nyala

    }
    if(action == "off"){
        //mati
        if(lamp == 1) {
            lampu1.src= "assets/images/off.jpg";  
        }
        if(lamp == 2) {
            lampu2.src= "assets/images/off.jpg";  
        }
        if(lamp == 3) {
            lampu3.src= "assets/images/off.jpg";  
        }

    }
}