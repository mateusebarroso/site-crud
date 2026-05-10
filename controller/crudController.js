class CrudController{

    constructor(){
        this._date = new Date();
        this._hora = document.querySelector("#hora");
        this._minutos = document.querySelector("#minutos")
        this._segundos = document.querySelector("#segundos")
        this._inputEl = document.querySelector("#inputEl");
        this._btnEl = document.querySelector(".buttonEl");
        this._content = document.querySelector(".content");
        this._iconMenu = document.querySelector(".icon-menu");
        this._navContent =  document.querySelector(".nav-list");
        this.create();
        this.enter();
        this.initialize();
        this._listaEl = []
        
        this._palavras = ["Desenvolvedor Web", "Mateus", "DEV"];
         this._texto = document.getElementById("texto");
        this._palavraIndex = 0;
        this._letraIndex = 0;
        this._apagando = false;
         this.escrever()
       // this.start = this.start.bind(this)
        this.start()
    }
    start(){
        let btn = document.querySelector(".btnInit");
        let div = document.querySelector(".teste-div")
        btn.addEventListener('click', ()=>{
           
            div.classList.toggle("show")
              console.log(div)
                 this.relogio()
              this.setDateTime()
             
            
           
            
            
        })
     
    }
    relogio(){
        setInterval(()=>{
            this.setDateTime()
        }, 1000)
    }

    setDateTime(){
        let agora = new Date()
        this._hora.innerHTML = `${agora.getHours()}:`
        this._minutos.innerHTML = `${agora.getMinutes()}:`
        this._segundos.innerHTML = agora.getSeconds()
    } 
  
 escrever() {

    const palavraAtual = this._palavras[this._palavraIndex];

    if(this._apagando){
        this._texto.textContent = palavraAtual.substring(0, this._letraIndex--);
    }else{
        this._texto.textContent = palavraAtual.substring(0, this._letraIndex++);
    }

    let velocidade = this._apagando ? 100 : 150;

    if(!this._apagando && this._letraIndex === palavraAtual.length + 1){
      let   velocidade = 1000;
         this._apagando = true;
    }
  
    if(this._apagando && this._letraIndex === 0){
       this._apagando = false;
        this._palavraIndex = (this._palavraIndex + 1) % this._palavras.length;
    }

    setTimeout(()=> this.escrever(), velocidade);
}



    initialize(){
        this._iconMenu.addEventListener("click", e=>{
       
         this._navContent.classList.toggle('active')

            console.log(this._navContent)
     
         /* if(navContent) {
           navContent.style.justifyContent = 'flex-end';
           navContent.style.left = '10%'
           navContent.style.trasition = '400ms';
        
          } else{
             console.log(navContent)
          }*/


         // navContent.classList.toggle('show')
          
        })
    }

    create(){
        this._btnEl.addEventListener('click', e=>{
          
            
       


                   
                if(this._inputEl.value == ''){
                    alert('Por favor preencher esse campo!...')
                }  
                     if(this._listaEl.length >= 6){
                              window.alert('Você só  pode adicionar 6 tarefas');
                              return;
                            }

                        let liEl = document.createElement('li');
                        let span = document.createElement('span');
                   
                        
                        liEl.textContent = this._inputEl.value;
                        span.classList.add('lixeira')

                           liEl.appendChild(span)
                        
                        span.addEventListener('click', ()=>{
                           
                          liEl.remove()
                          let index = this._listaEl.indexOf(liEl);
                          if(index > -1){
                            this._listaEl.splice(index, 1)
                          }
                           window.alert('Apagando Tarefa...')
                           console.log(this._listaEl)
                          
                        })
                           //this._content.appendChild(liEl);
                         
                             this._content.appendChild(liEl);
                             this._listaEl.push(liEl);
                           
                            console.log(this._listaEl)
                    this._inputEl.value = ""

               



           
        });

       
    }

    enter(){
         this._inputEl.addEventListener('keyup', e=>{
            switch(e.key){
                case 'Enter':
                     

         
                    let liEl = document.createElement('li');
                     let span = document.createElement('span')
                if(this._inputEl == ''){
                    alert('Por favor preencher esse campo!...')
                }else{
                        liEl.textContent = this._inputEl.value;
                     span.classList.add('lixeira')

                           liEl.appendChild(span)
                       
                        span.addEventListener('click', ()=>{
                            console.log('oi')
                           liEl.remove()
                            console.log(liEl)
                        })
                        this._content.appendChild(liEl);
                    this._inputEl.value = ""

                }

                    break;
            }
        })
    }



}