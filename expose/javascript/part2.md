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
A) '3' + 2 = '32'
B) '3' - 2 = 
C)
D)
E)
F)
G)
H)

15) **Comparison**


