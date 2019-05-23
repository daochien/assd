<template>
  <div class="main">
    <HeroCountdown />
    <div class="container container-main">
      <div class="row">
        <Organization />
        <TimeLine />
        <Notify />
        <div class="col-lg-4">
          <TopRegister />
        </div>
        <div class="col-lg-4">
          <TopExam />
        </div>
        <div class="col-lg-4">
          <TopWeek />
        </div>
        <HotNews />
        <Event />
        <Collection />
        <About />
        <NewMember />
        <Social />
      </div>
    </div>

  </div>
</template>

<script>
import HeroCountdown from '@/components/HeroCountdown';
import Organization from '@/components/Organization.vue';
import TimeLine from '@/components/TimeLine.vue';
import Notify from '@/components/Notify.vue';
import TopRegister from '@/components/TopRegister.vue';
import TopExam from '@/components/TopExam.vue';
import TopWeek from '@/components/TopWeek.vue';
import HotNews from '@/components/HotNews.vue';
import Event from '@/components/Event.vue';
import Collection from '@/components/Collection.vue';
import About from '@/components/About.vue';
import NewMember from '@/components/NewMember.vue';
import Social from '@/components/Social.vue';
export default {
  components: {
    HeroCountdown,
    Organization,
    TimeLine,
    Notify,
    TopRegister,
    TopExam,
    TopWeek,
    HotNews,
    Event,
    Collection,
    About,
    NewMember,
    Social
  }
}
</script>

<style>

</style>
