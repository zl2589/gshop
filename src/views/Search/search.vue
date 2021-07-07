<template>
    <div class="search">
        <div class="search-title">搜索</div>
        <el-form class="search-form" ref="form" :model="form">
            <el-form-item>
                <el-input v-model="form.search" placeholder="请输入商家或美食名称"></el-input>
                <el-button type="primary">搜索</el-button>
            </el-form-item>
        </el-form>

        <div class="search-result">

        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                search: '',
            }
        }
    }
}
</script>

<style lang="stylus">
.search {
    
  .search-title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #02a774;
    border-bottom: 1px solid #ccc;
    color: #fff;
  }
  .search-form {
      margin-top 10px
      padding: 0 5px
      .el-input {
          width 78%
      }
  }
  .search-result {
      height 530px

  }
}
</style>