<template>
    <main-layout :isSlider="'slider'" :overlay="true" :firstheader="'Einführung'" :picFile="'Codi-Normal'">
      <Carousal :maxSlides="7" :nextPage="'/lernsektionen/lesson1/part1'" class="carousal" v-slot="{currentSlide}">
        <Slide v-show="currentSlide === 1">
          <div class="slide-info speech-bubble">
            <p>Hallo und Willkommen in meinem Paradies zur digitalen Kompetenz!<br>
               Mein Name ist Codi und ich freue mich schon auf den digitalen Lernspaß.<br>
               Bevor du dich allerdings beweisen kannst, erkläre ich dir noch, wie du dich hier zurecht findest.<br>
               Keine Sorge, ich halte mich kurz!
            </p>
            <div class="left-point"></div>
          </div>
        </Slide>
        <Slide v-show="currentSlide === 2">
          <div class="slide-info speech-bubble">
            <p>Mit "<b>Weiter</b>" kommen wir in unserem jetzigen Gespräch voran.</p>
            <div class="left-point"></div>
          </div>
        </Slide>
        <Slide v-show="currentSlide === 3">
          <div class="slide-info speech-bubble">
            <p>Falls du schon alles über die Steuerungsgrundlagen weißt, kannst du mit &nbsp; <i class="fa-solid fa-forward-step"></i> &nbsp; meine Erklärungen vollständig überspringen.<br>
               Du landest dann direkt im Rundgang!
            </p>
            <div class="left-point"></div>
          </div>
        </Slide>
        <Slide v-show="currentSlide === 4">
          <div class="slide-info speech-bubble">
            <p>Du willst mehr hören? Super!<br>
               Dann drücke auf "<b>Weiter</b>".
            </p>
            <div class="left-point"></div>
          </div>
        </Slide>  
        <Slide v-show="currentSlide === 5">
          <div class="slide-info speech-bubble">
            <p>Mit dem <b>Haus</b>-Symbol kommst du übrigens wieder zum Startmenü.<br>
               Hier kannst du erneut den Rundgang starten oder die Lernsequenzen auswählen.
            </p>
            <div class="left-point"></div>
          </div>
        </Slide>
        <Slide v-show="currentSlide === 6">
          <div class="slide-info speech-bubble">
            <p>Mit diesem Knopf kannst du Musik und Sounds an- oder ausstellen, je nachdem ob du sie hören möchtest oder nicht.</p>
            <div class="left-point"></div>
          </div>
        </Slide>  
        <Slide v-show="currentSlide === 7">
          <div class="slide-info speech-bubble">
            <p>Klasse, dann können wir auch schon in die digitale Welt eintauchen. <br>Mit "Weiter" geht's auch schon los mit Numero 1: dem <b>Browser</b>.</p>
            <div class="left-point"></div>
          </div>
        </Slide>      
      <img v-show="currentSlide === 1 || currentSlide === 3 || currentSlide === 7" class="codi" src="./../assets/img/characters/codi/999.png" alt="Codi">
      <img v-show="currentSlide === 2 || currentSlide === 5" class="codi codi-gross" src="./../assets/img/characters/codi/Papagai_erklaerend_gross.png" alt="Codi">
      <img v-show="currentSlide === 4 || currentSlide === 6" class="codi codi-sing" src="./../assets/img/characters/codi/Codi_richtig.png" alt="Codi">
      
      <div class="skip">
        <i v-on:click="jumpTo" class="fa-solid fa-forward-step"></i>
      </div>
      <div v-show="currentSlide === 2" class="Pointer-weiter">
        <i class="icon fas fa-sort-down"></i>
      </div>
      <div v-show="currentSlide === 3" class="Pointer-skip">
        <i class="icon fas fa-sort-down"></i>
      </div>
      <div v-show="currentSlide === 5" class="Pointer-home">
        <i class="home_icon icon fas fa-sort-down"></i>
      </div>
      <div v-show="currentSlide === 6" class="Pointer-sound">
        <i class="icon fas fa-sort-down"></i>
      </div>
      </Carousal>
    </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'
  import Carousal from '../components/Carousal.vue'
  import Slide from '../components/Slide.vue'


export default {
    data() {
        return {
            showNum: true
        }
    },
    methods:{
      jumpTo: function () {
        window.location.href = '/lernsektionen/lesson1/part1'
      }
    },
    components: {
      MainLayout,
      Carousal,
      Slide
    },
};
</script>

<style lang="scss" scoped>
  .carousal{
    position: relative;
    max-height: 100%;
    height: 100%;
    .slide-info{
      height: 100%;
      img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 25%;
        margin-top: 50px;
      }

      p{
        line-height: 2rem;
      }

      .row {
        display: flex;
      }

      /* Create three equal columns that sits next to each other */
      .column {
        flex: 33.33%;
        padding: 5px;
      }
    }
    .speech-bubble{
      display: table;
      padding: 0 3rem;
      p{
        display: table-cell;
        vertical-align: middle;
      }
    }
    .skip{
      display: flex;
      flex: 1;
      position: absolute;
      bottom: 10%;
      justify-content: flex-end;
      right: 7%;
      i{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 1.5rem;
        width: 50px;
        height: 50px; 
        background-color: #FFAA00;
        color: #fff;
        z-index: 1000;
      }
    }
    .Pointer-weiter{
      position: absolute;
      right: 14.5%;
      bottom: 18%;
      animation: floating 1s ease-in-out infinite;
    }
    .Pointer-skip{
      position: absolute;
      right: 7%;
      bottom: 18%;
      animation: floating 1s ease-in-out infinite;
    }
    .Pointer-home{
      position: absolute;
      left: 3%;
      top: 14%;
      animation: floating 1s ease-in-out infinite;
    }
    .Pointer-sound{
      position: absolute;
      left: 3%;
      bottom: 15%;
      animation: floating 1s ease-in-out infinite;
    }

    .icon{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FF9900;
      font-size: 3rem;
      text-align: center;
      height: 50px;
      width: 50px;
    }

    .home_icon{
      transform: rotate(180deg);
    }

  }
  .codi {
    display: block;
    position: absolute;
    width: 20rem;
    height: auto;
    left: 8rem;
    bottom: 1rem;
  }
  .codi-gross{
    width: 18rem;
    bottom: 0.5rem;
  }
  .codi-sing{
    bottom: 0.5rem;
  }
  .left-point{
    width: 0;
    height: 0;
    border-left: 2vh solid transparent;
    border-right: 2vh solid transparent;
    border-top: 10vh solid #fff;
    position: absolute;
    top: 83%;
    left: 20%;
    transform: rotate(60deg);
  }

  @keyframes floating {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-15px);
    }
    100% {
      transform: translatey(0px);
    }
  }
</style>