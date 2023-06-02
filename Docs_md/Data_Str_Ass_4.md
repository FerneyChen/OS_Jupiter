# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Data Structure Ass 4</p> {ignore=true}

[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn)


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 1</p>
>Prove that in a digraph, the sum of all outdegrees equals the sum of all indegrees. What is the analogous statement for a graph?

>Explanation 
Each direct edge contributes 1 to  the sum of  indegrees and 1 to the sum of outdegrees since the total number of directed edges leaving a vertex is equal to the total number of directed edges entering that vertex.
>>Therefore, the sum of all outdegrees is equal to the sum 
of all indegrees.
>>More formally, suppose we have a digraph with n vertices. Let di be the outdegree of vertex i, and let dj be the 
indegree of vertex j. Then, we have:
>>sum(di) = d1 + d2 + ... + dn (sum of all outdegrees)
sum(dj) = d1 + d2 + ... + dn (sum of all indegrees)
>>Every directed edge in the graph contributes exactly one to the outdegree of its starting vertex and one to the indegree of its ending vertex. 
Therefore, the total number of directed edges leaving all vertices in the graph is equal to the total number of directed edges entering all vertices in the graph.

>The analogous statement for an undirected graph is that,
>>The sum of degrees is twice the number of edges.
And in that case, the sum of all degrees is even.
Since each edge connects two vertices, contributing two to the sum of degrees.


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 2</p>
>Consider the digraph G whose nodes are the integers from 1 to 12 inclusive and such that (i, j) is an arc $\Leftrightarrow $  i is a proper divisor of j (that is, i divides j and i $\neq $  j). 
Write down the adjacency matrix representation of G and of the reversed graph $ G_r $.

>Explanation,
We know from definition, 
1 is the proper divisor of 2,3,4,5,6,7,8,9,10,11,12
2 is the proper divisor of 4,6,8,10,12
3 is the proper divisor of 6,9,12
4 is the proper divisor of 8,12
5 is the proper divisor of 10
6 is the proper divisor of 12
7,8,9,10,11,12 are not any proper divisors.
Let,$$A_{i,j}=\begin{cases}
    1,\text{if there is an edge from j to i} \\
    0, \text{ otherwise } \\
\end{cases}$$ Thus, the adjacency matrix looks like this:$$A_{G}=\begin{bmatrix} 
     0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{1}\\
     1 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{2}\\
     1 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{3}\\
     1 &1 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{4}\\
     1 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{5}\\
     1 &1 &1 &0 &0 &0 &0 &0 &0 &0 &0 &0_{6}\\
     1 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{7}\\
     1 &1 &0 &1 &0 &0 &0 &0 &0 &0 &0 &0_{8}\\
     1 &0 &1 &0 &0 &0 &0 &0 &0 &0 &0 &0_{9}\\
     1 &1 &0 &0 &1 &0 &0 &0 &0 &0 &0 &0_{10} \\
     1 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{11} \\
     1_{1} &1_{2} &1_{3} &1_{4} &0_{5} &1_{6} &0_{7} &0_{8} &0_{9} &0_{10} &0_{11} &0_{12} \\
\end{bmatrix} $$ Since the reverse graph will make an edge from 
i to j $\xrightarrow[]{} $ j to i, thus, simply the transpose of it,$$A_{G_r}=\begin{bmatrix} 
     0 &1 &1 &1 &1 &1 &1 &1 &1 &1 &1 &1_{1}\\
     0 &0 &0 &1 &0 &1 &0 &1 &0 &1 &0 &1_{2}\\
     0 &0 &0 &0 &0 &1 &0 &0 &1 &0 &0 &1_{3}\\
     0 &0 &0 &0 &0 &0 &0 &1 &0 &0 &0 &1_{4}\\
     0 &0 &0 &0 &0 &0 &0 &0 &0 &1 &0 &0_{5}\\
     0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{6}\\
     0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{7}\\
     0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{8}\\
     0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{9}\\
     0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{10} \\
     0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0 &0_{11} \\
     0_{1} &0_{2} &0_{3} &0_{4} &0_{5} &0_{6} &0_{7} &0_{8} &0_{9} &0_{10} &0_{11} &0_{12} \\
\end{bmatrix} $$ This is the transpose of $A_{G}$ 



##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 3</p>
>Show how to compute the (sorted) adjacency lists representation of the reverse digraph of G from the (sorted) adjacency lists representation of G itself. It should take time $\Theta(n+m) $ 

