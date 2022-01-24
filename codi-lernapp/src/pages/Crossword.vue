<template>
    <main-layout :visible="pageStep === 0" :hidden="pageStep !== 0"
                 :overlay="true"
                 :color="'blue'"
                 :firstheader="'Lektion 1'"
                 :secondheader="'Browser Spiel'"
                 :picFile="'Codi-Richtig'">
        <Character position="right" :pose="characterPose" ref="character">
            <Bubble :visible="currentStep === 0" v-on:next="currentStep++" next>
                <p>Oh <b>wow!</b></p>
                <p>Wir haben schon <b>so viel</b> gelernt!</p>
                <p>Aber können wir uns auch noch an alles <b>erinnern</b>?</p>
            </Bubble>
            <Bubble class="bubble" size="small" :visible="currentStep === 1" v-on:next="currentStep++ & pageStep++"
                    v-on:prev="currentStep--" prev next>
                <p><b>Lass es uns herausfinden!</b></p>
            </Bubble>
        </Character>
    </main-layout>


    <main-layout class="bg" style="border: none; padding: 0;" :visible="pageStep === 1" :hidden="pageStep !== 1">
        <header>
            <v-button href="/lernsektionen">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left"
                     role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 256 512">
                    <path fill="currentColor"
                          d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
                </svg>
            </v-button>
        </header>
        <Character id="bella" class="bella" :character="character"
                   v-if="currentStep >= 2 && currentStep <= 5">
            <Bubble size="small" :visible="currentStep === 4"
                    v-on:next="currentStep++" v-on:prev="currentStep--" prev next>
                <p>Damit ich einen Baumstamm <b>überqueren</b> kann, müssen seine Felder <b>richtig</b> ausgefüllt sein.
                </p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 5"
                    v-on:next="currentStep++" v-on:prev="currentStep--" prev next>
                <p>Sind <b>alle</b> Felder vollständig ausgefüllt, kann ich zu <b>Codi</b> laufen.</p>
            </Bubble>
        </Character>

        <Character id="bellaWalk" class="bellaWalk slideUp" :character="character"
                   v-if="currentStep > 5 && currentStep < 11" :pose="bellaPose">
        </Character>


        <Character id="bellaFin" class="bellaFin" :character="character"
                   v-if="currentStep === 11">
            <Bubble size="small" type="speech-bubble-left"  style="right: 110%; margin-bottom: -60%;"
                    v-on:next="pageStep++" next>
                <p>Endlich bin ich wieder bei meinem Freund <b>Codi</b>.</p>
                <p>Dank <b>deiner Hilfe!</b></p>
            </Bubble>
        </Character>


        <Character class="codi" v-if="showBubble" :pose="bubblePose" position="right" ref="character">
            <Bubble size="small">
                <p><b>Super!</b></p>
            </Bubble>
        </Character>

        <Character class="codi" v-if="showWrong" :pose="wrongPose" position="right" ref="character">
            <Bubble size="small">
                <p>Das ist noch nicht ganz richtig!</p>
            </Bubble>
        </Character>

        <Bubble size="small" v-if="btnInfo">
            <p>Wenn du deine Eingaben <b>löschen</b> möchtest, drücke den <b>blauen Button</b> mit dem <b>x</b>.</p>
        </Bubble>

        <Character class="codi" v-if="showCodi" :pose="characterPose" position="right" ref="character">
            <Bubble size="small" :visible="currentStep === 2" v-on:next="currentStep++" next>
                <p><b>Oh nein!</b></p>
                <p>Bella ist auf der anderen Seite des Flusses.</p>
                <p>Alleine schafft sie es nicht über die Baumstämme zu balancieren.</p>
            </Bubble>

            <Bubble size="small" :visible="currentStep === 3" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                <p>Kannst <b>Du</b> ihr helfen?</p>
            </Bubble>

            <Bubble size="small" :visible="currentStep === 6" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                <p>Hier kommt die erste Aufgabe für den Baumstamm mit der <b>Nummer 1</b>:</p>
                <p><b>Safari</b>, <b>Google Chrome</b> und <b>Firefox</b> sind ________</p>
            </Bubble>

            <Bubble size="small" :visible="currentStep === 7" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                <p>Für den <b>zweiten</b> Baumstamm suchen wir folgenden <b>Begriff</b>:</p>
                <p>Das brauchen wir, um das <b>Internet</b> zu <b>durchsuchen</b>:</p>
                <!--
                <Bubble size="small" :visible="currentStep === 6" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                    <p>Tipp:</p>
                    <p>Beispiele für den Begriff den wir suchen sind <b>Google</b> und <b>Bing</b>.</p>
                </Bubble>
                -->
            </Bubble>

            <Bubble size="small" :visible="currentStep === 8" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                <p>Nun zu Baumstamm <b>Nummer 3</b>:</p>
                <p>Um eine <b>weitere Webseite</b> im Browser zu öffnen, drücken wir das <b>Plus-Zeichen</b>.</p>
                <p>Dann öffnet sich ein <b>neuer</b> ______</p>
                <p></p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 9" v-on:prev="currentStep--" prev>
                <p>Ok, der letzte Baumstamm (<b>Nummer 4</b>) ist dran!</p>
                <p>Was wird angezeigt, wenn wir eine Adresse in die Adresszeile eingeben?</p>
            </Bubble>
        </Character>

        <Character class="codi codiAnim" v-if="showFin" :pose="characterPose" position="right" ref="character">
            <Bubble style="left: -75%; margin-bottom: -45%;" size="small" type="speech-bubble-left"
                    :visible="currentStep >= 10">
                <p><b>Yuhuuu, Bella ist da!!</b></p>
                <p></p>
            </Bubble>
        </Character>

        <div class="portrait">
            <div class="row_7 position1">
                <input id="a1" v-model="aOne" class="size arrowRight" alt="Eingabefeld" type="text" maxlength="1"
                       placeholder="1" :disabled="disabledA"
                       @input="submitA">
                <input id="a2" v-model="aTwo" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA"
                       @input="submitA">
                <input id="a3" v-model="aThree" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA"
                       @input="submitA">
                <input id="a4" v-model="aFour" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA"
                       @input="submitA">
                <input id="a5" v-model="aFive" class="size arrowDown" alt="Eingabefeld" type="text" maxlength="1"
                       placeholder="2" :disabled="disabledAB"
                       @input="submitA">
                <input id="a6" v-model="aSix" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA"
                       @input="submitA">
                <input id="a7" v-model="aSeven" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA"
                       @input="submitA">
                <button class="btn" v-if="clearAll" @click="resetInput"><b>x</b></button>
            </div>

            <div class="col_12 position2">
                <div class="position4" style="margin-top: 1rem">
                    <input id="b2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB"
                           @input="submitB">
                </div>

                <div class="position4">
                    <input id="b5" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB"
                           @input="submitB">
                </div>
                <div class="row_3 position3">
                    <input id="c1" class="size arrowRight" alt="Eingabefeld" type="text" maxlength="1" placeholder="3"
                           :disabled="disabledC"
                           @input="submitC">
                    <input id="b6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledC"
                           @input="submitB">
                    <input id="c3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledC"
                           @input="submitC">
                </div>

                <div class="position4">
                    <input id="b7" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b8" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b9" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b10" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b11" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB"
                           @input="submitB">
                </div>
                <div class="row_8 position5">
                    <input id="d1" class="size arrowRight" alt="Eingabefeld" type="text" maxlength="1" placeholder="4"
                           :disabled="disabledD"
                           @input="submitD">
                    <input id="b12" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledBD"
                           @input="submitB">
                    <input id="d3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD"
                           @input="submitD">
                    <input id="d4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD"
                           @input="submitD">
                    <input id="d5" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD"
                           @input="submitD">
                    <input id="d6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD"
                           @input="submitD">
                    <input id="d7" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD"
                           @input="submitD">
                    <input id="d8" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD"
                           @input="submitD">
                </div>
            </div>
        </div>
    </main-layout>


    <main-layout :visible="pageStep === 2" :hidden="pageStep !== 2">
        <Character position="right" :pose="characterPose" ref="character">
            <Bubble v-on:next="currentStep++" next>
                <p><b>Super!</b></p>
                <p>Du hast das Gelernte der Lektion <b>'Browser & Suchmaschinen'</b> angewendet.</p>
                <p><b>Sehr gut gemacht!</b><br>
                    Auf zur nächsten Lektion!</p>
            </Bubble>
        </Character>
    </main-layout>
