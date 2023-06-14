# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Data Ass 5</p> {ignore=true}

[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn)

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 1</p>

>Give an example of a weighted digraph in which the obvious BFS approach does not find the shortest path from the root to each other node.

```py
     1
 (s)---->(a)
  |       | 
  |       |
 2|       |3
  |       |
  v       v
 (b)<----(c)
     1
```
>If we start a BFS from the root node s $\xrightarrow[]{}$ we would visit the nodes in the order s, a, b, c. 
However, this is not the shortest path from s to c.
>>The shortest path from s to c is s -> a -> c, with a distance of 4. 
>
>>However, the BFS approach would first explore node a, and then explore node b before exploring node c. 
This would result in a shortest path of s -> a -> b -> c, with a distance of 5.


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 2</p>

>The graph below shows minimum legal driving times (in multiples of 5 minutes) between various South Island towns in New Zealand. What is the shortest time to drive legally from Picton to 
>>(a) Wanaka
>
>>(b) Queenstown
>
>>(c) Invercargill
>
>>Explain which algorithm you use and show your work.

<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/d2e814a9-fe7d-4481-a859-046a97d5e4fa width='10002' height='500'></div> 

>Let us use the `Floyd Algorithm`.
Basically, we implement this algorithm in the program 3,
>
>>Let us put all the information here in graph 
>
>>so the South Island towns here in graph should be:
```py
if __name__ == '__main__':
    # example input
    graph = {'PIC': {'BLE': 5, 'NEL': 19}, 
             'BLE': {'PIC': 5, 'MUR': 26,'CHR':51}, 
             'CHR': {'BLE': 51,'MUR':50,'OMA':44,'DUN':54}, 
             'DUN': {'CHR': 54, 'INV': 33}, 
             'INV': {'DUN': 33,'QUE':28},
             'QUE': {'INV': 28,'CRO':10,'WAN':16},
             'CRO': {'QUE': 10,'WAN':8,'OMA':13},
             'WAN':{'CRO':8,'QUE':16,'OMA':16,'GRE':90},
             'OMA':{'WAN':16,'CRO':13,'CHR':44},
             'GRE':{'WAN':90,'MUR':28},
             'MUR':{'GRE':28,'CHR':50,'BLE':26,'NEL':23},
             'NEL':{'MUR':23,'PIC':19}}
    floyd_warshall(graph)
```
>thus, if we use the `Floyd Algorithm`, here we can see:
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/3d1449b2-91ed-4e2c-b4ce-03f2b956a425 width='' height=''></div> 


>Let us see it more clearly,
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/c4f06c71-642b-4f98-89f2-5d0fc5119e02 width='' height=''></div> 

>Thus, $$PICTON \xrightarrow[]{} WANKA:116(116\times 5 \text{ mins })   \\
PIC\xrightarrow[ ]{5}BLE\xrightarrow[ ]{51}CHR\xrightarrow[ ]{44}OMA\xrightarrow[ ]{16}WAN \\
PICTON\xrightarrow[]{}QUEENTOWN:123 (123\times 5\text{ mins }) \\
PIC\xrightarrow[ ]{5}BLE\xrightarrow[ ]{51}CHR\xrightarrow[ ]{44}OMA\xrightarrow[ ]{13}CRO\xrightarrow[ ]{10}QUE \\
PICTON \xrightarrow[]{}INVERCARGILL:143 (143\times 5\text{ mins })  \\
PIC\xrightarrow[ ]{5}BLE\xrightarrow[ ]{51}CHR\xrightarrow[ ]{54}DUN\xrightarrow[ ]{33}INV$$


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 3</p>

>The matrix M shows costs of direct flights between towns A, B, C, D, E, F (where $\infty$ , as usual, meansthat no direct flight exists). You are given the job of finding the cheapest route between each pair of towns.
Solve this problem.
$$\begin{bmatrix} 
    0 &1 &2 &6 &4 &\infty \\
    1 &0 &7 &4 &2 &11 \\
    2 &7 &0 &\infty &6 &4 \\
    6 &4 &\infty &0 &\infty &1 \\
    4 &2 &6 &\infty &0 &3 \\
    \infty &11 &4 &1 &3 &0 \\
