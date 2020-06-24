<template>
  <div>
       <el-button type="success" @click="hanleSuccess">计算器</el-button>
       <el-dialog
          :visible.sync="dialogVisible"
          width="50%"
          >
            <el-input v-model="input" placeholder="请输入内容"></el-input>
            <div style="margin-bottom:18px;margin-top:20px">
              <el-button @click="left">(</el-button>
              <el-button @click="right">)</el-button>
              <el-button @click="add">+</el-button>
              <el-button @click="reduce">-</el-button>
              <el-button @click="except">÷</el-button>
              <el-button @click="ride">*</el-button>
              <el-button @click="beEqualTo">=</el-button>
              <el-button @click="clearInput">清除</el-button>
            </div>
            <div>
              <el-button @click="totalAmount">合计金额</el-button><el-button @click="medicinePay">&nbsp;&nbsp;&nbsp;医保支付&nbsp;&nbsp;</el-button>
              <el-button @click="ownFee">自费</el-button><el-button @click="ownPay">&nbsp;&nbsp;&nbsp;&nbsp;自付&nbsp;&nbsp;&nbsp;</el-button>
            </div>
            <div style="margin-top:20px">
              <el-button @click="unreasonable">&nbsp;&nbsp;不合理&nbsp;&nbsp;</el-button><el-button @click="thirdPay">&nbsp;第三方支付</el-button>
              <el-button @click="Deductible">免赔</el-button><el-button @click="tiblePayRatio">赔付比例</el-button>
            </div>
             <div style="margin-top:20px">
              <el-button >&nbsp;&nbsp;不合理&nbsp;&nbsp;</el-button><el-button >&nbsp;第三方支付</el-button>
              <el-button >免赔</el-button><el-button >赔付比例</el-button>
            </div>
           
          <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span> -->
        </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: true,
      input:'',
      symbolList:[' + ',' - ', ' * ',' ÷ ',' ( '],
      keywordList:['额','付','费','理','赔','例']
    }
  },
  methods:{
    hanleSuccess() {
      this.dialogVisible = true
    },
    // 左括号
    left() {
      if( this.keywordList.indexOf(this.input.substr(this.input.length - 1,1)) !== -1) {
        return
      }
      this.input += ' ( '
    },
    right() {
      let left = this.input.indexOf(' ( ')
      if( left !== -1 ) {
        this.input += ' ) '
      }
      
    },
    // 加
    add() {
      if(this.input) {
        if(this.symbolList.indexOf(this.input.substr(this.input.length - 1,3)) !== -1) {
          return
        }
        this.input += ' + '
      }
      
    },
    // 减
    reduce() {
      if(this.input) {
        this.input += ' - '
      }
    },
    // 除
    except() {
      if(this.input) {
        this.input += ' ÷ '
      }
      
    },
    // 乘
    ride() {
      if(this.input) {
        this.input += ' * '
      }
    },
    // 合计金额
    totalAmount() {
      if(this.judgingSymbol()) {
        this.input += '合计金额'
      }else if( this.input.length === 3 && this.input.substr(0,3) === ' ( ') {
        this.input += '合计金额'
      }else if(  this.input.length === 0 ) {
        this.input += '合计金额'
      }
    },
    // 医保支付
    medicinePay() {
      if(this.judgingSymbol()) {
        this.input += '医保支付'
      }else if( this.input.length === 3 && this.input.substr(0,3) === ' ( ') {
        this.input += '医保支付'
      }else if( this.input.length === 0 ) {
        this.input += '医保支付'
      }
    },
    // 自费
    ownFee() {
      if(this.judgingSymbol()) {
        this.input += '自费'
      }else if( this.input.length === 3 && this.input.substr(0,3) === ' ( ' ) {
        this.input += '自费'
      }else if( this.input.length === 0) {
        this.input += '自费'
      }
      
    },
    // 自付
    ownPay() {
      if(this.judgingSymbol()) {
        this.input += '自付'
      }else if( this.input.length === 3 && this.input.substr(0,3) === ' ( '  ) {
        this.input += '自付'
      }else if( this.input.length === 0 ) {
        this.input += '自付'
      }
    },
    // 不合理
    unreasonable() {
      if(this.judgingSymbol()) {
        this.input += '不合理'
      }else if( this.input.length === 3 && this.input.substr(0,3) === ' ( ' ) {
        this.input += '不合理'
      }else if(this.input.length === 0 ) {
        this.input += '不合理'
      }
    },
    // 第三方支付
    thirdPay() {
      if(this.judgingSymbol()) {
        this.input += '第三方支付'
      }else if( this.input.length === 3 && this.input.substr(0,3) === ' ( ' ) {
        this.input += '第三方支付'
      }else if(  this.input.length === 0  ) {
        this.input += '第三方支付'
      }
    },
    // 免赔
    Deductible() {
      if(this.judgingSymbol()) {
        this.input += '免赔'
      }else if( this.input.length === 3 && this.input.substr(0,3) === ' ( ' ) {
        this.input += '免赔'
      }else if( this.input.length === 0 ) {
        this.input += '免赔'
      }
    },
    //赔付比例
    tiblePayRatio() {
      if(this.judgingSymbol()) {
        this.input += '赔付比例'
      }else if( this.input.length === 3 && this.input.substr(0,3) === ' ( ') {
        this.input += '赔付比例'
      }else if( this.input.length === 0 ) {
        this.input += '赔付比例'
      }
    },
    // 等于
    beEqualTo() {
      let yesOrNo = this.input.indexOf(' =  赔付金额')
      if(yesOrNo !== -1) {
        return
      }
      if(this.input) {
         this.input += ' =  赔付金额'
      }
    },
    judgingSymbol() {
       if( this.symbolList.indexOf(this.input.substr(this.input.length - 3,3)) === -1 ) {
        return false
       }else {
         return true
       }
    },












    clearInput() {
      this.input = ''
    }
  }
}
</script>

<style>
.box {
  display: flex;
  width: 100%;
}
.child {
  width: 25%;
}

</style>