</template>


<!--

<input id="b12" class="size" alt="Eingabefeld" type="text" maxlength="1"
                        @input="$emit('userinput')">
-->

<script>

    import MainLayout from '../layouts/Main.vue'
    import VButton from "../components/VButton";
    import Character from "../components/Character";
    import Bubble from "../components/Bubble";
    import vueConfig from "../../vue.config";

    export default {
        name: 'Crossword',
        components: {
            MainLayout,
            VButton,
            Character,
            Bubble
        },
        data: () => {
            return {
                value1: false,
                pageStep: 0,
                currentStep: 0,
                showCodi: true,
                showBubble: false,
                showWrong: false,
                showFin: false,
                clearAll: false,
                btnInfo: false,
                disabledA: false,
                disabledB: false,
                disabledC: false,
                disabledD: false,
                disabledAB: false,
                disabledBD: false,
                character: "bella",
                characterPose: "right",
                bellaPose: "normal",
                bubblePose: "right",
                leftMove: "moveLeft",
                wrongPose: "wrong",
                pose: "normal",
                aOne: "",
                aTwo: "",
                aThree: "",
                aFour: "",
                aFive: "",
                aSix: "",
                aSeven: "",
            }
        },
        watch: {
            currentStep: function (newStep) {
                if (newStep === 12) {
                    this.$root.currentRoute = (vueConfig.publicPath || '') + "/lernsektionen";
                    window.history.pushState(null, "Lernsektionen", (vueConfig.publicPath || '') + "/lernsektionen");
                }

                const poseDict = {
                    0: "right",
                    1: "explaining",
                    2: "stressed",
                    3: "explaining",
                    4: "normal",
                    5: "right",
                    6: "explaining",
                    7: "explaining",
                    8: "explaining",
                    9: "explaining",
                    10: "right",
                };

                if (!(newStep in poseDict)) return;
                this.characterPose = poseDict[newStep];

                const bellaDict = {
                    6: "up",
                    7: "lookUp",
                    8: "up",
                    9: "lookUp",
                    10: "up",
                    11: "lookUp",
                };

                if (!(newStep in bellaDict)) return;
                this.bellaPose = bellaDict[newStep];
            },
        },
        methods: { //switch case?
            submitA: function () {
                let inputsA = [];
                let browser = ["b", "r", "o", "w", "s", "e", "r"];
                const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)

                for (let i = 1; i <= 7; i++) {
                    let input = document.getElementById('a' + i).value.toLowerCase();
                    inputsA.push(input);
                }

                if (inputsA[0] && inputsA[1] && inputsA[2] && inputsA[3] && inputsA[4] && inputsA[5] && inputsA[6]) {
                    //this.clearAll = true;
                    if (equals(inputsA, browser)) {
                        this.showCodi = false;
                        this.showBubble = true;
                        setTimeout(() => {
                                this.showBubble = false;
                                this.showCodi = true;
                                this.currentStep = 7;
                            },
                            2000);
                        this.disabledA = true;
                        this.disabledAB = true;
                        this.browser = [];
                        if(this.disabledB){
                            document.getElementById('bellaWalk').className += " slideRight1";
                            setTimeout(() => {
                                    document.getElementById('bellaWalk').className += " slideDown1";
                                },
                                3000);
                        }

                    } else {
                        this.showCodi = false;
                        this.showWrong = true;
                        setTimeout(() => {
                                this.showWrong = false;
                                this.showCodi = true;
                            },
                            3000);
                        //this.disabledA = false;
                        //this.btnInfo = true;
                        this.browser = [];
                    }
                } else {
                    this.browser = [];
                }
                this.submitAll();
            },

            submitB: function () {
                let inputsB = [];
                let such = ["s", "u", "c", "h", "m", "a", "s", "c", "h", "i", "n", "e"];
                const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)

                for (let i = 1; i <= 12; i++) {
                    if (i === 1) {
                        let input = document.getElementById('a5').value.toLowerCase();
                        inputsB.push(input);
                    } else {
                        let input = document.getElementById('b' + i).value.toLowerCase();
                        inputsB.push(input);
                    }
                }
                if (inputsB[0] && inputsB[1] && inputsB[2] && inputsB[3] && inputsB[4] && inputsB[5] &&
                    inputsB[6] && inputsB[7] && inputsB[8] && inputsB[9] && inputsB[10] && inputsB[11]) {
                    //this.clearAll = true;
                    if (equals(inputsB, such)) {
                        this.showCodi = false;
                        this.showBubble = true;
                        setTimeout(() => {
                                this.showBubble = false;
                                this.showCodi = true;
                                this.currentStep = 8;
                            },
                            2000);
                        this.disabledAB = true;
                        this.disabledB = true;
                        this.disabledBD = true;
                        this.such = [];
                        if(this.disabledA) {
                            document.getElementById('bellaWalk').className += " slideDown1";
                        }
                    } else {
                        this.showCodi = false;
                        this.showWrong = true;
                        setTimeout(() => {
                                this.showWrong = false;
                                this.showCodi = true;
                            },
                            3000);
                        //this.disabledB = false;
                        //this.btnInfo = true;
                        this.such = [];
                    }
                } else {
                    this.such = [];
                }
                this.submitAll();
            },
            submitC: function () {
                let inputsC = [];
                let tab = ["t", "a", "b"];
                const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)

                for (let i = 1; i <= 3; i++) {
                    if (i === 2) {
                        let input = document.getElementById('b6').value.toLowerCase();
                        inputsC.push(input);
                    } else {
                        let input = document.getElementById('c' + i).value.toLowerCase();
                        inputsC.push(input);
                    }
                }
                if (inputsC[0] && inputsC[1] && inputsC[2]) {
                    //this.clearAll = true;
                    if (equals(inputsC, tab)) {
                        this.showCodi = false;
                        this.showBubble = true;
                        setTimeout(() => {
                                this.showBubble = false;
                                this.showCodi = true;
                                this.currentStep = 9;
                            },
                            2000);
                        this.disabledC = true;
                        this.submitAll();
                        this.tab = [];
                        document.getElementById('bellaWalk').className += " slideDown2";
                    } else {
                        this.showCodi = false;
                        this.showWrong = true;
                        setTimeout(() => {
                                this.showWrong = false;
                                this.showCodi = true;
                            },
                            3000);
                        //this.disabledC = false;
                        //this.btnInfo = true;
                        this.tab = [];
                    }
                } else {
                    this.tab = [];
                }
                this.submitAll();
            },
            submitD: function () {
                let inputsD = [];
                let website = ["w", "e", "b", "s", "e", "i", "t", "e"];
                const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)

                for (let i = 1; i <= 8; i++) {
                    if (i === 2) {
                        let input = document.getElementById('b12').value.toLowerCase();
                        inputsD.push(input);
                    } else {
                        let input = document.getElementById('d' + i).value.toLowerCase();
                        inputsD.push(input);
                    }
                }
                if (inputsD[0] && inputsD[1] && inputsD[2] && inputsD[3] && inputsD[4] && inputsD[5] && inputsD[6] && inputsD[7]) {
                    //this.clearAll = true;
                    if (equals(inputsD, website)) {
                        this.showCodi = false;
                        this.showBubble = true;
                        setTimeout(() => {
                                this.showBubble = false;
                                //this.showCodi = true;
                                //this.currentStep = 10;
                            },
                            2000);
                        this.disabledD = true;
                        this.disabledBD = true;
                        this.submitAll();
                        this.website = [];
                        document.getElementById('bellaWalk').className += " slideRight2";
                    } else {
                        this.showCodi = false;
                        this.showWrong = true;
                        setTimeout(() => {
                                this.showWrong = false;
                                this.showCodi = true;
                            },
                            3000);
                        //this.disabledD = false;
                        //this.btnInfo = true;
                        this.website = [];
                    }
                } else {
                    this.website = [];
                }
                this.submitAll();
            },

            submitAll: function () {
                if (this.disabledA && this.disabledAB && this.disabledB && this.disabledBD &&
                    this.disabledC && this.disabledD) {
                    this.showFin = true;
                    this.showCodi = false;
                    this.showBubble = false;
                    this.currentStep = 10;
                    setTimeout(() => {
                            this.currentStep = 11;
                        },
                        5000);
                    console.log('CurrentStep: ' + this.currentStep);
                }
            },

            resetInput() {
                this.aOne = "";
                this.aTwo = "";
                this.aThree = "";
                this.aFour = "";
                this.aFive = "";
                this.aSix = "";
                this.aSeven = "";
                this.btnInfo = false;
                //this.disabledA = false;
                this.currentStep = 6;
            },
        }
    };