\end{bmatrix} $$ $$\underline{\mathbf{Sol}}$$
>Let us solve it in the Floyd Algorithm,
our input in this case should be like that:
```py
# ============== Driver Code =============== #

if __name__ == '__main__':
    # example input

    
    graph = {'A':{      'B':1, 'C':2,'D':6,'E':4},
             'B':{'A':1,       'C':7,'D':4,'E':2,'F':11},
             'C':{'A':2,'B':7,             'E':6,'F':4},
             'D':{'A':6,'B':4,                   'F':1},
             'E':{'A':4,'B':2, 'C':6,            'F':3},
             'F':{      'B':11,'C':4,'D':1,'E':3},
             }
    
    floyd_warshall(graph)
```
>Thus, the output is like this,
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/81c66b1f-b80c-4e61-9173-030d9f9584af width='' height=''></div> 

>Thus, $$
\left[ A,B \right]=1 \\
\left[ A,C \right]=2 \\
\left[ A,D \right]=5 \\
\left[ A,E \right]=3 \\
\left[ A,F \right]=6$$$$\left[ B,C \right]=3 \\
\left[ B,D \right]=4 \\
\left[ B,E \right]=2 \\
\left[ B,F \right]=5$$$$\left[ C,D \right]=5 \\
\left[ C,E \right]=5 \\
\left[ C,F \right]=4 \\$$$$\left[ D,E \right]=4 \\
\left[ D,F \right]=1 \\$$$$\left[ E,F \right]=3$$Moreover: 
$$[X,X] = 0,\forall X\in \left\{ A,B,C,D,E,F \right\} $$  



>The next day, you are told that in towns D, E, F, political troubles mean that no passenger is allowed to both take off and land there. Solve the problem with this additional constraint.
$$\underline{\mathbf{Sol}}$$ Thus in this case,$$\begin{bmatrix} 
    0 &1 &2 &\infty &\infty &\infty \\
    1 &0 &7 &\infty &\infty &\infty \\
    2 &7 &0 &\infty &\infty &\infty \\
    \infty &\infty &\infty &0 &\infty &\infty \\
    \infty &\infty &\infty &\infty &0 &\infty \\
    \infty &\infty &\infty &\infty &\infty &0 \\
\end{bmatrix} $$



>Thus this is our driver code:
<div style='text-align: center;'><img src=https://github.com/Offsaying/OS_Mars/assets/120654757/8e9f79a2-3aff-4abf-896a-ceab49094c7c width='10000' height='240'></div> 

>And this is the output, here $\infty \xrightarrow[ ]{}$ Not available : 
<div style='text-align: center;'><img src=https://github.com/Offsaying/OS_Mars/assets/120654757/171529b6-b8a9-4a12-ac09-a14ad96feae4 width='1000' height='180'></div> 

>Thus, $$\left[ A,B \right]=1 \\
\left[ A,C \right]=2 \\
\left[ A,D \right]=/ \\
\left[ A,E \right]=/ \\
\left[ A,F \right]=/$$$$\left[ B,C \right]=3 \\
\left[ B,D \right]=/ \\
\left[ B,E \right]=/ \\
\left[ B,F \right]=/$$$$\left[ C,D \right]=/ \\
\left[ C,E \right]=/ \\
\left[ C,F \right]=/ \\$$$$\left[ D,E \right]=/ \\
\left[ D,F \right]=/ \\$$$$\left[ E,F \right]=/$$Moreover:$$[X,X] = 0,\forall X\in \left\{ A,B,C,D,E,F \right\} $$  




##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Exercise 4</p>
>Suppose the input to Floyd’s algorithm is a digraph with a negative weight cycle. How does the  algorithm detect this, so it can exit gracefully with an error message?

>$$\underline{\mathbf{Sol}}$$ ⭐ Please check the code in details in `Ex_4.py`

```py
INF = float('inf')

def floyd_warshall(graph):
    n = len(graph)
    dist = [[graph[i][j] for j in range(n)] for i in range(n)]

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][k] != INF and dist[k][j] != INF and dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]

# ======= Check for negative weight cycle ======== #
        
        if any(dist[i][i] < 0 for i in range(n)):
            return None, "🔴 - Negative weight cycle detected"

    return dist, None
```

