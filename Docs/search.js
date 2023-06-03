obj = JSON.parse(SearchResult);

function check() {
    return false;
}

function maxfor(arr) {
    var len = arr.length;
    var max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

let input = document.getElementById('input')
let result = document.getElementById('resultlist')
let button = document.getElementById('searchbutton')

input.addEventListener("focus", e => {
    result.id = 'active'
    result.style.overflow = 'hidden'
    result.style.padding = '0px'
    result.style.color="#7fffaa"
    result.style.fontFamily="Poppins"
    result.style.fontWeight="900"
    result.style.fontSize="100"
})
input.addEventListener("blur", e => {
    result.id = 'resultlist'
    result.style.overflow = 'hidden'
    result.style.padding = '0'
})

function searchtext() {
    result.innerHTML = '';


    // 标题搜索
    resultcount = 0;
    resultstr = '';
    var resulttitlecache = new Array()
    for (i = 0; i < obj.length; i++) {
        if (obj[i]['title'].includes(input.value) == true) {
            resulttitlecache.unshift(obj[i]['title'])
            resultcount++;
        }
    }

    // 标题搜索结果展示
    if (resultcount !== 0 && resultcount !== obj.length) {
        for (i = 0; i < resulttitlecache.length; i++) {
            for (j = 0; j < obj.length; j++) {
                if (obj[j]['title'] == resulttitlecache[i]) {
                    titlesearchresult = '<a href="https://ferneychen.github.io/OS_Jupiter/Docs/' + obj[j]["path"] + '" style="font-family:Poppins;color:#f0e68c;font-size:18px">' + obj[j]['title'].replace(new RegExp(input.value, 'g'), '<mark style="background-color:transparent;color:#00ffff">' + input.value + '</mark>')+' <i class="ri-check-double-line"></i><br>'
                    resultstr = titlesearchresult + resultstr
                }
            }
            result.innerHTML = resultstr;
        }
    }

    // 正文搜索
    var resulttextcache = new Array()
    for (i = 0; i < obj.length; i++) {
        if (obj[i]['text'].includes(input.value) == true) {
            resulttextcache.unshift(obj[i]['text'])
            resultcount++;
        }
    }

    // 正文搜索结果计数
    var targetname = new Array()
    var targetscore = new Array()
    if (resulttextcache.length !== 0 && input.value !== '') {
        for (i = 0; i < resulttextcache.length; i++) {
            for (j = 0; j < obj.length; j++) {
                if (obj[j]['text'] == resulttextcache[i]) {
                    targetname.unshift(obj[j]['title'])
                    targetscore.unshift(obj[j]['text'].match(RegExp(input.value, 'gim')).length)
                }
            }
        }
    }

    //排序相关选项
    var targetscorecache = targetscore.concat([]);
    var resultfortext = '';
    var textsearchresult = ''
    targetscorecache.sort(function (a, b) {
        return b - a
    })
    for (i = 0; i < targetscorecache.length; i++) {
        for (j = 0; j < targetscore.length; j++) {
            if (targetscorecache[i] == targetscore[j]) {
                console.log('文章排序:' + targetname[j])
                for (k = 0; k < obj.length; k++) {
                    if (obj[k]['title'] == targetname[j]) {
                        // 确认选区
                        textorder = obj[k]['text'].indexOf(input.value) - 15;
                        while (textorder < 0) {
                            textorder++
                        }

                        resultfortext = '<a href="https://ferneychen.github.io/OS_Jupiter/Docs/' + obj[k]["path"] + '" style="font-family:Poppins;color:#f0e68c;font-size:18px">' + obj[k]['title'] + '</a>&nbsp;-&nbsp;' + targetscorecache[i] + '&nbsp;Matched <i class="ri-check-fill"></i>'/* + obj[k]['text'].substring(textorder, textorder + 100).replace(new RegExp(input.value, 'g'), '<mark style="background-color:transparent;color:#00ffff">' + input.value + '</mark>')*/+'<br>'
                        textsearchresult = textsearchresult + resultfortext;
                    }
                }
            }
        }
    }

    if (resultcount !== obj.length) {
        if (resultcount == 0) {
            result.innerHTML ='<p>Sorry, we did not find any documents..</p>'
        }
    }

    result.innerHTML = result.innerHTML + textsearchresult.substring(0, textsearchresult.length - 4) 
}
