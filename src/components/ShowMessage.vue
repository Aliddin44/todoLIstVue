<template>
  <div class="box" v-for="(mess,index) of comments" :key="index">
      <div class="comment__name">{{mess.person}}</div>
      <div class="time">
          {{mess.feed}} <span>{{mess.date }}</span>
      </div>
      <div class="message">
          <div class="message__title">{{mess.feed}}</div>
          <div class="message__p" v-html="mess.comment.slice(0,180)">
             
          </div>
      </div>
  </div>
</template>

<script>
export default {
props:['comments']
}
</script>

<style lang="scss">
.comment{
    &__name{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        display: flex;
        align-items: flex-end;
        color: #24272C;
        mix-blend-mode: normal;
    }
   
}
.box{
margin-bottom: 30px;
     .time{
        font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* or 130% */
    margin-top: 15px;
   
    align-items: center;

    color: #555555;
    span{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        align-items: center;
       
        color: #F3477A;
        margin-left: 20px;
    }
    }
    .message{
            background: linear-gradient(90deg, #DAE4F4 0%, #D3DCF1 100%);
            border-radius: 10px;
            padding-left: 15px;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-right: 15px;
            margin-top: 25px;
            &__title{
                
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 18px;
            /* or 150% */
                margin-bottom: 10px;
            display: flex;
            align-items: flex-end;

            color: #5787A4;
            }
    }
}
</style>