>Explanation:
>1.
$$ \boxed{\text{ A draft of thinking }}$$
Suppose this digraph has n vertices and m edges
$\because $$$x_{1}\xrightarrow[]{1}\cdots \xrightarrow[]{2}\cdots \xrightarrow[]{y_1}z_1 \\x_2\xrightarrow[]{1}\cdots \xrightarrow[]{2}\cdots \xrightarrow[]{y_{2}}z_2 \\x_3\xrightarrow[]{1}\cdots \xrightarrow[]{2}\cdots \xrightarrow[]{y_3} z_3   \\ \vdots \\ x_n\xrightarrow[]{1}\cdots \xrightarrow[]{2}\cdots \xrightarrow[]{y_k}z_n$$  
where $x_1<x_2<\cdots <x_n,\;  y_1+y_2+ \cdots +y_k=m $
we will change this list,
>>step 1, the most left column remains, that takes $ \boxed{n}$ 
$$x_1 \\x_2 \\x_3 \\ \vdots  \\ x_n$$ 
>>step 2, for each $x_i$ in the first row($x_1$) , that has been pointed to by arrow, 
$\xrightarrow[]{}$ find the corresponding $x_i$ in our current column
 $\xrightarrow[]{}$ make $x_i$ point to $x_{1}$  
This takes $\boxed{y_{1}}$  our first row 
Do this process for each row $\xrightarrow[]{}$ it takes$$ \boxed{y_1+y_2+ \cdots +y_k=m} $$
>>For instance,
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/78f39a14-e598-4dd4-b4e6-33b1d92c9143 width='' height='250'>
>>Thus, It should take time$$ \boxed{\Theta=(n+m)}  $$  

>2.
>$$ \boxed{\text{ Let us make it more formal }}$$
Digraph: $$G=(V,E),E\subseteq V^{2}$$ 
AdjRep: $$\forall v\in V:L_v=[u]_{vu\in E}:\text{ list of out-neighbors of v }  $$ 
Problem: Compute AdjRep($G^{r}$)
>>Df:$G^{r}=(V,E^{r}):uv\in E^{r}\Leftrightarrow vu\in E $ 
In AdjRep($G^{r}$):$\forall u\in V,L_{u}^{r}=[V]_{uv\in E^{r}}$ 
$ \boxed{Reversing}$ 
Input:AdjRep(G)=$\left\{ L_{v},v\in V  \right\}$ 
Output:AdjRep($G^{r}$)=$\left\{ L_{u}^{r},u\in V \right\} $ 
>>{
     For $ \boxed{each_{1}}$ $u\in V$ do $L^{r}_{u}=[\; ]$   
For $ \boxed{each_{2}}$ $v\in V$ do {for $ \boxed{each_{3}}$ $u\in L_2$ do push v into $L^{r}_{u}$}
output {$L_{u}^{r},u\in V$ }   
}
>>for $ \boxed{each_{1}}\xrightarrow[]{}$ n cycles 
for $ \boxed{each_2}\xrightarrow[]{}$ n cycles 
n is the number of vertices
$$v_0:for\; each_{3}\;:m_0\;cycles \\
v_1:for\; each_{3}\; :m_1\; cycles \\
\vdots \\
v_{n-1}:\; for\; each_{3}\;\; :m_{n-1}\; cycles $$ and,$$m_0=\text{ number of  }L_{v_{0}} \\m_1=\text{ number of  }L_{v_1} \\ \vdots  \\ m_{n-1}=\text{ number of  }L_{n-1}  \\\xrightarrow[]{\text{ Total number }}\sum\limits_{i=0}^{n-1}m_i=m 
$$ Thus,$$\Theta=(n+m)$$  

>3.
>$$\boxed{Sketch}$$ 
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/d5dcb10d-a0ff-49a7-a14a-a24aeb461d82 width='' height='600'> 
  



##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 4</p>
> Give an example to show that the following conjecture is not true: 
>>if w is reachable from v and seen(v) < seen(w) then w is a descendant of v in the DFS forest. See Theorem 5.5 in [1] for terminology.