>Driver code:
```py
# ================== Driver Code ================= #

graph = [   
            [0,   3,   -8,   INF, ],
            [INF, 0,    6,   1,  ],
            [INF, INF,  0,   5,  ],
            [2,   5,    5,   0,  ],
        ]

distances, error = floyd_warshall(graph)
if error:
    print(error)
else:
    print("Shortest distances between all pairs of vertices:")
    format_output(distances) 
```
>
>>Notice that,
>
>>there is a negative weight cycle that is given by,$$A\xrightarrow[ ]{-8}C\xrightarrow[ ]{5}D\xrightarrow[ ]{2}A$$ 
>
>>Output you may check in this case,
<div style='text-align: center;'><img src=https://github.com/Offsaying/OS_Mars/assets/120654757/aee77671-fea4-4dc0-b67e-66e08d04fdda width='1000' height='90'></div> 

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Program 1</p>

>Driver code with our input
```
# ============ Driver Code ============= #

if __name__ == '__main__':
    graph = {
        'A': {'B': 5, 'C': 2},
        'B': {'D': 4},
        'C': {'B': 1, 'D': 6},
        'D': {'E': 3},
        'E': {}
    }
    start_node = 'A'
    print(dijkstra(graph, start_node))
```
>How to use
```
python search.py
```
>Output
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/58643153-ab89-4904-bcae-2952b258fa2f width='' height='60'></div> 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Program 2</p>

>Driver code with our input
```
# ================ Driver Code ================= #

if __name__ == '__main__':
    graph = {
        'A': {'B': 1, 'C': 4},
        'B': {'C': 3, 'D': 2, 'E': 2},
        'C': {},
        'D': {'B': 1, 'C': 5},
        'E': {'D': 3}
    }
    start_node = 'A'
    print(bellman_ford(graph, start_node))
```
>How to use
```
python search.py
```

>Output
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/501a93e2-d3e7-492b-82c4-b407ae646c1f width='2000' height=''></div> 


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Program 3</p>

>Driver code with our input
```
# ============== Driver Code =============== #

if __name__ == '__main__':
    # example input
    graph = {'A': {'B': 3, 'C': 8, 'E': 4}, 'B': {'D': 1, 'E': 7}, 'C': {'B': 4}, 'D': {'A': 2, 'C': 5}, 'E': {'D': 6}}
    floyd_warshall(graph)
```

>How to use
```
python search.py
```

>Output
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/c76f655a-0941-4143-84a7-3d2d7907d72b width='2000' height=''></div> 

##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>Program 4</p>

>Driver code with our input
```
# =================== Driver code ==================== #
if __name__ == '__main__':
    graph = Graph(4)
    graph.graph.append([0, 1, 10])
    graph.graph.append([1, 2, 2])
    graph.graph.append([1, 3, 4])
    graph.graph.append([1, 3, 11])
    graph.graph.append([1, 2, 3])
    graph.KruskalMST()
```

>How to use
```
python search.py
```

>Output
<div style='text-align: center;'><img src=https://github.com/FerneyChen/OS_Mars/assets/120654757/294a2937-c9c8-4f45-b4df-0ecd0cce0c6d width='2000' height=''></div> 


