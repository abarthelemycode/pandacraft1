<template>
  <v-app id="app">
    <v-toolbar class="nav-toolbar" :dark="true">
      <v-toolbar-title>Gallery</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- if we want to add pages -->
         <v-btn to="/home">Home</v-btn>
         <v-btn to="/about">About</v-btn>
      </v-toolbar-items>
      <v-menu class="hidden-md-and-up">
        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
        <v-list>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>
                <router-link class="menu-link" to="/home">Home</router-link>
              </v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
             <v-list-tile-content>
              <v-list-tile-title>
                <router-link class="menu-link" to="/about">About</router-link>
              </v-list-tile-title>
             </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style lang="scss">

@font-face {
  font-family: "Nunito";
  src: url("assets/fonts/Nunito-Regular.ttf");
}
#app {
  font-family: 'Nunito', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $black;
}
.nav-toolbar{
  margin-bottom:1em;
}

.menu-link {
  text-decoration: none;
  color: $black;
  &.router-link-exact-active {
    color: $blue;
  }
}
</style>
