# <p style='text-align:center;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Infi2 Tut 4</p> {ignore=true}


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>The fundamental theorem of calculus</p>

>If f is integrable on [a,b]
$F(x) =\int_{a}^{x}f(x) dx，x\in \left[ a,b \right]$ 
<div style='text-align: center;'><img src=https://github.com/Offsaying/OS_Mars/assets/120654757/59af0272-ebce-4be3-9de5-8b4f96290c4f width='1000' height='300'></div> 

>
>>If $ f $ is integrable $\xrightarrow[ ]{}F$ is continuous  
>
>>If $ f $ is continuous $\xrightarrow[ ]{}F$ is differentiable 
$F'(x) =f(x) $ 

>Compute area:
$\int_{a}^{b}f(x) dx=F(x)\bigg|_{a}^{b}=F(b) -F(a) $ 
>
>>Derivatives when endpoints are functions:
$H(t) =\int_{a(t) }^{b(t) }f(x) dx$ 
>
>>$H(t) =F(b(t) )-F(a(t) )  \\
H'(t)=f(b(t) )b'(t) -f(a(t) )a'(t)$ 

>
>>$ \boxed{Parts}$ 
$\int_{a}^{b}f(x) g(x) dx=Fg\bigg|_{a}^{b}-\int_{a}^{b}F(x) g'(x) dx$ 
>
>>$ \boxed{Substitution}$ 
$\int_{a}^{b}f(g(x) g'(x) )dx=\int_{g(a) }^{g(b) }f(y) dy $ 
$\text{ where },\begin{cases}
    y=g(x)  \\
    dy=g'(x) dx \\
\end{cases}$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise</p>

>Let $F(x) =\int_{1}^{x}\frac{1}{t}dt$ 
>1. Show : $F(xy)=F(x) +F(y)  $ 
>2. Show : $F(\frac{x}{y})=F(x) -F(y)  $ 
>3. Let $r_{n}=\sum\limits_{k=1}^{n}\frac{1}{k}-F(n) $ show that $\lim\limits_{n\xrightarrow[ ]{}\infty}r_n$ exists and  is finite.  
>4. Show how consideration of the sequence $r_{2n}-r_{n}$ leads to the identity $F(z) =\sum\limits_{j=1}^{\infty}\frac{(-1) ^{j+1}}{j}$  

>$$\underline{\mathbf{Sol}}$$ $\boxed{1} $ 
>
>>(把y考虑成constant)
>
>>$ \boxed{Method\;\; 1}$ 
>
>>$g(x) =F(xy) =\int_{1}^{xy}\frac{1}{t}dt$ 
>
>>$g'(x) =\frac{dg}{dx}=\frac{d}{dx}(F(xy) )\underset{\underset{ChainRule}{\downarrow}}{=} f(xy)\cdot (xy)'=f(xy) \cdot y=\frac{1}{xy}\cdot y=\frac{1}{x}=\frac{dF(x) }{dx}  $ 
>
>>$\xrightarrow[ ]{}\frac{d(F(xy) ) }{dx }=\frac{d(F(x) ) }{dx }$ 
$\xrightarrow[ ]{}\frac{d(F(xy) -F(x) ) }{dx }=0\xrightarrow[ ]{}F(xy) -F(x)= $ Constant
>$F(1) =\int_{1}^{1}\frac{1}{t}dt=0 \\
F(  1 \cdot   y)-F(1) =C\xrightarrow[ ]{} C=F(y) $ 
>
>>$\xrightarrow[ ]{}F(xy) -F(x) =F(y) $ 
>>$\xrightarrow[ ]{}F(xy) =F(x) +F(y) $ 
>
>>$ \boxed{Method\;\; 2}$ 
>
>>$F(x) =\int_{1}^{x}\frac{1}{t}dt $ 
>
>>substitution (换元)
>
>>$ u=yt \xrightarrow[ ]{}t=\frac{u}{y}  \\
du=y\;\;dt$  
>
>>$F(x) =⭐ \int_{y}^{xy}\frac{y}{u}\cdot \frac{du}{y}=\int_{y}^{xy}\frac{du}{u}=F(xy ) -F(y)  \\
\xrightarrow[ ]{}F(xy ) =F(x) +F(y) $ 

>$ \boxed{2}$ 
>
>>Show $F(\frac{x}{y})=F(x) -F(y)  $ 
$$\underline{\mathbf{Sol}}$$ $F(x) =F(y\cdot \frac{x}{y})\underset{\underset{from 1}{\downarrow}}{=}F(y) + F(\frac{x}{y})  $ 
>
>>Thus,$$F(\frac{x}{y})=F(x) -F(y)  $$ 

>$\boxed{3} $ 
>
>>$r_{n}=\sum\limits_{k=1}^{n}\frac{1}{k}-F(n) ,\;\; F(n) =\int_{1}^{n}\frac{1}{t}dt$ 
$\exists \lim\limits_{n\xrightarrow[ ]{}\infty}r_n $ and is finite 
$$\underline{\mathbf{Sol}}$$ Theorem from Infi1,
$\because $ a sequence is $ \boxed{bounded}$  and $ \boxed{monotone}$  $\xrightarrow[ ]{}$ converges  
Moreover, 
increasing $\xrightarrow[ ]{}$ converges to supremum
decreasing $\xrightarrow[ ]{}$ converges to infimum
>
>>$r_{n+1}=\sum\limits_{k=1}^{n+1}\frac{1}{k}-F(n+1) =\sum\limits_{k=1}^{n}\frac{1}{k}+\frac{1}{n+1}-\int_{1}^{n+1}\frac{1}{t}dt  \\
=\sum\limits_{k=1}^{n}\frac{1}{k}-\int_{1}^{n}\frac{1}{t}dt -\int_{n}^{n+1}\frac{1}{t}dt +\frac{1}{n+1}  \\
=r_{n}-\int_{n}^{n+1}\frac{1}{t}dt +\frac{1}{n+1}$ 
>
>>$\because \int_{n}^{n+1}\frac{1}{t} dt \geq \int_{n}^{n+1} \frac{1}{n+1}dt$ 
>
>>$\xrightarrow[ ]{}\leq r_{n}-\int_{n}^{n+1}\frac{1}{n+1}dt +\frac{1}{n+1}  \\
=r_{n}-\frac{1}{n+1}\cdot 1+\frac{1}{n+1}=r_{n}  \\
\xrightarrow[ ]{}r_{n+1}\leq r_{n},\forall n\xrightarrow[ ]{}r_{n}$ is decreasing 

>$r_1=\sum\limits_{k=1}^{1}\frac{1}{k}-\int_{1}^{1}\frac{1}{t}dt =1-0=1$ 
>
>>$\because r_{n}$ is decreasing $\xrightarrow[ ]{} r_{n}\leq 1,\;\; \forall n\geq 1$  
>
>>$\int_{1}^{n}\frac{1}{t}dt =\underset{\underset{\leq 1}{\downarrow}}{\int_{1}^{2}\frac{1}{t}dt }  +\underset{\underset{\leq \frac{1}{2}}{\downarrow}}{\int_{2}^{3}\frac{1}{t}dt}  +\underset{\underset{\leq \frac{1}{3}}{\downarrow}}{\int_{3}^{4}\frac{1}{t} dt } +\underset{\underset{\leq \frac{1}{n-1}}{\downarrow}}{ \cdots +\int_{n-1}^{n} \frac{1}{t}dt}   \\
\xrightarrow[ ]{}r_{n}\geq 1+\frac{1}{2}+\frac{1}{3}+ \cdots +\frac{1}{n}-(1+\frac{1}{2}+ \cdots +\frac{1}{n-1})=\frac{1}{n}  $ $\xrightarrow[ ]{} r_{n}\geq \frac{1}{n}$ 
>
>>$\xrightarrow[ ]{}0\leq \frac{1}{n}\leq r_{n}\leq 1$ Thus bounded
$\xrightarrow[ ]{}r_{n}$ converges to infimum
$\xrightarrow[ ]{}\lim\limits_{n\xrightarrow[ ]{}\infty}r_{n}\exists $ and is finite
>
>>REMARK: $\lim\limits_{n\xrightarrow[ ]{}\infty}r_{n}\Longleftrightarrow  \boxed{Euler\;\; constant}$ 

>$ \boxed{4}$
>
>>$\vdots$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>⭐Example 2</p>

>Evaluate: $\lim\limits_{n\xrightarrow[ ]{}\infty}\sum\limits_{k=1}^{n}\frac{1}{n+k}$ 
$$\underline{\mathbf{Sol}}$$ $\sum\limits_{k=1}^{n}\frac{1}{n+k}=\sum\limits_{k=1}^{n}\frac{1}{n}\cdot \frac{1}{(1+\frac{k}{n})}=S(f,p,t)$ 
>
>>Let $f(x)=\frac{1}{1+x}$ 
$ \boxed{Partition}$  of [0,1]:$\left\{ 0,\frac{1}{n},\frac{2}{n}, \ldots ,\frac{n}{n} \right\}$ 
Evaluation points $t:\left\{ \frac{1}{n},\frac{2}{n}, \ldots ,1 \right\}$  
>
>>$S(f,p,t)=\sum\limits_{k=1}^{n}f(\frac{k}{n})\underset{\underset{\frac{1}{n}}{\downarrow}}{\cdot (x_k-x_{k-1})}=\sum\limits_{k=1}^{n}\frac{1}{1+\frac{k}{n}}\frac{1}{n} $ 
>
>>$f(x)=\frac{1}{x+1}$ is continuous on [0,1] $\xrightarrow[ ]{}$ $ f $ is  integrable 
$\xrightarrow[ ]{}\lim\limits_{D(p)\xrightarrow[ ]{}0}S(f,p,t)=\int_{0}^{1}f(t)dt =\lim\limits_{n\xrightarrow[ ]{}\infty}\sum\limits_{k=1}^{n}\frac{1}{n}\cdot \frac{1}{1+\frac{k}{n}}=\int_{0}^{1}\frac{1}{1+t}dt =\ln (1+t)\bigg|_{0}^{1}=\ln 2-\ln 1=\ln 2$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 3</p>
>Let $f(x)\in C$ on $\left[ 0,2\pi \right]$  
Prove by definition of the limit $$\lim\limits_{n\xrightarrow[ ]{}\infty}\int_{0}^{2\pi}f(x)\cos (nx )dx$$ 

>$$\underline{\mathbf{Sol}}$$ We need to show $\forall \epsilon>0,\exists n_0,\;s.t.\; \forall n>n_0,\;\; \left|\int_{0}^{2\pi}f(x)\cos (nx )dx-0\right|<\epsilon$ 
>
>>$\left|\int_{0}^{2\pi}f(x)\cos (nx)dx \right|$
>
>>Using $ \boxed{Parts}$
$u=f(x)\;\; \;\; u'=f'(x)  \\
v'=\cos (nx )\;\; \;\; v=\frac{1}{n}\sin (nx)$   
>
>>$=\left| \frac{1}{n}f(x)\sin (nx)\bigg|_{0}^{2\pi}-\frac{1}{n}\int_{0}^{2\pi}f'(x)\sin (nx)dx\right|  \\
=\left| 0-\frac{1}{n}\int_{0}^{2\pi}f'(x )\sin (nx )dx\right|$
>
>>$f(x),f'(x)$ are continuous 
$\xrightarrow[ ]{}$ they are bounded on closed interval
$\xrightarrow[ ]{Weierstrass}$ they have minimum and maximum   
>
>>$\left| \int_{0}^{2\pi}f(x)\cos (nx )dx   \right|=\frac{1}{n}\left| \int_{0}^{2\pi}f'(x)\sin (nx )dx \right|\leq \frac{1}{n}\int_{0}^{2\pi}\left| f'(x)\sin (nx ) \right|dx$ 
>
>>$f'(x)\leq M,\left| \sin (nx ) \right|\leq 1$ 
>
>>$\left| \int_{0}^{2\pi}f(x)\cos (nx )dx   \right|\leq \frac{1}{n}\int_{0}^{2\pi }M\cdot 1 dx=\frac{2\pi M}{n}<\epsilon$ 
>
>>Thus, choose $$n_0=\frac{2\pi M}{\epsilon}$$ 
>
>>$\forall \epsilon>0\;\; \exists n_0=\frac{2\pi M}{\epsilon}\;s.t.\; \forall n>n_0$ $$\left| \int_{0}^{2\pi}f(x)\cos (nx)dx - 0     \right|<\epsilon$$  


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 4</p>
>Evaluate $\int_{0}^{2}\sqrt[ ]{x^{2}+2x+2}dx$ 

>$$\underline{\mathbf{Sol}}$$ Reminder: 
$\sin hx=\frac{e^{x}-e^{-x}}{2}  \\
\cos hx=\frac{e^{x}+e^{-x}}{2}  \\
(\sin hx)'=\cos hx  \\
(\cos hx)'=\sin hx  \\
(\cos hx )^{2}-(\sin hx )^{2}=1$ 
>
>>Verify:
$\sin h^{-1}y=\arcsin h(y)=\ln (y+\sqrt[ ]{y^{2}+1})$ 
$\cos h^{-1}y=\arccos h(y)=\ln (y+\sqrt[ ]{y^{2}-1})$ 
>
>>Substitution
$x+1=\sin h u\;\; \;\; 1+(x+1)^{2}=1+(\sin h(u))^{2}=\cos h^{2} u$ 
$dx=\cos h u\;\;  du$ 
 


[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://ferneychen.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/) [![](https://img.shields.io/badge/-Golang-f05032?style=flat-square&logo=go&logoColor=ffffff)](https://golang.org/) [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Rust-003545?style=flat-square&logo=rust&logoColor=ffffff)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/) [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/Kotlin-2496ED?style=flat-square&logo=kotlin&logoColor=ffffff)](https://kotlinlang.org/) [![](https://img.shields.io/badge/Dart-003545?style=flat-square&logo=dart&logoColor=ffffff)](https://dart.dev/) [![](https://img.shields.io/badge/Lua-cb3837?style=flat-square&logo=lua&logoColor=ffffff)](https://www.lua.org/) [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/) [![](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-framework/) [![](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)](https://www.docker.com/) [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![](https://img.shields.io/badge/-PostgreSQL-005571?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/) [![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>© Yu Chen - All rights reserved</p>



