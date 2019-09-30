<template>
    <div class="login-wrap">
        <div class="login-top weui-cells__title">
            x
        </div>
        <div class="login-body">
            <div class="weui-cells__title">手机号登录</div>
            <div class="weui-cells weui-cells_form">
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__hd">
                        <label class="weui-label">手机号</label>
                    </div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="tel" v-model="formData.telephone" placeholder="请输入手机号">
                    </div>
                    <div class="weui-cell__ft">
                        <button class="weui-vcode-btn get-vcode">获取验证码</button>
                    </div>
                </div>
                <div class="weui-cell weui-cell_vcode">
                    <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="number" v-model="formData.vcode" placeholder="请输入验证码">
                    </div>
                </div>
            </div>
            <a href="javascript:;" @click="submitData" class="weui-btn weui-btn_primary submit-btn">确定</a>
        </div>
    </div>
</template>

<script>
import axios from '@/util/axios';
import xhr from '@/util/xhr';
// import axios from 'axios';
export default {
    name: 'login',
    data () {
        return {
            formData: {
                telephone: '',
                vcode: ''
            }
        };
    },
    methods: {
        // async submitData () {
        //     // let ret = await fetch('http://localhost:3000/wechat/api/getWeather', { mode: 'no-cors' });
        //     // let ret = await axios.get('http://localhost:3000/wechat/api/getWeather');
        //     let ret = await axios.get('getWeather');
        //     console.log(ret);
        //     // ret = await ret.json();
        //     // return ret;
        // }
        submitData () {
            xhr.open('get', 'http://localhost:3000/wechat/api/getWeather');
            xhr.send(null);
        }
    }
};
</script>

<style lang="scss">
    @function vw($px) {
        @return ($px/375) * 100vw;
    }

    .login-wrap {
      .get-vcode {
        height: vw(25);
        line-height: vw(25);
        font-size: 12px;
      }
      .weui-cells__title {
        padding-left: vw(44);
        text-align: left;
        font-size:16px;
      }
      .weui-cell_vcode {
        padding: vw(15);
      }
      .login-top {
        text-align: left;
        font-size: 16px;
        font-weight: 700;
      }
      .submit-btn {
        width: vw(184);
        height: vw(40);
        margin-top: vw(30);
      }
      .login-body {
        .weui-cells {
          font-size: 12px;
        }
        margin-top: vw(50);
      }
    }
</style>
