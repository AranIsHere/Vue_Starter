Vue.component('ele',{
    render:function(createElement){
        return createElement(
            'div',
            {
                // 动态绑定class,同:class
                class:{
                    'show':this.show
                },
                //普通html特性
                attrs:{
                    id:'element'
                },
                //给div绑定click事件
                on:{
                    click:this.handleClick
                }
            },
            '文本内容'
        )
    },
    data:function(){
        return {
            show:false
        }
    },
    methods: {
        handleClick(){
            console.log('clickedByCreateElement')
        }
    },
})