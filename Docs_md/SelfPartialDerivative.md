# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Partial Derivative (self)</p> {ignore=true}

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 1</p>
>Here is an example for partial derivative,
>$$f(x,y) =x^{2}y+\sin y$$ 
>>If we consider at the point (1,2)
>
>>$\frac{\partial f}{\partial x}(1,2)=\frac{\partial}{\partial x }(x^{2}2+\sin(2) )\bigg|_{x=1}^{}    $  
$=4x+0\bigg|_{x=1}^{}$ 
$=4$ 
>
>>$\frac{\partial f}{\partial y}(1,2) =\frac{\partial }{\partial y}(1^{2}y+\sin y)\bigg|_{y=2}^{} $ 
$=1+\cos y\bigg|_{y=2}^{}$ 
$=1+\cos 2$ 
>
>>If we consider the general function formula,
>
>>$\frac{\partial f}{\partial x}(x,y) =\frac{\partial }{\partial x}(x^{2}y+\sin y) $  
>
>>Here we will consider y as a constant,
>
>>$=2yx+0=2yx$ 
>
>>$\frac{\partial f}{\partial  y}(x,y) =\frac{\partial }{\partial y}(x^{2}y+\sin y)  $ 
>
>>Here we will consider x as a  constant,
>
>>$=x^{2}+\cos y$


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 2</p>

>$f(x,y)=7x^{2}-x^{3}y^{4}+5x^{4}y^{3}$
>
>>The partial derivative respect to x,
>
>>$f_{x} = 14x-3y^{4}x^{2}+20y^{3}x^{3}$
>
>>The partial derivative respect to y,
>
>>$f_y=0-4x^{3}y^{3}+15x^{4}y^{2}=-4x^{3}y^{3}+15x^{4}y^{2}$


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 3</p>

>$z=3x^{2}y^{4}-5x^{7}+4y^{8}$ 
>
>>$z=f(x,y) $ 
>
>>$f_{x}=6y^{4}x-35x^{6}$ 
>
>>$f_y=12x^{2}y^{3}+32y^{7}$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 4</p>

>$z=e^{x^{2}y^{3}}$ 
>
>>$z=f(x,y) $ 
>
>>$f_{x}=e^{x^{2}y^{3}}2y^{3}x=\frac{\partial z}{\partial y} $ 
>
>>$f_{y}=e^{x^{2}y^{3}}3x^{2}y^{2}=\frac{\partial z}{\partial y}$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 5</p>

>$z=x^{4}e^{y^{5}}$ 
>
>>$\frac{\partial z}{\partial x}=4x^{3}e^{y^{5}}$ 
>
>>$\frac{\partial z}{\partial y}=5x^{4}e^{y^{5}}y^{4}$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 6</p>

>$f(x,y) =\ln (x^{2}+y^{2}) $ 
>
>>$\frac{\partial f}{\partial x}=\frac{2x}{x^{2}+y^{2}}$ 
>
>>$\frac{\partial f}{\partial y}=\frac{2y}{x^{2}+y^{2}}$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 7</p>

>$z=\ln (\frac{x^{2}}{y}) $ 
>
>>$\frac{\partial z}{\partial x}=\frac{\frac{2}{y}x}{\frac{x^{2}}{y}}=\frac{2}{x}$ 
>
>>$\frac{\partial z}{\partial y}=\frac{-x^{2}y^{-2}}{\frac{x^{2}}{y}}=\frac{-1}{y}$ 
>
>>If we evaluate the values in (1,2)
>
>>$\frac{\partial z}{\partial x}=\frac{2}{1}=2 \\
\frac{\partial z}{\partial y }=-\frac{1}{2}$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 8</p>

>$f(x,y,z) =x^{5}y^{2}z^{4}$ 
>>$f_{x}=5x^{4}(y^{2}z^{4}) $ 
>
>>$f_{y}=2y(x^{5}z^{4}) $ 
>
>>$f_{z}=4z^{3}(x^{5}y^{2}) $ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 9</p>

>$w=z^{3}(\ln zy)(e^{x^{2}y^{3}z^{4 }})  $ 
>
>>$\frac{\partial w}{\partial x}=z^{3}(\ln zy )(e^{x^{2}y^{3}z^{4}})(y^{3}z^{4}2x)   $ 
>
>>$\frac{\partial w}{\partial y}=z^{3} (\frac{1}{y}(e^{x^{2}y^{3}z^{4}})+(\ln zy )(e^{x^{2}y^{3}z^{4}})  (3x^{2}z^{4}y^{2}) ) \\
= z^{3}(\frac{e^{x^{2}y^{3}z^{4}}}{y}+(\ln zy )(e^{x^{2}y^{3}z^{4}})  (3x^{2}z^{4}y^{2}) )) $ 
>
>>$\frac{\partial w}{\partial z}=3z^{2}(\ln zy )(e^{x^{2}y^{3}z^{4}})+z^{2}(e^{x^{2}y^{3}z^{4}}) +z^{3}(\ln zy) (e^{x^{2}y^{3}z^{4}})(4z^{3}x^{2}y^{3}) \\
=z^{2}(e^{x^{2}y^{3}z^{4}})(3\ln zy+1+4z^{4}x^{2}y^{3}\ln zy)        $ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 10</p>

>$f=x^{3}+4x^{5}y^{3}+5y^{4}$ 
>
>>$f_{x}=3x^{2}+20y^{3}x^{4} $ 
>
>>$f_{y}=12x^{5}y^{2}+20y^{3}$  
>
>>$f_{x x}=6x+80y^{3}x^{3}$ 
>
>>$f_{x y}=60x^{4}y^{2}$    
>
>>$f_{y y}=24x^{5}y+80y^{3}$ 
>
>>$f_{y x}=60y^{2}x^{4}$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example 11</p>

>$f=x^{3}y^{4}+z^{2}x^{3}y+4x^{3}z^{4}$ 
>
>>$f_{x}=3y^{4}x^{2}+3z^{2}yx^{2}+12z^{4}x^{2}$ 
>
>>$f_{xy}=12x^{2}y^{3}+3z^{2}x^{2}$ 
>
>>$f_{xyz}=6z^{2}x$


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Equality of Mixed Partial Derivative</p>

>
>>$f_{xy}=f_{yx}$ 
>
>>$f_{xyz}=f_{xzy}=f_{yxz}$ 
>
>>$\vdots$ 


[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://offsaying.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/)  [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)  [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/)  [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/)  [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/)[![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>© Yu Chen - All rights reserved</p>



