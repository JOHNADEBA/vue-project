<template>
  <div class="nav">
     <nav>
        <div class="main-nav">
          <i class="icon fa fa-envelope-open" ></i>
          <a href="#">help@gocardless.com</a>
        </div> 

        <div class="main-nav">
          <i class=" icon  fa fa-phone" ></i>
          <a href="#">020 7183 8674</a>
          <p>(9am-6pm Mon-Fri)</p>
        </div> 

        <div class="main-nav">
          <i class=" icon fas fa-comment" aria-hidden="true"></i>
          <a href="#">Developer chat room</a>
        </div> 

        <div class="main-nav">
          <p class=" i">i</p>
          <a href="#">Help center</a>
        </div>

        
     </nav>
    
     
  </div>
</template>



<style lang = 'sass' scoped>
@import '../sass/variables.sass'

.nav  
  background: #ebf3f5;
  

nav  
  display: flex;
  justify-content: space-around;
 

.main-nav
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  padding: 2rem 0;
  position: relative
  
.icon
  border: 2px solid gray;
  border-radius: 50%;
  padding: 0.9rem; 
  margin-bottom: 1rem;
  color: #999fa1;
  width: 3rem;
  
a
  color: $link-color;
  text-decoration: none;
  font-size: 0.7rem;
  margin-bottom: none;

p
  margin: 0 ;
  font-size: 0.7rem;
  color: $para-color;
  
.i
  font-family: 'Niconne', cursive;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  border: 2px solid gray;
  border-radius: 50%;
  margin-bottom: 1rem;
  text-align: center

@media only screen and (max-width: 768px)
  .main-nav 
    padding: 1rem 0;

 
</style>
