<template>
  <div>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="版本号">
        <el-input v-model="formInline.user" placeholder="版本号"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="menu">
    <div class="left" style="float: left">
      <el-tree
              class="treeitems"
              :data="data"
              node-key="id"
              :props="defaultProps"
              @node-click="handleNodeClick"
              ref="tree"
      ></el-tree>
    </div>
    <div class="right" style="float: left">
      <el-table
              :data="tableData"
              style="width: 100%"
              max-height="750"
              class="tableBox">
        <el-table-column
                fixed
                prop="version"
                label="版本"
                width="160">
        </el-table-column>
        <el-table-column
                fixed
                prop="key"
                label="字段"
                width="160">
        </el-table-column>
        <el-table-column
                fixed
                prop="valuea"
                label="A"
                width="160">
        </el-table-column>
        <el-table-column
                fixed
                prop="valueb"
                label="B"
                width="160">
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

  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        pageSize:'1',
        total:'1',
          tableData: [
          ],
          data: [{
            id:0,
            label: '升级前msg与rmsg对比',
            abvalue:'0',
            children: [{
              id:4,
              label: '请求参数',
              abvalue:'0',
              direction:'0',
              children:[{
                id:12,
                label:'msg与rmsg中一致',
                flag:'0',
                direction:'0',
                abvalue:'0',
                },
                {
                  id:13,
                  label:'msg中有与rmsg中无',
                  flag:1,
                  direction:'0',
                  abvalue:'0',
                },{
                  id:14,
                  label:'msg中无与rmsg中有',
                  flag:'2',
                  direction:'0',
                  abvalue:'0',
                },{
                  id:15,
                  label:'msg与rmsg中有且值不一致',
                  flag:'3',
                  direction:'0',
                  abvalue:'0',
                }]
            },{
              id: 5,
              label: '应答参数',
              abvalue:'0',
              direction:'1',
              children:[{
                id:16,
                label:'msg与rmsg中一致',
                flag:'0',
                direction:'1',
                abvalue:'0',
              },
                {
                  id:17,
                  label:'msg中有与rmsg中无',
                  flag:'1',
                  direction:'1',
                  abvalue:'0',
                },{
                  id:18,
                  label:'msg中无与rmsg中有',
                  flag:'2',
                  direction:'1',
                  abvalue:'0',
                },{
                  id:19,
                  label:'msg与rmsg中有且值不一致',
                  flag:'3',
                  direction:'1',
                  abvalue:'0',
                }]
            }]
          },
            {
              id:1,
              label: '升级后msg与rmsg对比',
              children:[{
                id: 6,
                label: '请求参数',
                abvalue:'1',
                direction:'0',
                children:[{
                  id:20,
                  label:'msg与rmsg中一致',
                  flag:'0',
                  direction:'0',
                  abvalue:'1',
                },
                  {
                    id:21,
                    label:'msg中有与rmsg中无',
                    flag:'1',
                    direction:'0',
                    abvalue:'1',
                  },{
                    id:22,
                    label:'msg中无与rmsg中有',
                    flag:'2',
                    direction:'0',
                    abvalue:'1',
                  },{
                    id:23,
                    label:'msg与rmsg中有且值不一致',
                    flag:'3',
                    direction:'0',
                    abvalue:'1',
                  }]
              },{
                id: 7,
                label: '应答参数',
                abvalue:'1',
                direction:'1',
                children:[{
                  id:24,
                  label:'msg与rmsg中一致',
                  flag:'0',
                  direction:'1',
                  abvalue:'1',
                },
                  {
                    id:25,
                    label:'msg中有与rmsg中无',
                    flag:'1',
                    direction:'1',
                    abvalue:'1',
                  },{
                    id:26,
                    label:'msg中无与rmsg中有',
                    flag:'2',
                    direction:'1',
                    abvalue:'1',
                  },{
                    id:27,
                    label:'msg与rmsg中有且值不一致',
                    flag:'3',
                    direction:'1',
                    abvalue:'1',
                  }]
              }]
            },{
              id:2,
              label: '升级前msg与升级后msg对比',
              children: [{
                id:8,
                label: '请求参数',
                abvalue:'2',
                direction:'0',
                children:[{
                  id:28,
                  label:'升级前msg与升级后msg中一致',
                  flag:'0',
                  direction:'0',
                  abvalue:'2',
                },
                  {
                    id:29,
                    label:'升级前msg中有与升级后msg中无',
                    flag:'1',
                    direction:'0',
                    abvalue:'2',
                  },{
                    id:30,
                    label:'升级前msg中无与升级后msg中有',
                    flag:'2',
                    direction:'0',
                    abvalue:'2',
                  },{
                    id:31,
                    label:'升级前msg与升级后msg中有且值不一致',
                    flag:'3',
                    direction:'0',
                    abvalue:'2',
                  }]
              },{
                id:9,
                label: '应答参数',
                abvalue:'2',
                direction:'1',
                children:[{
                  id:32,
                  label:'升级前msg与升级后msg中一致',
                  flag:'0',
                  direction:'1',
                  abvalue:'2',
                },
                  {
                    id:33,
                    label:'升级前msg中有与升级后msg中无',
                    flag:'1',
                    direction:'1',
                    abvalue:'2',
                  },{
                    id:34,
                    label:'升级前msg中无与升级后msg中有',
                    flag:'2',
                    direction:'1',
                    abvalue:'2',
                  },{
                    id:35,
                    label:'升级前msg与升级后msg中有且值不一致',
                    flag:'3',
                    direction:'1',
                    abvalue:'2',
                  }]
              }]
            },{
              id:3,
              label: '升级前rmsg与升级后rmsg对比',
              children: [{
                id:10,
                label: '请求参数',
                abvalue:'3',
                direction:'0',
                children:[{
                  id:36,
                  label:'升级前rmsg与升级后rmsg中一致',
                  flag:'0',
                  direction:'0',
                  abvalue:'3',
                },
                  {
                    id:37,
                    label:'升级前rmsg中有与升级后rmsg中无',
                    flag:'1',
                    direction:'0',
                    abvalue:'3',
                  },{
                    id:38,
                    label:'升级前rmsg中无与升级后rmsg中有',
                    flag:'2',
                    direction:'0',
                    abvalue:'3',
                  },{
                    id:39,
                    label:'升级前rmsg与升级后rmsg中有且值不一致',
                    flag:'3',
                    direction:'0',
                    abvalue:'3',
                  }]
              },{
                id:11,
                label: '应答参数',
                abvalue:'3',
                direction:'1',
                children:[{
                  id:40,
                  label:'升级前rmsg与升级后rmsg中一致',
                  flag:'0',
                  direction:'1',
                  abvalue:'3',
                },
                  {
                    id:41,
                    label:'升级前rmsg中有与升级后rmsg中无',
                    flag:'1',
                    direction:'1',
                    abvalue:'3',
                  },{
                    id:42,
                    label:'升级前rmsg中无与升级后rmsg中有',
                    flag:'2',
                    direction:'1',
                    abvalue:'3',
                  },{
                    id:43,
                    label:'升级前rmsg与升级后rmsg中有且值不一致',
                    flag:'3',
                    direction:'1',
                    abvalue:'3',
                  }]
              }]
            }],
        defaultProps: {
          children: 'children',
          label: 'label',
        }
      };
    },
    watch:{
    },
    methods: {
      handleNodeClick(v,e) {
        const _this = this
        console.log(v.flag)
        console.log(v.direction)
        console.log(v.abvalue)
        if(v.flag == undefined){
          v.flag = '*'
        }
        if(v.direction == undefined){
          v.direction = '*'
        }
        if(v.abvalue == undefined){
          v.abvalue = '*'
        }
        this.flag = v.flag
        this.direction = v.direction
        this.abvalue = v.abvalue
        axios.get('http://localhost:8181/IA_war_exploded/logresult/query/'+v.flag+'/'+v.direction+'/'+v.abvalue+'/0/22').then(function (resp) {
          console.log(resp)
          _this.pageSize = resp.data.size
          _this.total = resp.data.totalElements
          _this.tableData = resp.data.content
        })

      },
      page(currentPage){
        const _this = this
        axios.get('http://localhost:8181/IA_war_exploded/logresult/query/'+_this.flag+'/'+_this.direction+'/'+_this.abvalue+'/'+(currentPage-1)+'/22').then(function (resp){
          _this.tableData = resp.data.content
          _this.pageSize = resp.data.size
          _this.total = resp.data.totalElements
          console.log(resp)
        })
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
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
    line-height:30px;
  }
</style>