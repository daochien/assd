<template>

    <!-- rating -->
        <section class="section rating v1">
            <div class="rating-item">
                <div class="wrapper">
                    <h2 class="headline">Top thí sinh đăng ký</h2>
                    <div class="tab js-tab" >
                        <div class="tab-item " :class="{active: !isActive}" >
                            <div class="title" @click="isActive = !isActive">Sở GD & ĐT Tỉnh/TP</div>
                            <ul class="list">
                                <li class="list-item" v-for="(city, index) in data.city" :key="index">
                                    <div class="number">{{ index + 1 }}</div>
                                    <div class="info">
                                        <div class="number-user">{{city.sum}} <span>thí sinh</span></div>
                                        <div class="address">{{city.name}}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-item" :class="{active: isActive}" >
                            <div class="title" @click="isActive = !isActive">Trường</div>
                            <ul class="list">
                                <li class="list-item" v-for="(school, index) in data.school" :key="index">
                                    <div class="number">{{ index + 1 }}</div>
                                    <div class="info">
                                        <div class="number-user">{{school.sum}} <span>thí sinh</span></div>
                                        <div class="address">{{school.name}}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- <a href="" class="btn btn-light">Xem thêm</a> -->
                </div>
            </div>
        </section>
        <!-- rating end -->
</template>
<script>
export default {
    name: 'TopRegister',
    data() {
        return {
            isActive: false,
            data: []
        }
    },
    mounted() {
      this.data = topRegister;
    }
}
</script>
<style>

</style>


