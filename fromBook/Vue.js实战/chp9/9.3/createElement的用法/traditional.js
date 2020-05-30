Vue.component('ele',{
    template:'\
    <div id="element"\
    :class="{show:show}" \
    @click="handleClick">文本内容</div>',
    data:function(){
        return {
            show:true
        }
    },
    methods: {
        handleClick(){
            console.log("clicked");
        }
    },    
})