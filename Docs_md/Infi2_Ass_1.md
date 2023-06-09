# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Infi2 Ass 1</p> {ignore=true}

[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://ferneychen.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/) 

>Compute the following integrals using integration by parts

>$\int_{}^{}e^{\beta x}\cos (\alpha x)dx  $ 

>By parts:
$\int_{}^{}u(x) v'(x) dx=u(x) v(x) -\int_{}^{}u'(X) v(x) dx$ 

>$\int_{}^{}e^{\beta x}\cos (\alpha x)dx $ 
$u(x) =e^{\beta x}\;\; \;\; u'(x) =\beta (e^{x})^{\beta -1}e^{x}$ 
$v'(x) =\cos (\alpha x) \;\; \;\; v(x) =\frac{\sin (\alpha x)}{\alpha }  $ 

>$\xrightarrow[]{}\int_{}^{}e^{\beta x}\cos (\alpha x)dx=e^{\beta x}\frac{\sin (\alpha x) }{\alpha }-\int_{}^{}\beta (e^{x})^{\beta -1}e^{x}\frac{\sin (ax) }{\alpha }dx  $ 
=$e^{\beta x}\frac{\sin (\alpha x) }{\alpha }-\int_{}{}\frac{\beta  }{\alpha  }(e^{x})^{\beta }\sin (\alpha x)dx=e^{\beta x}\frac{\sin (\alpha x) }{\alpha }-\frac{\beta  }{\alpha  }\int_{}{}(e^{x})^{\beta }\sin (\alpha x)dx$ 

>For $\int_{}^{}(e^{x})^{\beta }\sin (\alpha x)dx:  $ 
>$u(x) = (e^{x})^{\beta }\;\; \;\; u'(x) =\beta (e^{x})^{\beta -1}  e^{x}$ 
$v'(x) =\sin (\alpha x)\;\; \;\; v(x) =\frac{-\cos (\alpha x)}{\alpha }  $ 
>$\int_{}^{}(e^{x})^{\beta }\sin (\alpha x)dx=-(e^{x})^{\beta }\frac{\cos (\alpha x) }{\alpha } +\frac{\beta}{\alpha }\int_{}^{} (e^{x})^{\beta } \cos (\alpha x) dx $ 

>$\xrightarrow[]{}\int_{}^{}e^{\beta x}\cos (\alpha x)dx=e^{\beta x}\frac{\sin (\alpha x) }{\alpha }+\frac{\beta  }{\alpha  }(e^{x})^{\beta }\frac{\cos (\beta  x) }{\alpha   }-\frac{\beta  ^{2}}{\alpha  ^{2}}\int_{}^{}(e^{x})^{\beta }\cos (\alpha x)dx    $ 

>$$\frac{e^{\beta x}\frac{\sin (\alpha x) }{\alpha }+\frac{\beta  }{\alpha  }(e^{x})^{\beta }\frac{\cos (\beta  x) }{\alpha   }}{1+\frac{\beta ^{2}}{\alpha ^{2}}} \\
\xrightarrow[]{}\frac{\alpha e^{\beta x}{\sin (\alpha x) }+{\beta  }(e^{x})^{\beta }{\cos (\beta  x) }}{\alpha ^{2}+\beta ^{2}}
$$
