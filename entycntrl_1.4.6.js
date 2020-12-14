const entry = function() {
    $.get('https://playentry.org/api/discuss/find?category=free', d => {
        entry().ds.free.text = d.data[0].title;
        entry().ds.free.id = d.data[0]._id;
        entry().ds.free.like = d.data[0].likesLength;
        entry().ds.free.view = d.data[0].visit;
        entry().ds.free.user = d.data[0].owner;
        entry().ds.free.user = user.username;
        entry().ds.free.created = d.data[0].created;
        async: false
    })
    $.get('https://playentry.org/api/discuss/find?category=qna', d => {
        entry().ds.qna.text = d.data[0].title;
        entry().ds.qna.id = d.data[0]._id;
        entry().ds.qna.like = d.data[0].likesLength;
        entry().ds.qna.view = d.data[0].visit;
        entry().ds.qna.user = d.data[0].owner;
        entry().ds.qna.user = user.username;
        entry().ds.qna.created = d.data[0].created;
        async: false
    })
    $.get('https://playentry.org/api/discuss/find?category=tips', d => {
        entry().ds.tip.text = d.data[0].title;
        entry().ds.tip.id = d.data[0]._id;
        entry().ds.tip.like = d.data[0].likesLength;
        entry().ds.tip.view = d.data[0].visit;
        entry().ds.tip.user = d.data[0].owner;
        entry().ds.tip.user = user.username;
        entry().ds.tip.created = d.data[0].created;
        async: false
    })
    return {
        ds: {
            free: {
                my : `https://playentry.org/api/discuss/find?username=${user.username}&title=&search_title=&sort=created&rows=0&page=1&category=free`,
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
}
