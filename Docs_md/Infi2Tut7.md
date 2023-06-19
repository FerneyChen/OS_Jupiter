# <p style='text-align:center;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Infi2 Tut 7</p> {ignore=true}


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Sequences of functions and uniform convergence</p>

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Definition</p>
>>$ f_{n}  $ converges $ \boxed{pointwise}$  to $f$ on $ I $
>
>>$\Longleftrightarrow \forall \epsilon>0\;\; and\;\; \forall x\in I\;\; \exists N(\epsilon,x)\;\; \forall n> N(\epsilon,x)$
$\left| f_{n}(x)-f(x)\right|<\epsilon$  

>>$ f_{n}  $ converges $ \boxed{uniformly}$   to $f$ on $ I $
>
>>$\Longleftrightarrow \forall \epsilon>0\;\; \exists N(\epsilon)\;\; \forall n> N(\epsilon)$
$\left| f_{n}(x)-f(x)\right|<\epsilon,\;\; \forall x\in I$  


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Theorem</p>
>
>>1. $ \boxed{Continuity}$ 
If $f_n$ converges $ \boxed{uniformly}$  to $ f $ 
$\forall n\;\; f_n$ is continuous 
$\xrightarrow[ ]{}f $ is continuous 
>
>>2. $ \boxed{Integrability}$ 
If $f_n$ converges $ \boxed{uniformly}$ to $f$  on $ I $ 
$\forall n\;\; f_n$ is integrable 
$\xrightarrow[ ]{}f$ is integrable and $\int_{a}^{b} f(x)dx=\lim\limits_{n\xrightarrow[ ]{}\infty}\int_{a}^{b} f_n(x)dx$    
>
>>3. $ \boxed{Monotonicity}$ 
$ \boxed{Def}$ 
$f_n(x)$ converges monotonically to $ f $ on $ I $ 
$\Longleftrightarrow f_{n+1}(x)\geq f_{n}(x)$ or $f_{n+1}(x)\leq f_n(x)$  


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Theorem</p>
>
>>$ \boxed{Dini }$ 
>
>>If $f_n$ is 
$ \boxed{monotone}$,$ \boxed{continuous}$,$ \boxed{pointwise\;\; converges}$  
on $[a,b]$
$\xrightarrow[ ]{}$ also $ \boxed{uniformly\;\; converges}$  

>
>>4. $f_n$ uniformly converges on I 
$\Longleftrightarrow $ the sequence $M_n=\sup\limits_{x\in I}\left| f_n(x)-f(x)\right|\xrightarrow[ ]{n\xrightarrow[ ]{}\infty}0$ 
>
>>5. $ \boxed{Cauchy\;\; Criteria}$   
 $f_n$ uniformly converges  on $I$   
$\Longleftrightarrow \forall \epsilon >0\;\; \exists N\;\; \;s.t.\; \forall m>n>N$ 
$\left| f_{m}(x)-f_{n}(x)\right|<\epsilon\;\; \forall x\in I$ 




[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://offsaying.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/) [![](https://img.shields.io/badge/-Golang-f05032?style=flat-square&logo=go&logoColor=ffffff)](https://golang.org/) [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Rust-003545?style=flat-square&logo=rust&logoColor=ffffff)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/) [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/Kotlin-2496ED?style=flat-square&logo=kotlin&logoColor=ffffff)](https://kotlinlang.org/) [![](https://img.shields.io/badge/Dart-003545?style=flat-square&logo=dart&logoColor=ffffff)](https://dart.dev/) [![](https://img.shields.io/badge/Lua-cb3837?style=flat-square&logo=lua&logoColor=ffffff)](https://www.lua.org/) [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/) [![](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-framework/) [![](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)](https://www.docker.com/) [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![](https://img.shields.io/badge/-PostgreSQL-005571?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/) [![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>© Yu Chen - All rights reserved</p>