# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Digital Ass 3</p> {ignore=true}
[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn)

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 1</p>

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Part a</p>
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/27074cf8-ffb9-4c75-a680-7c101f06cd78 width='' height='250'></div> 

>/(1001) $\because $ we cannot add anything here, this may happen when the number of redundant bit is not satisfied with the restriction (the number of bit is odd).
>>errors detected in $$1 (101) \\
0(100)  \\
$$$$0(0001)  \\
/(1001)  \\
1(1101) \\
$$ 
>>errors can be corrected:
$$1 (101) \\
0(100)  \\
$$$$0(0001)  \\
1(1101) \\
$$  

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Part b</p>
>>$$1\;\; bit$$ 
With only one redundant bit, we can detect at most `0` error.
>>$$3\;\; bit $$ 
With only one redundant bit, we can detect at most `1` error.
>>$$5\;\; bit s$$ 
With only one redundant bit, we can detect at most `2` error.
>>$$6\;\; bit s$$ 
With only one redundant bit, we can detect at most `2` error.


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 2</p>

>Parity interleaving 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>fig 1</p>

>>fill the fig 1 as follows:
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/0f5d23d1-9e7e-4e3d-aaa2-38b52a0cfc08 width='400' height='300'></div> 

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>fig 2</p>

>if using the even parity:
>>column 1 has error 
column 4 has error

>if using the odd parity:
>>column 2 has error 
column 3 has error


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 3</p>

>Cyclic Redundancy Check (CRC). 

>Given 010001100110111101101111 as a message to be send, define a generator which allows to detect simple, double, and an odd number of errors, and that is also able to detect a burst of 4 errors. 

>After defining a generator, calculate the transmitted message which should be composed of the original message followed by the calculated remainder. All steps of the calculations you make must be submitted. 

>Finally, respond to the following question: Which are the values that both the receiver and transmitter must know for CRC to work?

>$\underline{\mathbf{Sol}} $ 
Step 1, define a generator:
>>For simple error detection
the first and last bits of the generator are 1.
>>For double error detection
the generator has at least three terms (non-zero)
>>For detecting an odd number of errors
if the generator contains x + 1
>
>>For detecting a burst of 4 errors
>>burst or consecutive errors of at most length 4.

>Thus, we can choose, $$ G(x) = x^4 + x + 1  \\
\xrightarrow[]{}10011$$ 

>Thus, the calculation of transmitted message:
><div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/a1940281-38ac-4089-926a-04e75eae2695 width='' height='500'></div> 

>Thus, the transmitted message is,$$010001100110111101101111\boxed{0000}$$  

>The values that both the receiver and transmitter must know for CRC to work:
$$\boxed{ The\; \; generator\;\;  polynomial }$$Or in binary bits 
The receiver will use the same polynomial to perform a CRC calculation on the received data to confirm the data received is right.
>>Other things like:
>
>>`The bit ordering`, that is LSB (Least Significant Bit) first or MSB (Most Significant Bit) first. The transmitter and receiver must agree on which bit ordering to use.
>
>>`The initial value of the register`, which is usually all 0 or 1, depending on the CRC implementation. Both the transmitter and receiver must start with the same initial value of the register.


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 4</p>

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Part 1</p>

000000000|111000000|000111000|000000111
|:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-:|:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: | 
|000111111|111000111|111111000|111111111
>$$d(000000000,111000000) = 3 \\
d(000000000,000111000) = 3 \\
d(000000000,000000111) = 3 \\
d(000000000,000111111) = 6 \\
d(000000000,111000111) = 6 \\
d(000000000,111111000) = 6 \\
d(000000000,111111111) = 9 \\
$$$$d(111000000,000111000) = 6 \\
d(111000000,000000111) = 6 \\
d(111000000,000111111) = 9 \\
d(111000000,111000111) = 3 \\
d(111000000,111111000) = 3 \\
d(111000000,111111111) = 6 \\
$$$$d(000111000,000000111) = 6 \\
d(000111000,000111111) =  3\\
d(000111000,111000111) =  9\\
d(000111000,111111000) = 3 \\
d(000111000,111111111) = 6\\
$$$$d(000000111, 000111111) = 3 \\
d(000000111,111000111) = 3\\
d(000000111,111111000) =  9\\
d(000000111,111111111) =  6 \\
$$$$d(000111111,111000111) =  6\\
d(000111111,111111000) = 6 \\
d(000111111,111111111) = 3 \\
$$$$d(111000111,111111000) = 6 \\
d(111000111,111111111) =3  $$$$d(111111111,111111000) = 3$$  
>>Thus, the code hamming distance is 3.
>
>>How to correct an error?
>
>>Step 1: 
Find the hamming distance between the received message and the valid message
>
>>Step 2:
Check, only if there is an $ \boxed{unique}$  minimal hamming distance between them then you can change the received message using the valid message, otherwise you cannot correct it.



##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Part 2</p>

>Given the following message: 00101001001 using 7 data bits, and 4 check bits.

0|0|1|`0`|1|0|0|`1`|0|`0`|`1`
|:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
11|10|9|8|7|6|5|4|3|2|1

