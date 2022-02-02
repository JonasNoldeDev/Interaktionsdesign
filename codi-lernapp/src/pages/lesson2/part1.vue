<template>
  <main-layout>
    <div
      class="ipad"
      :class="{ disabled: currentStep < 9 }"
      v-if="currentStep >= 3"
    >
      <div class="gmail">
        <div class="gmail-sidebar">
          <div class="logo">Cmail</div>
          <button class="write">+ Schreiben</button>
          <button class="active">
            <img
              src="./../../assets/img/simulator/mail/mail-tab-1.jpg"
              alt=""
            />
          </button>
          <button>
            <img
              src="./../../assets/img/simulator/mail/mail-tab-2.jpg"
              alt=""
            />
          </button>
          <button>
            <img
              src="./../../assets/img/simulator/mail/mail-tab-3.jpg"
              alt=""
            />
          </button>
          <button>
            <img
              src="./../../assets/img/simulator/mail/mail-tab-4.jpg"
              alt=""
            />
          </button>
          <button>
            <img
              src="./../../assets/img/simulator/mail/mail-tab-5.jpg"
              alt=""
            />
          </button>
        </div>
        <div class="gmail-mails">
          <button
            class="unread"
            :disabled="currentStep < 9"
            @click="currentStep = 11"
            :class="{ 'is-animating': currentStep === 9 || currentStep === 10 }"
          >
            <span>Bella</span>
            <span>Yahey an meinen Urlaubspapagei</span>
          </button>
          <button
            class="unread"
            :disabled="currentStep < 9"
            @click="currentStep = 10"
          >
            <span>Chef Pingu</span>
            <span>Nächstes Arbeitstreffen</span>
          </button>
          <button :disabled="currentStep < 9" @click="currentStep = 10">
            <span>Bella</span>
            <span>Willkommen in der Mailwelt Codi</span>
          </button>
        </div>
      </div>
      <img
        class="ipad-background"
        src="./../../assets/img/simulator/ipad-background.jpg"
        alt="iPad Hintergrundbild"
      />
    </div>
    <Character
      class="character"
      :class="{
        'is-landing': codiClasses.isLanding,
        'is-grounded': codiClasses.isGrounded,
        'is-sliding': codiClasses.isSliding,
      }"
      :position="codiPosition"
      :pose="characterPose"
      ref="character"
    >
      <Bubble
        size="small"
        :visible="currentStep === 0"
        v-on:next="currentStep++"
        next
      >
        <p>
          Hui endlich bin ich im Urlaub angekommen, ein richtiges Paradies zum
          Spaß haben...
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 1"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>
          ... aber so ganz alleine... <br />
          vielleicht sollte ich mal schauen, ob mir einer meiner Freunde eine
          E-Mail geschickt hat.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 2"
        v-on:next="codiSliding()"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>
          Gut, dass ich mein Tablet habe. Mit meinen Flügeln kann ich kein Handy
          bedienen.
        </p>
        <p>Außerdem nutzt Bella nur ihre E-Mails zum schreiben.</p>
      </Bubble>
      <div
        v-if="currentStep === 2"
        aria-hidden="true"
        class="small-tablet"
      ></div>
      <Bubble
        size="small"
        :visible="currentStep === 3"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>
          Ah, fast vergessen: ich denke, ich sollte erst einmal kurz was dazu
          sagen...
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 4"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>
          E-Mail steht für <b>"electronic mail"</b>, also auf deutsch
          <b>"Elektronische Post"</b>.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 5"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>
          E-Mails sind briefähnliche Nachrichten an die du sogar Dokumente wie
          Bilder oder Texte wie PDFs oder Word Dokumente anhängen kannst.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 6"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>
          Es gibt verschiedene E-Mail-Programme, mit denen man E-Mails
          verschicken und empfangen kann, wie beispielsweise:<br />
          Google Mail, Mozilla Thunderbird, web.de, Apple Mail, und viele mehr.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 7"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>
          E-Mails sind nützlich, nicht nur der Kommunikation der Freunde wegen,
          sondern da sich auch im Berufsleben viele Firmen und Unternehmen über
          Landesgrenzen hinweg durch E-Mails austauschen. <br />
          So, jetzt hab' ich aber genug geredet, ran an die Mails.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 8"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>
          Das hier ist der E-Mail-Simulator, oder anders: mein E-Mail Dienst.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 9"
        v-on:prev="currentStep--"
        prev
      >
        <p>
          Siehst du die <b>fetten</b> Überschriften? Das sind E-Mails, die ich
          noch <b>nicht gelesen</b> habe. Die <b>nicht fetten</b> Überschriften
          sind von schon <b>gelesenen</b> Mails.
        </p>
        <p>
          Klicken wir doch mal gemeinsam auf die <b>oberste fette Nachricht</b>,
          sie ist von <b>Bella</b>.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 10"
        v-on:prev="currentStep--"
        prev
      >
        <p>Ich denke, du solltest erst mal <b>Bellas</b> Nachricht lesen...</p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 11"
        v-on:next="currentStep++"
        v-on:prev="currentStep = 9"
        prev
        next
      >
        <p>Sie vermisst mich wohl schon, lass uns ihr antworten!</p>
      </Bubble>
      <!-- TODO: step 11 und nächste, mail inhalt anzeigen, mail schreiben? -->
    </Character>
  </main-layout>
