# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Cyclic Redundancy Check(CRC)</p> {ignore=true}

[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://offsaying.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 1</p>
>Find the  CRC fot the data blocks  100100 with the divisor 1101
>>CRC generation at sender side:
1 - Find the length of divisor `L`  
2 - Append `L-1` bits to the original message.
3 - Perform binary division operation.
4 - Reminder of the division (CRC)(L-1 bits) 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Step 1</p>
>L=4
><div style='text-align: center;'><img src=https://github.com/offsaying/OS_Mars/assets/120654757/41942301-047a-4181-8b41-6cd87085005b width='' height='100'></div> 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>step 2</p>
> L=4, 3 `0` appended to the message.
> <div style='text-align: center;'><img src=https://github.com/offsaying/OS_Mars/assets/120654757/170586ee-7078-4a68-9a04-136ad6c9c7bf width='' height='100'></div> 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>step 3</p>
><div style='text-align: center;'><img src=https://github.com/offsaying/OS_Mars/assets/120654757/c19a8c4f-c043-4d14-97ea-e55dc7264fb7 width='' height='300'></div>


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>step 4</p>
>CRC = 001

>Thus,
$$Data Transmitted: 100100\; 001$$ 