</script>

<style lang="scss" scoped>

    header {
        position: absolute;
        display: flex;
        align-items: center;
        margin: 1rem 0 2rem 1rem;

        svg {
            display: block;
            width: 1em;
            height: 1em;
        }
    }

    .btn {
        line-height: 1;
        color: #fff;
        background: var(--color-blue);
        display: inline-block;
        text-decoration: none;
        padding: 0.4em 0.8em 0.6em 0.8em;
        border-radius: var(--border-radius);
        font-size: 0.8rem;
        border: none;
        position: absolute;
        transform: scale(1);
        box-shadow: 0 0 0 0 var(--color-blue);
        animation: pulse-blue 2s infinite;

        @media screen and (orientation: landscape) {
            top: 5.5%;
        }
        @media screen and (orientation: portrait) {
            top: 19%;
        }
    }

    @keyframes pulse-blue {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(52, 172, 224, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
        }
    }

    .bg {
        @media screen and (orientation: landscape) {
            background-image: url(../assets/img/Kreuzwortraetsel_landscape.jpg);
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: initial;
        }
        @media screen and (orientation: portrait) {
            background-image: url(../assets/img/Kreuzwortraetsel_portrait.jpg);
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: initial;
        }
    }

    div.portrait {
        @media screen and (orientation: portrait) {
            padding-top: 21%;
        }
    }

    input::placeholder {
        color: dimgrey;
        font-size: 0.7em;
    }

    .arrowRight {
        background-image: url(../assets/img/arrow_right.png);
        background-size: contain;
        background-repeat: no-repeat;
    }

    .arrowDown {
        background-image: url(../assets/img/arrow_down.png);
        background-size: contain;
        background-repeat: no-repeat;
    }

    .size {
        @media screen and (orientation: landscape) {
            height: 3rem;
            width: 3rem;
            text-align: center;
            font-size: 25px;
            border-radius: 5px;
            margin: 0.4rem;
        }
        @media screen and (orientation: portrait) {
            height: 2.5rem;
            width: 2.5rem;
            text-align: center;
            font-size: 20px;
            border-radius: 5px;
            margin: 0.4rem;
        }
    }

    .row_3 {
        @media screen and (orientation: landscape) {
            background-image: url(../assets/img/Holz_mitSchatten_3.png);
            background-repeat: no-repeat;
            background-size: 28%;
            padding: 1.6rem 1.5rem 1.4rem 1.4rem;
        }
        @media screen and (orientation: portrait) {
            background-image: url(../assets/img/Holz_mitSchatten_3p.png);
            background-repeat: no-repeat;
            background-size: 40%;
            padding: 1.1rem;
        }
    }

    .row_7 {
        @media screen and (orientation: landscape) {
            background-image: url(../assets/img/Holz_mitSchatten_7.png);
            background-repeat: no-repeat;
            background-size: 49%;
            padding: 1rem 0.5rem 1.2rem 1rem;
        }
        @media screen and (orientation: portrait) {
            background-image: url(../assets/img/Holz_mitSchatten_7.png);
            background-repeat: no-repeat;
            background-size: 65%;
            padding: 0.5rem 0.5rem 1rem 1rem;
        }

    }

    .row_8 {
        @media screen and (orientation: landscape) {
            background-image: url(../assets/img/Holz_mitSchatten_8.png);
            background-repeat: no-repeat;
            background-size: 63%;
            padding: 0.5rem 0.5rem 1rem 1rem;
        }
    }

    .col_12 {
        @media screen and (orientation: landscape) {
            background-image: url(../assets/img/Holz_mitSchatten_up12.png);
            background-repeat: no-repeat;
            background-size: 14%;
            padding-left: 0.2rem;
        }
        @media screen and (orientation: portrait) {
            background-image: url(../assets/img/Holz_mitSchatten_up12p.png);
            background-repeat: no-repeat;
            background-size: 21%;
            padding-bottom: 2rem;
        }
    }

    .position1 {
        @media screen and (orientation: landscape) {
            margin-left: 14rem;
        }
        @media screen and (orientation: portrait) {
            margin-left: 10rem;
        }
    }

    .position2 {
        @media screen and (orientation: landscape) {
            margin-left: 29rem;
            margin-top: -2.1rem;
        }
        @media screen and (orientation: portrait) {
            margin-left: 23.1rem;
            margin-top: -1.8rem;
        }
    }


    .position3 {
        @media screen and (orientation: landscape) {
            margin-left: -4.2rem;
            margin-top: -1.7rem;
            margin-bottom: -1.5rem;
        }
        @media screen and (orientation: portrait) {
            margin-left: -3.4rem;
            margin-top: -1.1rem;
            margin-bottom: -1.1rem;
        }
    }

    .position5 {
        margin-top: -0.4rem;
        margin-left: -3.8rem;
    }

    .position4 {
        margin-left: 1rem;
    }

    .codi {
        position: absolute;
        @media screen and (orientation: landscape) {
            width: 25%;
            height: auto;
            bottom: 10%;
            &.right {
                right: 0.5rem;
            }
        }
        @media screen and (orientation: portrait) {
            width: 16rem;
            height: auto;
            bottom: 27%;
            &.right {
                right: 0.1rem;
            }
        }
    }

    .codiAnim {
        animation-name: codiAnim;
        animation-duration: 3s;
        animation-fill-mode: forwards;
    }

    @keyframes codiAnim {
        from {
            bottom: 10%;
        }
        to {
            bottom: 53%;
        }
    }

    .bella {
        position: absolute;
        height: auto;
        left: 0;
        @media screen and (orientation: landscape) {
            width: 25%;
            height: auto;
            bottom: 20%;
        }
        @media screen and (orientation: portrait) {
            width: 32%;
            bottom: 27%;
            right: 0.1rem;
        }
    }

    .bellaFin {
        position: absolute;
        width: 25%;
        height: auto;
        left: 75%;
        bottom: 5%;

    }

    .bellaWalk {
        position: absolute;
        width: 10%;
        height: auto;
        bottom: 20%;
        left: 5%;
        pointer-events: none;
    }

    .slideUp {
        left: 10%;
        transform: rotate(180deg);
        animation-name: slideUp, rotateRight;
        animation-duration: 3s, 2s;
        animation-delay: 0s, 3s;
        animation-fill-mode: forwards, forwards;
    }

    @keyframes slideUp {
        from {
            bottom: 20%;
        }
        to {
            bottom: 65%;
        }
    }

    @keyframes rotateRight {
        from {
            left: 10%;
            bottom: 65%;
        }
        to {
            left: 5%;
            bottom: 77%;
        }
        100% {
            transform: rotate(270deg);
        }
    }

    .slideRight1 {
        left: 10%;
        bottom: 77%;
        transform: rotate(270deg);
        animation-name: slideRight1;
        animation-duration: 3s;
        animation-fill-mode: forwards;
    }

    @keyframes slideRight1 {
        from {
            left: 10%;
        }
        to {
            left: 25%;
        }
    }

    .slideDown1 {
        left: 25%;
        bottom: 77%;
        animation-name: rotateDown1, slideDown1;
        animation-duration: 1.5s, 3s;
        animation-delay: 0s, 1s;
        animation-fill-mode: forwards, forwards;
    }

    @keyframes rotateDown1 {
        from {
            left: 25%
        }
        to {
            left: 36.5%;
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes slideDown1 {
        from {
            bottom: 77%;
        }
        to {
            bottom: 58%;
        }
    }

    .slideDown2 {
        left: 36.5%;
        bottom: 58%;
        transform: rotate(0);
        animation-name: slideDown2;
        animation-duration: 3s;
        animation-fill-mode: forwards;
    }

    @keyframes slideDown2 {
        from {
            bottom: 58%;
        }
        to {
            bottom: 10%;
        }
    }

    .slideRight2 {
        left: 36.5%;
        bottom: 10%;
        animation-name: rotateRight2, slideRight2;
        animation-duration: 1.5s, 3s;
        animation-delay: 0s, 1.5s;
        animation-fill-mode: forwards, forwards;
    }

    @keyframes rotateRight2 {
        from {
            left: 36.5%;
            bottom: 10%;
        }
        to {
            left: 38%;
            bottom: -9.5%;
        }
        100% {
            transform: rotate(-90deg);
        }
    }

    @keyframes slideRight2 {
        from {
            left: 40%;
        }
        to {
            left: 80%;
        }
    }


    svg {
        width: 1em;
        height: 1.25em;
    }

</style>
