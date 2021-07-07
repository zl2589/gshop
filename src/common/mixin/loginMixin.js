import captchaApi from "../../api/geetest"
import {loginRegist} from "../../api/loginRegist"

export default {
    data() {
        return {
          loading: false,
          showCaptcha: true,
          captchaObj: {},
          captchaSuccess: {},
          uuidCode: '',
        }
    },
    created() {
        // 初始化极验验证
        this.uuidCode = loginRegist.uuid() ;
        // this.initGtCaptcha();
    },
    methods: {
        // 极验
        initGtCaptcha() {
            const that = this;
            const init = (dat) => {
                const data = JSON.parse(dat) 
                window.initGeetest({
                    // 以下 4 个配置参数为必须，不能缺少
                    gt: data.gt,
                    challenge: data.challenge,
                    new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
                    offline: !data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
                    product: "float", // 产品形式，包括：float，popup
                    width: "100%"
                }, 
                function (captchaObj) {
                    that.captchaObj = captchaObj;
                    let parentNode;
                    let childs
                    if (that.$refs.captcha) {
                    parentNode = that.$refs.captcha.$el
                    childs = parentNode.childNodes;
                    for (let i = childs.length - 1; i >= 0; i--) {
                        parentNode.removeChild(childs[i]);
                    }
                    captchaObj.appendTo('#captcha');
                    captchaObj.onReady(function () {
                        that.showCaptcha = false;
                    });
                    captchaObj.onSuccess(function () {
                        that.captchaSuccess = captchaObj.getValidate();
                        if (typeof that.captchaSuccessFun === 'function') {
                        // that.captchaSuccessFun();
                        }
                    });
                    captchaObj.onError(function () {
                    });
                    }
                })
            }
            captchaApi.getGtCaptcha(this.uuidCode).then(function (res) {
                console.log('获取极验', res.data)
                init(res.data);
            });
        },
    }
}