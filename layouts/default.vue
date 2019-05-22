<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <MobileMenu />
  </div>
</template>
<script>
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import MobileMenu from '@/layouts/MobileMenu';
export default {
  components: {
    Header,
    Footer,
    MobileMenu
  }
}
</script>

<style>

</style>


