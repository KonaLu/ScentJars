<template>
  <v-app>
    <v-navigation-drawer
      temporary
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          router
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon 
        @click.stop="drawer = !drawer">
      </v-toolbar-side-icon>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title 
        v-text="title">
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'view_list',
        title: 'List Jars',
        link: 'List'
      },
      {
        icon: 'add_box',
        title: 'Add Information',
        link: 'AddJar'
      },
      {
        icon: 'list',
        title: 'Sort by Name',
        link: 'NameSort'
      },
      {
        icon: 'list',
        title: 'Sort by Age',
        link: 'AgeSort'
      },
      {
        icon: 'home',
        title: 'Home Page',
        link: 'HelloWorld'
      }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'White Oak SAR'
    }
  },
  name: 'App'
}
</script>
