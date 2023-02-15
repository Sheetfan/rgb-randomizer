{

    let ran = (min,max) => { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let pad = (num, size) => {
        let s = "000000000" + num;
        return s.substring(s.length-size);
    }
    setInterval(() =>{
        let back = document.getElementsByTagName("body")[0];
        let num = document.getElementById("number");

        let red = pad(ran(0,255).toString(16),2);
        let blue = pad(ran(0,255).toString(16),2);
        let green = pad(ran(0,255).toString(16),2);

        let message = "#"+ red + blue + green;
        back.style.background = message;
        num.innerHTML = "Hex: " + message;
    },1000);
    
}