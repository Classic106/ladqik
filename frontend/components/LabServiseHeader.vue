<template>
  <header>
    <div
      class="head d-flex align-items-center position-relative"
      :class="isMobile ? 'justify-content-between' : 'justify-content-center'"
    >
      <div>
        <div
          id="nav-icon3"
          ref="menuButton"
          class="ml-2 d-lg-none col"
          v-bind:class="{ open: isMobileMenuOpen }"
          v-on:click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="image-wrap mr-5">
        <img src="https://poseidondiagnostics.com/logo2.png" alt="logo" />
      </div>
    </div>
    <hr class="m-0" />

    <ul
      class="menu align-items-center h-max position-absolute"
      ref="menu"
      :class="
        !isMobile
          ? 'nav justify-content-center d-md-flex'
          : isMobileMenuOpen
          ? 'show'
          : 'd-none'
      "
    >
      <li
        v-for="item in menu"
        :key="item.name"
        class="item-menu d-flex flex-column"
      >
        <NuxtLink
          :to="item.link || ''"
          :disabled="item.link ? '' : 'disabled'"
          class="
            nav-link
            d-flex
            w-100
            justify-content-between
            align-items-center
          "
          >{{ item.name }}
          <Icon
            v-if="isMobile && !item.link"
            :icon="item.isActive ? 'angle-up' : 'angle-down'"
          />
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data: () => ({
    isMobileMenuOpen: false,
    isMobile: true,
    menu: [
      {
        name: "Home",
        link: "/lab-servises",
      },
      {
        name: "Schedule Test",
        link: "/",
      },
      {
        name: "Patient Portal",
        link: "/lab-servises/login",
      },
      {
        name: "Locations",
        link: "/lab-servises/contact-us",
      },
      {
        name: "Contact",
        link: "/lab-servises/contact-us",
      },
      {
        name: "Schedule A Phone Meeting",
        link: "/#",
      },
    ],
  }),
  methods: {
    handlerResize(e) {
      this.isMobile = !(e.target.innerWidth > 992);
    },
    closeOutsideMenu(e) {
      let { menu, menuButton } = this.$refs;
      let { target } = e;

      if (!menu || !menuButton || !target) {
        return;
      }
      if (
        menu !== target &&
        !menu.contains(target) &&
        menuButton !== target &&
        !menuButton.contains(target)
      ) {
        this.isMobileMenuOpen = false;
      }
    },
  },
  mounted() {
    this.handlerResize({ target: window });
    window.addEventListener("resize", this.handlerResize);
    document.addEventListener("click", this.closeOutsideMenu);
  },
  destroyed() {
    window.removeEventListener("resize", this.handlerResize);
    document.addEventListener("click", this.closeOutsideMenu);
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .menu {
    position: static !important;
  }
}
@media (hover: hover) {
  .nav-link:hover {
    color: rgba(0, 0, 0, 0.6) !important;
  }
}

img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

.image-wrap {
  height: 40px;
}



.item-description {
  color: #828282;
}

.icon.icon-head {
  display: block;
  border: 2px solid #0038e3;
  border-radius: 50%;
  fill: #0038e3;
}

.icon.gradient {
  fill: url(#lgrad);
}

.icon.xl {
  width: 6rem;
  height: 3rem;
}

.head {
  height: 72px;
}

.menu {
  top: 73px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background-color: #fff;
}
</style>