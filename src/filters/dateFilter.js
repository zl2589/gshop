import Vue from 'vue'
import {stampToDate} from '../common/js/date'
// 自定义过滤器
Vue.filter('date-format', function (value, formatStr) {
  return stampToDate(value, formatStr)
})