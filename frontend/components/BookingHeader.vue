<template>
  <div class="row header d-flex position-relative">
    <div class="col-2">
      <h4 class="logo text-nowrap m-0 p-0">Nobel BioLabs</h4>
    </div>
    <div
      class="
        col-8 col-md-7
        w-100
        h-100
        menu
        p-0
        w-lg-50
        d-flex
        position-absolute
        justify-content-end
      "
    >
      <ul
        class="align-items-center h-100"
        ref="menu"
        :class="
          !isMobile
            ? 'nav justify-content-end d-lg-flex'
            : isMobileMenuOpen
            ? 'show h-max'
            : 'd-none'
        "
      >
        <li class="h-100">
          <NuxtLink
            to="/"
            class="nav-link active d-flex h-100 align-items-center"
            >Home</NuxtLink
          >
        </li>
        <li
          v-for="item in menu"
          :key="item.link"
          v-on:click.stop="isMobile && toggleActive(item)"
          class="item-menu d-flex flex-column h-100 position-relative"
        >
          <NuxtLink
            :to="item.link || ''"
            :disabled="item.link ? '' : 'disabled'"
            class="
              nav-link
              d-flex
              w-100
              h-100
              justify-content-between
              align-items-center
            "
            >{{ item.name }}
            <Icon
              v-if="isMobile && !item.link"
              :icon="item.isActive ? 'angle-up' : 'angle-down'"
            />
          </NuxtLink>
          <ul
            v-if="item.subMenu"
            class="sub-links d-none position-absolute px-0 py-3 rounded"
            :class="isMobile && `mobile ${item.isActive ? 'active' : ''}`"
          >
            <li v-for="link in item.subMenu" :key="link.name">
              <NuxtLink
                class="nav-link d-flex px-4"
                v-on:click.native="linkTo(link)"
                :to="link.link || '#'"
                event=""
                >{{ link.name }}</NuxtLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col d-flex justify-content-end p-0 mr-3">
      <nuxt-link no-prefetch to="/booking" class="d-none d-md-flex">
        <button type="button" class="btn yellow-gradient slim p-2 rounded">
          Schedule Appointment
        </button>
      </nuxt-link>
      <div
        id="nav-icon3"
        ref="menuButton"
        class="ml-2 d-lg-none"
        v-bind:class="{ open: isMobileMenuOpen }"
        v-on:click="isMobileMenuOpen = !isMobileMenuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/icons";

export default {
  name: "app",
  components: { Icon },
  watch: {
    isMobile() {
      if (!this.isMobile) {
        this.menu = [...this.menu].map((item) => {
          item.isActive = false;
          return item;
        });
      }
    },
  },
  methods: {
    myEventHandler(e) {
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
    toggleActive(menuItem) {
      this.menu = [...this.menu].map((item) => {
        if (item.name === menuItem.name) {
          item.isActive = !item.isActive;
          return item;
        }
        item.isActive = false;
        return item;
      });
    },
    linkTo(link) {
      if (link.scrollId) {
        this.scroll(link.scrollId);
        return;
      }
      this.$router.push({ path: link.link });
    },
    scroll(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
  },
  data: () => ({
    isMobileMenuOpen: false,
    isMobile: true,
    menu: [
      {
        name: "Testing Services",
        isActive: false,
        subMenu: [
          {
            name: "Covid-19",
            link: "/booking",
          },
          {
            name: "Fit To Fly",
            link: "/booking",
          },
          {
            name: "Minor illnesses",
            link: "/booking",
          },
          {
            name: "STD testing",
            link: "/booking",
          },
          {
            name: "Drug & Alcohol",
            link: "/booking",
          },
          {
            name: "Test Pricing",
            link: "/booking",
          },
        ],
      },
      {
        name: "Lab Services",
        isActive: false,
        subMenu: [
          {
            name: "Molecular Diagnostics",
            link: "/lab-servises",
          },
          {
            name: "Covid Lab B2B",
            link: "/lab-servises",
          },
          {
            name: "Corporate",
            link: "/lab-servises",
          },
        ],
      },
      {
        name: "Test Pricing",
        link: "/booking",
      },
      {
        name: "Contact",
        isActive: false,
        subMenu: [
          {
            name: "Locations",
            link: "/booking",
          },
          {
            name: "Email Us",
            scrollId: "contact",
          },
          {
            name: "Helpdesk",
            link: "https://fasttestnow.crisp.help/en/category/faq-y2ouoi/",
          },
          {
            name: "WhatsApp",
            link: "https://api.whatsapp.com/send/?phone=%2B18338308383&text&app_absent=0",
          },
          {
            name: "(833) 830-8383",
            link: "tel:830-830-8383",
          },
        ],
      },
    ],
  }),
  mounted() {
    this.myEventHandler({ target: window });
    window.addEventListener("resize", this.myEventHandler);
    document.addEventListener("click", this.closeOutsideMenu);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
    document.addEventListener("click", this.closeOutsideMenu);
  },
};
</script>

<style scoped>
@media (hover: hover) {
  .nav-link:hover {
    color: rgba(0, 0, 0, 0.6) !important;
  }
}

@media (min-width: 992px) {
  .header {
    position: static !important;
  }
  .menu {
    position: static !important;
    min-width: 0 !important;
    top: 0 !important;
  }
  .item-menu:hover > .sub-links {
    display: flex !important;
    flex-direction: column;
    top: 60px;
  }
}

ul {
  height: max-content;
  width: max-content;
  left: 0;
  right: 0;
  top: 100%;
  bottom: 0;
}

.icon {
  fill: #000;
}

.menu {
  bottom: 0;
  min-width: 100%;
  z-index: 1;
  top: 60px;
}

ul,
a {
  list-style-type: none;
}

.sub-links.active {
  display: flex !important;
  flex-direction: column;
}

.sub-links {
  background-color: #f8f8f8;
  box-shadow: 0 0 35px rgb(0 0 0 / 10%);
}

.sub-links.mobile {
  box-shadow: 0 0 35px rgb(0 0 0 / 10%);
  position: relative !important;
}

.show {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #f8f8f8;
  overflow: hidden;
  box-shadow: 0 20px 15px 0 rgb(23 23 23 / 5%);
  max-height: calc(100vh - 65px);
  padding: 15px 15px 25px;
}

.show a {
  font-size: 14px;
  padding: 9px 15px;
  margin: 0;
}

.nav-link {
  color: #232323;
  font-weight: 500;
}
</style>