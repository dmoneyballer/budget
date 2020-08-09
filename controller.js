window.onload = function() {
  setTimeout(
    function updateTable() {
      console.log('updateing table', test);
      let table = document.getElementById('table')
      table.innerHTML ='<tr><th>Expenses</th><th>Description</th></tr>'
      for (var i = 0; i < test.rows.length; i++) {
        let row = document.createElement('tr');
        let desc = document.createElement('td');
        desc.innerText = test.rows[i]
        console.log('des',desc);
        row.appendChild(desc)
        for (var j = 0; j < 3; j++) {
          if (j == 0) {
              let col = document.createElement('td');
              col.setAttribute('id', `expense${i}`)
              col.innerText = test.columns[i]
              row.appendChild(col)
          } else if (j == 1) {
            let col = document.createElement('td');
            let input = document.createElement('input');
            input.setAttribute('placeholder', 'moneyspent');
            input.setAttribute('id', `input${i}`)
            col.appendChild(input);
            let butt = document.createElement('button');
            butt.setAttribute('id', `add${i}`);
            butt.setAttribute('class', 'addExpense')
            butt.innerText = 'add expense'
            butt.addEventListener('click', event => {
              target = event.target.id.slice(3)
              id = `input${target}`
              val = ''
              val = document.getElementById(id).value
            test.updateRow(target, val)
            let total = document.getElementById(`expense${target}`);
            total.innerText = String(test.columns[target])
        })
            col.appendChild(butt)
            row.appendChild(col)
          }
          else {
            let col = document.createElement('td');
            col.innerHTML = `<button class="delete" id=delete${i} type="button" name="delete">delete</button>`;
            col.addEventListener('click', event => {
              target = event.target.id.slice(6)
              console.log('targer',Number(target));
              test.dropRow(target)
              console.log(test);
              updateTable()
        })
            row.appendChild(col)
          }
        }
        table.appendChild(row)
        console.log('row',test.rows[i]);

      }
    }, 335
  )
  let clear = document.getElementById('clear')
  clear.addEventListener('click', event => {
    localStorage.clear()
  })
  // TODO: listen for clicks on delete and add buttons
  let newCat = document.getElementById('addNewCategory')
  newCat.addEventListener('click', event => {
    let cat = document.getElementById('newCategory').value
    let spent = Number(document.getElementById('total').value)
    test.addRow(cat, spent)
    updateTable()
  })
  // updateTable()
  setTimeout(updateTable(), 340);

};
// for some reason I need to define this again probably not the best solution but a solution if I want the timeout to wait for the flask repsonse and the tabel to be updateable after I define a funcion in a timeout. I think it has to do with block scope or something like that.
function updateTable() {
  console.log('updateing table', test);
  let table = document.getElementById('table')
  table.innerHTML ='<tr><th>Expenses</th><th>Description</th></tr>'
  for (var i = 0; i < test.rows.length; i++) {
    let row = document.createElement('tr');
    let desc = document.createElement('td');
    desc.innerText = test.rows[i]
    console.log('des',desc);
    row.appendChild(desc)
    for (var j = 0; j < 3; j++) {
      if (j == 0) {
          let col = document.createElement('td');
          col.setAttribute('id', `expense${i}`)
          col.innerText = test.columns[i]
          row.appendChild(col)
      } else if (j == 1) {
        let col = document.createElement('td');
        let input = document.createElement('input');
        input.setAttribute('placeholder', 'moneyspent');
        input.setAttribute('id', `input${i}`)
        // input.innerText = 'addExpense'
        col.appendChild(input);
        // console.log('col',col,input);
        let butt = document.createElement('button');
        butt.setAttribute('id', `add${i}`);
        butt.setAttribute('class', 'addExpense')
        butt.innerText = 'add expense'

        butt.addEventListener('click', event => {
          target = event.target.id.slice(3)
          id = `input${target}`
          val = ''
          val = document.getElementById(id).value
        test.updateRow(target, val)
        //could make function to update display num but will implement here
        let total = document.getElementById(`expense${target}`);
        // console.log(test.columns);
        total.innerText = String(test.columns[target])
        // console.log(test);
      // console.log(event);
    })
        col.appendChild(butt)
        // col.innerHTML =`<button id=add${i} class="addExpense" type="button" name="add">add expense</button>`;

        row.appendChild(col)
      }
      else {
        let col = document.createElement('td');
        col.innerHTML = `<button class="delete" id=delete${i} type="button" name="delete">delete</button>`;
        col.addEventListener('click', event => {
          target = event.target.id.slice(6)
          console.log('targer',Number(target));
          test.dropRow(target)
          console.log(test);
          updateTable()
          // let t = document.getElementById('table')
          // console.log(t.childNodes);
          // t.removeChild(t.childNodes[Number(target)+1]);
          // am aware of bug that this only works on removing from last to first, need to fix this...
    })
        row.appendChild(col)
      }
    }
    table.appendChild(row)
    console.log('row',test.rows[i]);

  }
}
