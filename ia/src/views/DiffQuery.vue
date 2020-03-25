<template>
    <!-- 表格list -->
    <el-table :data="dataList" border="">
        <!-- 动态生成列 -->
        <el-table-column v-for="(item,index) in theadList" :key="index" :label="item.label" :prop="item.prop" :sortable="'custom'">
            <!--如果数据还需要处理，否则不用以下代码-->
            <template slot-scope="scope">
                <div>{{ scope.row[item.prop] | toFixed(6) }}</div>
            </template>
        </el-table-column>
        <!-- 动态生成列结束 -->
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                // 动态列表头及属性
                theadList: [
                    {
                        label: 'a',
                        prop: 123
                    },
                    {
                        label: 'c',
                        prop: 456
                    }],
                dataList: [1,2]
            }
        },
        mounted() {
            this.queryList()
        },
        methods: {
            queryList() {
                const data = {}
                this.$http.post(data).then(res => {
                    this.loading = false
                    // 对表头进行赋值处理 prop中的tr[index]与 datalist中的item项的 item['tr'+ i]一一对应
                    this.theadList = res.dateArr.map((item, index) => {
                        return {
                            label: item,
                            prop: 'tr' + index
                        }
                    })
                    // 对表头对应的每一列的属性进行赋值
                    // 为了能正常排序 需要对所有的数值进行处理 【如果有需要数字型进行排序null或者空字付串的数值请处理为0】
                    this.dataList = res.rows
                    this.dataList.forEach(item => {
                        for (let i = 0; i < res.dateArr.length; i++) {
                            item['tr' + i] = item.rateArr[i] || '0'
                        }
                    })
                }).catch(err => {})
            }
        }
    }
</script>