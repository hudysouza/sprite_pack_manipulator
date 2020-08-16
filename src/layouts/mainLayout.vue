<template>
  <div>
    <section class="hero is-medium">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <b-navbar shadow>
          <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <b-icon icon="view-grid-plus-outline" size="is-large"></b-icon>
              <span class="is-size-2">Sprites Manipulator</span>
            </b-navbar-item>
          </template>
          <template slot="start"> </template>
        </b-navbar>
      </div>

      <!-- Hero content: will be in the middle -->
      <!-- <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Title
        </h1>
        <h2 class="subtitle">
          Subtitle
        </h2>
      </div>
    </div> -->

      <!-- Hero footer: will stick at the bottom -->
      <!-- <div class="hero-foot">
        <nav class="tabs">
          <div class="container">
            <ul>
              <li class="is-active"><a>Overview</a></li>
              <li><a>Modifiers</a></li>
              <li><a>Grid</a></li>
              <li><a>Elements</a></li>
              <li><a>Components</a></li>
              <li><a>Layout</a></li>
            </ul>
          </div>
        </nav>
      </div> -->
    </section>
    <div style="margin-top:30px;"></div>
    <section>
      <div class="container content-wrapper">
        <router-view />
      </div>
    </section>
  </div>
</template>
<style lang="scss">
@import '../css/mainLayout.scss';

// html,
// body {
//   background-color: $primary;
// }
</style>
