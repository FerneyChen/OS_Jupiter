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
>>$\lim\limits_{c\xrightarrow[ ]{}a^{+}}\int_{c}^{b}f(x)dx\;\; \text{ or }\lim\limits_{\epsilon\xrightarrow[ ]{}0^{+}}\int_{a+\epsilon}^{b}f(x)dx$ 
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
$
   \boxed{0<k<\infty} \xrightarrow[ ]{}\int_{c}^{\infty}fdx\;\; \text{ converges }\Longleftrightarrow \int_{c}^{\infty}gdx \text{ converges }  \\
 \boxed{k=0\text{ and }\int_{c}^{\infty}gdx\;\; \text{ converges }} \xrightarrow[ ]{} \int_{c}^{\infty}fdx\;\; \text{ converges }  \\
 \boxed{k=\infty\text{ and }\int_{c}^{\infty}fdx\;\; \text{ converges }} \xrightarrow[ ]{}\int_{c}^{\infty}gdx \;\; \text{ converges }\\
$ 
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

>$$\underline{\mathbf{Sol}}$$ 
>
>>a) $\int_{4}^{5}\frac{dx}{\sqrt[ ]{x-4}}=\lim\limits_{a\xrightarrow[ ]{}4^{+}}\int_{a}^{5}\frac{dx}{\sqrt[ ]{x-4}}=\lim\limits_{a\xrightarrow[ ]{}4^{+}}2\sqrt[ ]{x-4}\bigg|_{a}^{5}$ 
$=\lim\limits_{a\xrightarrow[ ]{}4^{+}}(2-2\sqrt[ ]{a-4})=2$ 
>
>>b) $\int_{-1}^{1}\frac{1}{x^{2}}dx$ 
>
>>🔴 $ \boxed{Wrong}$
$\int_{-1}^{1}\frac{1}{x^{2}}dx=-\frac{1}{x}\bigg|_{-1}^{1}=-1-1=-2$
>WHY? 
$\because $ The integral cannot be negative! （面积！）
$\because $ When $x\xrightarrow[ ]{}0$ something must be happened! 
>
>>🟢 $\boxed{Right}$
$\int_{-1}^{1}\frac{1}{x^{2}}dx =\lim\limits_{\epsilon \xrightarrow[ ]{}0^{-}}\int_{-1}^{\epsilon}\frac{1}{x^{2}}dx+\lim\limits_{\epsilon\xrightarrow[ ]{}0^{+}}\int_{\epsilon}^{1}\frac{1}{x^{2}}dx$   
>$=\lim\limits_{\epsilon\xrightarrow[ ]{}0^{-}}(-\frac{1}{x}\bigg|_{-1}^{\epsilon})+\lim\limits_{\epsilon\xrightarrow[ ]{}0^{+}}(-\frac{1}{x}\bigg|_{\epsilon}^{1})$
$=\underbrace{\lim\limits_{\epsilon\xrightarrow[ ]{}0^{-}}(-\frac{1}{\epsilon}-1)}_{\infty} +\underbrace{\lim\limits_{\epsilon\xrightarrow[ ]{}0^{+}}(-1-\frac{1}{\epsilon})}_{\infty} $
Thus, the integral diverges.
>
>>c) $\int_{-2}^{2}\frac{dx}{\sqrt[ ]{4-x^{2}}}$ 
>
>>Consider the anti-derivative first
$\int_{-2}^{2}\frac{dx}{\sqrt[ ]{4-x^{2}}}=\int_{-2}^{2}\frac{dx}{2\sqrt[ ]{1-(\frac{x}{2})^{2}}}=\arcsin (\frac{x}{2})+\boxed{c} $ 
>
>>$\int_{-2}^{2}\frac{dx}{\sqrt[ ]{4-x^{2}}}=\lim\limits_{\epsilon\xrightarrow[ ]{}0^{+}}\int_{-2+\epsilon}^{2-\epsilon}\frac{dx}{\sqrt[ ]{4-x^{2}}}$
$=\lim\limits_{\epsilon\xrightarrow[ ]{}0^{+}}(\underbrace{\arcsin \frac{2-\epsilon}{2}}_{\frac{\pi}{2}} -\underbrace{\arcsin \frac{-2+\epsilon}{2}}_{-\frac{\pi}{2}}) =\pi$ 
>
>>$(\int_{-2}^{2}\frac{dx}{\sqrt[ ]{4-x^{2}}}=\lim\limits_{\epsilon\xrightarrow[ ]{}0^{+}}\int_{-2+\epsilon}^{0}\frac{dx}{\sqrt[ ]{4-x^{2}}}+\lim\limits_{\epsilon\xrightarrow[ ]{}0^{+}}\int_{0}^{2-\epsilon}\frac{dx}{\sqrt[ ]{4-x^{2}}})$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 2</p>
>Evaluate
a) $\int_{0}^{\infty}e^{-x}dx$ 
b) $\int_{1}^{\infty}\cos xdx$ 
>$$\underline{\mathbf{Sol}}$$ 
>
>>a) $\int_{0}^{\infty}e^{-x}dx$
$=\lim\limits_{b\xrightarrow[ ]{}\infty}\int_{0}^{b}e^{-x}dx$
$=\lim\limits_{b\xrightarrow[ ]{}\infty}(-e^{-x})\bigg|_{0}^{b}$
$=\lim\limits_{b\xrightarrow[ ]{}\infty}(\underbrace{-e^{-b}}_{0} +1)=1$ 
>
>>$=\lim\limits_{b\xrightarrow[ ]{}\infty}\int_{1}^{b}\cos xdx$ 
$=\lim\limits_{b\xrightarrow[ ]{}\infty}\sin x\bigg|_{1}^{b}$ 
$=\lim\limits_{b\xrightarrow[ ]{}\infty}(\sin b-\sin 1)$ 
DNE $\because \sin b $ will oscillates between -1 and 1 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 3</p>
>Determine if each of the following integrals converges or diverges
>
>>$\int_{0}^{1}\frac{dx}{x^{2}+5x}$ 
>$$\underline{\mathbf{Sol}}$$ 
>
>>$\boxed{Comparison?}$
>
>>Consider $\frac{1}{x^{2}+5x }\leq \frac{1}{x^{2}}$ but $\int_{0}^{1}\frac{1}{x^{2}}dx$ diverges  
>
>>$ \boxed{Ratio?}$ 
>
>>$f(x)=\frac{1}{x^{2}+5\times }$ 
$\lim\limits_{x\xrightarrow[ ]{}0}\frac{f(x)}{g(x)?}=k$
$0<k<\infty\xrightarrow[ ]{}\int_{}^{}f\;\; converges \Longleftrightarrow \int_{}^{}g\;\; converges$
>
>>near x=0,$x^{2}+5x\approx 5x$  consider $g(x)=\frac{1}{5x}$ 
>
>>$\lim\limits_{x\xrightarrow[ ]{}0}\frac{\frac{1}{x^{2}+5x }}{\frac{1}{5x}}=\lim\limits_{x\xrightarrow[ ]{}0}\frac{5x}{x^{2}+5x}=\lim\limits_{x\xrightarrow[ ]{}0}\frac{5}{x+5}=1=k$ 
>
>>$0<k<\infty\xrightarrow[ ]{}\int_{0}^{1}\frac{1}{x^{2}+5x}dx $ converges $\Longleftrightarrow \int_{0}^{1}\frac{1}{5x}dx$ converges   
But $\int_{0}^{1}\frac{1}{5x}$ diverges $\xrightarrow[ ]{}\int_{0}^{1}\frac{dx}{x^{2}+5x}$ diverges  
>
>>($\int_{a>0}^{\infty}\frac{1}{x^{\alpha }}dx $ converges $\Longleftrightarrow \alpha >1$)
($\int_{0}^{\alpha >0}\frac{1}{x^{\alpha }}dx$ converges $\Longleftrightarrow \alpha <1$)

