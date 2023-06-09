# <p style='text-align:center;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Infi2 Tut 3</p> {ignore=true}


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>properties of definite integrals</p>

>Reminder
>
>>Riemann sum:$S(f,p,t) =\sum\limits_{i=1}^{n}f(t_{i})(x_i-x_{i-1}) $ 
>
>>f is integrable:$\lim\limits_{D(p)\xrightarrow[ ]{}0}S(f,p,t) =I=\int_{a}^{b}f(x) dx$ 
>
>>$U(f,p) =\sum\limits_{}^{}M_i(x_i-x_{i-1}), \\
M_i=\sup\left\{ f(x) :x\in \left[ x_{i-1},x_i \right] \right\} $
给定p,函数值取大值 
>
>>$L(f,p) =\sum\limits_{}^{}m_i(x_i-x_{i-1}) $ 
$m_i=\inf\left\{ f(x) :x\in \left[ x_{i-1},x_{i} \right] \right\}$ 
>
>>$U(f) =\inf\left\{ U(f,p) ,\forall p \right\}$  
针对不同的p,大中取最小，最小的$U(f,p) $ 
>
>>$L(f) =\sup\left\{ L(f,p) ,\forall p \right\}$ 
针对不同的p,小中取最大，最大的$L(f,p) $ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Theorem</p>

>f is bounded in $\left[ a,b \right]$
TFAE: 
>
>>1. f is riemann integrable 
>
>>2. U(f)=L(f)=$\int_{a}^{b}f(x)dx$ 
>
>>3. $\forall  \epsilon>0,\exists P_{0}\in \left[ a,b \right],U(f,p_{0}) -L(f,p_{0}) <\epsilon$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Theorem </p>

>If f is $ \boxed{continuous}$  $\xrightarrow[ ]{}$ f is $ \boxed{integrable}$  
>
>>Properties
>
>>1. $\int_{a}^{a}f(x)dx=0 $ 
>
>>2. $\int_{a}^{b}f(x) dx=-\int_{b}^{a}f(x) dx$ 
>
>>3. $\int_{a}^{b}f(x) dx=\int_{a}^{c}f(x) dx+\int_{c}^{b}f(x) dx,c\in (a,b) $ 
>
>>4. Linearity
>$\int_{a}^{b} \alpha f+\beta g=\alpha \int_{a}^{b}f+\beta \int_{a}^{b}g\;\; \;\; \alpha, \beta \in \mathbb{R}$ 
>
>>5. If f is integrable on [a,b], g is $ \boxed{continuous}$ on f([a,b]), $\xrightarrow[ ]{}$ $ \boxed{gof}$  is integrable on [a,b]   
>
>>6. f,g are integrable $\xrightarrow[ ]{}$ fg is integrable
>
>>7. if $m\leq f(x) \leq M$ on [a,b] $ \\
\xrightarrow[ ]{}$ m(b-a)  $\leq \int_{a}^{b}f(x) dx\leq M(b-a) $ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 1</p>

>Prove : if $ f $ is integrable and non-negative on [a,b]$ \\
\xrightarrow[ ]{}\;\; \int_{a}^{b} f(x) dx \geq 0$  


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 2</p>
>Prove: If f,g are integrable on [a,b] and $f(x) \leq g(x),\forall x\in \left[ a,b \right]\xrightarrow[ ]{}\int_{a}^{b}f(x) dx \leq \int_{a}^{b} g(x)dx $ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 3</p>
>Show that if  f is integrable on [a,b] $ \\
\xrightarrow[ ]{}\;\; \left| f \right| $ is also integrable on [a,b] and $ \\
\left| \int_{a}^{b}f(x)dx\right|\leq \int_{a}^{b}\left| f(x) \right|  dx   $    


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>⭐Example 4</p>
>Prove if f is continuous and non-negative on [a,b] and $f(x_{0})>0 \xrightarrow[ ]{} \int_{a}^{b}f(x) dx >0 $ 

>definition of continuity:
>
>>f is continuous on $x_0\Longleftrightarrow  \\
\forall \epsilon>0,\exists \delta >0,\left|x-x_{0}\right|<\delta \xrightarrow[ ]{}\left|f(x) -f(x_{0}) \right|<\epsilon $ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 5</p>
>Let f be a continuous and non-negative function defined on [a,b]
>
>>Assume $f$  be  a continuous and non- negative function defined on [a,b] 
>
>>Assume $M=\underset{\underset{[a,b]}{\downarrow}}{\max\left\{ f(x)  \right\}} $ 
Prove: $\lim\limits_{n\xrightarrow[ ]{}\infty}\left( \int_{a}^{b}f^{n}(x) dx    \right)^{\frac{1}{n}}=M $   



















[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://ferneychen.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/) [![](https://img.shields.io/badge/-Golang-f05032?style=flat-square&logo=go&logoColor=ffffff)](https://golang.org/) [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Rust-003545?style=flat-square&logo=rust&logoColor=ffffff)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/) [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/Kotlin-2496ED?style=flat-square&logo=kotlin&logoColor=ffffff)](https://kotlinlang.org/) [![](https://img.shields.io/badge/Dart-003545?style=flat-square&logo=dart&logoColor=ffffff)](https://dart.dev/) [![](https://img.shields.io/badge/Lua-cb3837?style=flat-square&logo=lua&logoColor=ffffff)](https://www.lua.org/) [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/) [![](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-framework/) [![](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)](https://www.docker.com/) [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![](https://img.shields.io/badge/-PostgreSQL-005571?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/) [![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>© Yu Chen - All rights reserved</p>

