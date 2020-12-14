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
                        url:`https://playentry.org/api/discuss/${delfree}`,
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
                        url:`https://playentry.org/api/discuss/${delfree}`,
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
                        url:`https://playentry.org/api/discuss/${delfree}`,
                        type:"DELETE"
                    })
                })
            }
        }
    },
    project(pj) {
        return {
            category : fetch.sync(`https://playentry.org/api/project/${pj}`).json().category,
            likecnt : fetch.sync(`https://playentry.org/api/project/${pj}`).json().likeCnt,
            view : fetch.sync(`https://playentry.org/api/project/${pj}`).json().visit,
            like() {
                $.ajax({
                    url:"https://playentry.org/api/project/like/"+pj,
                    type:"POST",
                    data:{
                        targetSubject: "project", targetType: "individual"
                    }
                })
            },
            star() {
                $.ajax({
                    url:"https://playentry.org/api/project/favorite/"+pj,
                    type:"POST",
                    data:{
                        targetSubject: "project", targetType: "individual",
                    }
                })
            },
            save() {
                $.ajax({
                    url: "https://playentry.org/api/project/"+id,
                    type: "PUT",
                    data: {"isopen":true, "group":[]},
                    success: function(data){
                    console.log(data);
                    }
                });
            }
        }
    }
}
