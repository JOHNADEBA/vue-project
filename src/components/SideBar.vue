<template>
  
  <ul class="left" >
    <li v-for = "(item, i) in menu" :key="'item' +i">
     
      <div class="comp">
        <div @click="() => toggleMenu(i)"
          :class="open? 'open' : '' "
       
         class="left-h5">
            {{item.title}}
        </div>
        <div class="sub">
            <SubMenu  :menu='item'  />
        </div>
      </div>

    </li>

  </ul>

</template>

<script>
  import SubMenu from './SubMenu'

  export default {
     props : [
    'open'    
   ],
  
    data: () => {
      return {
        menu: [
          {
            title: ' OVERVIEW',
            open: false,
            submenu : 
              ['We help you shop till you drop within the comfort of your home'
              ]
          },
          {
            title: ' GETTING STARTED',
            open: false,
            submenu : 
              ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsum sunt assumenda sint soluta reiciendis alias nesciunt.'
              ]
          },
          {
            title: ' DIRECT DEBIT',
            open: false,
            submenu : 
              [ 
                'What is Direct Debit?', 
                'What is Direct Debit Guarantee?', 
                'The Direct Debit Guarantee offers protection to customers paying by Direct Debit. It entitles them to a full and immediate refund of the amount paid, approved automatically by their bank. Any dispute resolution must take part outside of the Direct Debit scheme(e.g., with the customer themselves).',
                'What kind of payments is it good for?',
                "What kind of payments isn't it good for?",
                'What are the payment timings for Direct Debit?',
                'Can I collect one-off payments using Direct Debit?'
              ]
          },
          {
            title: ' DEVELOPER API',
            open: false,
            submenu : 
              ['Kindly visit http://devjayfavapi.com.'
              ]
          },
          {
            title: ' PAYLINKS',
            open: false,
            submenu : 
              [
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', 
                ' Expedita ipsum sunt assumenda sint soluta reiciendis alias nesciunt.',
                'Quos hic a laboriosam quod accusamus necessitatibus blanditiis '
              ]
          },
          {
            title: ' PARTNERS',
            open: false,
            submenu : ['Amazon', 'Facebook', 'Google']
          },
          {
            title: ' THE CUSTOMER EXPERIENCE',
            open: false,
            submenu :
              [
                'Kindly give us your feedback with the below contact info, We really appreciate it',
                'Tel: 020 7183 8674',
                'Email: help@gocardless.com'
              ]
          },
          {
            title: ' SECURITY',
            open: false,
            submenu : 
              [
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsum sunt assumenda sint soluta reiciendis alias nesciunt.'
              ]
          },
          {
            title: ' REFUNDS AND CHARGEBACKS',
            open: false,
            submenu : 
              ['Expedita ipsum sunt assumenda sint soluta reiciendis alias nesciunt. Quos hic a laboriosam quod accusamus necessitatibus blanditiis dolores neque sint earum commodi nemo atque.'
              ]
          },
          {
            title: ' INTERNATIONAL PAYMENTS',
            open: false,
            submenu : 
              ['Quos hic a laboriosam quod accusamus necessitatibus blanditiis dolores neque sint earum commodi nemo atque.'
              ]
         }
        ]
      }
    },
    methods: {
      toggleMenu: function(index) {
        this.menu = this.menu.map((menu, i) =>{
          if(index === i){
            menu.open = !menu.open;
          }
          else{
            menu.open = false
          }
          return menu;
        })
      }
    },
    components: {
    SubMenu
  }
  }

</script>
 
<style lang ='sass' scoped >
@import '../sass/variables.sass'

.comp
  display: flex
  justify-content: space-around;

.left
    list-style: none
    width: 80%;
    margin : 3% 0 3% 3%
    
.left-h5
    width : 20%
    border-right: $border;
    padding: 0.8rem 0.8rem 0.8rem 0.3rem;
    font-size: 0.7rem;  
    cursor: pointer;   
    color: $link-color;
    transition: all 0.25s ease-in-out;  

.left-h5:nth-child(1) 
  padding-top: 0.9rem;


.left-h5:hover 
  border:  $border;
  border-right: none;
  border-radius: $border-radius ;
  transform: scale(1, 1.1);
  color : #000

.left-h5:active 
  border:  $border;
  border-right: none;
  border-radius: $border-radius ;
  transform: scale(1, 1.1);
  color : #000

.sub
  width : 70%
  font-size: 0.9rem; 

@media only screen and (max-width: 768px) 
  
  .left
    width: 30%
    position: absolute;
    height: 100%
    background: #ebf3f5 
    margin : 0
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;

  .left-h5
    text-align : center
    margin-left: 2rem
    border : none
    cursor: pointer;

  
  .left-h5:hover 
    border: none
    color : #000

  .slide-enter-active, .slide-leave-active
    transition: transform 0.2s ease;
    
  .slide-enter, .slide-leave-to 
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
    

</style>