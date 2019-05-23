<template>
    <div class="col-12">
        <!-- timeline -->
        <section class="section timeline">
            <h2 class="headline"><a href="">Timeline hội thi</a></h2>
            <ul class="timeline-list">
                <li class="item" v-for="(item, index) in items" :key="index" :class="[index == lastItem ? 'item-new' : '']">
                    <div class="inner">
                        <div class="title">{{ item.name }}</div>
                        <div class="date" v-html="item.date"></div>
                    </div>
                </li>
            </ul>
            <div class="info">
                <div class="user">
                    <img src="@/assets/images/cup2.png" alt="">
                    <div class="number">416.329</div>
                    <div class="title">THÍ sinh dự thi</div>
                </div>
            </div>
        </section>
        <!-- timeline end -->
    </div>
</template>
<script>
export default {
    name: 'TimeLine',
    data() {
        return {
            items: []
        }
    },
    computed: {
        lastItem() {
            return Object.keys(this.items).length-1
        }
    },
    mounted() {
      this.items = timeline;
    }
}
</script>
<style lang="scss" scoped>

</style>


