## Part 1 Answers

### var declaration
1) **Line 9** will print `values added: 20`. This is because the print statement takes the `result` variable with no conflicts. Additionally, it is printed in this specific way because we take `values added: ` which is a string, followed by the `result` which is an integer (in this case, `result` is equal to `20` because of the given filled-in parameters i.e. `sumValues(10, 10, true)`). 
2) **Line 13** will print `final result: 20`. This is the same as question 1 above, however this time instead of having the print statement be `values added: ` we have `final result: `, followed by the value of the `result var`, which is `20`.

### let declaration
3) **Line 9** will print `values added: 20`. This is because **Line 9** is in the same block of code as where the variable `let result` was declared and initialized.
4) **Line 13** will return an `Uncaught ReferenceError: result is not defined`. This is because the `let result` variable is not in the same block as **Line 13**. Since this line is not within the same scope as `result`, it marks it as non-existant, and thus returns an error.

### const declaration
5)   




