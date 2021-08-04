// 将整个导航栏定义好，放在页面最下面，内容用一个接口动态插入
<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
#tab-bar {
    display: flex;
    background-color: #e9e9e9;

    /* 导航栏的位置 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* 导航栏的阴影 */
    box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.3);
}
</style>