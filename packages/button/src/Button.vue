<template>
    <button class="button fr-button"
            :class="{[`icon-${iconPosition}`]:true}"
            @click="$emit('click')">
        <f-icon v-if="icon && !loading" :name='icon'></f-icon>
        <f-icon class="icon loading" v-if="loading" name="loading"></f-icon>
        <span class="content">
            {{txt}}
            <slot></slot>
        </span>
    </button>
</template>
<script>
import { t } from '../../../src/locale'

export default {
  name: 'FlButton',
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator (value) {
        return !!(value === 'left' || value === 'right')
      }
    }
  },
  data () {
    return {
      txt: t('button.txt')
    }
  }
}
</script>
<style scoped lang="scss">
    .fr-button{
        font-size: var(--font-size);
        height: var(--button-height);
        padding:0 1em;
        border-radius: var(--border-radius);
        border:1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex; // 设置button内容居中
        justify-content: center; // 左右居中
        align-items: center;    //上下居中
        vertical-align: middle; // 设置button组默认处于同一水平线
        cursor: pointer;
        &:hover{
             background: var(--border-color-hover);
         }
         &:active{
              background: var(--button-active-bg);
         }
         &:focus{
              outline: none;
         }
         & + .fr-button{
             margin-left: 10px;
         }
         > .content{
             order: 2
         }
         > .icon{
             order: 1;
             margin-right: .3em;
         }
         &.icon-right{
             > .content{
                 order: 1
             }
             > .icon{
                 order: 2;
                 margin-right: 0;
                 margin-left: .3em;
             }
         }
    }
    @keyframes spin {
        0% {
            transform: rotate(0)
        }
        100%{
            transform: rotate(360deg)
        }
    }

    .loading{
        animation: spin  2s linear infinite;
    }
</style>
