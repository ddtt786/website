(async () => {
    eval(await fetch('https://code.jquery.com/jquery.js').then(resp => resp.text()))
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
})()
