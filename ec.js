let __title
let __id
let __like
let __view
let __user
let ret
const entry = {
    ds: {
        free: {
            my : `https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=free`,
            get(getr) {
                $.ajaxSetup({ async: false });
                $.get('https://playentry.org/api/discuss/find?category=free', d => {
                    __title = d.data[0].title;
                    __id = d.data[0]._id;
                    __like = d.data[0].likesLength;
                    __view = d.data[0].visit;
                    __user = d.data[0].owner;
                    if(getr == "title"){ret = __title}
                    if(getr == "id"){ret = __id}
                    if(getr == "like"){ret = __like}
                    if(getr == "view"){ret = __view}
                    if(getr == "user"){ret = __user}
                })
                return ret
            },
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
            delete(del) {
                $.get(entry.ds.free.my, d => {
                    delfree = d.data[0]._id;
                    if(del == undefined) {
                        $.ajax({
                            url: `https://playentry.org/api/discuss/${delfree}`,
                            type: "DELETE",
                        })
                    }else{
                        $.ajax({
                            url: `https://playentry.org/api/discuss/${del}`,
                            type: "DELETE",
                        })
                    }
                })
            }
        },
        qna: {
            my : `https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=qna`,
            get(getr) {
                $.ajaxSetup({ async: false });
                $.get('https://playentry.org/api/discuss/find?category=qna', d => {
                    __title = d.data[0].title;
                    __id = d.data[0]._id;
                    __like = d.data[0].likesLength;
                    __view = d.data[0].visit;
                    __user = d.data[0].owner;
                    if(getr == "title"){ret = __title}
                    if(getr == "id"){ret = __id}
                    if(getr == "like"){ret = __like}
                    if(getr == "view"){ret = __view}
                    if(getr == "user"){ret = __user}
                })
                return ret
            },
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
            delete(del) {
                $.get(entry.ds.qna.my, d => {
                    delfree = d.data[0]._id;
                    if(del == undefined) {
                        $.ajax({
                            url: `https://playentry.org/api/discuss/${delfree}`,
                            type: "DELETE",
                        })
                    }else{
                        $.ajax({
                            url: `https://playentry.org/api/discuss/${del}`,
                            type: "DELETE",
                        })
                    }
                })
            }
        },
        tip: {
            my : `https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=tips`,
            get(getr) {
                $.ajaxSetup({ async: false });
                $.get('https://playentry.org/api/discuss/find?category=tips', d => {
                    __title = d.data[0].title;
                    __id = d.data[0]._id;
                    __like = d.data[0].likesLength;
                    __view = d.data[0].visit;
                    __user = d.data[0].owner;
                    if(getr == "title"){ret = __title}
                    if(getr == "id"){ret = __id}
                    if(getr == "like"){ret = __like}
                    if(getr == "view"){ret = __view}
                    if(getr == "user"){ret = __user}
                })
                return ret
            },
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
            delete(del) {
                $.get(entry.ds.tip.my, d => {
                    delfree = d.data[0]._id;
                    if(del == undefined) {
                        $.ajax({
                            url: `https://playentry.org/api/discuss/${delfree}`,
                            type: "DELETE",
                        })
                    }else{
                        $.ajax({
                            url: `https://playentry.org/api/discuss/${del}`,
                            type: "DELETE",
                        })
                    }
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
