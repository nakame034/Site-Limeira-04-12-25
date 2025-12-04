export default function darkMode(){

    const toggle = document.getElementById("toggle")


        //recuperar o modo que esta armazanado no navegador
        const modoArmazenamento = localStorage.getItem("modo")


        if(modoArmazenamento == "dark"){
            document.body.classList.add("dark-mode")
            //marca o interruptor como ativado
            toggle.checked = true
        }


    toggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode")
        
        //Definir o estado da pagina a ser salvo
        const modoSelecionado = toggle.checked ? "dark" : "light"

        //gravar o estado da pagina no localstorage
        //usando o modo ternário (IF moderno)
        localStorage.setItem("modo", modoSelecionado)

        //let modoSelecionado
        // if (toggle.checked){
        //modoSelecionado = "dark"
        // }else{
        //modoSelecionado = "light"
        // }

        //Gravar o estado da pagina no localStorage:
        localStorage.removeItem("modo")
        localStorage.setItem("modo", modoSelecionado)
    })

}