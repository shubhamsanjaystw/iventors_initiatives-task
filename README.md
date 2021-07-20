# Intent
#### To create a power_sum function that can add n numbers of inputs of different data type

## Process
1) We started with creating a sum_global function which can add two integers.
2) We modified the sum_global function to add if the arguments could be either list or integer.
    - The sum of a list object would be the sum of all elements
3) We modified the sum_global function to add if the arguments could be either integer or dict.
    - The sum of a dict object is the sum of all values in key-value pair of dict.
4) Then We created a power_sum function which can perform addition on any no of argument of different data types.
    - We created sub sections for solving this problem:
    - Created test cases for the problem
    - Thought of an approach
    - Implementation
 ### 5) We did Benchmarking of power_sum function on sum function inbuilt in python module
 #####  - We used timeit module to record the time to run inbuilt sum function on integers of input size of 15000.
 #####  - We did same with power_sum function.
 
 ## Input
 The program does not take any input as it checks the returend value with the corrrect answer to check if code passes the test cases or not.
 
 ## Output
   - The output consist of a line stating the function called and the arguments passed
   - Following some lines print True or False depending on the test case was passes or not.
   - The last section is Benchmarking where the results has been shown.
 
 ## Run
 Open it in any code editor and run the file in python compiler.
 
