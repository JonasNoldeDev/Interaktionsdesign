<template>
    <main-layout :visible="pageStep === 0" :hidden="pageStep !== 0"
                 :overlay="true"
                 :color="'orange'"
                 :firstheader="'Lektion 3'"
                 :secondheader="'PDF'"
                 :picFile="'Codi-Richtig'"
    >
        <Character position="right" :pose="pose" ref="character">
            <Bubble type="speech-bubble" v-on:next="pageStep++" next>
                <p>Willkommen zur <b>3. Lektion</b>!</p>
                <p>Hier werden wir etwas über den Dokumententypen <b>PDF</b> lernen.</p>
            </Bubble>
        </Character>
    </main-layout>

    <main-layout class="bg" style="border: none; padding: 0;" :visible="pageStep === 1" :hidden="pageStep !== 1">
        <Character position="right" :pose="characterPose" v-if="currentStep >= 0 && currentStep < 3" ref="character">
            <Bubble type="speech-bubble" :visible="currentStep === 0" v-on:prev="pageStep--" prev
                    v-on:next="currentStep++" next>
                <p>Jetzt weiß ich, wie man <b>E-Mails</b> schreibt.</p>
                <p>Also könnte ich meine tolle Kurzgeschichte an <b>Bella</b> schicken.</p>
            </Bubble>
            <Bubble type="speech-bubble" :visible="currentStep === 1"
                    v-on:next="currentStep++" v-on:prev="currentStep--" prev next>
                <p>Aber die habe ich in Word geschrieben...</p>
                <p>Vielleicht sollte ich sie in eine <b>PDF</b> umwandeln.</p>
            </Bubble>
            <Bubble type="speech-bubble" :visible="currentStep === 2"
                    v-on:next="currentStep++" v-on:prev="currentStep--" prev next>
                <p>Lass es uns gleich <b>gemeinsam</b> machen.</p>
                <p>Klick dich durch die Slides, um mehr zu erfahren.</p>
            </Bubble>
        </Character>

        <Carousal
                v-show="currentStep === 3"
                :maxSlides="25"
                :nextPage="'/lernsektionen'"
                class="carousal"
                v-slot="{ currentSlide }"
        >
            <Slide v-show="currentSlide === 1">
                <div class="speech-bubble cell">
                    <img src="./../assets/img/pdf/Adobe_pdf.png" class="pdf" alt="PDF">
                    <p>
                        <b>
                            Was ist das? <br>
                            <br>
                            Wie speichere ich ein Dokument als PDF ab?
                        </b>
                    </p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 2">
                <div class="speech-bubble">
                    <h4><b>1. Was ist das?</b></h4>
                    <p><b>PDF</b> steht für <b>Portable Document Format</b>.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 3">
                <div class="speech-bubble cell">
                    <img src="./../assets/img/pdf/pdf_Adobe.png" class="pdf" alt="PDF">
                    <p>
                        <b>PDF</b> ist ein plattformunabhängiges Dateiformat, welches 1992 von dem Unternehmen
                        <b>Adobe</b> entwickelt wurde.
                    </p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 4">
                <div class="speech-bubble">
                    <h4>1. Wie speichere ich ein Dokument als PDF ab?</h4>
                    <img src="./../assets/img/pdf/pdf_Adobe.png" class="pdfMiddle" alt="PDF">
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 5">
                <div class="speech-bubble">
                    <img src="./../assets/img/pdf/Word.png" class="word" alt="Word">
                    <p><br><br><br><br></p>
                    <p>Hier siehst du wie ein Dokument in <b>Word</b> aussieht.</p>
                    <p>Jetzt speichern wir das Word Dokument als <b>PDF</b> ab.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 6">
                <div class="speech-bubble">
                    <div id="square"></div>
                    <img src="./../assets/img/pdf/Word_Leiste.png" class="word" alt="Word">
                    <p><br><br><br><br><br><br><br></p>
                    <p>Siehst du die <b>Funktionsleiste</b> oben?</p>
                    <p>Dann klicke auf <b>weiter</b>.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 7">
                <div class="speech-bubble">
                    <div id="square_File"></div>
                    <img src="./../assets/img/pdf/Word_Leiste.png" class="word" alt="Word">
                    <p><br><br><br><br><br><br><br></p>
                    <p>Klickst du hier auf <b>Datei</b>, öffnet sich eine <b>Sidebar</b>.</p>
                    <p>Diese siehst du auf der nächsten Seite.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 8">
                <div class="speech-bubble" style="font-size: 1.2rem">
                    <div id="square_Save"></div>
                    <img src="./../assets/img/pdf/Word_Sidebar.png" class="word" alt="Word">
                    <p><br><br><br><br><br><br><br><br><br></p>
                    <p>Klickst du 'nur' auf <b>Speichern</b>, so wird das Dokument als <b>Word Datei</b> gespeichert.
                    </p>
                    <p>Also beispielsweise als <b>Kurzgeschichte.docx</b></p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 9">
                <div class="speech-bubble">
                    <div id="square_SaveAs"></div>
                    <img src="./../assets/img/pdf/Word_Sidebar.png" class="word" alt="Word">
                    <p><br><br><br><br><br><br><br></p>
                    <p>Willst du allerdings einen Text in Word als PDF speichern, so klickst du auf <b>Speichern
                        unter</b>.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 10">
                <div class="speech-bubble" style="font-size: 1.15rem">
                    <div id="square_Filename"></div>
                    <img src="./../assets/img/pdf/Word_SaveAs.png" class="word2" alt="Word">
                    <p><br><br><br><br><br><br></p>
                    <p>Es erscheint eine neue Ansicht.<br>
                        Zunächst kannst du bei <i>'Hier Dateinamen eingeben'</i> den Namen deines Dokumentes festlegen.
                        Zum Beispiel <b>CodisKurzgeschichte</b>.</p>
                    <p>Vermeide Umlaute, Leerzeichen und Punkte im Dateinamen, da andere Programme die Datei sonst oft
                        nicht lesen können.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 11">
                <div class="speech-bubble">
                    <div id="square_Filetype"></div>
                    <div id="square_Arrow"></div>
                    <img src="./../assets/img/pdf/Word_Filetype.png" class="word" alt="Word">
                    <p><br><br><br><br><br><br></p>
                    <p>Schauen wir uns nun die Zeile darunter an.</p>
                    <p>
                        Hier kannst du den <b>Dateitypen</b> auswählen.<br>
                        Dazu klickst du auf den Pfeil ganz rechts im Feld.
                    </p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 12">
                <div class="speech-bubble">
                    <div id="square_Dropdown"></div>
                    <img src="./../assets/img/pdf/Word_Dropdown.png" class="word" alt="Word">
                    <p><br><br><br><br><br><br><br><br><br></p>
                    <p>Es erscheint ein <b>Dropdown</b>-Menü.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 13">
                <div class="speech-bubble" style="font-size: 1.2rem">
                    <div id="square_PDF"></div>
                    <img src="./../assets/img/pdf/Word_Dropdown.png" class="word2" alt="Word">
                    <p><br><br><br><br><br><br><br><br><br><br></p>
                    <p>Dort siehst du <i>PDF (*.pdf)</i>. Genau darauf musst du klicken, wenn du ein Dokument als
                        <b>PDF</b> speichern möchstest.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 14">
                <div class="speech-bubble" style="font-size: 1rem">
                    <div id="square_Options1"></div>
                    <div id="square_Options2"></div>
                    <div id="square_Options3"></div>
                    <div id="square_Options4"></div>
                    <img src="./../assets/img/pdf/Word_Options.png" class="word2" alt="Word">
                    <p><br><br><br><br><br><br><br><br><br></p>
                    <p>Nun haben wir sowohl den Dateinamen, als auch den Dateityp ausgewählt.<br>
                        Falls du einen speziellen <b>Speicherort</b> wählen möchtest, hast du 3 Optionen:<br>
                        <span style="color: var(--color-orange)"><b>1.</b></span> Zuerst <i>Dieser PC</i> anwählen und
                        anschließend einen der Ordner, die dir rechts angezeigt
                        werden<br>
                        <span style="color: var(--color-blue)"><b>2.</b></span> Durchsuchen<br>
                        <span style="color: var(--color-green)"><b>3.</b></span> Weitere Optionen<br>
                    </p>
                    <p style="margin-top: -0.6rem">Dann auf <b>speichern</b> und wir haben es geschafft!</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 15">
                <div class="speech-bubble">
                    <div id="square_Saved"></div>
                    <img src="./../assets/img/pdf/Word_Leiste.png" class="word" alt="Word">
                    <p><br><br><br><br><br><br><br></p>
                    <p>Und schwupps, landest du wieder in Word.</p>
                    <p>Aber dein Dokument ist als PDF abgespeichert.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 16">
                <div class="speech-bubble">
                    <p>Es kann sein, dass sich dein PDF direkt nach dem Abspeichern von selbst öffnet.</p>
                    <p>Zur Sicherheit können wir aber nachschauen, ob es auch wirklich vorhanden ist.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 17">
                <div class="speech-bubble">
                    <div id="square_Explorer"></div>
                    <img src="./../assets/img/pdf/Explorer.png" class="explorer" alt="Explorer">
                    <p><br><br><br><br><br><br><br></p>
                    <p>Gehe dazu in den entsprechenden Ordner, den du als <b>Speicherort</b> ausgewählt hast.<br>
                        Dort befindet sich dein Dokument.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 18">
                <div class="speech-bubble" style="font-size: 1.14rem">
                    <img src="./../assets/img/pdf/Explorer.png" class="explorer" alt="Explorer">
                    <img src="./../assets/img/pdf/Pointer.png" class="pointer" alt="Mauszeiger">
                    <p><br><br><br><br><br><br><br><br><br></p>
                    <p>Du kannst das PDF mit dem Programm <b>Adobe Acrobat</b> oder im <b>Browser</b> öffnen.<br>
                        Ist bereits ein Programm festgelegt, so wie im Bild oben, kannst du einfach einen
                        <b>Doppelklick</b> auf dein PDF machen.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 19">
                <div class="speech-bubble" style="font-size: 1.3rem">
                    <img src="./../assets/img/pdf/Explorer.png" class="explorer" alt="Explorer">
                    <img src="./../assets/img/pdf/Pointer.png" class="pointer" alt="Mauszeiger">
                    <p><br><br><br><br><br><br><br><br></p>
                    <p>Falls noch kein Programm ausgewählt ist, oder du das PDF mit einem anderen Programm öffnen
                        möchtest, dann <b>klicke mit der rechten Maustaste</b> auf dein PDF.<br>
                    </p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 20">
                <div class="speech-bubble" style="font-size: 1.1rem">
                    <img src="./../assets/img/pdf/Explorer.png" class="explorer" alt="Explorer">
                    <img src="./../assets/img/pdf/Pointer.png" class="pointerDropdown" alt="Mauszeiger">
                    <img src="./../assets/img/pdf/Explorer_Dropdown.png" class="explorerDropdown" alt="Explorer">
                    <p><br><br><br><br><br><br><br><br><br><br></p>
                    <p>Es öffnet sich ein <b>Dropdown</b>-Menü.<br>
                        Wenn dort '<b>Mit Adobe Acrobat DC öffnen</b>' steht,<br>
                        dann kannst du darauf klicken. Willst du das PDF<br>
                        aber mit einem Browser öffnen, dann klicke auf<br>
                        '<b>Öffnen mit</b>'.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Slide v-show="currentSlide === 21">
                <div class="speech-bubble" style="font-size: 1.2rem">
                    <img src="./../assets/img/pdf/Explorer.png" class="explorer" alt="Explorer">
                    <img src="./../assets/img/pdf/Pointer.png" class="pointerOpen" alt="Mauszeiger">
                    <img src="./../assets/img/pdf/Explorer_Open.png" class="explorerOpen" alt="Explorer">
                    <div id="explorerOpen"></div>
                    <div id="explorerOpen2"></div>
                    <p><br><br><br><br><br><br><br><br></p>
                    <p>Klicke nun auf den Browser, den <br>
                        du normalerweise benutzt.<br>
                        Dann sollte sich dein PDF im <br>
                        entsprechenden Browser öffnen.</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Character v-show="currentSlide < 22" position="center"></Character>
            <Slide v-show="currentSlide === 22" style="visibility: hidden">
                <div class="speech-bubble">
                    <p>Hidden Slide</p>
                    <div class="left-point"></div>
                </div>
            </Slide>
            <Character v-show="currentSlide === 22" position="center" :pose="poseFin" ref="character">
                <Bubble type="speech-bubble" style="padding: 2rem">
                    <p><b>Super!</b></p>
                    <p>Jetzt habe das PDF und kann es nachher an Bella schicken.</p>
                    <p><b>Danke an dich!</b></p>
                    <p>Jetzt kannst du dein Wissen als <b>PDF Experte / Expertin</b> testen!</p>
                </Bubble>
            </Character>
        </Carousal>
    </main-layout>
