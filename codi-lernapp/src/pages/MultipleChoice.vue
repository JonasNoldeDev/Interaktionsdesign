<template>
    <main-layout :overlay="true" :color="'blue'" :firstheader="'Lektion2'" :secondheader="'E-Mail'" :picFile="'Codi-Normal'">
        <div v-show="currentStep == 1" class="MultipleChoice">
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(true)" class="MC-item">
                    <p>Electronic Mail</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Empfängliche Mail</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Externe Mail</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Elektronische Mail</p>
                </div>  
            </div>
        </div>
        <div v-show="currentStep == 2" class="MultipleChoice">
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Mittelteil, Begrüßung, Verabschiedung</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Verabschiedung, Mittelteil, Begrüßung</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Mittelteil, Verabschiedung, Begrüßung</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(true)" class="MC-item">
                    <p>Begrüßung, Mittelteil, Verabschiedung</p>
                </div>  
            </div>
        </div>
        <div v-show="currentStep == 3" class="MultipleChoice">
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>YouTube</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(true)" class="MC-item">
                    <p>Google Mail</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Snapchat</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Fortnite</p>
                </div>  
            </div>
        </div>
        <div v-show="currentStep == 4" class="MultipleChoice">
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(true)" class="MC-item">
                    <p>Fett</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Kursiv</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Ausgegraut</p>
                </div>  
            </div>
            <div class="MC-item-container">
                <div v-on:click="checkcorrect(false)" class="MC-item">
                    <p>Bunt</p>
                </div>  
            </div>
        </div>
        <Character position="right" :pose="characterPose" ref="character">
            <Bubble size="small" :visible="wronganswer === true" v-on:next="wronganswer = false, this.changePose('explaining')" next>
                <p>
                    Das war leider falsch.
                </p>
                <p>Versuch es nochmal!</p>
            </Bubble>
            <Bubble size="small" :visible="rightanswer === true" v-on:next="currentStep++, rightanswer = false, this.changePose('explaining')" next>
                <p>
                    Richtig!!!
                </p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 0 && wronganswer === false && rightanswer === false" v-on:next="currentStep++" next>
                <p>
                    Nachdem wir die Lektion durchgegangen sind, wollen wir mal deinen Wissensstand auf die Probe stellen.
                </p>
                <p>Bist du bereit?</p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 1 && wronganswer === false && rightanswer === false">
                <p>
                    Hier kommt die Frage <b>Nummmer 1</b>:
                </p>
                <p>Was ist die Bedeutung von <b>E-Mail</b>?</p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 2 && wronganswer === false && rightanswer === false">
                <p>
                    Frage <b>Nummmer 2</b>:
                </p>
                <p>Wie ist eine <b>E-Mail</b> aufgebaut?</p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 3 && wronganswer === false && rightanswer === false">
                <p>Auf zur nächtsten Frage</p>
                <p>
                    Hier kommt die Frage <b>Nummmer 3</b>:
                </p>
                <p>Welche von den Obtionen ist ein <b>E-Mail Dienst</b>?</p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 4 && wronganswer === false && rightanswer === false">
                <p>Jetzt kommt die letzte Frage</p>
                <p>
                    Frage <b>Nummmer 4</b>:
                </p>
                <p>Bei einer ungelesenen <b>E-Mail</b> ist die Schrift...</p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 5 && wronganswer === false && rightanswer === false" v-on:next="currentStep++, this.changePose('right')" next>
                <p>Super!!!</p>
                <p>Du hast alle Fragen mit bravour beantwortet.</p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 6 && wronganswer === false && rightanswer === false" v-on:next="jumpTo" next>
                <p>Auf zur nächsten Lektion!</p>
            </Bubble>
        </Character>
    </main-layout>
</template>

<script>
import Character from '../components/Character.vue';
import MainLayout from '../layouts/Main.vue'
import Bubble from "../components/Bubble.vue";


export default {
    data() {
        return {
            currentStep: 0,
            characterPose: "explaining",
            wronganswer: false,
            rightanswer: false
        };
    },
    methods:{
        checkcorrect: function (answer) {     
            if(answer == true){
                this.rightanswer = true
                this.wronganswer = false
                this.changePose('right')
            }
            if(answer == false){
                this.wronganswer = true
                this.rightanswer = false
                this.changePose('wrong')
            }
        },
        changePose: function (Pose) {
            this.characterPose = Pose
        },
        jumpTo: function(){
            window.location.href = '/lernsektionen'
        }
    },
    components: {
      MainLayout,
        Character,
        Bubble
    },
};
</script>

<style lang="scss" scoped>
    .MultipleChoice{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 80%;
        position: absolute;
        top: 30%;
        width: 70%;
        height: 20%;
        color: #ff9900;
        .MC-item-container{
            .MC-item{
                display: table;
                width: 95%;
                height: 65%;
                text-align: center;
                background-color: #fff;
                border-radius: 1.5rem;
                border-color: #ff9900;
                border-style: solid;
                border-width: 5px;
                cursor: pointer;
                &:hover{
                    background-color: #ff9900;
                    color: #fff;
                }
                p{
                    display: table-cell;
                    vertical-align: middle;
                    font-weight: bold;
                }
            }
        }
    }
</style>