## Part 2 Answers

1) **Line 12** will print 3. This is because it is the value of `i`, since the given array only contains 3 elements (i.e. `[100, 200, 300]`). During the loop, `i` will loop through the size of the array, which is 3.
2) **Line 13** will print 150. This is because the value of `discountedPrice` is printed, which is 150. **Line 13** is outside of the loop, so the final value of `discountedPrice` is printed after all instructions within the loop are done. 
3) **Line 14** will also print 150. This is because the value of `finalPrice` is printed, which is coincidentally the same value as `discountedPrice`.
4) The function returns `[50, 100, 150]`, which is the array of `prices` with the final price after applying the discounts. 
5) **Line 12** throws an `Uncaught ReferenceError`. This occurs since `i` is declared as a `let` variable within the loop. This means that it is only accessible within this block of code. Since `i` is not accessible outside of the loop, we get an error. 
6) **Line 13** throws an `Uncaught ReferenceError: discountedPrice is not defined`. Similar to the previous question, we get this error since `discountedPrice` was declared as a `let` variable within the for loop. Since it is within the loop, there is no access to it beyond that point and thus we get a `ReferenceError`.
7) **Line 14** prints 150. Although `finalPrice` is declared as a `let` variable, it is still able to be accessed beyond the loop since it was declared at the beginning, not just within the loop.
8) The function returns `[50, 100, 150]`, which is the array of `discounted` containing the final price after the discounts. 
9) **Line 11** throws an `Uncaught ReferenceError: i is not defined`. This is because `i` is a `let` variable and is only accessible within the loop but not beyond the scope of the loop.
10) **Line 12** will print 3, which is the value of `length`. Although it is a `const` variable, `length` is defined within the same block as **Line 12**, which makes it legal. 
11) The function returns `[50, 100, 150]`. This is because the final discounted prices were pushed onto the `discountedPrices` array.

12) **Data Types** 
A) `student.name`
B) `student['Grad Year']`
C) `student.greeting()`
D) `student.['Favorite Teacher'].name`
E) `student.courseLoad[0]`

13) **Arithmetic**
A) '3' + 2 = `'32'`
B) '3' - 2 = `1`
C) 3 + null = `3`
D) '3' + null = `3null`
E) true + 3 = `4`
F) false + null = `0` 
G) '3' + undefined = `'3undefined'` 
H) '3' - undefined = `NaN`

14) **Comparison**
A) '2' > 1 = `true`
B) '2' < '12' = `false`
C) 2 == '2' = `true`
D) 2 === '2' = `false`
E) true == 2 = `false`
F) true === Boolean(2) = `true`

15) a

17)b

19) The output of the above code is `1, 4, 3, 2`. Since 4 and 4 are not limited to be printed out within a block of code, they are immediately printed out in that order. Then, we get 3 and 2 because the `setTimeout` function first execute with the lowest waiting time (0), which corresponds to 3. Finally, the next `setTimeout` function executes because it has the longest waiting time (1000), which corresponds to 2. Thus, the outcome is `1, 4, 3, 2`.  



