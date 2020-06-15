let app = new Vue({
    el: "#app",
    data: {
        columns: [
            {
                title: '姓名',
                key: 'name',
                sortable: false
            },
            {
                title: '年龄',
                key: 'age',
                sortable: true
            },
            {
                title: '出生日期',
                key: 'birthday',
                sortable: true
            },
            {
                title: '地址',
                key: 'address',
                sortable: true
            }

        ],
        data: [
            {
                name: '王小明',
                age: 18,
                birthday: '1999-02-21',
                address: '东北'
            },
            {
                name: '张晓刚',
                age: 18,
                birthday: '1999-02-22',
                address: '天津'
            },
            {
                name: '李晓红',
                age: 18,
                birthday: '1999-02-23',
                address: '北京'
            },
            {
                name: '周小伟',
                age: 18,
                birthday: '1999-02-24',
                address: '云南'
            },
            {
                name: '王二',
                age: 18,
                birthday: '1999-02-21',
                address: '湖南'
            }
        ]
    },
    methods: {
        handleAddData(){
            this.data.push({
                name:"刘晓天",
                age:19,
                birthday:'1998-05-30',
                address:"北京市东城区东直门"
            });
        }
    },
});


