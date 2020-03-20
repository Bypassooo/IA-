<template>
    <div>
        <tr><td>版本</td><td>字段名</td><td>A</td><td>B</td><td>方向</td><td>结果类别</td><td>比较类别</td></tr>
        <tr v-for="item in logs">
            <td>{{item.version}}</td>
            <td>{{item.key}}</td>
            <td>{{item.valuea}}</td>
            <td>{{item.valueb}}</td>
            <td>{{item.direction}}</td>
            <td>{{item.flag}}</td>
            <td>{{item.abvalue}}</td>
        </tr>
    </div>
    
</template>

<script>
    export default {
        name: "log",
        data(){
            return{
               msg:'Hello Vue',
                logs:[
                    {
                        version:1,
                        key:'input',
                        valuea:'output',
                        valueb:'valueb',
                        direction:'direction',
                        flag:'flag',
                        abvalue:'abvalue'

                    },
                    {
                        version:2,
                        key:'input',
                        valuea:'output',
                        valueb:'valueb',
                        direction:'direction',
                        flag:'flag',
                        abvalue:'abvalue'
                    }
                ]
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/IA_war_exploded/logresult/compare').then(function (resp){
                _this.logs = resp.data
            })
        }
    }
</script>

<style scoped>

</style>