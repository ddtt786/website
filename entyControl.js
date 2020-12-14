eval(await fetch('https://code.jquery.com/jquery-3.4.1.min.js').then(resp => resp.text()))




const entry = {
    ds: {
        free: {
            write(t,p) {
                $.ajax({
                    url:"https://playentry.org/api/discuss/",
                    type:"POST",
                    data:{
                        content:p,
                        title:t,
                        groupNotice:false,
                        images:[],
                        category:"free"
                    }
                });
            },
            delete() {
                $.get(`https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=free`, d => {
                    delfree = d.data[0]._id;
                    $.ajax({
                        url:`https://playentry.org/api/discuss/${_id}`,
                        type:"DELETE"
                    })
                })
            }
        },
        qna: {
            write(t,p) {
                $.ajax({
                    url:"https://playentry.org/api/discuss/",
                    type:"POST",
                    data:{
                        content:p,
                        title:t,
                        groupNotice:false,
                        images:[],
                        category:"qna"
                    }
                });
            },
            delete() {
                $.get(`https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=qna`, d => {
                    delfree = d.data[0]._id;
                    $.ajax({
                        url:`https://playentry.org/api/discuss/${_id}`,
                        type:"DELETE"
                    })
                })
            }
        },
        tip: {
            write(t,p) {
                $.ajax({
                    url:"https://playentry.org/api/discuss/",
                    type:"POST",
                    data:{
                        content:p,
                        title:t,
                        groupNotice:false,
                        images:[],
                        category:"tip"
                    }
                });
            },
            delete() {
                $.get(`https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=tip`, d => {
                    delfree = d.data[0]._id;
                    $.ajax({
                        url:`https://playentry.org/api/discuss/${_id}`,
                        type:"DELETE"
                    })
                })
            }
        }
    },
    project(pj) {
        return {
            like() {
                $.ajax({
                    url: `https://playentry.org/api/project/favorite/${pj}`,
                    type: "POST",
                    data: {
                        targetSubject: "project", targetType: "individual"
                    }
                })
            },
            star() {
                $.ajax({
                    url: `https://playentry.org/api/project/favorite/${pj}`,
                    type: "POST",
                    data: {
                        targetSubject: "project", targetType: "individual",
                    }
                })
            },
            save(saver) {
                if(saver == undefined) {
                    $.ajax({
                        url: `https://playentry.org/api/project/${pj}`,
                        type: "PUT",
                        data: { "isopen": true, "group": [] },
                        success: function (data) {
                            console.log(data)
                        }
                    })
                }else{
                    $.ajax({
                        url: `https://playentry.org/api/project/${pj}`,
                        type: "PUT",
                        data: { "isopen": true, "group": [] ,name: saver,},
                        success: function (data) {
                            console.log(data)
                        }
                    })
                }
            }
        }
    }
}

setInterval(() => {
    $.get('https://playentry.org/api/discuss/find?category=free', d => {
        entry.ds.free.text = d.data[0].title;
        entry.ds.free.id = d.data[0]._id;
        entry.ds.free.like = d.data[0].likesLength;
        entry.ds.free.view = d.data[0].visit;
        entry.ds.free.user = d.data[0].owner;
        entry.ds.free.user = user.username;
        entry.ds.free.created = d.data[0].created;
        $.get('https://playentry.org/api/discuss/'+id, d => {
            content=d.content;
        })
    })
    $.get('https://playentry.org/api/discuss/find?category=qna', d => {
        entry.ds.qna.text = d.data[0].title;
        entry.ds.qna.id = d.data[0]._id;
        entry.ds.qna.like = d.data[0].likesLength;
        entry.ds.qna.view = d.data[0].visit;
        entry.ds.qna.user = d.data[0].owner;
        entry.ds.qna.user = user.username;
        entry.ds.qna.created = d.data[0].created;
        $.get('https://playentry.org/api/discuss/'+id, d => {
            content=d.content;
        })
    })
    $.get('https://playentry.org/api/discuss/find?category=tips', d => {
        entry.ds.tip.text = d.data[0].title;
        entry.ds.tip.id = d.data[0]._id;
        entry.ds.tip.like = d.data[0].likesLength;
        entry.ds.tip.view = d.data[0].visit;
        entry.ds.tip.user = d.data[0].owner;
        entry.ds.tip.user = user.username;
        entry.ds.tip.created = d.data[0].created;
        $.get('https://playentry.org/api/discuss/'+id, d => {
            content=d.content;
        })
    })
}, 300)

var text;
var id;
var botName;
var like;
var user;
var created;
console.log("-----------made by ex-----------");
console.log("---지금부터 봇 가동이 시작됩니다--");
alert("BOT - 실행됨");
function presslike(link){
$.ajax({url:"https://playentry.org/api/project/like/"+link,type:"POST",data:{targetSubject: "project", targetType: "individual"}});
}
function comment(a){
    $.ajax({
        url:"/api/comment",
        dataType:"json",
        type:"POST",
        data:{
            content: a,
            target: id,
            targetSubject: "discuss",
            targetType: "individual"
        }
    });
}

function same(stringA,stringB){
if(stringB.length>stringA.length){
    var temp = stringB;
    stringB=stringA;
    stringA=temp;
}
var ao=0;
var af=0;
ao=stringB.length;
af=stringA.length;
var count=0;
for(var i=0;i<ao;i++){
    for(var j=0;j<af;j++){
    if(stringB.charAt(i)==stringA.charAt(j)){
        count++;
        break;
    }
    }
}
return (count/af)*100;
}



var link = {};
var xx = {};
chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if (request.stop){
    clearInterval(link[request.id]);
    }else{
    if(true){

        start(request.id, request.name);
        xx[request.id] = ee(request.id, request.name)

    }
    }
    sendResponse({baz: request.id});

});

function ee(projectId, projectName){
console.log(projectId);

var id = projectId;
var name = projectName;
link[id] = setInterval(
    function(){
    console.log(id);
    start(id, name);
    }, 210000
);
}
