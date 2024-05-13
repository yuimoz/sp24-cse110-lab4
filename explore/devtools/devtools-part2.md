## DevTools Part 2
1. The bug was that the numbers being "added" were not actually being added in a mathematical way. Instead, they were being concatenated as two strings: i.e, `'2'` + `'3'` = `'23'`, instead of `2` + `3` = `5`.
2. To fix the bug, I changed the way that the numbers were being read by the debugger. I added the JavaScript `Number()` method to the variable declarations (`num1` and `num2`), which makes it so that the numbers being read are not treated as strings but as actual integers. 
