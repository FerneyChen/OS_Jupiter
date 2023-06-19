# <p style='text-align:center;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Infi2 Tut 9</p> {ignore=true}


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Limits</p>
>Reminder
>
>>$\lim\limits_{x\xrightarrow[ ]{}x_0}f(x)$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example</p>

>a)
$\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}\frac{x^{2}+x^{3}+y^{5}}{x^{2}+y^{2}}$ 
>
>>Using $ \boxed{Parts}$ 
>
>>y=$\mu x$
>
>>$\lim\limits_{x\xrightarrow[ ]{}0}\frac{x^{2}+x^{3}+\mu^{3}x^{3}}{x^{2}+\mu^{2}x^{2}}=\lim\limits_{x\xrightarrow[ ]{}0}\frac{1+x+\mu^{3}x}{1+\mu^{2}}=\frac{1}{1+\mu^{2}}$  
>
>>The result depends on $\mu\xrightarrow[ ]{}$ the limit D.N.E. 

>b)
$\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}\frac{x^{2}y}{x^{4}+y^{2}}$ 
>
>>Consider y=mx
>
>>$\lim\limits_{x\xrightarrow[ ]{}0}\frac{x^{2}mx}{x^{4}+m^{2}x^{2}}=\lim\limits_{x\xrightarrow[ ]{}0}\frac{mx}{x^{4}+m^{2}}=0$ 
>
>>This does not prove that the limit exists
>
>>Consider $y=x^{2}$ 
>
>>$\lim\limits_{x\xrightarrow[ ]{}0}\frac{x^{2}x^{2}}{x^{4}+x^{4}}=\lim\limits_{x\xrightarrow[ ]{}0}\frac{1}{2}=\frac{1}{2}\neq 0$ 
>
>>We obtained different results when approaching (0,0)
Thus, the limit does not exist.

>c)
$\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}\frac{x^{2}y^{2}}{x^{2}+y^{2}}$ 
>
>>By sandwich
>
>>$0\leq \frac{x^{2}y^{2}}{x^{2}+y^{2}}=\underbrace{\frac{x^{2}}{x^{2}+y^{2}}}_{\leq 1} \cdot y^{2}\leq y^{2}\xrightarrow[ ]{(x,y)\xrightarrow[ ]{}(0,0)}0$ 
>
>>$\xrightarrow[ ]{}\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}\frac{x^{2}y^{2}}{x^{2}+y^{2}}=0$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Theorem </p>
>
>>Polar coordinates
>
>>$x=r\cos \theta  \\
y=r\sin \theta$ 
>>Let $f(x,y):\mathbb{R}^{2}\xrightarrow[ ]{}\mathbb{R}$
Assume that 
$f(r\cos \theta,r\sin \theta)=F(r)\cdot G(\theta) $ 
and $F(r)\xrightarrow[ ]{r\xrightarrow[ ]{}0}0$
and $G(\theta)$ is bounded 
>
>$\xrightarrow[ ]{}\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}f(x,y)=0$        

>c) (梅开二度) Using polar coordinates
$f(x,y)=\frac{x^{2}y^{2}}{x^{2}+y^{2}}$ 
>
>>$x=r\cos \theta  \\
y=r \sin \theta$ 
>
>>$f(r\cos \theta,r\sin \theta)=\frac{r^{4}\cos ^{2}\theta \sin ^{2}\theta}{r^{2}(\cos ^{2}\theta+\sin ^{2}\theta)}$ 
$=r^{2}\cos ^{2}\theta\sin ^{2}\theta=F(r)\cdot G(\theta)$ 
>
>>$F(r)=r^{2}\xrightarrow[ ]{r\xrightarrow[ ]{}0}0$
>
>>$G(\theta)=\cos ^{2}\theta\sin ^{2}\theta$ is bounded
>
>>$\xrightarrow[ ]{}\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}f(x,y)=0$   


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example b</p> 
>
>>Using the polar coordinates
>
>>$\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}\frac{x^{2}y}{x^{4}+y^{2}}$ 
>
>>$\lim\limits_{r\xrightarrow[ ]{}0}\frac{r^{3}\cos ^{2}\theta\sin \theta}{r^{4}\cos ^{4}\theta+r^{2}\sin ^{2}\theta}=\lim\limits_{r\xrightarrow[ ]{}0}\frac{r\cos ^{2}\theta\sin \theta}{r^{2}\cos ^{4}\theta+\sin ^{2}\theta}\neq F(r)G(\theta)$ 
>
>>If $\theta=k\pi\xrightarrow[ ]{}\lim\limits_{r\xrightarrow[ ]{}0}\frac{0}{r^{2}}=0$ 
>
>>If $\theta \neq k\pi\xrightarrow[ ]{}\lim\limits_{r\xrightarrow[ ]{}0}\frac{0}{0+\underbrace{\sin ^{2}\theta}_{\neq 0} }=0$ 
>
>>Thus the limit does not exist.

