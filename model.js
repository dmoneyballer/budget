class ExpenseTracker {
  constructor(rows, columns) {
    this.rows=rows;
    this.columns=columns;
    if (rows.length > columns.length) {
      for (var i = columns.length+1; i < rows.length+1; i++) {
        this.columns.push(0)
      }
    } else if (columns.length > rows.length) {
      // get rid of columns added that don't have a category
      this.columns = columns.slice(0,rows.length)
    }

  }
  updateRow(index, val) {
    this.columns[index] += Number(val)
  }
  dropRow(index){
    if (index <= this.rows.length) {
      // thanks stack overflow popping didn't work as expected but splicing does.
      this.rows.splice(index,1)
      this.columns.splice(index,1)
    }
  }
  addRow(name, amount){
    this.rows.push(name)
    this.columns.push(Number(amount))
  }
}
// test = new ExpenseTracker(['tech', 'food'],[1500, 300])
var localRequest = new XMLHttpRequest();
localRequest.open('GET', "http:localhost:5000");
localRequest.onreadystatechange = function() {
   if (localRequest.readyState == 4 && localRequest.status == 200) {
     res = JSON.parse(localRequest.responseText)
     console.log(res);
     console.log('yo yo yyo',localRequest.responseText, res.columns);
     test = new ExpenseTracker(res.rows,res.columns)
     // updateTable()
   } else {
     console.log('bad request', localRequest);
   }
 };
 localRequest.send(null)
// test = fetch("http:localhost:5000").then(res =>{
  // console.log(res.json())
// })

// console.log(test);
console.log(new ExpenseTracker(['tech', 'food', 'baby', 'dog', 'cat', 'maid'],[1500, 300]));
console.log(new ExpenseTracker(['tech', 'food'],[1500, 300, 1500000,5,5,64,654,654,546]));
