<template>
  <transition name = 'expand' @enter="enter" @after-enter='afterEnter' @leave='leave'>
      <ul  v-show="menu.open" class="right">
          <li class="right-h5" v-for="(item, i) in menu.submenu" :key='i'>
            {{item}}
          </li>
      </ul>     
  </transition>

</template>

<script>
export default {
    
    props: [
        'menu'
    ],
    methods: {
        enter(el){
        el.style.height = 'auto';
        const height = getComputedStyle(el).height;
        el.style.height = 0;

        getComputedStyle(el);

        setTimeout(() => {
            el.style.height = height;
        });
    },
    afterEnter(el){
        el.style.height = 'auto';
    },
    leave(el){
        el.style.height = getComputedStyle(el).height;
        getComputedStyle(el);

        setTimeout(() => {
            el.style.height = 0;
        })
    }
  }
}
</script>

<style lang ='sass' scoped >
@import '../sass/variables.sass'

.right
    width: 70%
    list-style: none;
    position: absolute;
    top: 31%;
    
    

.right-h5
    border: $border
    padding: 0.7rem
    border-radius: $border-radius 
    color: $link-color
    cursor : pointer

.expand-enter-active, .expand-leave-active
    transition: height .5s ease-in-out;
    overflow: hidden;

@media only screen and (max-width: 768px) 
    

    .right
        
        width: 100%
        position: absolute;
        top: 8%;
        right: -50%
       

    .right-h5
        width: 80vw;
</style>