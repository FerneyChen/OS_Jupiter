# <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-family:Poppins;font-weight:1000;background-color:none;vertical-align:middle;padding:60px;margin-top:10px'>Orthogonal Matrix</p> {ignore=true}


## <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>1 Def</p>

>$A$  is orthogonal $\Longleftrightarrow AA^{T}=I=A^{T}A$  


## <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>2 Properties</p>
>$A $ is orthogonal, 
>1. $A^{T}=A^{-1}$ 
>2. $A\;\; and\;\; B$ are orthogonal $\;\xrightarrow[ ]{}\;AB $ is orthogonal 
>3. $A^{T}\;\; and\;\; A^{-1}$ are orthogonal  
>4. $\left| A\right|=\pm 1$ 


## <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>3 Examples</p>


### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>3.1 Ex 1</p>

>Show that $A=\frac{1}{3}\begin{bmatrix} 
    1 &2 &2  \\
    2 &1 &-2  \\
    2 &-2 &1  \\
\end{bmatrix} $ is orthogonal.


#### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>Sol</p>
>1. $A$ is orthogonal  $\Longleftrightarrow A^{T}A=I$ 
>2. $A A^{T}=\frac{1}{3}\begin{bmatrix} 
    1 &2 &2  \\
    2 &1 &-2  \\
    2 &-2 &1  \\
\end{bmatrix} \frac{1}{3}\begin{bmatrix} 
    1 &2 &2  \\
    2 &1 &-2  \\
    2 &-2 &1  \\
\end{bmatrix}  \\
 = \frac{1}{9}\begin{bmatrix} 
    9 &0 &0  \\
    0 &9 &0  \\
    0 &0 &9  \\
\end{bmatrix} =\begin{bmatrix} 
    1 &0 &0  \\
    0 &1 &0  \\
    0 &0  &1 \\
\end{bmatrix}=I $ 
>
>Thus, $A$ is orthogonal.


### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>3.2 Ex 2</p>

>Show that $A=\begin{bmatrix} 
    \cos \theta  &0  &\sin \theta  \\
    0 &1 &0  \\
    -\sin \theta  &0  &\cos \theta  \\
\end{bmatrix} $ is orthogonal.


#### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>Sol</p>
>1. A is orthogonal $\Longleftrightarrow A^{T}A=I$ 
>2. $A A^{T}=\begin{bmatrix} 
    \cos \theta  &0 & \sin \theta  \\
    0 &1 &0  \\
    -\sin \theta  &0 &\cos \theta\\
\end{bmatrix} \begin{bmatrix} 
    \cos \theta  &0 & \sin \theta  \\
    0 &1 &0  \\
    -\sin \theta  &0 &\cos \theta\\
\end{bmatrix} $
$\begin{bmatrix} 
    1 &0 &0  \\
    0 &1 &0  \\
    0 &0 &1 \\
\end{bmatrix}=I $  
>
>Thus, A is orthogonal.


## <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>4 Def : Proper Orthogonal Matrix</p>
>An orthogonal matrix $ A $ is $ \boxed{proper}$  orthogonal $\Longleftrightarrow \left| A\right|=1$ 


### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>4.1 Ex 1 </p>

>$A=\begin{bmatrix} 
    \cos \theta  &-\sin \theta  \\
    \sin \theta  &\cos \theta  \\
\end{bmatrix} $ 

#### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>Sol</p>

>$\left| A\right|=\begin{vmatrix} 
    \cos \theta  & -\sin \theta  \\
    \sin \theta  &\cos \theta \\
\end{vmatrix} =\cos ^{2}\theta +\sin^{2}\theta =1 $ 
So, $ A $ is proper orthogonal.


## <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>4 Def : Improper Orthogonal Matrix</p>
>An orthogonal matrix $ A $ is $ \boxed{improper}$  orthogonal $\Longleftrightarrow \left| A\right|=-1$ 


### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>4.1 Ex 1 </p>

>$A=\begin{bmatrix} 
    \cos \theta  &-\sin \theta  \\
    -\sin \theta  &-\cos \theta  \\
\end{bmatrix} $ 

#### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>Sol</p>

>$\left| A\right|=\begin{vmatrix} 
    \cos \theta  & -\sin \theta  \\
    -\sin \theta  &-\cos \theta \\
\end{vmatrix} =-\cos ^{2}\theta -\sin^{2}\theta =-1$ 
So, $ A $ is proper orthogonal.




[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://offsaying.com) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/) [![](https://img.shields.io/badge/-Golang-f05032?style=flat-square&logo=go&logoColor=ffffff)](https://golang.org/) [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Rust-003545?style=flat-square&logo=rust&logoColor=ffffff)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/) [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/Kotlin-2496ED?style=flat-square&logo=kotlin&logoColor=ffffff)](https://kotlinlang.org/) [![](https://img.shields.io/badge/Dart-003545?style=flat-square&logo=dart&logoColor=ffffff)](https://dart.dev/) [![](https://img.shields.io/badge/Lua-cb3837?style=flat-square&logo=lua&logoColor=ffffff)](https://www.lua.org/) [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/) [![](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-framework/) [![](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)](https://www.docker.com/) [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![](https://img.shields.io/badge/-PostgreSQL-005571?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/) [![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
<p style='color:black;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;font-weight:1000;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>© Offsaying - All rights reserved</p>