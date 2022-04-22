<template>
  <div class="flex justify-center bg-gray-200">
    <div class="max-w-screen-lg flex flex-col min-h-screen w-full">
      <Header />
      <Nuxt class="flex-grow" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.w100 {
  width: 100%;
}
.color-orange {
  color: rgb(249, 141, 56);
}
.s-15 {
  line-height: 1.8;
}
.m-bottom {
  margin-bottom: 60px;
}
.m-bottom-half {
  margin-bottom: 30px;
}
.m-bottom-qtr {
  margin-bottom: 15px;
}
.square {
  width: 75px;
  height: 75px;
  border: 8px solid #fecbba;
  border-radius: 75px;
  background: rgb(170, 71, 39);
  background: linear-gradient(
    90deg,
    rgba(249, 103, 56, 1) 0%,
    rgba(249, 103, 56, 1) 35%,
    rgba(249, 141, 56, 1) 100%
  );
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}
.row {
  margin-left: 0;
  margin-right: 0;
}

.pad-20 {
  padding: 40px 0;
}

.bg-transparent {
  background: rgba(0, 0, 0, 0.2) !important;
  padding: 20px;
  max-width: 400px;
  color: #ffffff;
}
.logo {
  padding-left: 20px;
}
.row.header {
  height: 60px;
  background-color: #f8f8f8;
  align-items: center;
}
.row.slider {
  height: 80vh;
  background: #f8f8f8 url(../static/images/header-pic.jpg);
  background-size: cover;
  align-items: center;
}
a.nav-link {
  color: #2d384a;
}

.btn.yellow-gradient {
  background: rgb(170, 71, 39);
  background: linear-gradient(
    90deg,
    rgba(170, 71, 39, 1) 0%,
    rgba(255, 147, 112, 1) 50%,
    rgba(170, 71, 39, 1) 100%
  );
  background-size: 200% auto;
  border: 0;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1.2px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.btn.yellow-gradient:hover {
  background-position: right center;
}

.btn.btn-big {
  max-width: 300px;
  height: 50px;
  font-size: 14px !important;
}
</style>

