<template>
    <main-layout class="bg" style="border: none; padding: 0;">
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

        <Character class="codi" position="right" ref="character" alt="Codi"></Character>


        <div class="row_7 position1">
            <input id="a1" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="submit">
            <input id="a2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="submit">
            <input id="a3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="submit">
            <input id="a4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="submit">
            <input id="a5/b1" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="submit">
            <input id="a6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="submit">
            <input id="a7" class="size" alt="Eingabefeld" type="text" maxlength="1"
                   @input="submit">
        </div>

        <div class="col_12 position2">
            <div id="5" class="position4" style="margin-top: 1rem">
                <input id="b2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
            <div id="7" class="position4">
                <input id="b3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>
            <div id="8" class="position4">
                <input id="b4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                       @input="submit">
            </div>

            <div class="row_3 position3">

                <input id="c1" class="size" alt="Eingabefeld" type="text" maxlength="1"
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
                <input id="d1" class="size" alt="Eingabefeld" type="text" maxlength="1"
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
            Character
        },
        data: () => {
            return {
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

                        this.$refs.character.switchPose("right", 2);
                    } else {
                        this.$refs.character.switchPose("wrong", 2);
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
        @media screen and (orientation:landscape) {
            background-image: url(src/assets/img/Kreuzwortraetsel_landscape.jpg);
            background-repeat: no-repeat;
            background-size: 100%;
        }
        @media screen and (orientation:portrait) {
            background-image: url(src/assets/img/Kreuzwortraetsel_portrait.jpg);
            background-repeat: no-repeat;
            background-size: 100%;
        }
    }

    .size {
        height: 3rem;
        width: 3rem;
        text-align: center;
        font-size: 25px;
        border-radius: 5px;
        margin: 0.5rem;
    }

    .row_3 {
        background-image: url(../assets/img/Holz_mitSchatten_3.png);
        background-repeat: no-repeat;
        background-size: 35%;
        padding: 1.5rem;
    }

    .row_4 {
        background-image: url(../assets/img/Holz_mitSchatten_4.png);
        background-repeat: no-repeat;
        background-size: 47%;
        padding: 1.5rem;
    }

    .row_7 {
        background-image: url(../assets/img/Holz_mitSchatten_7.png);
        background-repeat: no-repeat;
        background-size: 60%;
        padding: 1.5rem;
    }

    .col_12 {
        background-image: url(../assets/img/Holz_mitSchatten_up12.png);
        background-repeat: no-repeat;
        background-size: 17%;
        padding-bottom: 1rem;
    }

    .position1 {
        margin-left: 13.5rem;
    }

    .position2 {
        margin-left: 30rem;
        margin-top: -2.5rem;
    }

    .position3 {
        margin-left: -4.5rem;
        margin-top: -1.5rem;
        margin-bottom: -1.5rem;
    }

    .position4 {
        margin-left: 1rem;
    }

    .codi {
        position: absolute;
        width: 15rem;
        height: auto;
        bottom: 20rem;

        &.right {
            right: 0;
        }
    }

    .bella {
        position: absolute;
        width: 12rem;
        height: auto;
        left: 0;
        top: 10rem;
    }

    .bubble {
        position: absolute;
        width: 15rem;
        height: auto;
        right: 1rem;
        bottom: 20rem;
    }


</style>
