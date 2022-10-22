class PersonAccount {
    constructor(fname, lname,income=[TotalIncome,IncomeLeft],expenses=[TotalExpenses,WeeklyExpenses,MonthlyExpenses])
    
    {
        this.fname = fname;
        this.lname=lname;
        this.income = income;
        this.expenses=expenses;
    }

    addIncome(){
     return 'income after 1 year will be' + ' ' + (this.income[0] + 25000 );
    }

    addExpense(){
        return 'Monthly Expenses will be increased by ' + 26600 ;
       }

       AccountBalance() {
        return 'Total balance in accuont after every month will be ' + (this.income[0] - this.expenses[2])
       }


}

const Person1  = new PersonAccount("Hamza" , "Arshad" , [250000, 1000], [170000,36795,200445])
console.log(Person1)
console.log(Person1.addIncome())
console.log(Person1.addExpense())
console.log(Person1.AccountBalance())