</template>

<script>
import MainLayout from "../../layouts/Main.vue";
import Character from "../../components/Character.vue";
import Bubble from "../../components/Bubble.vue";
import vueConfig from "../../../vue.config";

export default {
  components: {
    MainLayout,
    Character,
    Bubble,
  },
  data: () => {
    return {
      currentStep: -1,
      characterPose: "flying",
      codiPosition: "center-right",
      codiClasses: {
        isLanding: false,
        isGrounded: false,
        isSliding: false,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.codiLanding();
    }, 100);
  },
  watch: {
    currentStep: function (newStep) {
      if (newStep === 13) {
        this.$root.currentRoute =
          (vueConfig.publicPath || "") + "/lernsektionen/sektion1";
        window.history.pushState(
          null,
          "Sektion1",
          (vueConfig.publicPath || "") + "/lernsektionen/sektion1"
        );
      }

      if (newStep < 3) {
        this.codiClasses.isSliding = false;
      }

      const poseDict = {
        0: "normal",
        1: "wrong",
        2: "normal",
        3: "explaining",
        4: "normal",
        5: "explaining",
        6: "explaining",
        7: "explaining",
        8: "normal",
        9: "explaining",
        10: "wrong",
        11: "right",
        12: "normal",
      };

      if (!(newStep in poseDict)) return;
      this.characterPose = poseDict[newStep];
    },
  },
  methods: {
    codiLanding() {
      this.codiClasses.isLanding = true;
      setTimeout(() => {
        this.codiGrounded();
      }, 3000);
    },
    codiGrounded() {
      this.codiClasses.isGrounded = true;
      this.currentStep = 0;
    },
    codiSliding() {
      this.codiClasses.isSliding = true;
      setTimeout(() => {
        this.currentStep = 3;
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes landing {
  0% {
    transform: translate(45rem, -30rem);
    visibility: initial;
  }
  100% {
    transform: none;
  }
}
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.125);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes shadow {
  0% {
    transform: scale(1);
    opacity: 0.75;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

@keyframes shadow-long {
  0% {
    transform: scale(1, 1);
    opacity: 0.75;
  }
  100% {
    transform: scale(1.25, 2.5);
    opacity: 0;
  }
}
.page-wrapper {
  background-image: url("~@/assets/img/StrandHintergrundBild.jpg");
  background-size: cover;
  background-position: 0 -7rem;
}
.character {
  transition: 1.5s ease-in-out;
  visibility: hidden;

  &.is-landing {
    animation: landing 3s ease-out;
  }

  &.is-grounded {
    visibility: initial;
    animation: none;
  }

  &.is-sliding {
    transform: translateX(-36rem);
  }
}
.small-tablet {
  width: 100px;
  height: 70px;
  background-color: #222;
  border: 0.5rem #111 solid;
  border-radius: 0.5rem;
  position: absolute;
  bottom: 14.5rem;
  left: -3.5rem;
  transform: rotate(45deg);
}
.ipad {
  position: relative;
  border: 1rem solid #111;
  border-radius: 2rem;
  margin: 2rem 2rem 2rem auto;
  width: 50rem;
  overflow: hidden;

  &.disabled {
    opacity: 0.75;
    pointer-events: none;
  }
}
.ipad-background {
  max-width: 100%;
  display: block;
}
.gmail {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: #fff;
}
.gmail-sidebar {
  border-right: 1px solid #efefef;

  .logo {
    font-size: 1.75rem;
    font-weight: 700;
    padding: 1rem;
    color: var(--color-orange);
    border-bottom: 1px solid #efefef;
  }

  .write {
    font-size: 1rem;
    font-weight: 500;
    border: 1px solid #efefef;
    border-radius: 2rem;
    width: auto;
    padding: 0.5rem 1rem;
    margin: 1rem;
  }

  button {
    font: inherit;
    display: block;
    width: 100%;
    background: 0;
    border-radius: 0;
    border: 0;
    padding: 0.25rem 0.5rem;

    &.active {
      position: relative;

      &::after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: var(--color-orange);
        width: 0.25rem;
      }
    }
  }

  img {
    display: block;
  }
}
.gmail-mails {
  flex: 1;
  font-size: 1.125rem;

  button {
    font: inherit;
    display: flex;
    width: 100%;
    background: #fff;
    border-radius: 0;
    border: 0;
    padding: 1rem 1.5rem;
    text-align: left;
    border-bottom: 1px solid #efefef;

    span:first-child {
      width: 10rem;
    }

    &.unread {
      font-weight: 700;
    }

    &::after {
      content: "";
      display: none;
      position: absolute;
      z-index: -2;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--color-orange);
      backface-visibility: hidden;
      pointer-events: none;
    }

    &.is-animating {
      z-index: 1;
      position: relative;
      animation: pulse 1.5s ease-in-out infinite;

      &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
      }

      &::after {
        display: block;
        animation: shadow-long 1.5s 0.375s ease-in-out infinite;
      }
    }
  }
}
</style>