[![](https://img.shields.io/badge/Yu%20Chen-chen11976%40gtiit.edu.cn-%2300FFFF)](chen11976@gtiit.edu.cn) [![](https://img.shields.io/badge/Code%20in-Latex%20--%20Katex-%23ffd700)]()  [![](https://img.shields.io/badge/Yu%20Chen-Home-%09%234169E1)](https://ferneychen.github.io) [![](https://img.shields.io/badge/Mozilla%20Public%20License-2.0-rgb(27%2C181%2C214))](https://www.mozilla.org/en-US/MPL/2.0/)
[![](https://img.shields.io/badge/Windows-10-2376bc?style=flat-square&logo=windows&logoColor=ffffff)](https://www.microsoft.com/windows/get-windows-10) [![](https://img.shields.io/badge/Linux-Ubuntu-2376bc?style=flat-square&logo=ubuntu&logoColor=ffffff)](https://ubuntu.com/) [![](https://img.shields.io/badge/Linux-Centos-2376bc?style=flat-square&logo=centos&logoColor=ffffff)](https://www.centos.org/) [![](https://img.shields.io/badge/MacOS-Monterey-2376bc?style=flat-square&logo=apple&logoColor=ffffff)](https://www.apple.com/) [![](https://img.shields.io/badge/IDE-Visual%20Studio%20Code-blue?style=flat-square&logo=visual-studio-code&logoColor=ffffff)](https://code.visualstudio.com/) [![](https://img.shields.io/badge/Intellij-Idea-blue?style=flat-square&logo=intellijidea&logoColor=ffffff)](https://www.jetbrains.com/idea/) [![](https://img.shields.io/badge/IDE-Goland-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/go/) [![](https://img.shields.io/badge/IDE-PyCharm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/pycharm/) [![](https://img.shields.io/badge/IDE-Clion-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/clion/) [![](https://img.shields.io/badge/IDE-WebStorm-blue?style=flat-square&logo=jetbrains&logoColor=ffffff)](https://www.jetbrains.com/webstorm/) [![](https://img.shields.io/badge/Andriod-Studio-blue?style=flat-square&logo=android&logoColor=ffffff)](https://developer.android.com/studio/) [![](https://img.shields.io/badge/Linux-Vim-blue?style=flat-square&logo=vim&logoColor=ffffff)](https://www.vim.org/) [![](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff)](https://www.java.com/) [![](https://img.shields.io/badge/-Golang-f05032?style=flat-square&logo=go&logoColor=ffffff)](https://golang.org/) [![](https://img.shields.io/badge/-C++-269539?style=flat-square&logo=c%2B%2B&logoColor=ffffff)](https://www.cplusplus.com/) [![](https://img.shields.io/badge/-Rust-003545?style=flat-square&logo=rust&logoColor=ffffff)](https://www.rust-lang.org/) [![](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff)](https://www.python.org/) [![](https://img.shields.io/badge/-Scala-2496ED?style=flat-square&logo=scala&logoColor=ffffff)](https://www.scala-lang.org/) [![](https://img.shields.io/badge/-JavaScript-f7e018?style=flat-square&logo=javascript&logoColor=white)](https://www.ecma-international.org/) [![](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://html.spec.whatwg.org/) [![](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/) [![](https://img.shields.io/badge/-Less-43853d?style=flat-square&logo=less&logoColor=white)](https://lesscss.org/) [![](https://img.shields.io/badge/TypeScript-cb3837?style=flat-square&logo=TypeScript&logoColor=ffffff)](https://www.typescriptlang.org/) [![](https://img.shields.io/badge/Kotlin-2496ED?style=flat-square&logo=kotlin&logoColor=ffffff)](https://kotlinlang.org/) [![](https://img.shields.io/badge/Dart-003545?style=flat-square&logo=dart&logoColor=ffffff)](https://dart.dev/) [![](https://img.shields.io/badge/Lua-cb3837?style=flat-square&logo=lua&logoColor=ffffff)](https://www.lua.org/) [![](https://img.shields.io/badge/Shell-f05032?style=flat-square&logo=powershell&logoColor=ffffff)](https://www.shell.com/) [![](https://img.shields.io/badge/C%23-43853d?style=flat-square&logo=CSharp&logoColor=ffffff)](https://docs.microsoft.com/en-us/dotnet/csharp/) [![](https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-framework/) [![](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=ffffff)](https://www.docker.com/) [![](https://img.shields.io/badge/-MySQL-003545?style=flat-square&logo=mysql&logoColor=white)](https://www.mysql.com/) [![](https://img.shields.io/badge/-PostgreSQL-005571?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/) [![](https://img.shields.io/badge/-NPM-cb3837?style=flat-square&logo=npm&logoColor=white)](https://npmjs.com/) [![](https://img.shields.io/badge/-Git-f05032?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/) [![](https://img.shields.io/badge/-Node.js-43853d?style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/) [![](https://img.shields.io/badge/-jQuery-003545?style=flat-square&logo=jquery&logoColor=white)](https://jquery.com/) [![](https://img.shields.io/badge/-PyTorch-269539?style=flat-square&logo=pytorch&logoColor=white)](https://pytorch.org/) [![](https://img.shields.io/badge/-Markdown-003545?style=flat-square&logo=markdown&logoColor=white)](https://daringfireball.net/projects/markdown/)  
##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1000;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>© Yu Chen - All rights reserved</p>