<template>
  <div class="flex justify-center bg-gray-200">
    <div class="max-w-screen-lg flex flex-col min-h-screen w-full">
      <Nuxt class="flex-grow" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  font-size: 15px;
  line-height: 30px;
  font-weight: 400;
  font-family: roboto, sans-serif;
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-break: break-word;
}

hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.Masthead__image {
  top: -104px !important;
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

a.nav-link {
  color: #2d384a;
}

.bg-gradient-light-orange-light-pink {
  background-image: linear-gradient(
    to right top,
    #f5bb8d,
    #feb399,
    #ffaea8,
    #fdaab9,
    #f3aaca
  );
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

#nav-icon3 {
  font-size: 24px;
  width: 40px;
  height: 32px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon3 span {
  background: #232323;
  height: 2px;
  width: 22px;
  content: "";
  display: block;
  border-radius: 0;
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
  top: 8px;
  width: 14px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 14px;
}

#nav-icon3 span:nth-child(4) {
  top: 20px;
  width: 14px;
}

#nav-icon3.open span:nth-child(1) {
  top: 7px;
  width: 0%;
}

#nav-icon3.open span:nth-child(2) {
  transform: rotate(45deg);
  top: 14px;
}

#nav-icon3.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 14px;
}

#nav-icon3.open span:nth-child(4) {
  top: 7px;
  width: 0%;
}

.h-max {
  height: max-content;
}

h6 {
  font-size: 1.8rem;
  line-height: 2.5rem;
}

h5 {
  font-size: 2.3rem;
  line-height: 3rem;
}

h3 {
  font-size: 3.4rem;
  line-height: 3.9rem;
}

h2 {
  font-size: 3.9rem;
}

h1 {
  font-size: 5rem;
  line-height: 5rem;
}

.big-section {
  padding: 160px 0;
}

.extra-small-screen {
  height: 300px;
}

.text-small {
  font-size: 13px;
  line-height: 22px;
}
</style>

