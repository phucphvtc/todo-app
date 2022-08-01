var app = new Vue({
    el: '#todo',
    data: {
        idInput: null,
        titleInp: null,
        desInp: null,
        statusInp: "doing",
        btnAdd: true,
        todoapp: [
            {
                id: 1,
                title: "đây là title",
                description: "Đây là des",
                status: 'todo',
                editItem: true,
                saveItem: false
            }
        ],
       
    },
    methods: {
        additem() {  

            if (this.desInp !== "" && this.titleInp!=="" ) {
                const hasDublicateId = this.todoapp.filter(item => item.id == this.idInput).length > 0
                //const maxVolumn = this.todoapp.filter(item =>item.id == this.idInput).max
                // debugger
                if(hasDublicateId) {
                    alert("ID trùng, nhập lại")
                    return
                }
                this.todoapp.push({
                    id: this.idInput,
                    title: this.titleInp,
                    description: this.desInp,
                    status: this.statusInp,
                    editItem: true,
                    saveItem: false
                })
               this.reset();
            }
            
        },
        deleteItem(index) {
            this.todoapp.splice(index, 1);
        },  
        edit(index) {
          
            if ( this.todoapp.index = index+1){
                this.idInput = this.todoapp[index].id;
                this.titleInp = this.todoapp[index].title;
                this.desInp = this.todoapp[index].description;
                this.statusInp = this.todoapp[index].status;

                this.todoapp[index].editItem = false;
                this.todoapp[index].saveItem = true;
                this.btnAdd= false
            }
            console.log(this.todoapp[index].id)
        }
        ,
        save(index){
            if(this.idInput = this.todoapp[index].id){
                this.todoapp[index].id = this.idInput;
                this.todoapp[index].title =this.titleInp ;
                this.todoapp[index].description =this.desInp;
                //this.todoapp[index].statusInp= this.statusInp;
                this.todoapp[index].editItem = true
                this.todoapp[index].saveItem = false
                this.btnAdd = true;
            }
            this.reset();
        },
        reset(){
            this.idInput = "";
            this.titleInp = "";
            this.desInp = "";
        }
    },
    computed:{}
})

















