<template>
    <svg class='icon' :class="`icon-${name}`">
        <use :xlink:href='`#icon-${name}`'></use>
    </svg>
</template>
<script>
export default {
  name: 'FlIcon',
  props: ['name']
}
</script>
<style scope lang='scss'>
    .icon{
        width: 1em;
        height: 1em;
    }
</style>
