<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          COVID-19 TRACKER
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: true,
      essentialLinks: [
        {
          title: 'Corona Impact forecast',
          icon: 'img:corona_img.png',
          link: '#/CoronaAnalysis',
          target: '_self'
        },
        {
          title: 'Assess your status',
          icon: 'img:corona_img.png',
          link: '#/AssessStatus',
          target: '_self'
        },
        {
          title: 'Home',
          icon: 'img:corona_img.png',
          link: '#/',
          target: '_self'
        }
      ]
    }
  }
}
</script>
