<template>
    <div class="router-test">
        <h1>Hello App!</h1>
        <p>
            <router-link to="/" replace>Go to Nav</router-link>
        </p>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
