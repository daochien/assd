<template>
    <main class="main">

        <div class="container container-main">
            <div class="row">

                <div class="col-lg-8 left-main">

                    <!-- new -->
                    <section class="section news">
                        <div class="news-wrapper">
                            <div class="news-list">
                                <figure class="news-item" v-for="(item, index) in news" :key="index">
                                    <div class="inner">
                                        <div class="img-cover">
                                            <nuxt-link :to="{name: 'posts-id-slug', params:{id: item.id, slug: item.alias + '.html'} }" class="img-cover__wrapper">
                                                <img :src="item.avatar" alt="">
                                            </nuxt-link>
                                        </div>
                                        <div class="content">
                                            <h2 class="title">
                                                <nuxt-link :to="{name: 'posts-id-slug', params:{id: item.id, slug: item.alias + '.html'} }">{{ item.title }}</nuxt-link>
                                            </h2>
                                            <div class="info">
                                                <span class="date">{{ item.created_at }}</span>
                                                
                                            </div>
                                            <div class="description">{{ item.summary }}</div>
                                            <div class="copyright"><i class="fa fa-graduation-cap"></i>{{ item.author }}</div>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                            <!-- pagination -->
                            <!-- <nav class="pagination">
                                <ul class="nav">
                                    <li class="item">
                                        <a class="link disabled" href="#">Đầu</a>
                                    </li>
                                    <li class="item">
                                        <a class="link disabled" href="#"><i class="fa fa-angle-right"></i></a>
                                    </li>
                                    <li class="item">
                                        <a class="link active" href="#">1</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">2</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">3</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">4</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">5</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">6</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">7</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">8</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">9</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">10</a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#"><i class="fa fa-angle-left"></i></a>
                                    </li>
                                    <li class="item">
                                        <a class="link" href="#">Cuối</a>
                                    </li>
                                </ul>
                            </nav> -->
                            <!-- pagination end -->
                        </div>
                    </section>
                    <!-- new end -->

                </div>

                <div class="col-lg-4 right-main">

                    <!-- rating -->
                    <top-register></top-register>
                    <!-- rating end -->

                    <!-- rating -->
                    <top-exam></top-exam>
                    <!-- rating end -->

                    <!-- rating right -->
                    <top-week></top-week>
                    <!-- rating right end -->

                </div>

            </div>

        </div>

    </main>
</template>
<script>
import TopRegister from '@/components/TopRegister.vue';
import TopExam from '@/components/TopExam.vue';
import TopWeek from '@/components/TopWeek.vue';

export default {
    name: 'Posts',

    components: {
        TopRegister,
        TopExam,
        TopWeek
    },
    data() {
        return {
            news: [],
            title: 'Danh sách bài viết'
        }
    },
    mounted() {
        this.news = listNews;
    },
    head() {
        return {
            title: this.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                { hid: 'ánh sáng soi đường', name: 'ánh sáng soi đường', content: 'ánh sáng soi đường' }
            ]
        }
    },
}
</script>
<style scoped>
.rating{
    height: auto;
}
.list {
    margin-bottom: 40px;
}
</style>

