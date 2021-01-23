<template>
  <div id="app">
  
    <Nav  />

    <div  class="sidebar-icon" >                  
        <i @click="showNav = !showNav" class=" bar fas fa-bars"></i>        
    </div>

     <SideBar :display="showNav" />
  
   </div>
</template>

<script>
import Nav from './components/Nav.vue'
import SideBar from './components/SideBar.vue'


export default {
  name: 'App',
  data: () =>{
      return {
        showNav : false
      }
  },

  components: {
    Nav,
    SideBar
  }
}
</script>

<style lang = 'sass' >
@import './sass/variables.sass'
*
  padding: 0
  margin: 0
  box-sizing: border-box

body
  width: $width
  height: 100vh
  overflowX : hidden;

#app 
  width: $width
  height : 100%
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $para-color;  
  position: relative

.sidebar-icon
  font-size : 1.5rem
  cursor: pointer
  text-align : left
  color: #000
  display: none

.bar:hover
  opacity: 0.6

@media only screen and (max-width: 768px) 
  
  .sidebar-icon  
    
    display: block
    background: #ebf3f5 
    width: 100%
    padding: 1rem 2rem

  .display
     transform: translateX(100%); 

</style>
