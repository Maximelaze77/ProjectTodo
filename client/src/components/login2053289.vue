<template>
  <div class="login2053289-container">
    <div class="login2053289-login2053289">
      <div class="login2053289-notification2053290">
        <img alt="notification2053291" src class="login2053289-svg" />
      </div>
      <div class="login2053289-pagegauchelog2053292">
        <router-link to="/" class="login2053289-text">
        <router-link class="login2053289-text01" to="/">Home page </router-link>
        </router-link>
      </div>
      <span class="login2053289-text02">
        <span class="login2053289-text03">Log in</span>
        
      </span>
      <div class="login2053289-formlog2053295">
          <form>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <router-link type="submit" to ="/todo" class="btn btn-dark btn-lg btn-block">Login</router-link>
          </form>
            <span class="login2053289-text10">
              <span class="login2053289-text11">

                <span v-html="raw9ul9"></span>
              </span>
            </span>
        </div>
        <div class="login2053289-group72053306">
          <div class="login2053289-group72053307">  
          </div>
        </div>
      </div>
      <span class="login2053289-text16">
        <span class="login2053289-text17">
          Please input your information in the fields.
          <span v-html="rawdpbw"></span>
        </span>
      </span>
      <img
        :src="require('@/assets/playground_assets/dessinlogin2053319-yzf.svg')"
        alt="dessinlogin2053319"
        class="login2053289-image3"
        
      />
      <div class="login2053289-logo220421">
        <img
          alt="Ellipse712053689"
          :src="require('@/assets/playground_assets/ellipse712053689-mmk.svg')"
          class="login2053289-svg3"
        />
        <span class="login2053289-text18">
          <span class="login2053289-text19">Just do it</span>
        </span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login2053289',

  data() {
    return {
      raw9ul9: ' ',
      rawdpbw: ' ',
    }
  },

  metaInfo: {
    title: 'exported project',
  },
}
</script>

<style scoped>

.template{
  zoom: 900%;
}

.login2053289-container {
  min-height: 100vh;
  zoom: 0.968;
}
.login2053289-login2053289 {
  width: 1305px;
  height: 1018px;
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 1305px;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
  background-color: rgba(248, 250, 255, 1);
}

