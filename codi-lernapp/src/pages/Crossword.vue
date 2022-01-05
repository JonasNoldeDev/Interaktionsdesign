<template>
    <main-layout style="border: none; padding: 0;">
        <header>
            <v-button href="/lernsektionen">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left"
                     class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 256 512">
                    <path fill="currentColor"
                          d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
                </svg>
            </v-button>
        </header>
        <img class="bella" src="./../assets/img/characters/Bella.png" alt="Bella">
        <img class="codi" v-if="showCodi" alt="Codi" src="./../assets/img/characters/codi/999.png">
        <img class="bubble" v-if="showBubble" alt="Super"
             src="./../assets/img/characters/codi/Codi_richtig_Sprechblase.png">


        <div class="bg">
            <Row v-on:userinput="submit"></Row>
            <Column></Column>
        </div>
    </main-layout>
</template>

<!--
<template>
    <main-layout style="border: none; padding: 0;">
        <header>
            <v-button href="/lernsektionen">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left"
                     class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 256 512">
                    <path fill="currentColor"
                          d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
                </svg>
            </v-button>
        </header>
        <img class="bella" src="./../assets/img/characters/Bella.png" alt="Bella">
        <img class="codi" v-if="showCodi" alt="Codi" src="./../assets/img/characters/codi/999.png">
        <img class="bubble" v-if="showBubble" alt="Super"
             src="./../assets/img/characters/codi/Codi_richtig_Sprechblase.png">
        <div class="side">
            <div class="all">
                <div class="wood_up_short">
                    <div style="margin-left: -12rem; padding-top: 3rem; padding-bottom: 3rem">
                        <div id="1">
                            <input id="a1" class="position2
                             size" alt="Eingabefeld" type="text" maxlength="1"
                                   @input="submit">
                        </div>
                        <div class="wood_across" style="margin-left: 1rem">
                            <div id="2" class="position1">
                                <input id="b1" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                                <input id="b2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                                <input id="b3/a2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                                <input id="b4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                            </div>
                        </div>
                        <div id="0">
                            <input id="a3" class="position2 size" alt="Eingabefeld" type="text" maxlength="1"
                                   @input="submit">
                        </div>
                        <div id="3">
                            <input id="a4" class="size position2" alt="Eingabefeld" type="text" maxlength="1"
                                   @input="submit">
                            <input id="d1" class="size position3" alt="Eingabefeld" type="text" maxlength="1"
                                   @input="submit">
                        </div>

                        <div class="wood_across" style="margin-left: 9rem">
                            <div id="4" class="position2" style="margin-left: 4rem">
                                <input id="c1" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                                <input id="c2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                                <input id="c3/d2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                                <input id="c4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wood_up_long">
                    <div style="margin-left: -18rem; padding-top: 10rem">
                        <div id="5" class="position4" style="margin-top: 1rem">
                            <input id="d3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                   @input="submit">
                        </div>
                        <div class="wood_across" style="margin-left: 17rem">
                            <div id="6" class="position4" style="margin-left: 4rem">
                                <input id="d4/e1" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                                <input id="e2" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                                <input id="e3" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                                <input id="e4" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                       @input="submit">
                            </div>
                        </div>
                        <div id="7" class="position4">
                            <input id="d5" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                   @input="submit">
                        </div>
                        <div id="8" class="position4">
                            <input id="d6" class="size" alt="Eingabefeld" type="text" maxlength="1"
                                   @input="submit">
                        </div>
                    </div>
                </div>
            </div>
            <v-button :size = "'small'" href="/lernsektionen/sektion1" class="btnback">Zurück</v-button>
            <v-button :size = "'small'" href="/lernsektionen" class="btnready">Fertig</v-button>
        </div>
    </main-layout>
</template>
-->
<script>

    import MainLayout from '../layouts/Main.vue'
    import VButton from "../components/VButton";

    import Column from "../components/Column";
    import Row from "../components/Row";

    export default {
        name: 'Crossword',
        components: {
            Column,
            Row,
            MainLayout,
            VButton
        },
        data: () => {
            return {
                showCodi: true,
                showBubble: false
            }
        },
        methods: {
            submit: function () {
                if (document.getElementById('b1').value.toLowerCase() === 'm' && document.getElementById('b2').value.toLowerCase() === 'a'
                    && document.getElementById('b3').value.toLowerCase() === 'i' && document.getElementById('b4').value.toLowerCase() === 'l'
                    && document.getElementById('b5').value.toLowerCase() === 'l') {
                    this.showCodi = false;
                    this.showBubble = true;
                    setTimeout(() => {
                            this.showBubble = false;
                            this.showCodi = true;
                        },
                        2500);
                }

            }
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
        background-image: url(../assets/img/Kreuzwortraetsel.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .size {
        height: 3rem;
        width: 3rem;
        text-align: center;
        font-size: 25px;
        border-radius: 5px;
        margin: 0.5rem;
    }

    .side {
        min-height: 100%;
        height: 100%;
        border-left: 13rem solid #408802;
        border-right: 13rem solid #408802;
    }

    .all {
        padding-top: 5rem;
    }

    .wood_across {
        background-image: url(../assets/img/wood_across.png);
        background-repeat: no-repeat;
    }

    .wood_up_short {
        background-image: url(../assets/img/wood_up_short.png);
        background-repeat: no-repeat;
        margin-left: 12rem;
    }

    .wood_up_long {
        background-image: url(../assets/img/wood_up_long.png);
        background-repeat: no-repeat;
        margin-left: 18rem;
        margin-top: -14rem;
        padding-bottom: 2rem;
    }

    .codi {
        position: absolute;
        width: 15rem;
        height: auto;
        right: 0;
        bottom: 20rem;
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

    .position1 {
        margin-left: 4rem;
    }

    .position2 {
        margin-left: 13.5rem;
    }

    .position3 {
        margin-left: 4.5rem;
    }

    .position4 {
        margin-left: 21rem;
    }


</style>
