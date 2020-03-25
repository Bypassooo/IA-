<template>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="版本" prop="version">
            <el-input v-model="ruleForm.version"></el-input>
        </el-form-item>
        <el-form-item label="键值" prop="key">
            <el-input v-model="ruleForm.key"></el-input>
        </el-form-item>
        <el-form-item label="键值A" prop="valuea">
            <el-input v-model="ruleForm.valuea"></el-input>
        </el-form-item>
        <el-form-item label="键值B" prop="valueb">
            <el-input v-model="ruleForm.valueb"></el-input>
        </el-form-item>
        <el-form-item label="对比结果" prop="flag">
            <el-select v-model="ruleForm.flag" placeholder="请选择对比结果">
                <el-option label="AB都有且相同" value="0"></el-option>
                <el-option label="A有B没有" value="1"></el-option>
                <el-option label="A没有B有" value="2"></el-option>
                <el-option label="AB都有且不同" value="3"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="对比方向" prop="direction">
            <el-select v-model="ruleForm.direction" placeholder="请选择对比方向">
                <el-option label="请求" value="Req"></el-option>
                <el-option label="应答" value="Ans"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="对比双方" prop="abvalue">
            <el-select v-model="ruleForm.abvalue" placeholder="请选择对比双方">
                <el-option label="升级前msg与rmsg" value="0"></el-option>
                <el-option label="升级后msg与rmsg" value="1"></el-option>
                <el-option label="升级后msg与升级后rmsg" value="2"></el-option>
                <el-option label="升级后rmsg与升级后rmsg" value="3"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>

    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    version: '',
                    key: '',
                    valuea: '',
                    valueb: '',
                    flag: '',
                    direction:'',
                    abvalue:''
                },
                rules: {
                    version: [
                        { required: true, message: '请输入版本', trigger: 'blur' },
                        { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' }
                    ],
                    key: [
                        { required: true, message: '请输入键值', trigger: 'blur' },
                        { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                    ],
                    valuea: [
                        { required: true, message: '请输入valueA', trigger: 'blur' },
                        { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                    ],
                    valueb: [
                        { required: true, message: '请输入valueB', trigger: 'blur' },
                        { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
                    ],
                    flag: [
                        { required: true, message: '请选择对比结果', trigger: 'change' }
                    ],
                    direction: [
                        { required: true, message: '请选择对比方向', trigger: 'change' }
                    ],
                    abvalue: [
                        { required: true, message: '请选择对比双方', trigger: 'change' }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                const _this = this
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        axios.post('http://localhost:8181/IA_war_exploded/logresult/save',this.ruleForm).then(function(resp){
                            if(resp.data == "sucess"){
                           //     _this.$message('添加成功');
                                _this.$router.push('/pageOne')
                            }
                            else{
                                _this.$message('添加失败');
                            }
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>