# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Infi2 Ass 1</p> {ignore=true}

[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://ferneychen.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/) 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 1</p>
>Compute the following integrals using integration by parts

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>(a)</p>
>$\int_{}^{}e^{\beta x}\cos (\alpha x)dx  $ 

>By parts:
$\int_{}^{}u(x) v'(x) dx=u(x) v(x) -\int_{}^{}u'(X) v(x) dx$ 

>$$\underline{\mathbf{Sol}}$$ $\int_{}^{}e^{\beta x}\cos (\alpha x)dx $ 
$u(x) =e^{\beta x}\;\; \;\; u'(x) =\beta (e^{x})^{\beta -1}e^{x}$ 
$v'(x) =\cos (\alpha x) \;\; \;\; v(x) =\frac{\sin (\alpha x)}{\alpha }  $ 

>$\xrightarrow[]{}\int_{}^{}e^{\beta x}\cos (\alpha x)dx=e^{\beta x}\frac{\sin (\alpha x) }{\alpha }-\int_{}^{}\beta (e^{x})^{\beta -1}e^{x}\frac{\sin (ax) }{\alpha }dx  $ 
=$e^{\beta x}\frac{\sin (\alpha x) }{\alpha }-\int_{}{}\frac{\beta  }{\alpha  }(e^{x})^{\beta }\sin (\alpha x)dx=e^{\beta x}\frac{\sin (\alpha x) }{\alpha }-\frac{\beta  }{\alpha  }\int_{}{}(e^{x})^{\beta }\sin (\alpha x)dx$ 

>For $\int_{}^{}(e^{x})^{\beta }\sin (\alpha x)dx:  $ 
>$u(x) = (e^{x})^{\beta }\;\; \;\; u'(x) =\beta (e^{x})^{\beta -1}  e^{x}$ 
$v'(x) =\sin (\alpha x)\;\; \;\; v(x) =\frac{-\cos (\alpha x)}{\alpha }  $ 
>$\int_{}^{}(e^{x})^{\beta }\sin (\alpha x)dx=-(e^{x})^{\beta }\frac{\cos (\alpha x) }{\alpha } +\frac{\beta}{\alpha }\int_{}^{} (e^{x})^{\beta } \cos (\alpha x) dx $ 

>$\xrightarrow[]{}\int_{}^{}e^{\beta x}\cos (\alpha x)dx=e^{\beta x}\frac{\sin (\alpha x) }{\alpha }+\frac{\beta  }{\alpha  }(e^{x})^{\beta }\frac{\cos (\alpha   x) }{\alpha   }-\frac{\beta  ^{2}}{\alpha  ^{2}}\int_{}^{}(e^{x})^{\beta }\cos (\alpha x)dx    $ 

>$$\xrightarrow[]{}\frac{e^{\beta x}\frac{\sin (\alpha x) }{\alpha }+\frac{\beta  }{\alpha  }(e^{x})^{\beta }\frac{\cos (\alpha   x) }{\alpha   }}{1+\frac{\beta ^{2}}{\alpha ^{2}}}+c \\
\xrightarrow[]{}\frac{\alpha e^{\beta x}{\sin (\alpha x) }+{\beta  }(e^{x})^{\beta }{\cos (\alpha   x) }}{\alpha ^{2}+\beta ^{2}}+c $$


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>(b)</p>

>For each n$\in \mathbb{N}$ , calculate $\int_{}^{}x^{n}e^{-x^{2}}dx$    
The answer may be expressed in terms of the function erf(x) which satisfies $erf'(x)=\frac{2}{\sqrt[]{\pi}}e^{-x^{2}} $
It is also suggested to consider the cases of $ \boxed{odd}$  and $ \boxed{even}$  values of n separately. 

>$$\underline{\mathbf{Sol}}$$ $I_0(x) =\int_{}^{}e^{-x^{2}}dx=\frac{\sqrt[]{\pi}}{2}erf(x) +C$ 
$I_1(x) =\int_{}^{}xe^{-x^{2}}dx=-\frac{1}{2}e^{-x^{2}}+C$ 
for n > 1,
$I_n(x) =\int_{}^{}x^{n}e^{-x^{2}}dx=-\frac{1}{2}x^{n-1}e^{-x^{2}}+\frac{n+1}{2}I_{n-2}(x) +c$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 2</p>

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>a</p>
>$$\int_{}^{}\frac{\ln ^{2}(x) }{x(\ln ^{2}(x) +1) }dx$$   $$\underline{\mathbf{Sol}}$$ using the $ \boxed{substitution}$ (换元)
>$$u=\ln x\;\; \;\; u'=\frac{1}{x}\;\; \;\; du=\frac{1}{x}dx$$ $$\xrightarrow[]{}\int_{}^{}\frac{u^{2}}{u^{2}+1}du=\int_{}^{}\frac{u^{2}+1-1}{u^{2}+1}=\int_{}^{}(1-\frac{1}{u^{2}+1})du=\int_{}^{}du-\int_{}^{}\frac{1}{u^{2}+1}du $$ $$=u-\arctan (u) +c=\ln x-\arctan (\ln x)+C $$$$\because \int_{}^{}\frac{1}{x^{2}+1}dx \Longleftrightarrow \arctan (x) +c$$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>$ \boxed{b}$ </p>
>$$ \int_{}^{}\frac{1}{2-\cos (x) }dx $$ using the $ \boxed{substitution}$ 
$$u=tan(\frac{x}{2})\;\; \;\; du=\frac{1}{2}\frac{1 }{\cos ^{2}(\frac{x}{2}) }dx\;\; \;\; u'=\frac{1}{2}\frac{1 }{\cos ^{2}(\frac{x}{2}) }$$ $\because u^{2}=\frac{1-\cos ^{2}\frac{x}{2}}{\cos ^{2}\frac{x}{2}}=\frac{1}{\cos ^{2}\frac{x}{2}}-1$$$\xrightarrow[]{}du=\frac{1}{2}(u^{2}+1)dx  \\
\int_{}^{}\frac{1}{2-\cos (x) }dx=\int_{}^{}\frac{2du}{(u^{2}+1)(2-\frac{2}{u^{2}+1}+1) }=\int_{}^{}\frac{2}{3u^{2}+1}du \\
2\int_{}^{}\frac{1}{(\sqrt[]{3}u)^{2}+1}du=2 \frac{\arctan (\sqrt{3}u)}{\sqrt[]{3}} +c  \\
=\frac{2\sqrt[]{3}}{2} \arctan (\sqrt[]{3}\tan \frac{x}{2} )+c$$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>c</p>
>$$\int_{}^{}\frac{1}{e^{x}+e^{-x}}dx$$ >using the $ \boxed{substitution}$ 
$$u=e^{x}\;\; \;\; du=e^{x}dx=e^{\ln u  }dx=udx \\
=\int_{}^{}\frac{1}{u(u+\frac{1}{u}) }du \\
=\int_{}^{}\frac{1}{u^{2}+1}du \\
=\arctan (u) +c \\
=\arctan (e^{x})+c $$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>d</p>

>$$\int_{}^{}\sqrt[]{4-x^{2}}dx$$  >using the $ \boxed{substitution}$ 反向 
>$$x=2\sin u\;\; \;\; dx=2\cos u du \\
\int_{}^{}\sqrt[]{4-x^{2}}dx=\int_{}^{}\sqrt[ ]{4-4\sin ^{2}u} 2\cos udu \\
=\int_{}^{}2\cos u\times 2\cos u \\
=4\int_{}^{}\cos ^{2}udu \\
=2\int_{}^{}(\cos 2u+1)du \\
=\sin 2u  +2u+c \\
=x\sqrt[ ]{1-\frac{x^{2}}{4}}+2\arcsin \frac{1}{2}x+c$$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 3</p>
>Calculate the following integral:
$$\int_{}^{}\frac{2x^{3}-2x^{2}+2x+2}{(x-1) ^{2}(x^{2}-2x+3) }dx $$$$\underline{\mathbf{Sol}}$$  Using the rational fractions
$$\xrightarrow[]{}\frac{A}{x-1}+\frac{Bx+C}{(x-1) ^{2}}+\frac{Dx+E}{x^{2}-2x+3} \\
\xrightarrow[]{}\frac{A(x-1)(x-2x+3)+(Bx+C)(x^{2}-2x+3) +(Dx+E_2) (x-1)^{2}  }{(x-1) ^{2}(x^{2}-2x+3) } \\
\xrightarrow[]{}\frac{x^{3}(A+B+D) +x^{2}(-3A-2B+C-2D+E)+x(5A+3B-2C+D-2E)}{(x-1) ^{2}(x^{2}-2x+3)} \\
+\frac{-3A+3C+E}{(x-1) ^{2}(x^{2}-2x+3) } \\
\xrightarrow[]{}\begin{cases}
    A+B+D=2 \\
    -3A-2B+C+E-2D=-2 \\
    5A+3B-2C+D-2E=2 \\
    -3A+3C+E=2 \\
\end{cases}\xrightarrow[]{}\;\; \begin{cases}
    A=C=D=0 \\
    B=E=2 \\
\end{cases}$$ $$\xrightarrow[]{}\int_{}^{}(\frac{2x}{(x-1) ^{2}}+\frac{2}{x^{2}-2x+3})dx\xrightarrow[]{}\int_{}^{}\frac{2x}{(x-1) ^{2}}dx+\int_{}^{}\frac{2}{x^{2}-2x+3}dx$$ for $\int_{}^{}\frac{2x}{(x-1) ^{2}}dx,$ 
$$\int_{}^{}\frac{2x}{(x-1) ^{2}}dx=\int_{}^{}\frac{2}{x-1}dx+\int_{}^{}\frac{2}{(x-1) ^{2}}dx \\
\xrightarrow[]{}2\ln \left\vert x-1 \right\vert+2\frac{1}{1-x}+C $$ for $2\int_{}^{}\frac{1}{x^{2}-2x+3}dx,$ $$\xrightarrow[]{}2\int_{}^{}\frac{1}{( x-1)^{2}+2}dx \\
u=x-1\;\; du=dx \\
\xrightarrow[]{}2\int_{}^{}\frac{1}{u^{2}+2}du \\
\xrightarrow[]{}\int_{}^{}\frac{1}{\frac{u^{2}}{2}+1}du \\
\xrightarrow[]{}\int_{}^{}\frac{1}{(\frac{u}{\sqrt[ ]{2}})^{2}+1}du \\
\xrightarrow[]{}\sqrt[ ]{2}\arctan (\frac{u}{\sqrt[ ]{2}}) +c \\
\xrightarrow[]{}\sqrt[ ]{2}\arctan \frac{(x-1)}{\sqrt[ ]{2}}+c $$Thus,$$\int_{}^{}\frac{2x^{3}-2x^{2}+2x+2}{(x-1) ^{2}(x^{2}-2x+3) }dx  \\
\xrightarrow[]{}2\ln \left\vert x-1 \right\vert+2\frac{1}{1-x}+\sqrt[ ]{2}\arctan \frac{(x-1)}{\sqrt[ ]{2}}+C$$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Problem 4</p>
>Let $f:[0,\infty)\xrightarrow[]{}\mathbb{R}$  be a function defined by:
$f(x) =-(x-2n-1) ^{2n+2}+2,\text{ where }x\in [2n,2n+2]$ $\forall n=0,1,2, \ldots $
Calculate $\int_{}^{}f(x) dx,for\;\; x\in [0,\infty)$
(note that the primitive function of f must be differentiable also at $x=2,4,6, \ldots $) 
$$\underline{\mathbf{Sol}}$$n=0,
$$f(x) =-(x-1) ^{2}+2,x\in \left[ 0,2 \right] \\
\int_{}^{}-(x-1) ^{2}+2dx=-\int_{}^{}(x-1) ^{2}-2dx,x\in \left[ 0,2 \right] \\
-\int_{}^{}(x-1) ^{2}-2dx=-\frac{1}{3}(x-1) ^{3}+2x+c_0$$ n=1,$$f(x) =-(x-3) ^{4}+2,x\in [2,4] \\
\xrightarrow[]{}\int_{}^{}-(x-3) ^{4}+2dx \\
=-\frac{1}{5}(x-3) ^{5}+2x+c_1,x\in [2,4] \\
$$suppose $c_0=0,\xrightarrow[]{}\frac{-1}{3}(x-1) ^{3}=\frac{-1}{5}(x-3) ^{5}+c_1,c_1=\frac{-8}{15}$  
For $n\geq 1$ :
$$\int_{}^{}f(x)dx=\frac{-1}{2n+2}(x-2n-1) ^{2n+3}+x-\sum\limits_{k=0}^{n-1}\frac{4k+8}{(2k+3) (2k+5) }+c_0, \\
\text{ where }x\in [2n,2n+2] $$ 


