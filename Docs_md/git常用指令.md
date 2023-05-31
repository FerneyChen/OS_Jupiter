# <p style='text-align:center;font-family:Verdana;font-weight:600;background-color:#00cc8f;vertical-align:middle;padding:20px;margin-top:60px'>Git 常用命令</p> {ignore=true}


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>最最常用的命令</p>
>当前普通文件夹 $\xrightarrow[]{}$ git管理的文件夹
>>git init

>查看当前所有修改文件的状态（是否提交）
>>git status

>添加文件到暂存区
>>git add 文件名
如：git add README.md

>一次性添加所有的被修改的文件到暂存区
>>git add --all


>把文件提交到仓库
>>git commit -m "提交注释"
如：git commit -m "1.0"

>将文件推送到远程
>>git push origin 分支名称
如：git push origin main 

>查看文件修改内容
>>git diff 文件名
如：git diff README.md

>查看修改历史记录(详细)
>>git log

>查看修改历史记录(简略)
>>git log --pretty=oneline

>查看修改版本号
>>git reflog

>版本个数回退：将文件回退至前n个版本
>>git reset --hard HEAD~回退版本数量 
如：git reset --hard HEAD~2 #回退至上上个版本

>版本号回退：将文件按版本号回退
>>git reset --hard HEAD 版本号
如：git reset --hard HEAD abcd123

>撤销操作
>>git restore 文件名
文件已add至暂存区 $\xrightarrow[]{}$ 撤销至添加时的状态
文件未add $\xrightarrow[]{}$ 撤销至和版本库一摸一样的状态


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>分支操作</p>

>查看分支情况
git branch

>创建分支
git branch 分支名称

>切换分支
git checkout 分支名称

>合并分支到当前分支
git merge 分支名

>合并完成后，删除分支
git branch -d 分支名


##### <p style='text-align:center;font-size:19px;font-family:Verdana;font-weight:600;font-weight:1;background-color:#00cc8f;vertical-align:middle;padding:0px;margin-top:0px'>git 其他相关操作</p>

>创建 SSH Keys
ssh-keygen -t rsa –C “youremail@example.com

>克隆远程仓库
git clone https://github.com/用户名/仓库名.git

>查看远程库信息
git remote
git remote -v(详细）