>$\int_{1}^{\infty}\frac{\cos x}{x^{2}}dx$ 
>$$\underline{\mathbf{Sol}}$$ 
>
>>$ \boxed{Absolute\;\; Converges?}$ 
>
>>Consider if $\int_{1}^{\infty}\left| \frac{\cos x}{x^{2}}\right|dx $ converges  
$ \boxed{Comparison}$ :$\left| \frac{\cos x}{x^{2}}\right|\leq \frac{1}{x^{2}}$ 
$\because \int_{1}^{\infty}\frac{1}{x^{2}}dx$ converges $\xrightarrow[ ]{}$ $\int_{1}^{\infty}\left| \frac{\cos x}{x^{2}}\right|dx$ converges    
$\because \int_{1}^{\infty}\left| \frac{\cos x}{x^{2}}\right|$ converges $\xrightarrow[ ]{}\int_{1}^{\infty}\frac{\cos x}{x^{2}}$ converges   

>$\int_{0}^{1} \frac{\sin x}{x}dx$ 
>
>>$\frac{\sin x}{x} \geq 0,\;\; x\in (0,1]$ 
>
>>Consider for x near 0,
$\because \underbrace{x\geq \sin x}_{*} \xrightarrow[ ]{}\frac{\sin x}{x}\leq \frac{x}{x}=1$ 
$\because \int_{0}^{1}1dx=1$ converges $\xrightarrow[ ]{}\int_{0}^{1} \frac{\sin x}{x}$ converges   
>
>>$*:Let\;\; g(x)=x-\sin x,g(0)=0,g'(x)=1-\cos x\geq 0$
$\xrightarrow[ ]{}g(x)\geq 0\xrightarrow[ ]{}x\geq \sin x$ 
>
>>$ \boxed{Remark}$ 
>
>>$\lim\limits_{x\xrightarrow[ ]{}0}\frac{\sin x}{x}=1$ 
>
>>$\int_{0}^{1} \frac{\sin x}{x}dx$ is not an improper integral 