>Explanation
><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/dd7dfb32-1d87-4d7e-8275-5642e047db1a width='' height=''> 
Suppose we perform a DFS on this graph starting from node A, and we number the nodes according to their discovery times.
>>suppose we choose node B as v and node E as w. Node E is reachable from node B, and seen(B) = 2 < seen(E) = 5. However, node E is not a descendant of node B in the DFS tree, as there is no path from node B to node E in the DFS tree.


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 5</p>
>Professor P has the following information taped to his mirror, to help him to get dressed in the morning. Socks before shoes; underwear before trousers; trousers before belt; trousers before shoes; shirt before glasses; shirt before tie; tie before jacket; shirt before hat; shirt before belt. Find $ \boxed{an}$  $ \boxed{acceptable}$  $ \boxed{order}$  of dressing for Professor P.

>Explanation:
socks $\xrightarrow[]{}$ shoes 
underwear $\xrightarrow[]{}$ trousers
trousers $\xrightarrow[]{}$ belt,shoes 
shirt $\xrightarrow[]{}$ glass, tie, hat, belt
tie $\xrightarrow[]{}$ jacket 
>>An acceptable order:
shift $\xrightarrow[]{}$  tie $\xrightarrow[]{} $ jacket $\xrightarrow[]{}$ underwear $\xrightarrow[]{}$ trousers $\xrightarrow[]{}$belt $\xrightarrow[]{}$  socks $\xrightarrow[]{}$ shoes $\xrightarrow[]{}$ glass $\xrightarrow[]{}$ hat
>>In this case,
socks $\xrightarrow[]{}$ shoes (√)
underwear $\xrightarrow[]{}$ trousers (√)
shirt $\xrightarrow[]{}$ glass, tie, hat, belt (√)
tie $\xrightarrow[]{}$ jacket (√) 



>
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 6</p>
>The n-cube (hypercube) is a graph on $2^{n}$  vertices, each labelled by a different bit vector of length n.
If $ v = (v_0, \ldots ,v_{n?1})$ and $w = (w_0, \ldots , w_{n?1}) $ are such bit vectors, then there is an edge between the vertex labelled $ v $ and a vertex labelled $ w $ $\Leftrightarrow $   $ v $ and $ w $ differ in exactly $ \boxed{one}$  component.
For which values of n is the n-cube bipartite?

>Explanation:
$$\forall n\geq 1,n\in \mathbb{N},\text{ the n-cube bipartite }$$
>> The vertices of the n-cube  are vectors $( v_1,v_2, \ldots ,v_n)$ with entries $v_i\in \left\{ 0,1 \right\} $. 
Two vertices are adjacent $\Leftrightarrow $ their responding vectors differ in exactly one  entry. 
Thus for instance, 2-cube would be,$$00\; 01 \\10\; 11$$ We can define two subsets of G=(X,Y), where$$X=\left\{ \text{ vertices who have an even number of 1  } \right\} \\Y=\left\{ \text{ vertices who have an odd number of 1 } \right\}$$ By creating an edges starting in $ X $ and ending in $ Y $ all edges are accounted for and thus, the graph is $ \boxed{bipartite}$.


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Program 1</p>

>: `python Prog_1.py`

>Driver code:
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/a6138d06-5020-4c4b-bc72-378c00241cad width='' height='130'> 

>Output:
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/d4c630bc-92cb-4cad-b37e-aae63dccb6c5 width='' height='100'> 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Program 2</p>

>: `python Prog_2.py`

>Driver code:
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/91ab5d0d-36b6-4e39-878f-dbd35aa8aa78 width='' height='150'> 

>Output:
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/00ac24ce-4599-41e7-8a2f-6aa109d3ad7f width='' height='120'> 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Program 3</p>

>: `python Prog_3.py`

>Driver code:
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/d8b9d205-4ce3-4201-accc-98220dddd318 width='' height='150'> 

>Output:
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/fdb9c3b5-153c-4977-96ec-4909a1c5b5c9 width='' height='120'>


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Program 4</p>

>: `python Prog_4.py`

>Driver Code:
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/657871a4-118e-4234-b46f-73b8ebc3546c width='' height='150'> 

>Output:
<img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/6d7f708f-5072-4540-af01-5b1fc8bee9a6 width='' height='90'> 

>The advantage(when too big to hold in memory):
>>It can be implemented in a memory-efficient way, without requiring the entire graph to be loaded into memory 
at once.
>>$\because $ It only  needs to keep track of the current node being visited, its depth, and the set of visited nodes at each depth level. As each depth level is fully explored, the algorithm can discard the nodes and edges at the previous 
depth level, freeing up memory for the next level.
>>Also,
The algorithm can be parallelized to distribute the search across multiple processors or machines, further increasing its efficiency.