>$\underline{\mathbf{Sol}} $ 
I will use the way of this [link](https://www.geeksforgeeks.org/hamming-code-in-computer-network/) that is provided by Prof.Simon on Moodle, and it is different from the way in our text book (and slides)
>>In short, I will use way of checking from right to left.

>Data bits, $$0011000$$ Check bits, that is in the position of $2^{0},2^{1},2^{2},2^{3}$ $$0101$$ 

Bit|`0`|0|`1`|0|`1`|0|`0`|1|`0`|0|`1`
|:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
Position|11|10|9|8|7|6|5|4|3|2|1
>using even parity $\xrightarrow[]{}$ 1

Bit|`0`|`0`|1|0|`1`|`0`|0|1|`0`|`0`|1
|:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
Position|11|10|9|8|7|6|5|4|3|2|1
>using even parity $\xrightarrow[]{}$ 1 

Bit|0|0|1|0|`1`|`0`|`0`|`1`|0|0|1
|:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
Position|11|10|9|8|7|6|5|4|3|2|1
>using even parity $\xrightarrow[]{}$ 0 

Bit|`0`|`0`|`1`|`0`|1|0|0|1|0|0|1
|:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |:-: |
Position|11|10|9|8|7|6|5|4|3|2|1
>using even parity $\xrightarrow[]{}$ 1 

>Thus, $$1011 \xrightarrow[]{} 11 $$ The bits give the binary number 1011 whose decimal representation is 11.
Thus, $$bit\;\; 11$$ contains an error.
To correct the error the $11^{th}$  bit is changed from 0 to 1.

>Which information must be known by both the transmitter and the receiver?
>>1) Both the transmitter and the receiver must know that they are using the same method, for instance, in this case, they should both use the hamming code, that is the most important thing of all.
>
>>2) The number of data bits and parity bits used in message.
>
>>3. The way you used also matters and need to be known by both the transmitter and the receiver (either checking from left to right or from right to left).


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 5</p>

>$$Line\;\; 21\;\; in\;\; file\;\; stringToNumber.s$$
```
|-----------------------| <== rbp-16,rsp
|          argv         | {8 bytes}  
|-----------------------| <== rbp-8
|          argc         | {8 bytes}  
|-----------------------| <== rbp
|          rbp          | {8 bytes}
|-----------------------|
|      return address   | {8 bytes}
|-----------------------|
|          ...          |
```
>$$Line\;\; 24\;\; in\;\; file\;\; stringToNumber.s$$
```
|++++++++++++++++++++++++|  
|--------- rdi ----------| {8 bytes}
|++++++++++++++++++++++++|  <== rsp
|--------- rbp ----------| {8 bytes}
|++++++++++++++++++++++++| 
|------ ret address -----| {8 bytes}
|++++++++++++++++++++++++|  # our resulting number at -40(%rbp)
|----------- 0 ----------| {8 bytes}
|++++++++++++++++++++++++|  # reserved space for our index variable at -32(%rbp)
|--------- [ ] ----------| {8 bytes}
|++++++++++++++++++++++++|  # reserved space for our string's length at -24(%rbp)
|--------- [ ] ----------| {8 bytes}
|++++++++++++++++++++++++|  # multiplier variable at -16(%rbp)
|----------- 1 ----------| {8 bytes}
|++++++++++++++++++++++++|  # the string to convert at -8(%rbp)
|--------- rdi ----------| {8 bytes}
|++++++++++++++++++++++++|
|--------- rbp ----------| {8 bytes}
|++++++++++++++++++++++++|
|------ ret address -----| {8 bytes}
|++++++++++++++++++++++++|
|--------- argv ---------| {8 bytes}
|++++++++++++++++++++++++| 
|--------- argc ---------| {8 bytes}
|++++++++++++++++++++++++|
|--------- rbp ----------| {8 bytes}
|++++++++++++++++++++++++| 
|------ ret address -----| {8 bytes}
```
>$$Line\;\; 26\;\; in\;\; file\;\; stringToNumber.s$$
```
|++++++++++++++++++++++++|
|--------- [ ] ----------| {8 bytes}
|++++++++++++++++++++++++|
|----------- 1 ----------| {8 bytes}
|++++++++++++++++++++++++| 
|---------- -1 ----------| {8 bytes}
|++++++++++++++++++++++++|
|----------- 0 ----------| {8 bytes}
|++++++++++++++++++++++++|
|--------- rdi ----------| {8 bytes}
|++++++++++++++++++++++++|
|--------- rbp ----------| {8 bytes}
|++++++++++++++++++++++++|
|------ ret address -----| {8 bytes}
|++++++++++++++++++++++++|  
|--------- rdi ----------| {8 bytes}
|++++++++++++++++++++++++| 
|--------- rbp ----------| {8 bytes}
|++++++++++++++++++++++++| 
|----------- 0 ----------| {8 bytes}
|++++++++++++++++++++++++| 
|--------- [ ] ----------| {8 bytes}
|++++++++++++++++++++++++| 
|--------- [ ] ----------| {8 bytes}
|++++++++++++++++++++++++| 
|----------- 1 ----------| {8 bytes}
|++++++++++++++++++++++++|
|--------- rdi ----------| {8 bytes}
|++++++++++++++++++++++++|
|--------- rbp ----------| {8 bytes}
|++++++++++++++++++++++++|
|------ ret address -----| {8 bytes}
|++++++++++++++++++++++++|
|--------- argv ---------| {8 bytes}
|++++++++++++++++++++++++| 
|--------- argc ---------| {8 bytes}
|++++++++++++++++++++++++|
|--------- rbp ----------| {8 bytes}
|++++++++++++++++++++++++| 
|------ ret address -----| {8 bytes}
```















