# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Digital Ass 3</p> {ignore=true}
[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn)

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 1</p>

>part b.
>>1 bit:
If we use 1 redundant bit for error detection $\xrightarrow[]{}$  we can detect a $ \boxed{single}$ error in the data.
By adding a parity bit to the data, the parity bit is set to 1 or 0 to ensure that the total number of 1s in the data plus the parity bit is either odd or even. 
When the data is received, the parity bit is checked. If the parity bit is incorrect, it means that a single bit error has occurred in the data.
>>2 bits:
If we use 3 redundant bits for error detection, we can detect and correct up to a $ \boxed{single}$  error in the data.
>>5 bits:
If we use 5 redundant bits for error detection, we can detect and correct up to 2 errors in the data.
>>6 bits:
If we use 6 redundant bits for error detection, we can detect and correct up to 2 errors in the data.


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


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 4</p>