>$\int_{1}^{\infty}\frac{\sin x}{x} dx=\lim\limits_{b\xrightarrow[ ]{}\infty}\int_{1}^{b} \frac{\sin x}{x}dx$  
>
>>$\int_{1}^{b} \frac{\sin x}{x}dx=\frac{-\cos x}{x}\bigg|_{1}^{b}-\int_{1}^{b} \frac{\cos x}{x^{2}}dx$ 
$u=\frac{1}{x}\;\; \;\; v'=\sin x  \\
u'=-\frac{1}{x^{2}}\;\; \;\; v=-\cos x$ 
>
>>$\int_{1}^{\infty}\frac{\sin x}{x}dx =\lim\limits_{b\xrightarrow[ ]{}\infty}(\underbrace{\frac{-\cos x}{x}\bigg|_{1}^{b}}_{\cos 1} -\underbrace{\int_{1}^{b} \frac{\cos x}{x^{2}}dx}_{\text{ Converges by Previous }} ) $ 
$\xrightarrow[ ]{}\int_{1}^{\infty}\frac{\sin x}{x}dx $ Converges
>
>>$ \boxed{Method_2:Dirichlet}$ 
>
>>$\int_{1}^{\infty}\frac{\sin x}{x}dx $ 
>
>>$f=\sin x\;\; g=\frac{1}{x}\;\; g'=-\frac{1}{x^{2}}$ 
>
>>$F(x)=\int_{1}^{x} \sin t\;dt$
$=-\cos t\bigg|_{1}^{x}=-\cos x+\cos 1$ is bounded 
>
>>$ g $ is differentiable 
>
>>$\int_{1}^{\infty}\left| g'\right|dx=\int_{1}^{\infty}\frac{1}{x^{2}}dx     $ converges and $\lim\limits_{x\xrightarrow[ ]{}\infty}\frac{1}{x}=0$  
Thus,$$\int_{1}^{\infty}\frac{\sin      x }{x}dx $$converges. 

>$\int_{0}^{5} \frac{1}{\sqrt[ 3]{7x+2x^{4}}}dx$ 
>
>>$ \boxed{Ratio}$ 
>
>>$\lim\limits_{x\xrightarrow[ ]{}0}\frac{f(x)}{g(x)?}=k$ 
>
>>near x=0 :$7x+2x^{4}\approx 7x$ 
consider $g(x)=\frac{1}{\sqrt[ 3]{7x}}$ 
>
>>$\lim\limits_{x\xrightarrow[ ]{}0^{+}}\frac{\frac{1}{\sqrt[ 3]{7x+2x^{4}}}}{\frac{1}{\sqrt[ 3]{7x}}}=\lim\limits_{x\xrightarrow[ ]{}0^{+}}\sqrt[3 ]{\frac{7x}{7x+2x^{4}}}=\lim\limits_{x\xrightarrow[ ]{}0^{+}}\sqrt[ 3]{\frac{1}{1+\frac{2}{7}x^{3}}}=1=k$ 
>
>>$0<k<\infty\xrightarrow[ ]{}\int_{0}^{5} \frac{1}{\sqrt[3]{7x+2x^{4}}}dx  $ converges $\Longleftrightarrow  \int_{0}^{5} \frac{1}{\sqrt[ 3]{7x}}dx$ converges 
>
>>$\int_{0}^{5} \frac{1}{\sqrt[ 3]{7}\sqrt[ 3]{x}}dx$ converges $\because \alpha <1 (Type\;\; 2)$    
>
>>$\xrightarrow[ ]{}\int_{0}^{5} \frac{1}{\sqrt[ 3]{7x+2x^{4}}}dx$ converges. 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 4</p>
>For which value of $p,q\in \mathbb{R}^{+}$ the integral $\int_{0}^{\infty}\frac{dx}{x^{p}(1+x)^{q}} $ converges ? 
>
>>Two Problems:
>
>>1. $\int_{0}^{1}\frac{dx}{x^{p}(1+x)^{q}} $  
>
>>2. $\int_{1}^{\infty}\frac{dx}{x^{p}(1+x )^{q}} $ 

