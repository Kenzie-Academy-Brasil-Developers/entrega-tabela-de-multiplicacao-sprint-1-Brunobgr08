const ctnTabela = document.getElementById('containerTbl');

function createTable(n) { 
    if (n !== null && n !== undefined && n > 0 && n <=20){

        let tbl = [];
    
                    for (let i = 0; i <= n; i++) {
                        tbl[i] = [];
                        for (let u = 0; u <= n; u++){
                            tbl[i][u] = i * u;
                        }
                    }
    
        console.log(tbl);            
        console.table(tbl);
        printTable(tbl);
    }else{
        limpTable();
    }
}

function limpTable(){
    ctnTabela.innerText = '';
}

function printTable(tabela){   
    limpTable(); 
    const tbl = document.createElement('table');
    tbl.classList.add('tblStyle');
    
    for (let i = 0; i < tabela.length; i++){

        const line = document.createElement('tr');
       // line.classList.add('styleTr');
        const topHeader = document.createElement('tr');
       // topHeader.classList.add('styleTr');
        if (i === 0){
            const cellHeader = document.createElement('th');
            cellHeader.classList.add('styleThIdx');
            cellHeader.innerText = 'Índice';
            topHeader.appendChild(cellHeader); 
            tbl.appendChild(topHeader);
        } 

        for (let j = 0; j < tabela[i].length; j++){
    
            const cellHeader = document.createElement('th');
            cellHeader.classList.add('styleTh');
            cellHeader.innerText = j;
            topHeader.appendChild(cellHeader); 

            if (j === 0){
                const lineHeader = document.createElement('th');
                lineHeader.classList.add('styleTh');
                lineHeader.innerText = i;
                line.appendChild(lineHeader);   
            }

            const cell = document.createElement('td');
            cell.classList.add('styleTd');
            cell.innerText = tabela[i][j];
            line.appendChild(cell);
        }
        tbl.appendChild(line);
    }
    ctnTabela.appendChild(tbl);
}

const form = document.getElementById('formulario');
const numberTbl = document.getElementById('number');

form.addEventListener('submit', function(e){
    let num = Number(numberTbl.value);
    createTable(num);
    e.preventDefault();
});
