let vm = new Vue({
    el: "#timeApp",
    data: {
        news: [
            {
                title: "What we just saw from the President was propaganda.", publishedTime: new Date(2020, 08, 17, 13, 50, 10).getTime()
            },
            {
                title:"ABC town hall partipant: Trump is making everything hard.", publishedTime:new Date(2020, 01, 20, 10, 30, 58).getTime()
            },
            {
                title:"33 times Trump said the coronavirus would go away.", publishedTime:new Date(2019, 06, 17, 10, 30, 58).getTime()
            }
        ],
        persons:[
            {name:'小明', birthday:new Date(2020,02,03).getTime()},
            {name:'小花', birthday:new Date(2000,00,03).getTime()},
            {name:'小黑', birthday:new Date(1990,12,07).getTime()},
        ]
    }
});