>1. $\int_{0}^{1} \frac{dx}{x^{p}(1+x)^{q}}$ 
>
>>$ \boxed{Ratio}$ 
>
>>near 0 : $x^{p}(1+x)^{q}\approx x^{p}$ 
>
>>consider $g(x)=\frac{1}{x^{p}}$ 
>
>>$\lim\limits_{x\xrightarrow[ ]{}0^{+}}\frac{\frac{1}{x^{p}(1+x)^{q}}}{\frac{1}{x^{p}}}=\lim\limits_{x\xrightarrow[ ]{}0^{+}}\frac{1}{(1+x)^{q}}=1$ 
>
>>$\because 0<1<\infty$ 
>
>>$\int_{0}^{1} \frac{dx}{x^{p}(1+x)^{q}}$ converges $\Longleftrightarrow $ $\int_{0}^{1} \frac{dx}{x^{p}}$ converges 
$\Longleftrightarrow p>1$     

>2. $\int_{1}^{\infty}\frac{dx}{x^{p}(1+x)^{q}} $
>
>>$ \boxed{Ratio}$  
>
>>For very large x:
$x^{p}(1+x)^{q}\approx x^{p}x^{q}=x^{p+q}$
>
>>Consider $g(x)=\frac{1}{x^{p+q}}$
>
>>$\lim\limits_{x\xrightarrow[ ]{}\infty}\frac{\frac{1}{x^{p}(1+x)^{q}}}{\frac{1}{x^{p+q}}}=\lim\limits_{x\xrightarrow[ ]{}\infty}\frac{x^{q}}{(1+x)^{q}}$ 
$\lim\limits_{x\xrightarrow[ ]{}\infty}\frac{1}{(\frac{1}{x}+1)^{q}}=1$ 
>
>>$0<1<\infty$ 
>
>>$\int_{1}^{\infty}\frac{dx}{x^{p}(1+x)^{q}} $ converges 
$\Longleftrightarrow \int_{1}^{\infty}\frac{1}{x^{p+q}}dx  $ converges   
>
>>$p+q>1$ 

>Answer 
>
>>$p+q>1\;\; and\;\; p>1$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 5</p>
>Let $f\geq 0$ be a continuous function on $[0,\infty)$ 
Prove or disprove :  If$\int_{0}^{\infty}f(x)dx   $ converges 
$\xrightarrow[ ]{}\lim\limits_{x\xrightarrow[ ]{}\infty}f(x )=0$  
>$$\underline{\mathbf{Sol}}$$ 
>
>>Answer : False 
counter example:<div style='text-align: center;'><img src=https://github.com/Offsaying/OS_Mars/assets/120654757/5a9cef57-bbf1-46e5-8fa3-cae6c8eccd45 width='1000' height=''></div> 
>
>>width of the base of each triangle $r_n=\frac{1}{2^{n-1}}$ 
>
>>$\int_{0}^{\infty}f(x)dx=\sum\limits_{n=1}^{\infty} \text{ Area of the triangles } $  
$=\sum\limits_{n=1}^{\infty}\frac{1}{2}\frac{1}{2^{n-1}}\cdot 1$ 
$=\sum\limits_{n=1}^{\infty}\frac{1}{2^{n}}=1$ 
Thus, the integral converges but $\lim\limits_{x\xrightarrow[ ]{}\infty}f(x)\neq 0$ 
>
>>$ \boxed{Remark}$ 
>
>>What about the same but $f>0?$



[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://offsaying.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/) [![](https://img.shields.io/badge/-Golang-f05032?style=flat-square&logo=go&logoColor=ffffff)](https://golang.org/) [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Rust-003545?style=flat-square&logo=rust&logoColor=ffffff)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/) [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/Kotlin-2496ED?style=flat-square&logo=kotlin&logoColor=ffffff)](https://kotlinlang.org/) [![](https://img.shields.io/badge/Dart-003545?style=flat-square&logo=dart&logoColor=ffffff)](https://dart.dev/) [![](https://img.shields.io/badge/Lua-cb3837?style=flat-square&logo=lua&logoColor=ffffff)](https://www.lua.org/) [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/) [![](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-framework/) [![](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)](https://www.docker.com/) [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![](https://img.shields.io/badge/-PostgreSQL-005571?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/) [![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>© Yu Chen - All rights reserved</p>