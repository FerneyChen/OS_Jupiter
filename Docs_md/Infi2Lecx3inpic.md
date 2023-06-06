# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Infi 2 Lec x3</p> {ignore=true}

>Moodle
>proof of dini s theorem 
proof $f_{xy}=f_{yx}$ 
proof chain rule 

>chain rule 
>
>if $g(u,v)=f(x(u,v) ,y(u,v) ) \xrightarrow[]{} \frac{dy}{fu}(u_0,v_0) $  

>$\underline{\mathbf{Proof}} $ 
f differentiable at $(x_0,y_0)\Longleftrightarrow  f(x,y)=f(x_0,y_0)+\frac{df}{dx}(x_0,y_0)(x-x_0)+\frac{df}{dy}(x_0,y_0)+E(x,y)  
\left \| (x,y) -(x_0,y_0)   \right \|  \\vdo
$


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>example</p>

>$f(x,y) =x+y^{2}-1 \begin{cases}
    \frac{df}{dx}(x,y) =1 \\
    \frac{df}{dy}(x,y) =2y \\
\end{cases}$ 
$x=x(u,v) =u^{2}+v^{2} \begin{cases}
    \frac{dx}{du}(u,v) =2 u \\
    \frac{dx}{dv}(u,v) =2v \\
\end{cases} $ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Corollary</p>
>$z=f(x,y) $ differentiable at $(x_0,y_0),x=x(u) ,y=y(u) $  
differentiable at $u_{0}$,$(x(u_0),y(u_0) )=(x_0,y_0)  $    
>if $y(u) =f(x(u) ,y(u) )\xrightarrow[]{}$ $$g'(u_0)=\frac{df}{dx}(x_0,y_0)x'(u_0)+\frac{df}{dy}(x_0,y_0)y'(u_0)     $$ 
>>$\underline{\mathbf{Proof}} $ 
>$\vdots$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Taylor polynomial</p>

>$y=h(x) ,$ let us consider the taylor polynomial around  x=0

>$y=h(x) ,x=0$ 
$h(x) =h(0) +h'(0) (x-0) +\frac{h''(0) }{2}(x-0) ^{2}+ \cdots +\frac{h^{(n)}(0)}{n!}(x-0) ^{n}+\frac{h^{(n+1)}(0) }{(n+1)!}(x-0) ^{n+1} $ 

>$z=f(x,y)  $
:consider the taylor polynomial at f(x,y) around $(x_0,y_0) $ 

>$h(t) =f(x_0+t(x-x_0),y_0+t(y-y_0)  ),t\in [0,1] $ 
$h(0) =f(x_0,y_0) $ 
$h(1) =f(x,y) $ 

>we can compare `easily` $f(x_0,y_0) $ 
we want to approximate $f(x,y)$ by using $f(x_0,y_0) $  
$f(x,y) =h(1) =h(0) +h'(0)+\frac{h''(o) }{2}+ \cdots +\frac{h^{(n) }(c) }{(n+1)!},c\in (0,1)  $ 
=$f(x_0,y_0)+ $ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Double Integrals/Multiple Integrals</p>
>

>$\iint_{R}^{}f(x,y) dxdy,R=[a,b]\times [c,d],f(x,y) \geq = $x 
=Volumen $\left\{ (x,y,z(x,y) ):x\in [a,b],y\in [c,d], 0\leq z(x,y) \leq f(x,y)  \right\}$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example</p>

>$f(x,y) =z,R=[a,b]\times [c,d]$ 
$\iint_{R}^{}dxdy =2(b-a) (d-c) $ 

>We consider a partition on R
>$a=x_0<x_1<x_2<\cdots <x_{n-1}<x_{n}=b$ 
>$c=y_0<y_1<y_2<\cdots <y_{n-1}<y_n=d$ 
>$R_{y}=[x_{i-1},x_i]\times [y_{j-1},y_{j}],R=\cup R_{ij}$ 
$\vdots$ 



##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Definition</p>

>we say that a function $z:f(x,y) $ is integrable on $R=[a,b]\times [c,d]\Longleftrightarrow  \\\forall \epsilon>0,\exists P,$ a partition of R, $\;s.t.\; U_{p}(f) -L_{P}(f) <\epsilon$   
>>In this case, $\iint_{R}^{}f(x,y) dxdy =\sup\left\{ L_{p}(f), \forall P  \right\}$ 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Example</p>

>$z=f(x,y) =x+y,R =[a,b]\times [c,d],P=\left\{ R_{i,j},i,j \right\},R_{i,j}=[x_{i+1},]$ 






