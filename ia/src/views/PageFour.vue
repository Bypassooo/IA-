<template>
    <div class="warpper">
        <el-tree ref="tree" :data="TreeData" node-key="id" :key="treeKey" current-node-key :props="defaultProps" highlight-current @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ParmentData: null,
                TreeData: [
                    {
                        id: 1,
                        label: '升级前msg与rmsg对比',
                        children: [
                            {
                                id: 5,
                                label: '请求参数',
                                children: [
                                    { id: 13, label: 'msg与rmsg一致的参数' },
                                    { id: 14, label: 'msg中有rmsg中没有的参数' },
                                    { id: 15, label: 'msg中没有rmsg中有的参数' },
                                    { id: 16, label: 'msg与rmsg中都有但值不一致的参数'}
                                ]
                            },
                            {
                                id: 6,
                                label: '应答参数',
                                children: [
                                    { id: 17, label: 'msg与rmsg一致的参数' },
                                    { id: 18, label: 'msg中有rmsg中没有的参数' },
                                    { id: 19, label: 'msg中没有rmsg中有的参数' },
                                    { id: 20, label: 'msg与rmsg中都有但值不一致的参数' }
                                ]

                            }
                        ],
                        show: true
                    }, {
                        id: 2,
                        label: '升级后msg与rmsg对比',
                        children: [
                            {
                                id: 7,
                                label: '请求参数',
                                children: [
                                    { id: 21, label: 'msg与rmsg一致的参数' },
                                    { id: 22, label: 'msg中有rmsg中没有的参数' },
                                    { id: 23, label: 'msg中没有rmsg中有的参数' },
                                    { id: 24, label: 'msg与rmsg中都有但值不一致的参数'}
                                ]
                            }, {
                                id: 8,
                                label: '应答参数',
                                children: [
                                    { id: 25, label: 'msg与rmsg一致的参数' },
                                    { id: 26, label: 'msg中有rmsg中没有的参数' },
                                    { id: 27, label: 'msg中没有rmsg中有的参数' },
                                    { id: 28, label: 'msg与rmsg中都有但值不一致的参数'}
                                ]
                            }
                        ]
                    }, {
                        id: 3,
                        label: '升级前msg与升级后msg对比',
                        children: [
                            {
                                id: 9,
                                label: '请求参数',
                                children: [
                                    { id: 29, label: '升级前与升级后一致的参数' },
                                    { id: 30, label: '升级前有升级后没有的参数' },
                                    { id: 31, label: '升级前没有升级后有的参数' },
                                    { id: 32, label: '升级前后都有但值不一致的参数'}
                                ]
                            }, {
                                id: 10,
                                label: '应答参数',
                                children: [
                                    { id: 33, label: '升级前与升级后一致的参数' },
                                    { id: 34, label: '升级前有升级后没有的参数' },
                                    { id: 35, label: '升级前没有升级后有的参数' },
                                    { id: 36, label: '升级前后都有但值不一致的参数'}
                                ]
                            }
                        ]
                    },{
                        id: 4,
                        label: '升级前rmsg与升级后rmsg对比',
                        children: [
                            {
                                id: 11,
                                label: '请求参数',
                                children: [
                                    { id: 37, label: '升级前与升级后一致的参数' },
                                    { id: 38, label: '升级前有升级后没有的参数' },
                                    { id: 39, label: '升级前没有升级后有的参数' },
                                    { id: 40, label: '升级前后都有但值不一致的参数'}
                                ]
                            }, {
                                id: 12,
                                label: '应答参数',
                                children: [
                                    { id: 41, label: '升级前与升级后一致的参数' },
                                    { id: 42, label: '升级前有升级后没有的参数' },
                                    { id: 43, label: '升级前没有升级后有的参数' },
                                    { id: 44, label: '升级前后都有但值不一致的参数'}
                                ]
                            }
                        ]
                    }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                treeKey:'',
            }
        },
        created() {
            this.$nextTick(function(){
                this.$data.TreeData.forEach(row => {
                    // debugger
                    console.log("1111111111111",row)
                    console.log("222222222222",row.show)
                    if(row.show){
                        this.$refs.tree.setCurrentKey(row.id);
                        this.$refs.tree.store.nodesMap[row.id].expanded = true;
                    }
                })
            })
        },
        methods: {
            handleNodeClick: function (data,checked) {
                // 点击事件
            },
            handleCheckChange(data, checked, indeterminate) {
                console.log(data, checked, indeterminate);
            },
        }
    }
</script>

<style scoped>
    .warpper .el-tree--highlight-current /deep/ .el-tree-node.is-checked > .el-tree-node__content {
        background-color: rgb(255, 255, 255);
        color:rgb(64, 158, 255);
    }
    .warpper .el-tree--highlight-current /deep/ .el-tree-node.is-current > .el-tree-node__content {
        background-color: rgb(255, 255, 255);
        color:rgb(64, 158, 255);
    }
</style>