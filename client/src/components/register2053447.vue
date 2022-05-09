<template>
  <div class="register2053447-container">
    <div class="register2053447-register2053447">
      <div class="register2053447-notification2053448">
        <img alt="notification2053449" src class="register2053447-svg" />
      </div>
      <div class="register2053447-registerpage2053450">
        <div class="register2053447-password258492">
          <form>
             <div class="form-group">
                <label>Full Name</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <button type="submit" class="btn btn-dark btn-lg btn-block">Register</button>
          </form>
        <div class="register2053447-email258495">
        </div>
        </div>
      </div>
      <span class="register2053447-text06">
         <router-link class="register2053447-text07" to="/login2053289">Allready a member?</router-link>
      </span>
      <span class="register2053447-text08">
        <router-link class="register2053447-text09" to="/">Home page </router-link>
      </span>
      <img
        alt="Vector2053453"
        :src="require('@/assets/playground_assets/vector2053453-wuol.svg')"
        class="register2053447-svg1"
      />
      <img
        alt="Line42053526"
        :src="require('@/assets/playground_assets/line42053526-vs98.svg')"
        class="register2053447-svg2"
      />
      <img
        alt="Line62053527"
        :src="require('@/assets/playground_assets/line62053527-zceq.svg')"
        class="register2053447-svg3"
      />
      <img
        alt="Vector2053532"
        :src="require('@/assets/playground_assets/vector2053532-uny.svg')"
        class="register2053447-svg4"
      />
      <span class="register2053447-text10">
        <span class="register2053447-text11">
          We need you to help us with some basic information for your account
          creation.
          <span v-html="rawiywo"></span>
        </span>
      </span>
      <span class="register2053447-text12">
        <span class="register2053447-text13">Input your information</span>
      </span>
      <img
        :src="require('@/assets/playground_assets/dessinredister2053535-uqts.svg')"
        alt="dessinredister2053535"
        class="register2053447-image3"
      />
      <span class="register2053447-text14">
        <span class="register2053447-text15">Just do it</span>
      </span>
      <div class="register2053447-shape32053687">
        <img
          alt="Ellipse71I2053687121381"
          :src="require('@/assets/playground_assets/ellipse71i2053687121381-l6r.svg')"
          class="register2053447-svg5"
        />
      </div>
      <img
        alt="Slice1251565"
        :src="require('@/assets/playground_assets/slice1251565-mfsa.svg')"
        class="register2053447-svg6"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register2053447',

  data() {
    return {
      rawiywo: ' ',
    }
  },

  metaInfo: {
    title: 'exported project',
  },
}
</script>

<style scoped>
.register2053447-container {
  zoom: 0.88;
  min-height: 100vh;
}
.register2053447-register2053447 {
  width: 1440px;
  height: 1018px;
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 1440px;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
  background-color: rgba(248, 250, 255, 1);
}
.register2053447-notification2053448 {
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
.register2053447-svg {
  width: 0;
  height: 0;
  position: absolute;
}
.register2053447-registerpage2053450 {
  top: -100px;
  left: -1px;
  width: 850px;
  height: 1047px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  background-color: rgba(255, 255, 255, 1);
}
.register2053447-password258492 {
  top: 430px;
  left: 99px;
  width: 352px;
  height: 68px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.register2053447-image {
  top: 26px;
  left: 0px;
  width: 352px;
  height: 42px;
  position: absolute;
  object-fit: cover;
  border-color: rgba(95, 101, 255, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
.register2053447-text {
  top: 0px;
  left: 22px;
  color: rgba(0, 0, 0, 0.699999988079071);
  height: auto;
  position: absolute;
  font-size: 15px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 500px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-text01 {
  color: rgba(0, 0, 0, 0.699999988079071);
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 500px;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-email258495 {
  top: 498px;
  left: 99px;
  width: 352px;
  height: 69px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.register2053447-image1 {
  top: 27px;
  left: 0px;
  width: 352px;
  height: 42px;
  position: absolute;
  object-fit: cover;
  border-color: rgba(95, 101, 255, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
.register2053447-text02 {
  top: 0px;
  left: 22px;
  color: rgba(0, 0, 0, 0.699999988079071);
  height: auto;
  position: absolute;
  font-size: 15px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 500px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-text03 {
  color: rgba(0, 0, 0, 0.699999988079071);
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 500px;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-name258498 {
  top: 398px;
  left: 99px;
  width: 352px;
  height: 66px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
}
.register2053447-image2 {
  top: 24px;
  left: 0px;
  width: 352px;
  height: 42px;
  position: absolute;
  object-fit: cover;
  border-color: rgba(95, 101, 255, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
}
.register2053447-text04 {
  top: 0px;
  left: 21px;
  color: rgba(0, 0, 0, 0.699999988079071);
  height: auto;
  position: absolute;
  font-size: 15px;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-family: Inter;
  font-weight: 500px;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-text05 {
  color: rgba(0, 0, 0, 0.699999988079071);
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 500px;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-text06 {
  top: 85px;
  left: 570px;
  color: rgba(71, 67, 224, 1);
  width: 180px;
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
.register2053447-text07 {
  color: rgba(71, 67, 224, 1);
  width: 180px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-text08 {
  top: 108px;
  left: 570px;
  color: rgba(71, 67, 224, 1);
  width: 180px;
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
.register2053447-text09 {
  color: rgba(71, 67, 224, 1);
  width: 180px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-weight: 700px;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-svg1 {
  top: 85px;
  left: 734px;
  width: 16;
  height: 16;
  position: absolute;
}
.register2053447-svg2 {
  top: 708px;
  left: 105px;
  width: 645;
  height: 1px;
  position: absolute;
}
.register2053447-svg3 {
  top: 861px;
  left: 105px;
  width: 645;
  height: 1px;
  position: absolute;
}
.register2053447-svg4 {
  top: 643px;
  left: 509px;
  width: 8;
  height: 6;
  position: absolute;
}
.register2053447-text10 {
  top: 191px;
  left: 450px;
  color: rgba(63, 63, 63, 1);
  width: 269px;
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
.register2053447-text11 {
  color: rgba(63, 63, 63, 1);
  width: 269px;
  height: auto;
  opacity: 0.99;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 400px;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-text12 {
  top: 170px;
  left: 100px;
  color: rgba(66, 80, 92, 1);
  width: 389px;
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
.register2053447-text13 {
  color: rgba(66, 80, 92, 1);
  width: 389px;
  height: auto;
  align-self: auto;
  font-style: normal;
  text-align: left;
  font-weight: 700px;
  font-stretch: normal;
  text-decoration: none;
}
.register2053447-image3 {
  top: 189px;
  left: 511px;
  width: 929px;
  height: 824px;
  position: absolute;
  object-fit: cover;
  border-color: transparent;
}
.register2053447-text14 {
  top: 80px;
  left: 123px;
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
.register2053447-text15 {
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
.register2053447-shape32053687 {
  top: 10px;
  left: 65px;
  width: 118px;
  height: 118px;
  display: flex;
  position: absolute;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
}
.register2053447-svg5 {
  width: 118;
  height: 118;
  position: absolute;
}
.register2053447-svg6 {
  top: 569px;
  left: 157px;
  width: 1;
  height: 7;
  position: absolute;
}
</style>
