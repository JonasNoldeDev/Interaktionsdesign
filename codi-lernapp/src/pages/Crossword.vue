<template>
    <main-layout :visible="pageStep === 0" :hidden="pageStep !== 0">
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
        <Character position="right" :pose="characterPose" ref="character">
            <Bubble type="speech-bubble" :visible="currentStep === 0" v-on:next="currentStep++" next>
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
        <Character class="bella" :character="character">
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
                <p><b>Safari</b>, <b>Google Chorme</b> und <b>Firefox</b> sind ________</p>
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
                <p>Was gibt man oben in die <b>Adressleiste</b> des Browsers ein?</p>
            </Bubble>
            <Bubble size="small" :visible="currentStep === 10" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                <p><b>Yuhuuu, Bella ist da!!</b></p>
                <p></p>
            </Bubble>
        </Character>

        <div class="portrait">
            <div class="row_7 position1">
                <input id="a1" v-model="aOne" class="size arrowRight" alt="Eingabefeld" type="text" maxlength="1"
                       placeholder="1" :disabled="disabledA" @focus="currentStep = 6"
                       @input="submitA">
                <input id="a2" v-model="aTwo" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA" @focus="currentStep = 6"
                       @input="submitA">
                <input id="a3" v-model="aThree" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA" @focus="currentStep = 6"
                       @input="submitA">
                <input id="a4" v-model="aFour" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA" @focus="currentStep = 6"
                       @input="submitA">
                <input id="a5" v-model="aFive" class="size arrowDown" alt="Eingabefeld" type="text" maxlength="1"
                       placeholder="2" :disabled="disabledA" @focus="currentStep = 6"
                       @input="submitA">
                <input id="a6" v-model="aSix" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA" @focus="currentStep = 6"
                       @input="submitA">
                <input id="a7" v-model="aSeven" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       :disabled="disabledA" @focus="currentStep = 6"
                       @input="submitA">
                <button class="btn" v-if="clearAll" @click="resetInput"><b>x</b></button>
            </div>

            <div class="col_12 position2">
                <div class="position4" style="margin-top: 1rem">
                    <input id="b2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB" @focus="currentStep = 7"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB" @focus="currentStep = 7"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB" @focus="currentStep = 7"
                           @input="submitB">
                </div>

                <div class="position4">
                    <input id="b5" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB" @focus="currentStep = 7"
                           @input="submitB">
                </div>
                <div class="row_3 position3">
                    <input id="c1" class="size arrowRight" alt="Eingabefeld" type="text" maxlength="1" placeholder="3"
                           :disabled="disabledC" @focus="currentStep = 8"
                           @input="submitC">
                    <input id="b6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledC" @focus="currentStep = 8"
                           @input="submitB">
                    <input id="c3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledC" @focus="currentStep = 8"
                           @input="submitC">
                </div>

                <div class="position4">
                    <input id="b7" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB" @focus="currentStep = 7"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b8" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB" @focus="currentStep = 7"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b9" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB" @focus="currentStep = 7"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b10" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB" @focus="currentStep = 7"
                           @input="submitB">
                </div>
                <div class="position4">
                    <input id="b11" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledB" @focus="currentStep = 7"
                           @input="submitB">
                </div>
                <div class="row_7a position5">
                    <input id="d1" class="size arrowRight" alt="Eingabefeld" type="text" maxlength="1" placeholder="4"
                           :disabled="disabledD" @focus="currentStep = 9"
                           @input="submitD">
                    <input id="b12" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD" @focus="currentStep = 9"
                           @input="submitB">
                    <input id="d3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD" @focus="currentStep = 9"
                           @input="submitD">
                    <input id="d4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD" @focus="currentStep = 9"
                           @input="submitD">
                    <input id="d5" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD" @focus="currentStep = 9"
                           @input="submitD">
                    <input id="d6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD" @focus="currentStep = 9"
                           @input="submitD">
                    <input id="d7" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           :disabled="disabledD" @focus="currentStep = 9"
                           @input="submitD">
                </div>
            </div>
        </div>
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
                pageStep: 0,
                currentStep: 0,
                showCodi: true,
                showBubble: false,
                showWrong: false,
                clearAll: false,
                btnInfo: false,
                disabledA: false,
                disabledB: false,
                disabledC: false,
                disabledD: false,
                character: "bella",
                characterPose: "right",
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
                    this.clearAll = true;
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
                        this.browser = [];
                        return true;
                    } else {
                        this.showCodi = false;
                        this.showWrong = true;
                        setTimeout(() => {
                                this.showWrong = false;
                                this.showCodi = true;
                            },
                            3000);
                        this.disabledA = false;
                        this.btnInfo = true;
                        this.browser = [];
                        return false;
                    }
                } else {
                    this.browser = [];
                }
                this.submitAll();
            },

            submitB: function () {
                let inputsB = [];
                let such = ["u", "c", "h", "m", "a", "s", "c", "h", "i", "n", "e"];
                const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)

                for (let i = 2; i <= 12; i++) {
                    let input = document.getElementById('b' + i).value.toLowerCase();
                    inputsB.push(input);
                }
                if (inputsB[0] && inputsB[1] && inputsB[2] && inputsB[3] && inputsB[4] && inputsB[5] &&
                    inputsB[6] && inputsB[7] && inputsB[8] && inputsB[9] && inputsB[10]) {
                    this.clearAll = true;
                    if (equals(inputsB, such)) {
                        this.showCodi = false;
                        this.showBubble = true;
                        setTimeout(() => {
                                this.showBubble = false;
                                this.showCodi = true;
                                this.currentStep = 8;
                            },
                            2000);
                        this.disabledB = true;
                        this.submitAll();
                        this.such = [];
                        return true;
                    } else {
                        this.showCodi = false;
                        this.showWrong = true;
                        setTimeout(() => {
                                this.showWrong = false;
                                this.showCodi = true;
                            },
                            3000);
                        this.disabledB = false;
                        this.btnInfo = true;
                        this.such = [];
                        return false;
                    }
                } else {
                    this.such = [];
                    return false;
                }
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
                    this.clearAll = true;
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
                        return true;
                    } else {
                        this.showCodi = false;
                        this.showWrong = true;
                        setTimeout(() => {
                                this.showWrong = false;
                                this.showCodi = true;
                            },
                            3000);
                        this.disabledC = false;
                        this.btnInfo = true;
                        this.tab = [];
                        return false;
                    }
                } else {
                    this.tab = [];
                    return false;
                }
            },
            submitD: function () {
                let inputsD = [];
                let link = ["l", "i", "n", "k"];
                const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b)

                for (let i = 1; i <= 4; i++) {
                    if (i === 2) {
                        let input = document.getElementById('b10').value.toLowerCase();
                        inputsD.push(input);
                    } else {
                        let input = document.getElementById('d' + i).value.toLowerCase();
                        inputsD.push(input);
                    }
                }
                if (inputsD[0] && inputsD[1] && inputsD[2] && inputsD[3]) {
                    this.clearAll = true;
                    if (equals(inputsD, link)) {
                        this.showCodi = false;
                        this.showBubble = true;
                        setTimeout(() => {
                                this.showBubble = false;
                                this.showCodi = true;
                                //this.currentStep = 10;
                            },
                            2000);
                        this.disabledD = true;
                        this.submitAll();
                        this.link = [];
                        return true;
                    } else {
                        this.showCodi = false;
                        this.showWrong = true;
                        setTimeout(() => {
                                this.showWrong = false;
                                this.showCodi = true;
                            },
                            3000);
                        this.disabledD = false;
                        this.btnInfo = true;
                        this.link = [];
                        return false;
                    }
                } else {
                    this.link = [];
                    return false;
                }
            },
            submitAll: function () {
                if (this.submitA && this.submitB() && this.submitC && this.submitD) {
                    alert("Yeiii")
                    //this.currentStep = 10;
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
                this.disabledA = false;
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
        }
        @media screen and (orientation: portrait) {
            background-image: url(../assets/img/Kreuzwortraetsel_portrait.jpg);
            background-repeat: no-repeat;
            background-size: 100%;
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
            padding: 0.5rem 0.5rem 1rem 1rem;
        }
        @media screen and (orientation: portrait) {
            background-image: url(../assets/img/Holz_mitSchatten_7.png);
            background-repeat: no-repeat;
            background-size: 65%;
            padding: 0.5rem 0.5rem 1rem 1rem;
        }

    }

    .row_7a {
        @media screen and (orientation: landscape) {
            background-image: url(../assets/img/Holz_mitSchatten_7a.png);
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

    .bella {
        position: absolute;
        height: auto;
        left: 0;
        @media screen and (orientation: landscape) {
            width: 25%;
            bottom: 20%;
            left: 0.5rem;
        }
        @media screen and (orientation: portrait) {
            width: 32%;
            bottom: 27%;
            right: 0.1rem;
        }
    }

    svg {
        width: 1em;
        height: 1.25em;
    }

</style>
