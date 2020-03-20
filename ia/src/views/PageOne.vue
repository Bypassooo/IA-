<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="version"
                    label="版本"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="key"
                    label="字段"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="valuea"
                    label="值1"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="valueb"
                    label="值2"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="flag"
                    label="对比结果"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="direction"
                    label="请求/应答"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="abvalue"
                    label="对比双方"
                    width="120">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="total"
                @current-change="page">
        </el-pagination>
    </div>

</template>

<script>
    export default {
        methods: {
            handleClick(row) {
                console.log(row);
            },
            page(currentPage){
                const _this = this
                axios.get('http://localhost:8181/IA_war_exploded/logresult/page/'+(currentPage-1)+'/4').then(function (resp){
                    _this.tableData = resp.data.content
                    _this.pageSize = resp.data.size
                    _this.total = resp.data.totalElements
                    console.log(resp)
                })
            }
        },

        data() {
            return {
                pageSize:'1',
                total:'1',
                tableData: [{
                    version: '2016-05-02',
                    key: '王小虎',
                    valuea: '上海',
                    valueb: '普陀区',
                    flag: '上海市普陀区金沙江路 1518 弄',
                    direction: 200333,
                    abvalue:1
                }, {
                    version: '2016-05-02',
                    key: '王小虎',
                    valuea: '上海',
                    valueb: '普陀区',
                    flag: '上海市普陀区金沙江路 1518 弄',
                    direction: 200333,
                    abvalue:1
                }, {
                    version: '2016-05-02',
                    key: '王小虎',
                    valuea: '上海',
                    valueb: '普陀区',
                    flag: '上海市普陀区金沙江路 1518 弄',
                    direction: 200333,
                    abvalue:1
                }, {
                    version: '2016-05-02',
                    key: '王小虎',
                    valuea: '上海',
                    valueb: '普陀区',
                    flag: '上海市普陀区金沙江路 1518 弄',
                    direction: 200333,
                    abvalue:1
                }]
            }
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/IA_war_exploded/logresult/page/0/4').then(function (resp){
                _this.tableData = resp.data.content
                _this.pageSize = resp.data.size
                _this.total = resp.data.totalElements
                console.log(resp)
            })
        }
    }
</script>