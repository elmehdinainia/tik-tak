if (localStorage.getItem("jr1") && localStorage.getItem("jr2") != null ){
    jr1.value = localStorage.getItem("jr1")
    jr2.value = localStorage.getItem("jr2")
    
    }
    
    button.onclick = ()=>{
        localStorage.setItem("jr1",jr1.value)
        localStorage.setItem("jr2",jr2.value)
        
    }
    window.addEventListener("load", ()=>{
        localStorage.clear()
    })

    // 