>
>>$\because \lim\limits_{(x,y)\xrightarrow[ ]{}(x_0,y_0)}f(x,y)=f(x_0,y_0)$ 
>
>>$\xrightarrow[ ]{}$ f is continuous at $(x_0,y_0)$  
>
>>We could ask:
$f(x,y)=\begin{cases}
    \frac{x^{2}y^{2}}{x^{2}+y^{2}},\;\; (x,y)\neq (0,0)  \\
    0, \;\; (x,y)=(0,0) \\
\end{cases}$
is f continuous?
>
>>Yes, $\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}\frac{x^{2}y^{2}}{x^{2}+y^{2}}=f(0,0)=0$  


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example</p>
>
>>f(x,y)=$\begin{cases}
    \frac{y^{3}\sin (x-y)}{\ln (1+x^{2}+y^{2})},\;\; (x,y)\neq (0,0)  \\
    0,\;\; (x,y )=(0,0) \\
\end{cases}$ 
>
>>Is f(x,y) continuous?
>
>>$\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}\frac{y^{3}\sin (x-y )}{\ln (1+x^{2}+y^{2})}$ 
>
>>$\frac{y^{3}\sin (x-y)}{\ln (1+x^{2}+y^{2})}=(\frac{y^{3}\sin (x-y)}{x^{2}+y^{2}})(\frac{x^{2}+y^{2}}{\ln (1+x^{2}+y^{2})})$ 
>
>>$-\frac{y^{3}}{x^{2}+y^{2}}\leq \frac{y^{3}\sin (x-y)}{x^{2}+y^{2}}\leq \frac{y^{3}}{x^{2}+y^{2}}$ 
>
>>Using polar coordinates
>
>>$\frac{y^{3}}{x^{2}+y^{2}}=\frac{r^{3}\sin^{3} \theta}{r^{2}\cos^{2} \theta+r^{2}\sin ^{2}\theta}=r\sin ^{3}\theta=\underbrace{F(r)}_{\xrightarrow[ ]{r\xrightarrow[ ]{}0}0} \underbrace{G(\theta)}_{\text{ bounded }} $ 
>
>>$\pm \frac{y^{3}}{x^{2}+y^{2}}\xrightarrow[ ]{(x,y)\xrightarrow[ ]{}(0,0)}0$ 
>
>>$ \frac{y^{3}\sin (x-y)}{x^{2}+y^{2}} \xrightarrow[ ]{\text{ Sandwich }}0$ 
>
>>$\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}\frac{x^{2}+y^{2}}{\ln (1+x^{2}+y^{2})}$ 
>
>>denote
>$t=x^{2}+y^{2}$
>
>>⭐$\lim\limits_{t\xrightarrow[ ]{}0}\frac{t}{\ln (1+t)}=\lim\limits_{t\xrightarrow[ ]{}0}\frac{1}{\frac{1}{1+t}}=\lim\limits_{t\xrightarrow[ ]{}0}1+t=1$  
>
>>$\xrightarrow[ ]{}\lim\limits_{(x,y)\xrightarrow[ ]{}(0,0)}\frac{y^{3}\sin (x-y)}{\ln (1+x^{2}+y^{2})}=0$ 





[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://offsaying.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/) [![](https://img.shields.io/badge/-Golang-f05032?style=flat-square&logo=go&logoColor=ffffff)](https://golang.org/) [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Rust-003545?style=flat-square&logo=rust&logoColor=ffffff)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/) [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/Kotlin-2496ED?style=flat-square&logo=kotlin&logoColor=ffffff)](https://kotlinlang.org/) [![](https://img.shields.io/badge/Dart-003545?style=flat-square&logo=dart&logoColor=ffffff)](https://dart.dev/) [![](https://img.shields.io/badge/Lua-cb3837?style=flat-square&logo=lua&logoColor=ffffff)](https://www.lua.org/) [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/) [![](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-framework/) [![](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)](https://www.docker.com/) [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![](https://img.shields.io/badge/-PostgreSQL-005571?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/) [![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>© Yu Chen - All rights reserved</p>