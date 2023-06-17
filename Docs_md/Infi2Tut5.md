# <p style='text-align:center;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Infi2 Tut 5</p> {ignore=true}


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Improper Integrals</p>
>
>>$ \boxed{Type\;\; 1}$ 
>
>>$\int_{a}^{\infty}f(x)dx=\lim\limits_{b\xrightarrow[ ]{}\infty}\int_{a}^{b}f(x)dx$ 
>
>>$\int_{-\infty}^{b}f(x)dx=\lim\limits_{a\xrightarrow[ ]{}-\infty}\int_{a}^{b}f(x )dx$ 
>
>>$ \boxed{Type\;\; 2}$ 
>
>>$\lim\limits_{c\xrightarrow[ ]{}a^{+}}\int_{c}^{b}f(x)dx\;\; \text{ or }\lim\limits_{\epsilon\xrightarrow[ ]{}a^{+}}\int_{a+\epsilon}^{b}f(x)dx$ 
<div style='text-align: center;'><img src=https://github.com/Offsaying/OS_Mars/assets/120654757/feacaecc-caa2-49f4-a72b-ce5809bdc77f width='1000' height='150'></div> 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Determining convergence</p>
>
>>1. $ \boxed{Comparison}$ 
f,g are continuous on [a,b] s.t $0\leq f(x)\leq g(x)$
$\xrightarrow[ ]{}\int_{a}^{b}f(x)dx \leq \int_{a}^{b}g(x)dx$  
>
>>$\int_{a}^{b}g(x)dx $ converges $\xrightarrow[ ]{}$ $\int_{a}^{b}f(x)dx$ converges   
>
>>$\int_{a}^{b}f(x)dx $ diverges $\xrightarrow[ ]{}\int_{a}^{b}g(x)dx $ diverges  

>
>>2. $ \boxed{Ratio\;\; Test}$ 
f,g are continuous. $f,g\geq 0$ 
>
>>Type 1 
>
>>$\lim\limits_{x\xrightarrow[ ]{}\infty}\frac{f(x)}{g(x)}=k$ 
$\begin{cases}
   \boxed{0<k<\infty} \xrightarrow[ ]{}\int_{c}^{\infty}fdx\;\; \text{ converges }\Longleftrightarrow \int_{c}^{\infty}gdx \text{ converges }  \\
 \boxed{k=0\text{ and }\int_{c}^{\infty}gdx\;\; \text{ converges }} \xrightarrow[ ]{} \int_{c}^{\infty}fdx\;\; \text{ converges }  \\
 \boxed{k=\infty\text{ and }\int_{c}^{\infty}fdx\;\; \text{ converges }} \xrightarrow[ ]{}\int_{c}^{\infty}gdx \;\; \text{ converges }\\
\end{cases}$ 
>
>>Type 2
>
>>$\lim\limits_{x\xrightarrow[ ]{}a^{+}}\frac{f(x)}{g(x)}=k$ 
$\begin{cases}
   \boxed{0<k<\infty} \xrightarrow[ ]{}\int_{a}^{b}fdx\;\; \text{ converges }\Longleftrightarrow \int_{a}^{b}gdx \text{ converges }  \\
 \boxed{k=0\text{ and }\int_{a}^{b}gdx\;\; \text{ converges }} \xrightarrow[ ]{} \int_{a}^{b}fdx\;\; \text{ converges }  \\
 \boxed{k=\infty\text{ and }\int_{a}^{b}fdx\;\; \text{ converges }} \xrightarrow[ ]{}\int_{a}^{b}gdx \;\; \text{ converges }\\
\end{cases}$ 


>3. $ \boxed{Absolute\;\; convergence}$  
>
>>$\int_{a}^{\infty}\left| f(x)\right|dx$ converges  
$\xrightarrow[ ]{}\int_{a}^{\infty}f(x)dx$ (absolutely) converges  

>4. $ \boxed{Dirichlet}$ 
>
>>1. f,g on $[a,\infty)$ 
>
>>2. f is continuous and $F(x)=\int_{a}^{x}f(x)dx$ is bounded 
>
>>3. g is differentiable and $\int_{a}^{\infty}\left| g'\right|dx$ converges and $\lim\limits_{x\xrightarrow[ ]{}\infty}g(x)=0 $
>
>>$\xrightarrow[ ]{}\int_{a}^{\infty}f(x)g(x)dx$  converges

>5. 第五种方法 
>
>>$\int_{a>0}^{\infty}\frac{1}{x^{\alpha }}dx$ converges $\Longleftrightarrow \alpha >1$  
>
>>$\int_{0}^{a>0}\frac{1}{x^{\alpha }}dx $ converges $\Longleftrightarrow \alpha <1$  

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 1</p>

>Evaluate:
>
>>a) $\int_{4}^{5}\frac{dx}{\sqrt[ ]{x-4}}$ 
>
>>b) $\int_{-1}^{1}\frac{1}{x^{2}}dx$ 
>
>>c) $\int_{-2}^{2}\frac{dx}{\sqrt[ ]{4-x^{2}}}$ 

>$$\underline{\mathbf{Sol}}$$ a) $\int_{4}^{5}\frac{dx}{\sqrt[ ]{x-4}}=\lim\limits_{a\xrightarrow[ ]{}4^{+}}\int_{a}^{5}\frac{dx}{\sqrt[ ]{x-4}}=\lim\limits_{a\xrightarrow[ ]{}4^{+}}2\sqrt[ ]{x-4}\bigg|_{a}^{5}$ 
$=\lim\limits_{a\xrightarrow[ ]{}4^{+}}(2-2\sqrt[ ]{a-4})=2$ 



[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://offsaying.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/) [![](https://img.shields.io/badge/-Golang-f05032?style=flat-square&logo=go&logoColor=ffffff)](https://golang.org/) [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Rust-003545?style=flat-square&logo=rust&logoColor=ffffff)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/) [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/Kotlin-2496ED?style=flat-square&logo=kotlin&logoColor=ffffff)](https://kotlinlang.org/) [![](https://img.shields.io/badge/Dart-003545?style=flat-square&logo=dart&logoColor=ffffff)](https://dart.dev/) [![](https://img.shields.io/badge/Lua-cb3837?style=flat-square&logo=lua&logoColor=ffffff)](https://www.lua.org/) [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/) [![](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-framework/) [![](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)](https://www.docker.com/) [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![](https://img.shields.io/badge/-PostgreSQL-005571?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/) [![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>© Yu Chen - All rights reserved</p>