// Initialize alarm sound
var bufferm = 'Buscando dados';
var buffert = 'Buscando dados';
var bufferc = 'Buscando dados';
var bufferr = 'Buscando dados';
const editd = document.getElementById("editd");
const editm = document.getElementById("editm");
const editt = document.getElementById("editt");
const editc = document.getElementById("editc");
const finaliza = document.getElementById("finaliza");
const editbtn = document.getElementById("editbtn");
var chaves = {reaper:'off',minato:'off',chaveiro:'off',chaveirot:'off'}
const minatoaudio = document.getElementById("minato_audio");
const reaperaudio = document.getElementById("reaper_audio");
const chaveiroaudio = document.getElementById("chaveiro_audio");
const checkminato = document.getElementById("checkm");
const checkdreaper = document.getElementById("checkd");
const timem = document.getElementById("timem");
const timed = document.getElementById("timed");
const timec = document.getElementById("timec");
const checkc = document.getElementById("checkc");
const timet = document.getElementById("timet");
const checkt = document.getElementById("checkt");
const chaveirotaudio = document.getElementById("chaveirot_audio");

const myWorker = new Worker("./worker.js");
reaperaudio.src = "https://www.myinstants.com/media/sounds/ussr1.mp3";
reaperaudio.load();

minatoaudio.src = "https://www.myinstants.com/media/sounds/money-button.mp3";
minatoaudio.load();

chaveiroaudio.src = "https://www.myinstants.com/media/sounds/tuturu-okarin.mp3"
chaveiroaudio.load();

chaveirotaudio.src = "https://www.myinstants.com/media/sounds/the-ramones-blitzkrieg-bop2.mp3"
chaveirotaudio.load();


myWorker.onmessage = (e) => {
    e = e.data
    if(e.Run == "DReaper"){
        document.getElementById("DReaper").innerHTML = bufferr
        //reaperaudio.load();
        //console.log(e.msg);
        if(bufferr == "0m 0s" && (chaves.reaper == 'on')){
            reaperaudio.load();
            reaperaudio.play();
        }
    }
    if(e.Run == "Minato"){
        document.getElementById("Minato").innerHTML = bufferm
        //console.log(e.msg);
        //minatoaudio.load();
        if(bufferm == "0h 0m 0s" && (chaves.minato == 'on')){
            minatoaudio.load();
            minatoaudio.play();
        }
    }
    if(e.Run == "Chaveiro"){
        document.getElementById("Chaveiro").innerHTML = bufferc
        //chaveiroaudio.load();
        //console.log(e.msg);
        if(bufferc == "0m 0s" && (chaves.chaveiro == 'on')){
            chaveiroaudio.load();
            chaveiroaudio.play();
        }
    }
    if(e.Run == "ChaveiroTopo"){
        document.getElementById("Chaveirot").innerHTML = buffert
        //console.log(e.msg);
        
        if((buffert == "0m 0s") && (chaves.chaveirot == 'on')){
            chaveirotaudio.load();
            chaveirotaudio.play();
        }
    }
    if(e.Run == 'pong'){
        socket.emit('pong','nada');
    }

  };

editm.onclick = () => {
        document.getElementById("dtimem").style.display = 'none'
        document.getElementById("countm").style.display = ''
        socket.emit('checkm',{hora:timem.value.split("h")});
}

editd.onclick = () => {
        document.getElementById("dtimed").style.display = 'none'
        document.getElementById("countd").style.display = ''
        socket.emit('checkr',{hora:timed.value.split("m").join("")});
}


editc.onclick = () => {
    document.getElementById("dtimec").style.display = 'none'
    document.getElementById("countc").style.display = ''

    socket.emit('checkc',{hora:timec.value.split("m").join("")});

}

editt.onclick = () => {
    document.getElementById("dtimet").style.display = 'none'
    document.getElementById("countt").style.display = ''

    socket.emit('checkt',{hora:timet.value.split("m").join("")});
}

checkt.onclick = () => {
    if(chaves.chaveirot == 'off'){
        chaves.chaveirot = 'on'
        checkt.className = 'btn btn-success'
        checkt.innerText = 'Ativo'
    }
    else {
        chaves.chaveirot = 'off'
        checkt.className = 'btn btn-danger'
        checkt.innerText = 'Desativado'    
    }
    
}

checkminato.onclick = () => {
    if(chaves.minato == 'off'){
        chaves.minato = 'on'
        checkminato.className = 'btn btn-success'
        checkminato.innerText = 'Ativo'
    }
    else {
        chaves.minato = 'off'
        checkminato.className = 'btn btn-danger'
        checkminato.innerText = 'Desativado'    
    }
    
}

checkc.onclick = () => {
    if(chaves.chaveiro == 'off'){
        chaves.chaveiro = 'on'
        checkc.className = 'btn btn-success'
        checkc.innerText = 'Ativo'
    }
    else {
        chaves.chaveiro = 'off'
        checkc.className = 'btn btn-danger'
        checkc.innerText = 'Desativado'    
    }
    
}

checkdreaper.onclick = () => {
    if(chaves.reaper == 'off'){
        chaves.reaper = 'on'
        checkdreaper.className = 'btn btn-success'
        checkdreaper.innerText = 'Ativo'
    }
    else {
        chaves.reaper = 'off'
        checkdreaper.className = 'btn btn-danger'
        checkdreaper.innerText = 'Desativado'    
    }
    
}


socket.on('chaveirot',function(data){
    buffert = data.msg
})

socket.on('minato',function(data){
    bufferm = data.msg
})


socket.on('dreaper',function(data){
    bufferr = data.msg
})

socket.on('chaveiro',function(data){
    bufferc = data.msg
})

editbtn.onclick = () => {
    editc.style.display = ''
    editm.style.display = ''
    editd.style.display = ''
    editt.style.display = ''
    checkdreaper.style.display = 'none'
    checkminato.style.display = 'none'
    checkc.style.display = 'none'
    checkt.style.display = 'none'
    document.getElementById("dtimet").style.display = ''
    document.getElementById("countt").style.display = 'none'
    document.getElementById("dtimec").style.display = ''
    document.getElementById("countc").style.display = 'none'
    document.getElementById("dtimed").style.display = ''
    document.getElementById("countd").style.display = 'none'
    document.getElementById("dtimem").style.display = ''
    document.getElementById("countm").style.display = 'none'
    editbtn.style.display = 'none'
    finaliza.style.display = ''
}

finaliza.onclick = () => {
    editc.style.display = 'none'
    editm.style.display = 'none'
    editd.style.display = 'none'
    editt.style.display = 'none'
    checkdreaper.style.display = ''
    checkminato.style.display = ''
    checkc.style.display = ''
    checkt.style.display = ''
    document.getElementById("dtimet").style.display = 'none'
    document.getElementById("countt").style.display = ''
    document.getElementById("dtimec").style.display = 'none'
    document.getElementById("countc").style.display = ''
    document.getElementById("dtimed").style.display = 'none'
    document.getElementById("countd").style.display = ''
    document.getElementById("dtimem").style.display = 'none'
    document.getElementById("countm").style.display = ''
    editbtn.style.display = ''
    finaliza.style.display = 'none'
}

myWorker.postMessage({Run:"Minato",Tempo:timem.value.split("h")});
myWorker.postMessage({Run:"ChaveiroTopo",Tempo:timet.value.split("m").join("")});
myWorker.postMessage({Run:"DReaper",Tempo:timed.value.split("m").join("")});
myWorker.postMessage({Run:"Chaveiro",Tempo:timec.value.split("m").join("")});
myWorker.postMessage({Run:"ping",Tempo:""});