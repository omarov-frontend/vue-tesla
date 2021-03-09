<template>
  <div id="app">
    <the-header />

    <router-view/>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader';

  export default {
    name: 'App',

    components: {
      TheHeader
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/montserrat-regular-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/montserrat-medium-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-medium-webfont.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/montserrat-semibold-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-semibold-webfont.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/montserrat-bold-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat-bold-webfont.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 18px;
    margin: 0;
    background-color: #fff;
    color: #000;
  }
</style>