.txtsign{
  color: rgba(0, 0, 0, 0.699999988079071);
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 500px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-notification2053290 {
  top: 0px;
  left: 0px;
  width: 0px;
  height: 0px;
  display: flex;
  opacity: 0.30;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.login2053289-svg {
  width: 0;
  height: 0;
  position: absolute;
}
.login2053289-pagegauchelog2053292 {
  top: 2px;
  left: -4px;
  width: 480px;
  height: 1016px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.login2053289-text {
  top: 202px;
  left: 187.96875px;
  color: rgba(71, 67, 224, 1);
  width: 163px;
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto;
  font-weight: 700px;
  line-height: 28px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text01 {
  color: rgba(71, 67, 224, 1);
  width: 163px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 700px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text02 {
  top: 170px;
  left: 80.65625px;
  color: rgba(66, 80, 92, 1);
  width: 150px;
  height: auto;
  position: absolute;
  font-size: 54px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 700px;
  line-height: 68px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text03 {
  color: rgba(66, 80, 92, 1);
  width: 353px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 700px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-formlog2053295 {
  top: 363px;
  left: 78.84375px;
  width: 354px;
  height: 600px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.login2053289-group52053296 {
  top: 0px;
  left: 0px;
  width: 312px;
  height: 120px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.login2053289-image {
  top: 25px;
  left: 8.15625px;
  width: 300px;
  height: 48px;
  position: absolute;
  object-fit: cover;
  border-color: rgba(208, 208, 208, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 1);
}
.login2053289-image1 {
  top: 72px;
  left: 8.15625px;
  width: 300px;
  height: 48px;
  position: absolute;
  object-fit: cover;
  border-color: rgba(208, 208, 208, 1);
  border-style: solid;
  border-width: 1px;
  background-color: rgba(255, 255, 255, 1);
}
.login2053289-text04 {
  top: 0px;
  left: 0px;
  color: rgba(51, 51, 51, 1);
  width: 312px;
  height: auto;
  position: absolute;
  font-size: 12px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: 28px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text05 {
  color: rgba(51, 51, 51, 1);
  width: 312px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text06 {
  top: 43px;
  left: 42.59375px;
  color: rgba(0, 0, 0, 1);
  width: 312px;
  height: auto;
  opacity: 0.40;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: 28px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text07 {
  color: rgba(0, 0, 0, 1);
  width: 312px;
  height: auto;
  opacity: 0.40;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text08 {
  top: 89px;
  left: 42.59375px;
  color: rgba(0, 0, 0, 1);
  width: 312px;
  height: auto;
  opacity: 0.40;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: 28px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text09 {
  color: rgba(0, 0, 0, 1);
  width: 312px;
  height: auto;
  opacity: 0.40;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-group62053302 {
  top: 135px;
  left: 91.65812683105469px;
  width: 112px;
  height: 48px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.login2053289-group72053303 {
  top: 0px;
  left: 0px;
  width: 112px;
  height: 48px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.login2053289-image2 {
  top: 0px;
  left: 10.498123168945312px;
  width: 102px;
  height: 48px;
  position: absolute;
  object-fit: cover;
  border-color: transparent;
  background-color: rgba(71, 67, 224, 1);
}
.login2053289-text10 {
  top: 15px;
  left: 0px;
  color: rgba(255, 255, 255, 1);
  width: 79px;
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto;
  font-weight: 700px;
  line-height: 28px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text11 {
  color: rgba(255, 255, 255, 1);
  width: 79px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 700px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-group72053306 {
  top: 0px;
  left: 0.375px;
  width: 0px;
  height: 69px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.login2053289-group72053307 {
  top: 0px;
  left: 0px;
  width: 163px;
  height: 69px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.login2053289-text12 {
  top: 0px;
  left: 0px;
  color: rgba(51, 51, 51, 1);
  width: 163px;
  height: auto;
  opacity: 0.30;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto;
  font-weight: 400px;
  line-height: 28px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text13 {
  color: rgba(51, 51, 51, 1);
  width: 163px;
  height: auto;
  opacity: 0.30;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text14 {
  top: 36px;
  left: 0px;
  color: rgba(71, 67, 224, 1);
  width: 163px;
  height: auto;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Roboto;
  font-weight: 400px;
  line-height: 28px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text15 {
  color: rgba(71, 67, 224, 1);
  width: 163px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-svg1 {
  top: 43px;
  left: 15.40625px;
  width: 15;
  height: 16;
  position: absolute;
}
.login2053289-svg2 {
  top: 88px;
  left: 15.40625px;
  width: 15;
  height: 16;
  position: absolute;
}
.login2053289-text16 {
  top: 258px;
  left: 78.84375px;
  color: rgba(63, 63, 63, 1);
  width: 272px;
  height: auto;
  opacity: 0.99;
  position: absolute;
  font-size: 14px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Roboto;
  font-weight: 400px;
  line-height: 28px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text17 {
  color: rgba(63, 63, 63, 1);
  width: 272px;
  height: auto;
  opacity: 0.99;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-image3 {
  top: -30px;
  left: 500.90625px;
  width: 1271px;
  height: 1048px;
  position: absolute;
  object-fit: cover;
  border-color: transparent;
  max-width: 800px;
}
.login2053289-logo220421 {
  top: 6px;
  left: 46px;
  width: 497px;
  height: 118px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
}
.login2053289-svg3 {
  width: 118;
  height: 118;
  position: absolute;
}
.login2053289-text18 {
  top: 64px;
  left: 59px;
  color: var(--dl-color-default-secondarybackgroundcolor15a92);
  width: 438px;
  height: auto;
  position: absolute;
  font-size: 24px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Montserrat;
  font-weight: 500px;
  line-height: 160.0000023841858%;
  font-stretch: normal;
  text-decoration: none;
}
.login2053289-text19 {
  color: rgba(36, 36, 62, 1);
  width: 438px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 500px;
  font-stretch: normal;
  text-decoration: none;
}
</style>
