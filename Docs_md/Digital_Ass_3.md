# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Digital Ass 3</p> {ignore=true}
[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn)

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 1</p>

>part b.
>>$$1\;\; bit$$ 
With only one redundant bit, we can detect at most one error.
For example, if we use a parity bit, we can detect one error, but if two errors occur, the parity check will fail to detect them.
>>$$3\;\; bit $$ 
With three redundant bits, we can detect up to two errors.
$\because $  three redundant bits can represent up to $2^{3}$ =8 different states.
For example, if we use a Hamming code with three redundant bits, we can detect up to two errors.
>>$$5\;\; bit s$$ 
With five redundant bits, we can detect up to three errors.
$\because $ five redundant bits can represent up to $2^{5}$ =32 different states. 
For example, if we use a Reed-Solomon code with five redundant bits, we can detect up to three errors.
>>$$6\;\; bit s$$ 
With six redundant bits, we can detect up to three errors as well. 
$\because $ six redundant bits can represent up to $2^{6}$ =64 different states.
For example, if we use a Golay code with six redundant bits, we can detect up to three errors.


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 2</p>

>Parity interleaving 

>fig 1
>>fill the fig 1 as follows:
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/0f5d23d1-9e7e-4e3d-aaa2-38b52a0cfc08 width='400' height='300'></div> 

>fig 2
>>column 1 has error 
column 4 has error


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 3</p>

>Cyclic Redundancy Check (CRC). 

>Given 010001100110111101101111 as a message to be send, define a generator which allows to detect simple, double, and an odd number of errors, and that is also able to detect a burst of 4 errors. 

>After defining a generator, calculate the transmitted message which should be composed of the original message followed by the calculated remainder. All steps of the calculations you make must be submitted. 

>Finally, respond to the following question: Which are the values that both the receiver and transmitter must know for CRC to work?

>$\underline{\mathbf{Sol}} $ 
Step 1, define a generator:
>>For simple error detection
the generator polynomial should have at least two terms.
>>For double error detection
the generator polynomial should have at least three terms.
>>For detecting an odd number of errors
the generator polynomial should have an even number of terms
>>For detecting a burst of 4 errors
the generator should have a length of at least 5

>Thus, the generator polynomial of the form:
$$G(x) = x^4 + x^k + 1 $$where $k\geq 1$ and k is odd.
Thus, we can choose, $$ G(x) = x^4 + x^3 + 1  \\
\xrightarrow[]{}11001$$ 

>Thus, the calculation of transmitted message:
><div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/cf725118-4b30-47ff-b72b-98b28e9b70fd width='' height='500'></div> 

>Thus, the transmitted message is,$$010001100110111101101111\boxed{0100}$$  

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












