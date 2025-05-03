export default function loadPage(){

    const bitcoin = document.querySelector("#bitcoin");

    bitcoin.addEventListener("mouseenter", ()=>{
        document.body.style.backgroundColor = 'orange';
        document.body.style.color = "white";
    });

    bitcoin.addEventListener("mouseleave", ()=> {
        document.body.style.backgroundColor = "";
        bitcoin.style.backgroundColor = "";
        bitcoin.style.borderRadius = "";
        document.body.style.color = "";
    });

    const title = document.querySelector("#title");
    const text = document.querySelector("#text");
    const btn = document.querySelector(".input-btn");
    const taskContainer = document.querySelector("#tasks");
    const data = document.querySelector("#data");
    const hour = document.querySelector("#hora");
    const high = document.querySelector("#high");
    const mid = document.querySelector("#midd");
    const low = document.querySelector("#loww");

    class handleText{

        creatElements(){
            const titleText = title.value;
            const textText = text.value;
            const dataText = data.value; 
            const hourText = hour.value; 

            this.appendData = document.createElement("p");
            this.appendHour = document.createElement("p");
            this.div = document.createElement("div");
            this.h3 = document.createElement("h3");
            this.p = document.createElement("p");
            this.img = document.createElement("img");
            this.redDot = document.createElement("div");
            this.yellowDot = document.createElement("div");
            this.blueDot = document.createElement("div");

            this.img.src = "./img/bin.png";
            this.img.classList.add("bin");
            this.h3.textContent = titleText;
            this.p.textContent = textText;
            this.appendData.textContent = `Data: ${dataText}`; 
            this.appendHour.textContent = `Hora: ${hourText}`;

            this.redDot.classList.add('selectedDots');
            this.yellowDot.classList.add('selectedDots');
            this.blueDot.classList.add('selectedDots');
            this.redDot.id = "redDot";
            this.yellowDot.id = "yellowDot";
            this.blueDot.id = "blueDot";
            this.div.classList.add("task");
        }   

        btnClick(){
                btn.addEventListener("click", (e)=>{
                if (!this.checkValidity()) return;
                this.creatElements();
                let appendColors = "";

                if (high.checked){
                    appendColors = this.redDot;
                } else if (mid.checked){
                    appendColors = this.yellowDot;
                } else{
                    appendColors = this.blueDot;
                }


                this.div.appendChild(this.h3);
                this.div.appendChild(this.p);
                this.div.appendChild(this.appendData);
                this.div.appendChild(this.appendHour);
                this.div.appendChild(this.img);     
                console.log(typeof appendColors);
                this.div.appendChild(appendColors);      
                console.log(appendColors);
                                                                            

                taskContainer.appendChild(this.div);
                title.value = "";
                text.value = "";
                data.value = "";
                hour.value = "";

            });
        };

        checkValidity(){
            if (!title.checkValidity() || !text.checkValidity()){
                title.reportValidity();
                text.reportValidity();
                return false;
            }
            return true;
        }

        remove(){
            document.addEventListener("click", (e)=>{
                if (e.target.classList.contains("bin")){
                    const taskContainer = e.target.closest(".task");
                    if(taskContainer) taskContainer.remove();
                };
            });
        };
    }

    const handle = new handleText();
    handle.btnClick();
    handle.remove();

    class lateralBar{
        constructor(){
            this.handleLateralBar = document.querySelector(".open-lateral-bar");
            this.lateralBar = document.querySelector("#lateral-bar");
            this.open = false;
            this.openingBar();
        }

        openingBar(){
            this.handleLateralBar.addEventListener("click", ()=>{
                if (!this.open){
                    this.lateralBar.style.visibility = "visible";
                    this.handleLateralBar.style.gridColumn = "1";
                    this.handleLateralBar.className = "close-lateral-bar";
                    this.open = true;
                } else {
                    this.lateralBar.style.visibility = "hidden";
                    this.handleLateralBar.className = "open-lateral-bar";
                    this.open = false;
                }
            });
        }

    }

    document.addEventListener("DOMContentLoaded", () => {
        new lateralBar();
    });

    class colorTheme{
        change(){
            const btn = document.querySelector("#page-color");
            
            btn.addEventListener("click", ()=> {
                document.body.classList.toggle('dark');
            });
        }
    }

    const changeTheme = new colorTheme();
    changeTheme.change();

    class showFlowForm{
        creteFlowElements(){

            this.section = document.createElement("section");
            this.form = document.createElement("form");
            this.flowTitle = document.createElement("input");
            this.flowText = document.createElement("textarea");
            this.flowData = document.createElement("input");
            this.flowHour = document.createElement("input");
            this.importanceHigh = document.createElement("input");
            this.importanceMid = document.createElement("input");
            this.importanceLow = document.createElement("input");
            
            this.importanceAppendHigh = document.createElement("p");
            this.importanceAppendHigh.textContent = "Alta";
            this.importanceAppendMid = document.createElement("p");
            this.importanceAppendMid.textContent = "Média";
            this.importanceAppendLow = document.createElement("p");
            this.importanceAppendLow.textContent = "Baixa";
            this.importanceDiv = document.createElement("div");
           
            this.btn = document.createElement("button");
            this.close = document.createElement("p");
            this.close.textContent = "X";

            /*const flowBtn = btn;*/

            this.section.id = "section";
            this.form.id = "flowForm";
            this.flowTitle.id = "flowTitle";
            this.flowText.id = "flowText";
            this.flowData.id = "flowData";
            this.flowHour.id = "flowHour";
            /*this.importanceHigh.id = "importance";
            this.importanceMid.id = "importance";
            this.importanceLow.id = "importance";*/
            this.importanceDiv.id = "importanceDiv";
            this.importanceAppendHigh.classList.add("importanceText");
            this.importanceAppendMid.classList.add("importanceText");
            this.importanceAppendLow.classList.add("importanceText"); 
            this.btn.id = "flowBtn"; 
            this.close.id = "close";

            this.flowTitle.type = "text";
            this.flowData.type = "date";
            this.flowHour.type = "time";
            this.importanceHigh.type = "checkbox";
            this.importanceMid.type = "checkbox";
            this.importanceLow.type = "checkbox";
            this.importanceDiv.append(
            this.importanceAppendHigh,
            this.importanceHigh, 
            this.importanceAppendMid,
            this.importanceMid, 
            this.importanceAppendLow,
            this.importanceLow,);

            this.btn.textContent = "Adicionar"

            this.section.append(this.close,
                this.flowTitle,
                this.flowText, 
                this.flowData, 
                this.flowHour, 
                this.importanceDiv, 
                this.btn,
                );
        }

        showForm(){
            const addTask = document.querySelector("#addTask");
            const container = document.querySelector("#container");

            addTask.addEventListener("click", ()=> {
                container.append(this.section,
                );
            });
        };

        elementsFlowToDo(){
            const titleText = this.flowTitle.value;
            const textText = this.flowText.value;
            const dataText = this.flowData.value; 
            const hourText = this.flowHour.value; 

            this.appendData = document.createElement("p");
            this.appendHour = document.createElement("p");
            this.div = document.createElement("div");
            this.h3 = document.createElement("h3");
            this.p = document.createElement("p");
            this.img = document.createElement("img");
            this.redDot = document.createElement("div");
            this.yellowDot = document.createElement("div");
            this.blueDot = document.createElement("div");

            this.img.src = "./img/bin.png";
            this.img.classList.add("bin");
            this.h3.textContent = titleText;
            this.p.textContent = textText;
            this.appendData.textContent = `Data: ${dataText}`; 
            this.appendHour.textContent = `Hora: ${hourText}`;

            this.redDot.classList.add('dots');
            this.yellowDot.classList.add('dots');
            this.blueDot.classList.add('dots');
            this.redDot.id = "redDotFlow";
            this.yellowDot.id = "yellowDotFlow";
            this.blueDot.id = "blueDotFlow";
            this.div.classList.add("task");
        }

        appendFlowToDo(){
            this.btn.addEventListener("click", ()=> {
                if(!this.checkFlowValidity()) return;
                this.elementsFlowToDo();

                let appendColors = "";

                if (this.importanceHigh.checked){
                    appendColors = this.redDot;
                } else if (this.importanceMid.checked){
                    appendColors = this.yellowDot;
                } else{
                    appendColors = this.blueDot;
                }

                this.div.appendChild(this.h3);
                this.div.appendChild(this.p);
                this.div.appendChild(this.appendData);
                this.div.appendChild(this.appendHour);
                this.div.appendChild(this.img);
                this.div.appendChild(appendColors);

                taskContainer.appendChild(this.div);


            });
        };

        checkFlowValidity(){
            if (!this.flowTitle.checkValidity() || !this.flowText.checkValidity()){
                this.flowTitle.reportValidity();
                this.flowText.reportValidity();
                return false;
            }
            return true;
        };

        removeSection(){
            this.close.addEventListener("click", ()=>{
                this.close.parentElement.remove(this.section);
            });
        };
    };

    const flowing = new showFlowForm();
    flowing.creteFlowElements();
    flowing.showForm();
    flowing.appendFlowToDo();
    flowing.removeSection();

    class remove{
        removeBin(){
            document.addEventListener("click", (e)=>{
                if (e.target.classList.contains("bin")){
                    const taskContainer = e.target.closest(".task");
                    if(taskContainer) taskContainer.remove();
                };
            });
        };
    };

    const removeTasks = new remove();
    removeTasks.removeBin();

    class filterPriority{
        selectPriority(){
            
             /*high priority*/
        document.addEventListener("click", (e)=>{
            if (e.target.id === "hig"){
                const tasks = document.querySelectorAll(".task");
                tasks.forEach(task => {
                    const redDot = task.querySelector("#redDot") || task.querySelector("#redDotFlow");
                    if (redDot) {
                        task.style.display = "grid";
                    } else {
                        task.style.display = "none";
                    }
                });
            };
        });

        /*mid priority*/
        document.addEventListener("click", (e)=>{
            if (e.target.id === "mid"){
                const tasks = document.querySelectorAll(".task");
                tasks.forEach(task => {
                    const yellowDot = task.querySelector("#yellowDot") || task.querySelector("#yellowDotFlow");
                    if (yellowDot) {
                        task.style.display = "grid";
                    } else {
                        task.style.display = "none";
                    }
                });
            };
        });

        /*low priority*/
        document.addEventListener("click", (e)=>{
            if (e.target.id === "low"){
                const tasks = document.querySelectorAll(".task");
                tasks.forEach(task => {
                    const blueDot = task.querySelector("#blueDot") || task.querySelector("#blueDotFlow");
                    if (blueDot) {
                        task.style.display = "grid";
                    } else {
                        task.style.display = "none";
                    }
                });
            };
        });

            document.addEventListener("click", (e)=>{
                if (e.target.id === "showAll"){
                    const allDots = document.querySelectorAll(".task");
                    const bin = document.querySelector(".bin");
                    allDots.forEach(task =>{
                        if (task){
                            task.style.display = "grid";
                            bin.style.alignSelf = "flex-end";
                        } else {
                            alert("error - dont use");
                        };
                    });
                }
            });
        };
    };

    const filter = new filterPriority();
    filter.selectPriority();

    class searchMyTasks{
        constructor(){
            this.input = document.querySelector("#inputSearchField");
            this.searchEventListener();
        }

        searchEventListener(){
            this.input.addEventListener("input", ()=> this.filterTask());
        }

        filterTask(){
            const getInput = this.input.value.toLowerCase();
            const tasks = document.querySelectorAll(".task");

            tasks.forEach(task =>{
                const title = task.querySelector('h3').textContent.toLocaleLowerCase();
                const text = task.querySelector('p').textContent.toLocaleLowerCase();

                const containsWord = title.includes(getInput) || text.includes(getInput);

                 task.style.display = containsWord ? 'grid' : 'none'; 
            });
        };
    };

    const showSearchTask = new searchMyTasks();
}
