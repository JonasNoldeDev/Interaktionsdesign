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
        <Character position="right" ref="character">
            <Bubble type="speech-bubble" :visible="currentStep === 0" v-on:next="currentStep++" next>
                <p>Oh <b>wow!</b></p>
                <p>Wir haben schon <b>so viel</b> gelernt!</p>
                <p>Aber können wir uns auch noch an alles <b>erinnern</b>?</p>
            </Bubble>
            <Bubble class="bubble" size="small" :visible="currentStep === 1" v-on:next="currentStep-- & pageStep++"
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
        <img class="bella" src="./../assets/img/characters/Bella.png" alt="Bella">
        <Bubble size="small" :visible="currentStep === 2"
                v-on:next="currentStep++" prev next>
            <p>Damit ich einen Baumstamm überqueren kann, müssen seine Felder richtig ausgefüllt sein.</p>
        </Bubble>
        <Bubble class="bellaBubble" size="small" type="speech-bubble-down" :visible="currentStep === 3"
                v-on:next="currentStep++" prev next>
            <p>Sind <b>alle</b> Felder vollständig ausgefüllt, kann ich zu <b>Codi</b> laufen.</p>
        </Bubble>
        <Character class="codi" position="right" ref="character">
            <Bubble size="small" :visible="currentStep === 0" v-on:next="currentStep++" next>
                <p><b>Oh nein!</b></p>
                <p>Bella ist auf der anderen Seite des Flusses.</p>
                <p>Alleine schafft sie es nicht über die Baumstämme zu balancieren.</p>
            </Bubble>

            <Bubble size="small" :visible="currentStep === 1" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                <p>Kannst <b>Du</b> ihr helfen?</p>
            </Bubble>

            <Bubble size="small" :visible="currentStep === 4" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                <p>Hier kommt die erste Aufgabe:</p>
                <p><b>Safari</b>, <b>Google Chorme</b> und <b>Firefox</b> sind ________</p>
            </Bubble>

            <Bubble size="small" :visible="currentStep === 5" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                <p>Als nächstes suchen wir folgenden Begriff:</p>
                <p><b>Safari</b>, <b>Google Chorme</b> und <b>Firefox</b> sind ________</p>
            </Bubble>

            <Bubble size="small" :visible="currentStep === 6" v-on:next="currentStep++" v-on:prev="currentStep--" prev
                    next>
                <p>Nummer 3:</p>
                <p></p>
            </Bubble>
        </Character>

        <div class="portrait">
            <div class="row_7 position1">
                <input id="a1" class="size arrowRight" alt="Eingabefeld" type="text" maxlength="1" placeholder="1"
                       @input="submit">
                <input id="a2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
                <input id="a3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
                <input id="a4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
                <input id="a5/b1" class="size arrowDown" alt="Eingabefeld" type="text" maxlength="1" placeholder="2"
                       @input="submit">
                <input id="a6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
                <input id="a7" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>

            <div class="col_12 position2">
                <div class="position4" style="margin-top: 1rem">
                    <input id="b2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>
                <div class="position4">
                    <input id="b3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>
                <div class="position4">
                    <input id="b4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>

                <div class="row_3 position3">
                    <input id="c1" class="size arrowRight" alt="Eingabefeld" type="text" maxlength="1" placeholder="3"
                           @input="submit">
                    <input id="b5/c2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                    <input id="c3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>

                <div class="position4">
                    <input id="b6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>
                <div class="position4">
                    <input id="b7" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>
                <div class="position4">
                    <input id="bb84" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>
                <div class="position4">
                    <input id="b9" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>
                <div class="row_4 position3">
                    <input id="d1" class="size arrowRight" alt="Eingabefeld" type="text" maxlength="1" placeholder="4"
                           @input="submit">
                    <input id="d2/b10" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                    <input id="d3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                    <input id="d4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>
                <div class="position4">
                    <input id="b11" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
                </div>
                <div class="position4">
                    <input id="b12" class="size" alt="Eingabefeld" type="text" maxlength="1"
                           @input="submit">
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

    let a1;
    let a2;
    let a3;
    let a4;
    let a5;
    let a6;
    let a7;

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
                currentStep: 0
            }
        },
        methods: {
            submit: function () {
                a1 = document.getElementById('a1');
                a2 = document.getElementById('a2');
                a3 = document.getElementById('a3');
                a4 = document.getElementById('a4');
                a5 = document.getElementById('a5/b1');
                a6 = document.getElementById('a6');
                a7 = document.getElementById('a7');


                if (a1.value && a2.value && a3.value && a4.value && a5.value && a6.value && a7.value) {
                    if (a1.value.toLowerCase() === 'b' && a2.value.toLowerCase() === 'r' && a3.value.toLowerCase() === 'o' &&
                        a4.value.toLowerCase() === 'w' && a5.value.toLowerCase() === 's' && a6.value.toLowerCase() === 'e' &&
                        a7.value.toLowerCase() === 'r') {

                        this.$refs.character.switchPose("right", 3);
                    } else {
                        this.$refs.character.switchPose("wrong", 3);
                    }

                }

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

    .btnback {
        position: absolute;
        left: 1rem;
        bottom: 1rem;
    }

    .btnready {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
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
            margin: 0.5rem;
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
            background-size: 35%;
            padding: 1.5rem;
        }
        @media screen and (orientation: portrait) {
            background-image: url(../assets/img/Holz_mitSchatten_3p.png);
            background-repeat: no-repeat;
            background-size: 40%;
            padding: 1.1rem;
        }
    }

    .row_4 {
        @media screen and (orientation: landscape) {
            background-image: url(../assets/img/Holz_mitSchatten_4.png);
            background-repeat: no-repeat;
            background-size: 55%;
            padding: 1.5rem 1.5rem 1.5rem 2rem;
        }
        @media screen and (orientation: portrait) {
            background-image: url(../assets/img/Holz_mitSchatten_4p.png);
            background-repeat: no-repeat;
            background-size: 53%;
            padding: 1.1rem;
        }
    }

    .row_7 {
        @media screen and (orientation: landscape) {
            background-image: url(../assets/img/Holz_mitSchatten_7.png);
            background-repeat: no-repeat;
            background-size: 60%;
            padding: 1.5rem;
        }
        @media screen and (orientation: portrait) {
            background-image: url(../assets/img/Holz_mitSchatten_7.png);
            background-repeat: no-repeat;
            background-size: 65%;
            padding: 1.2rem 1rem 0.7rem 0.9rem;
        }

    }

    .col_12 {
        @media screen and (orientation: landscape) {
            background-image: url(../assets/img/Holz_mitSchatten_up12.png);
            background-repeat: no-repeat;
            background-size: 17%;
            padding-bottom: 1rem;
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
            margin-left: 13.5rem;
        }
        @media screen and (orientation: portrait) {
            margin-left: 10rem;
        }
    }

    .position2 {
        @media screen and (orientation: landscape) {
            margin-left: 30rem;
            margin-top: -2.5rem;
        }
        @media screen and (orientation: portrait) {
            margin-left: 23.1rem;
            margin-top: -1.8rem;
        }
    }


    .position3 {
        @media screen and (orientation: landscape) {
            margin-left: -4.5rem;
            margin-top: -1.5rem;
            margin-bottom: -1.5rem;
        }
        @media screen and (orientation: portrait) {
            margin-left: -3.4rem;
            margin-top: -1.1rem;
            margin-bottom: -1.1rem;
        }
    }

    .position4 {
        margin-left: 1rem;
    }

    .codi {
        position: absolute;
        @media screen and (orientation: landscape) {
            width: 18rem;
            height: auto;
            bottom: 20%;
            &.right {
                right: 0.5rem;
            }
        }
        @media screen and (orientation: portrait) {
            width: 16rem;
            height: auto;
            bottom: 27%;
            &.right {
                right: 0.5rem;
            }
        }
    }

    .bella {
        position: absolute;
        width: 12rem;
        height: auto;
        left: 0;
        @media screen and (orientation: landscape) {
            top: 20%;
        }
        @media screen and (orientation: portrait) {
            top: 30%;
        }
    }

    .bellaBubble {

    }

    svg {
        width: 1em;
        height: 1.25em;
    }

</style>