</template>

<script>
    import MainLayout from '../layouts/Main.vue';
    import Bubble from "../components/Bubble";
    import Character from "../components/Character";
    import Carousal from "../components/Carousal.vue";
    import Slide from "../components/Slide.vue";

    export default {
        name: "PDF",
        components: {
            MainLayout,
            Bubble,
            Character,
            Carousal,
            Slide
        },
        setup() {
            const carousalSlides = ["img", "Gif", "video"];
            return {carousalSlides};
        },
        data: () => {
            return {
                value1: false,
                pageStep: 0,
                currentStep: 0,
                pose: "explaining",
                poseFin: "right",
                characterPose: "normal",

            }
        },
        watch: {
            currentStep: function (newStep) {
                const poseDict = {
                    0: "normal",
                    1: "wrong",
                    2: "right",
                };

                if (!(newStep in poseDict)) return;
                this.characterPose = poseDict[newStep];
            },
            currentSlide: function (newStep) {
                const poseDict = {
                    1: "normal",
                    2: "wrong",
                    3: "right",
                    4: "explaining",
                    5: "explaining",
                };

                if (!(newStep in poseDict)) return;
                this.characterPose = poseDict[newStep];
            },
        }
    };
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        align-items: center;
        margin: 1rem 0 2rem;

        svg {
            display: block;
            width: 1em;
            height: 1em;
        }
    }

    img {
        border-radius: 0.2rem;
    }

    .pdf {
        float: left;
        width: 110%;
    }


    .pdfMiddle {
        margin-top: 15%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    .word {
        position: absolute;
        top: 10%;
        padding-bottom: 10rem;
        z-index: 0;
        width: 85%;
    }

    .word2 {
        position: absolute;
        top: 5%;
        padding-bottom: 10rem;
        z-index: 0;
        width: 85%;
    }

    .explorer {
        position: absolute;
        top: 5%;
        left: 2.5%;
        z-index: 0;
        width: 95%;
    }

    .explorerOpen {
        position: absolute;
        top: 42%;
        left: 54%;
        z-index: 2;
        width: 45%;
    }

    #explorerOpen {
        position: absolute;
        top: 42%;
        left: 54%;
        z-index: 1;
        width: 27.4%;
        height: 57.5%;
        border-radius: 0.3rem;
        animation: pulseO 2s infinite;
    }

    #explorerOpen2 {
        position: absolute;
        top: 64.8%;
        left: 81%;
        z-index: 1;
        width: 18%;
        height: 25%;
        border-radius: 0.3rem;
        animation: pulseO 2s infinite;
    }

    .explorerDropdown {
        position: absolute;
        top: 42%;
        left: 70%;
        z-index: 1;
        width: 25%;
        animation: pulseO 2s infinite;
    }

    .pointer {
        position: absolute;
        top: 41.5%;
        left: 30%;
        z-index: 0;
        width: 1.3%;
        animation: pulse 2s infinite;
    }

    .pointerDropdown {
        position: absolute;
        top: 42.5%;
        left: 70.2%;
        z-index: 3;
        width: 1.3%;
    }

    .pointerOpen {
        position: absolute;
        top: 42%;
        left: 54%;
        z-index: 3;
        width: 1.3%;
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }

    #square {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 1.5rem;
        width: 85%;
        top: 16.5%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    #square_File {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 1.5rem;
        width: 5.5%;
        top: 16.5%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    #square_Save {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 1.2rem;
        width: 12.5%;
        left: 7.5%;
        top: 48.8%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    #square_SaveAs {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 1.2rem;
        width: 12.5%;
        left: 7.5%;
        top: 54.8%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    #square_Filename {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 1rem;
        width: 37%;
        left: 45%;
        top: 20.4%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    #square_Filetype {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 1rem;
        width: 35%;
        left: 45%;
        top: 28.5%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    #square_Dropdown {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 47.5%;
        width: 44%;
        left: 49%;
        top: 31%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }


    #square_PDF {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 4%;
        width: 43.5%;
        left: 49.2%;
        top: 44.4%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    #square_Options1 {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 6%;
        width: 22.5%;
        left: 19.5%;
        top: 36.4%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    #square_Options2 {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-blue);
        height: 6%;
        width: 22.5%;
        left: 19.5%;
        top: 47%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-blue);
        animation: pulseB 2s infinite;
    }

    #square_Options3 {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 15.5%;
        width: 45%;
        left: 44.5%;
        top: 41%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    #square_Options4 {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-green);
        height: 4%;
        width: 9%;
        left: 44.5%;
        top: 25.7%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-green);
        animation: pulseG 2s infinite;
    }

    #square_Explorer {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-orange);
        height: 5%;
        width: 68%;
        left: 23.5%;
        top: 40%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-orange);
        animation: pulseO 2s infinite;
    }

    @keyframes pulseO {
        0% {
            box-shadow: 0 0 0 0 rgba(255, 153, 0, 0.7);
        }

        70% {
            box-shadow: 0 0 0 10px rgba(255, 153, 0, 0);
        }

        100% {
            box-shadow: 0 0 0 0 rgba(255, 153, 0, 0);
        }
    }

    @keyframes pulseG {
        0% {
            box-shadow: 0 0 0 0 rgba(137, 190, 51, 0.7);
        }

        70% {
            box-shadow: 0 0 0 10px rgba(137, 190, 51, 0);
        }

        100% {
            box-shadow: 0 0 0 0 rgba(137, 190, 51, 0);
        }
    }

    #square_Arrow {
        position: absolute;
        z-index: 1;
        background: transparent;
        border: 0.2rem solid var(--color-blue);
        height: 1rem;
        width: 2.1%;
        left: 79.9%;
        top: 28.5%;
        border-radius: 0.3rem;
        box-shadow: 0 0 0 0 var(--color-blue);
        animation: pulseB 2s infinite;
    }

    @keyframes pulseB {
        0% {
            box-shadow: 0 0 0 0 rgba(24, 160, 251, 0.7);
        }

        70% {
            box-shadow: 0 0 0 10px rgba(24, 160, 251, 0);
        }

        100% {
            box-shadow: 0 0 0 0 rgba(24, 160, 251, 0);
        }
    }

    .carousal {
        position: relative;
        max-height: 100%;
        height: 100%;

        .slide-info {
            height: 100%;
            /*
                        img {
                            display: block;
                            margin-left: auto;
                            margin-right: auto;
                            width: 25%;
                            margin-top: 50px;
                        }
            */
            /*
                        p {
                            text-align: center;
                        }

                        .row {
                            display: flex;
                        }
            */
            /* Create three equal columns that sits next to each other */
            /*
                        .column {
                            flex: 33.33%;
                            padding: 5px;
                        }
             */
        }

        .speech-bubble {
            display: table;
            padding: 0 3rem;
            font-size: 1.5rem;

            h4 {
                position: absolute;
                top: 10%;
            }

            p {
                vertical-align: middle;
            }
        }
    }

    .cell {
        p {
            display: table-cell;
            width: 70%;
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

    .left-point {
        z-index: 0;
        width: 0;
        height: 0;
        border-left: 1.5vh solid transparent;
        border-right: 1vh solid transparent;
        border-top: 6vh solid #fff;
        position: absolute;
        top: 94%;
        left: 55%;
        transform: rotate(320deg) scaleX(-1);
    }

    .bg {
        background-image: url(../assets/img/Strand.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: initial;
    }

</style>
