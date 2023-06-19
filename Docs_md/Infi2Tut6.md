# <p style='text-align:center;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Infi2 Tut 6</p> {ignore=true}


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Series</p>


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Introduction </p>
>
>>$\boxed{Series} \Longleftrightarrow \sum\limits_{k=1}^{\infty}a_{k}=\lim\limits_{N\xrightarrow[ ]{}\infty}S_N$ 
>
>>$S_N=\sum\limits_{k=1}^{N}a_k\Longleftrightarrow \boxed{Partial \;\; Sum} $ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Tests</p>
>
>>$a_n>0$ 
>
>>$ \boxed{1\;\; Comparison}$ 
>
>>If $a_n\leq b_n$
$\sum\limits_{n=1}^{\infty}b_n$ converges $\xrightarrow[ ]{}\sum\limits_{n=1}^{\infty}a_n$  converges 
$\sum\limits_{n=1}^{\infty}a_n$ diverges $\xrightarrow[ ]{}\sum\limits_{n=1}^{\infty}b_n$ diverges  
>
>>$ \boxed{2\;\; LCT}$ 
>
>>$\lim\limits_{n\xrightarrow[ ]{}\infty}\frac{a_n}{b_n}=L$ 
>
>>If $0<L<\infty\xrightarrow[ ]{}\sum\limits_{}^{}a_n$ converges $\Longleftrightarrow \sum\limits_{}^{}b_n$ converges   
>
>>If $L=0$ and $\sum\limits_{}^{}b_n$ converges $\xrightarrow[ ]{}\sum\limits_{}^{}a_n$ converges   
>
>>If $L=\infty $ and $\sum\limits_{}^{}b_n$ diverges $\xrightarrow[ ]{}\sum\limits_{}^{}a_n$ diverges    
>
>>$ \boxed{3\;\; Ratio}$ 
>
>>$L=\lim\limits_{n\xrightarrow[ ]{}\infty}\left| \frac{a_{n+1}}{a_n}\right|$
>
>>If $L<1\xrightarrow[ ]{}\sum\limits_{1}^{\infty}a_n$ converges  absolutely
>
>>If $L>1\xrightarrow[ ]{}\sum\limits_{1}^{\infty}a_n$ diverges
>
>>If $L=1$ we do not know    
>
>>$ \boxed{4\;\; Root\;\; Test}$ 
>
>>$\lim\limits_{n\xrightarrow[ ]{}\infty}\sqrt[ n]{a_n}=L$
>
>>$0\leq L\leq 1\xrightarrow[ ]{}\sum\limits_{}^{}a_n$ converges   
>
>>$L>1\xrightarrow[ ]{}\sum\limits_{}^{}a_n$ diverges  
>
>>$L=1\xrightarrow[ ]{} $ we do not know. 
>
>>$ \boxed{5\;\; *Sparsity\;\; Test}$ 
>
>>If $a_n$ are non-increasing 
>
>>$\xrightarrow[ ]{}\sum\limits_{k=1}^{\infty}a_k$ converges $\Longleftrightarrow \sum\limits_{k=1}^{\infty}2^{k}a_{2^{k}}$ converges   
>
>>$ \boxed{6\;\; Integral\;\; Test}$ 
>
>>if $f$  if non-increasing, non-negative, integrable 
>
>>$\sum\limits_{k=1}^{\infty}f(k) $ and $\int_{1}^{\infty}f(x)dx     $ converges or diverges together  
>
>>$ \boxed{7\;\; Series\;\; With\;\; Alternating\;\; Signs}$ 
>
>>Leibnitz:
if $a_{k}>0$ non-increasing and $\lim\limits_{k\xrightarrow[ ]{}\infty}a_{k}=0$
$\xrightarrow[ ]{}\sum\limits_{k=1}^{\infty}(-1)^{k}a_{k}$ converges  
>
>>$ \boxed{Test\;\; 0}$
if $\sum\limits_{k=1}^{\infty}a_{k}$ converges $\xrightarrow[ ]{}\lim\limits_{k\xrightarrow[ ]{}\infty}a_k=0$   


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 1</p>

>
>>Evaluate 
a) $\sum\limits_{n=1}^{\infty}\frac{1}{n(n+1)}$ 
>
>>$\frac{1}{n(n+1)}=\frac{A}{n}+\frac{B}{n+1}=\frac{A(n+1)+Bn }{n(n+1)}\xrightarrow[ ]{}A=-B=1$ 
>
>>$\sum\limits_{n=1}^{N}\frac{1}{n(n+1)}=\sum\limits_{n=1}^{N}(\frac{1}{n}-\frac{1}{n+1})$ 
$=1-\frac{1}{N+1}$ 
>
>>$\sum\limits_{n=1}^{\infty}\frac{1}{n(n+1)}=\lim\limits_{N\xrightarrow[ ]{}\infty}(1-\frac{1}{N+1})=1$ 

>$\sum\limits_{}^{}\arctan (\frac{1}{1+k+k^{2}})$ 
>
>>$\tan (\alpha -\beta )=\frac{\tan \alpha -\tan \beta }{1+\tan \alpha \tan \beta }$ 
$\alpha -\beta =\arctan (\frac{\tan \alpha -\tan \beta }{1+\tan \alpha \tan \beta })$ 
>
>>Denote 
$a=\tan \alpha,\;\; b=\tan \beta $ 
$\alpha =\arctan a,\;\; \beta =\arctan b$ 
>
>>$\arctan a-\arctan b=\arctan (\frac{a-b}{1+ab})$ 
>
>>For: $a=k+1,\;\; b=k$ 
>
>>$\arctan (k+1)-\arctan (k)=\arctan (\frac{1}{1+k+k^{2}})$ 
>
>>$\xrightarrow[ ]{}\sum\limits_{k=1}^{N}\arctan (\frac{1}{1+k+k^{2}})=\sum\limits_{1}^{N}\arctan (k+1)-\arctan (k)$ 
$=\arctan (2)-\arctan (1)+\arctan (3)-\arctan (2)+ \cdots +\arctan (N+1)-\arctan (N)$ 
$=\underbrace{\arctan (N+1)}_{\frac{\pi}{2}} -\underbrace{\arctan (1)}_{\frac{\pi}{4}}=\frac{\pi}{4} $ 


[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://offsaying.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/) [![](https://img.shields.io/badge/-Golang-f05032?style=flat-square&logo=go&logoColor=ffffff)](https://golang.org/) [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Rust-003545?style=flat-square&logo=rust&logoColor=ffffff)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/) [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/Kotlin-2496ED?style=flat-square&logo=kotlin&logoColor=ffffff)](https://kotlinlang.org/) [![](https://img.shields.io/badge/Dart-003545?style=flat-square&logo=dart&logoColor=ffffff)](https://dart.dev/) [![](https://img.shields.io/badge/Lua-cb3837?style=flat-square&logo=lua&logoColor=ffffff)](https://www.lua.org/) [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/) [![](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-framework/) [![](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)](https://www.docker.com/) [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![](https://img.shields.io/badge/-PostgreSQL-005571?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/) [![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>© Yu Chen - All rights reserved</p>