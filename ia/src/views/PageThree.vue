
<template>
    <div>
    <div class="deduction">
        <header>升级前msg与rmsg相同</header>
        <main>
            <el-table :data="tableDataHeader" style="width: 100%">
                <el-table-column
                        v-for="(item,index) in LogData"
                        :key="index"
                        :label="item.key"
                >
                    {{item.valuea}} |  {{item.valueb}}
                </el-table-column>
            </el-table>
        </main>
    </div>

    <div class="deduction">
        <header>对比详情</header>
        <main>
            <el-table :data="tableDataHeader" style="width: 100%">
                <el-table-column
                        v-for="(item,index) in LogData"
                        :key="index"
                        :label="item.key"
                >
                    {{item.valuea}} |  {{item.valueb}}
                    <!--{{index==0?item.valuea:''}}|{{index==0?item.valueb:''}}-->
                </el-table-column>
            </el-table>
        </main>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [
                    {
                        Date: "2016-05-02",
                        ExcelName: "王小虎",
                        DataDetail: "588"
                    },
                    {
                        Date: "2016-05-04",
                        ExcelName: "王小虎",
                        DataDetail: "16.38"
                    },
                    {
                        Date: "2016-05-01",
                        ExcelName: "王小虎",
                        DataDetail: "599.6"
                    }
                ],
                tableDataHeader: [
                    {
                        key: 'LAST_PAID_DATE'
                    }
                ],
                LogData: [
                    {
                    version: 'V1',
                    key: 'LAST_PAID_DATE',
                    valuea: '1',
                    valueb: 'a',
                    flag: '3',
                    direction: '1',
                    abvalue:'0'
                    },
                    {
                        version: 'V1',
                        key: 'TT_CHARGETYPE',
                        valuea: '2',
                        valueb: 'b',
                        flag: '0',
                        direction: '1',
                        abvalue:'3'
                    },
                    {
                        version: 'V1',
                        key: 'hh_CHARGETYPE',
                        valuea: '3',
                        valueb: 'c',
                        flag: '0',
                        direction: '1',
                        abvalue:'3'
                    }]
            };
        },
        created() {
            const _this = this
            axios.get('http://localhost:8181/IA_war_exploded/logresult/query/3/1/0').then(function (resp){
                _this.LogData = resp.data
                _this.pageSize = resp.data.size
                _this.total = resp.data.totalElements
                console.log(resp)
            })
        },
        methods: {}
    };
</script>

<style >
    .tableBox th{
        padding:0 !important;
        height:30px;
        line-height: 30px;
    }
    .tableBox td{
        padding:0 !important;
        height:30px;
        line-height: 30px;
    }
</style>