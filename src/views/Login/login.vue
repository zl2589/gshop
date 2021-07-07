<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">谷粒外卖</h2>
        <div class="login_header_title">
          <a
            href="javascript:;"
            :class="{ on: 'phone' === loginType }"
            @click="loginType = 'phone'"
            >短信登录</a
          >
          <a
            href="javascript:;"
            :class="{ on: 'pwd' === loginType }"
            @click="loginType = 'pwd'"
            >密码登录</a
          >
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{ on: 'phone' === loginType }">
            <section class="login_message">
              <input
                type="tel"
                maxlength="11"
                placeholder="手机号"
                v-model="phone"
              />
              <button
                ref="btnCode"
                disabled="disabled"
                class="get_verification"
                :class="{ right_phone: rightPhone && countdown == 0}"
                @click="getPhoneCode()"
              >
                获取验证码{{ countdown > 0 ? "(" + countdown + ")" : "" }}
              </button>
            </section>
            <section class="login_verification">
              <input
                type="tel"
                maxlength="6"
                placeholder="验证码"
                v-model="code"
              />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{ on: 'pwd' === loginType }">
            <section>
              <section class="login_message">
                <input
                  type="tel"
                  maxlength="11"
                  placeholder="用户名"
                  v-model="account"
                />
              </section>
              <section class="login_verification">
                <input
                  :type="showPwd ? 'text' : 'password'"
                  maxlength="8"
                  placeholder="密码"
                  v-model="pwd"
                />
                <div
                  class="switch_button"
                  :class="showPwd ? 'on' : 'off'"
                  @click="showPwd = !showPwd"
                >
                  <div class="switch_circle" :class="{ right: showPwd }"></div>
                  <span class="switch_text">{{ showPwd ? "abc" : "..." }}</span>
                </div>
              </section>
              <!-- <section class="login_message">
                <div id="captcha" class="captcha" ref="captcha">
                  <p :class="['wait', showCaptcha ? 'show' : 'hide']">加载中</p>
                </div>
              </section> -->
            </section>
          </div>
          <button class="login_submit" @click="login()">登录</button>
        </form>
      </div>
      <a href="javascript:" class="go_back" @click="goOff">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <alert-tip
      :alert-text="alertText"
      v-show="showAlert"
      @closeTip="closeTip"
    />
  </div>
</template>

<script>
import AlertTip from "@/components/AlertTip/AlertTip";
import { loginRegist } from "@/api/loginRegist";
import loginMixin from "@/common/mixin/loginMixin";

export default {
  mixins: [loginMixin],
  name: "Login",
  components: {
    AlertTip,
  },
  data() {
    return {
      loginType: "phone",
      phone: "",
      code: "",
      showPwd: false,
      account: "",
      pwd: "",
      captcha: "",
      countdown: 0,
      alertText: "", // 弹窗提示消息
      showAlert: false, // 是否显示提示框
    };
  },
  computed: {
    rightPhone() {
      let flag = /^1\d{10}$/.test(this.phone)
      if(flag) {
        this.$refs.btnCode.disabled = false
      }
      return flag
    }
  },
  methods: {
    // 获取手机验证码
    async getPhoneCode() {
      if (this.phone) {
        if (this.countdown === 0) {
          // 置灰，倒计时
          this.countdown = 60;
          let intervalId = setInterval(() => {
            this.countdown--;
            if (this.countdown === 0) {
              clearInterval(intervalId);
            }
          }, 1000);
          //   await loginRegist.sendPhoneCode(this.phone)
        }
      } 
      else {
        this.showTip("请先输入手机号");
      }
    },
    async login() {
      let result;
      // 手机登录
      if (this.loginType === "phone") {
        if (this.code && this.phone) {
          //   result = await reqSmsLogin(this.phone, this.code);
        } else {
          this.showTip("请输入手机号和验证码");
          return;
        }
      }
      // 密码登录
      if (this.loginType === "pwd") {
        if (this.account && this.pwd) {
          let data = {
            username: this.account,
            password: this.pwd,
          };
          result = await loginRegist.login(data);
        } else {
          this.showTip("请输入账号密码");
          return;
        }
      }

      // 登录结果
      if (result == "" || result == null) {
        
        this.showTip("用户名或密码错误")
        this.account = ''
        this.pwd = ''
        return;
      } 
      else {
        console.log("登录结果", result);
        this.$store.dispatch("saveUserInfo", result[0]);
        // 跳转到我的
        this.$router.replace("/mine");
      }
    },
    closeTip() {
      this.alertText = "";
      this.showAlert = false;
    },
    showTip(text) {
      this.alertText = text;
      this.showAlert = true;
    },
    goOff() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="stylus">
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        > a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: #02a774;
            font-weight: 700;
            border-bottom: 2px solid #02a774;
          }
        }
      }
    }

    .login_content {
      > form {
        > div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #02a774;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

              &.right_phone {
                color: black;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: #fff;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: #02a774;
              }

              > .switch_circle {
                // transform translateX(27px)
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            > a {
              color: #02a774;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: #4cd96f;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      .iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>