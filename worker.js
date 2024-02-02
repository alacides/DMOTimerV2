onmessage = (e) => {
    console.log(e)
    e = e.data;
    if(e.Run == "DReaper"){
    setInterval(function() {

        postMessage({Run:"DReaper",msg:"s"});
      //document.getElementById("DReaper").innerHTML = minutes + "m " + seconds + "s ";
    }, 1000);
    } 
    if(e.Run == "Minato"){
        setInterval(function() {          
          // Output the result in an element with id="demo"
          postMessage({Run:"Minato",msg:""});
        }, 1000);
}
if(e.Run == "Chaveiro"){

setInterval(function() {

    postMessage({Run:"Chaveiro",msg:''});
  //document.getElementById("DReaper").innerHTML = minutes + "m " + seconds + "s ";
}, 1000);
}

if(e.Run == "ChaveiroTopo"){
setInterval(function() {
    postMessage({Run:"ChaveiroTopo",msg: "s"});
}, 1000);
}
if(e.Run == 'ping'){
    setInterval(function() {

        postMessage({Run:"pong",msg:"s"});
      //document.getElementById("DReaper").innerHTML = minutes + "m " + seconds + "s ";
    }, 5000);
}


}
