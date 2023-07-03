# <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-family:Poppins;font-weight:1000;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>Alg Ass 4</p> {ignore=true}


## <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>Q 1</p>
>Let N and M be two 6$\times $6 nilpotent matrices over a field $\mathbb{K}$ 
(a) Show that if N and M have the same minimal polynomial and the same nullity, then N and M are similar.
(b) Prove that the same result is false for 7 × 7 nilpotent matrices.



### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>Sol</p>

>(a) 
$\because $ they are nilpotent $\xrightarrow[]{}$ their eigenvalues are 0 and the possible size of the Jordan blocks corresponding to the partition of n=6
>$\because \mu$ are the same $\xrightarrow[]{}$ they have the same maximal block-size
$\because$ they have the same nullity $\xrightarrow[]{}$ they have the same JCF
Thus,$$M, N\; are\; similar.$$

>(b)
counterexample:
$M_{7\times 7}=\begin{bmatrix} 
    0  &1 \\
     &0 &1 \\
      & &0 & \\
       & & &0 &1 \\
        & & & &0  &1\\
         & & & & &0 \\
          & & & & & &0 \\
\end{bmatrix} ,N_{7\times 7}=\begin{bmatrix} 
    0 &1 \\
     &0 &1 \\
      & &0 \\
       & & &0 &1 \\
        & & & &0 \\
         & & & & &0 &1 \\
          & & & & & &0 \\
\end{bmatrix} $ 


## <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>Q 2</p>
>(a) Find the JCF for the matrix:
$A=\begin{bmatrix} 
    -4 &-1 &0 &0 \\
    1 &-2 &0 &0 \\
    -7 &3 &2 &0 \\
    -7 &6 &-1 &2 \\
\end{bmatrix} $ 

>(b) Find an invertible matrix $ P $ such that $P^{-1}AP$ is that Jordan matrix.


### <p style='border-top-left-radius:50px;border-top-right-radius:50px;text-align:center;font-size:19px;font-family:Poppins;font-weight:600;background-color:none;vertical-align:middle;padding:0px;margin-top:0px'>Sol</p>
>(a)
$\chi_{A}(\lambda)=\begin{vmatrix} 
    A-\lambda I \\
\end{vmatrix}  = (\lambda-2)^{2}(\lambda+3)^{2} $ 

>For $\lambda=2:$ 
$A-\lambda I=\begin{bmatrix} 
    -6 &-1 &0 &0 \\
    1 &-4 &0 &0 \\
    -7 &3 &0 &0 \\
    -7 &6 &-1 &0 \\
\end{bmatrix} ,ker(A-\lambda I)=span \left\{ { \begin{bmatrix} 
    0 \\
    0 \\
    0 \\
    1 \\
\end{bmatrix} } \right\} $ 
>>Algebraic multiplicity:2 
Geometric multiplicity:1
>>$(A-\lambda I)v=\begin{bmatrix} 
    0 \\
    0 \\
    0 \\
    1 \\
\end{bmatrix} \xrightarrow[]{}v=\begin{bmatrix} 
    0 \\
    0 \\
    -1 \\
    0 \\
\end{bmatrix}  $ 

>For $\lambda=-3:$ 
$A-\lambda I=\begin{bmatrix} 
    -1 &-1 &0 &0 \\
    1 &1 &0 &0 \\
    -7 &3 &5 &0 \\
    -7 &6 &-1 &5 \\
\end{bmatrix} ,ker(A-\lambda I)=span \left\{ { \begin{bmatrix} 
    1 \\
    -1 \\
    2 \\
    3 \\
\end{bmatrix} } \right\} $ 
>>Algebraic multiplicity:2 
Geometric multiplicity:1
>>$(A-\lambda I)v=\begin{bmatrix} 
    1 \\
    -1 \\
    2 \\
    3 \\
\end{bmatrix}  \xrightarrow[]{}v=\begin{bmatrix} 
   -y-1  \\
   y \\
   -2y-1 \\
   -3y-1 \\
\end{bmatrix} \xrightarrow[]{}\begin{bmatrix} 
    -1 \\
    0 \\
    -1 \\
    -1 \\
\end{bmatrix} $ 

>A in basis $$\left\{ \begin{bmatrix} 
    1 \\
    -1 \\
    2 \\
    3 \\
\end{bmatrix} ,\begin{bmatrix} 
    -1 \\
    0 \\
    -1 \\
    -1 \\
\end{bmatrix} ,\begin{bmatrix} 
    0 \\
    0 \\
    0 \\
    1 \\
\end{bmatrix} ,\begin{bmatrix} 
    0 \\
    0 \\
    -1 \\
    0 \\
\end{bmatrix}  \right\} $$ 
has$$J_{A}=\begin{bmatrix} 
    -3 &1 &0 &0 \\
    0 &-3 &0 &0 \\
    0 &0 &2 &1 \\
    0 &0 &0 &2 \\
\end{bmatrix} $$
$P$ corresponding to this basis change is $$\begin{bmatrix} 
    1 &-1 &0 &0 \\
    -1 &0 &0 &0 \\
    2 &-1 &0 &-1 \\
    3 &-1 &1 &0 \\
\end{bmatrix} i.e.P^{-1}AP=J_{A} $$ 
>>Checking through python:
$$P=\begin{bmatrix} 
    1 &-1 &0 &0 \\
    -1 &0 &0 &0 \\
    2 &-1 &0 &-1 \\
    3 &-1 &1 &0 \\
\end{bmatrix}$$
$$A=\begin{bmatrix} 
    -4 &-1 &0 &0 \\
    1 &-2 &0 &0 \\
    -7 &3 &2 &0 \\
    -7 &6 &-1 &2 \\
\end{bmatrix} $$ 
$$P^{-1}AP = \begin{bmatrix}-3 & 1 & 0 & 0\\0 & -3 & 0 & 0\\0 & 0 & 2 & 1\\0 & 0 & 0 & 2\end{bmatrix}$$


