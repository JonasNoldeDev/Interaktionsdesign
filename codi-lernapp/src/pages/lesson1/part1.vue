<template>
  <main-layout>
    <div class="ipad">
      <div class="ipad-homescreen">
        <div class="apps">
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
        </div>
        <div class="dock">
          <div class="app-icon"></div>
          <button
            class="app-icon app-icon-safari"
            :class="{ 'is-animating': currentStep === 1 }"
            @click="currentStep++"
            :disabled="currentStep !== 1"
          >
            <img src="./../../assets/img/Safari.png" alt="Safari" />
          </button>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
          <div class="app-icon"></div>
        </div>
      </div>
      <div class="browser" :class="{ 'is-open': currentStep >= 2 }">
        <div class="browser-bar">
          <img
            src="./../../assets/img/simulator/safari-bar-1.jpg"
            alt="Safari Icons"
            height="26"
          />
          <form
            class="search-wrapper"
            :class="{ 'is-animating': currentStep === 5 }"
            @submit.prevent="submitSearch(this.$refs.search.value)"
          >
            <input
              ref="search"
              class="search"
              type="text"
              value="Neuer Tab"
              disabled
              v-if="currentStep > 9 && currentStep < 12"
            />
            <input
              ref="search"
              class="search"
              type="text"
              value="google.com"
              disabled
              v-else-if="currentStep >= 12"
            />
            <input
              ref="search"
              class="search"
              type="text"
              value="codis-browser-startseite.de"
              :disabled="currentStep !== 6 && currentStep !== 7"
              v-else
            />
          </form>
          <img
            src="./../../assets/img/simulator/safari-bar-2.jpg"
            alt="Safari Icons"
            height="26"
          />
          <button
            class="button-newtab"
            @click="currentStep++"
            :disabled="currentStep != 9"
            :class="{ 'is-animating': currentStep === 9 }"
          >
            <img
              src="./../../assets/img/simulator/safari-bar-3.jpg"
              alt="Safari Icons"
              height="26"
            />
          </button>
          <img
            src="./../../assets/img/simulator/safari-bar-4.jpg"
            alt="Safari Icons"
            height="26"
          />
        </div>
        <div
          class="browser-tabs"
          :class="{ 'is-animating': currentStep === 3 }"
        >
          <button
            class="browser-tab"
            :class="{
              'is-active': currentStep <= 9 || currentStep >= 12,
              'is-animating': currentStep === 11,
            }"
            :disabled="currentStep != 11"
            @click="currentStep++"
          >
            <img
              src="./../../assets/img/simulator/safari-close-icon.jpg"
              alt="Safari Icons"
              height="17"
            />
            <span v-if="currentStep < 8">Codi's Browser Startseite</span>
            <span v-else>Google</span>
          </button>
          <div
            class="browser-tab"
            v-if="currentStep > 9"
            :class="{ 'is-active': currentStep < 12 }"
          >
            <img
              src="./../../assets/img/simulator/safari-close-icon.jpg"
              alt="Safari Icons"
              height="17"
            />
            Neuer Tab
          </div>
        </div>
        <div class="website website-newtab" v-if="currentStep < 8">
          <div class="website-newtab-icon"></div>
          <div class="website-newtab-icon"></div>
          <div class="website-newtab-icon"></div>
          <div class="website-newtab-icon"></div>
          <div class="website-newtab-icon"></div>
        </div>
        <div class="website website-google" v-else>
          <img
            src="./../../assets/img/simulator/website-google.jpg"
            alt="Google Suche"
            v-if="currentStep <= 9 || currentStep >= 12"
          />
        </div>
      </div>
      <img
        class="ipad-background"
        src="./../../assets/img/simulator/ipad-background.jpg"
        alt="iPad Hintergrundbild"
      />
    </div>

    <Character position="right" :pose="characterPose" ref="character">
      <Bubble
        size="small"
        :visible="currentStep === 0"
        v-on:next="currentStep++"
        next
      >
        <p>
          Meine Freundin Bella hat mir erzählt, dass man im
          <b>Internet</b> alles <b>finden</b> kann was man wissen will.
        </p>
        <p>Das können wir doch gemeinsam ausprobieren!</p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 1"
        v-on:prev="currentStep--"
        prev
      >
        <p>
          Alles was wir dafür brauchen ist ein Browser wie Safari, Google Chrome
          oder Firefox.
        </p>
        <p>
          Klicke doch bitte mal auf das Symbol deines Browsers (auch Icon
          genannt)!
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 2"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>Oh, cool! Das ist also ein Browser-<b>Fenster</b>.</p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 3"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>Wie ihr seht befinden wir uns gerade im ersten <b>Tab</b>.</p>
        <p>
          Das heißt wir sehen eine <b>Website</b>, in diesem Fall die
          <b>Startseite</b> unseres <b>Browsers</b>. Sie kann verschieden
          aussehen, diese hier ist nur ein Beispiel.
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
          Okay, dann wollen wir mal das Internet durchsuchen. Dafür brauchen wir
          eine <b>Suchmaschine</b> wie Google, Bing oder andere.
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
          Seht ihr die Adresszeile in der "codis-browser-startseite.de" steht?
          Dort könnt ihr die Adresse der <b>Website</b> eingeben die ihr
          besuchen wollt.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 6"
        v-on:prev="currentStep--"
        prev
      >
        <p>Heute wollen wir die bekannteste Suchmaschine "Google" benutzen.</p>
        <p>
          Um auf die Website von Google zu gelangen, gebt doch bitte die Adresse
          "google.com" in die Adresszeile ein.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 7"
        v-on:prev="currentStep--"
        prev
      >
        <p>
          Das ist glaube ich nicht ganz richtig. Versuche es doch noch einmal.
        </p>
        <p>Gib die Adresse "google.com" in die Adresszeile ein.</p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 8"
        v-on:next="currentStep++"
        v-on:prev="currentStep = currentStep - 2"
        prev
        next
      >
        <p>Klasse! Wir sind auf Google.</p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 9"
        v-on:prev="currentStep--"
        prev
      >
        <p>Du kannst auch mehrere Wesites gleichzeitig geöffnet haben.</p>
        <p>
          Über das <b>Plus-Zeichen</b> oben in der Browserleiste kannst du einen
          weiteren Tab öffnen und eine andere Website besuchen.
        </p>
        <p>Tippe einfach mal auf das <b>+</b>.</p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 10"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>
          Und schwupps, ihr habt einen neuen Tab geöffnet. Über die Adresszeile
          könntet ihr wieder die Adresse einer Website eingeben.
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 11"
        v-on:prev="currentStep--"
        prev
      >
        <p>
          Wo waren wir aber? Achja, Suchmaschinen! Um zu Google zurückzukehren,
          tippe auf den Tab "Google".
        </p>
      </Bubble>
      <Bubble
        size="small"
        :visible="currentStep === 12"
        v-on:next="currentStep++"
        v-on:prev="currentStep--"
        prev
        next
      >
        <p>Super! Jetzt wissen wir wie wir zur Suchmaschine kommen.</p>
        <p>
          Als nächstes werde ich euch zeigen wie toll Suchmaschinen sind und was
          genau sie sind.
        </p>
        <p>Wissen ist schließlich Macht.</p>
      </Bubble>
    </Character>
  </main-layout>
</template>

<script>
import MainLayout from "../../layouts/Main.vue";
import Character from "../../components/Character.vue";
import Bubble from "../../components/Bubble.vue";
import vueConfig from '../../../vue.config';

export default {
  components: {
    MainLayout,
    Character,
    Bubble,
  },
  data: () => {
    return {
      currentStep: 0,
      characterPose: "explaining",
    };
  },
  watch: {
    currentStep: function (newStep) {
      if (newStep === 13) {
        this.$root.currentRoute = (vueConfig.publicPath || '') + "/lernsektionen/sektion1";
        window.history.pushState(null, "Sektion1", (vueConfig.publicPath || '') + "/lernsektionen/sektion1");
      }

      const poseDict = {
        0: "explaining",
        1: "explaining",
        2: "normal",
        3: "explaining",
        4: "normal",
        5: "explaining",
        6: "explaining",
        // 7: wrong into explaining
        8: "right",
        9: "explaining",
        10: "normal",
        11: "explaining",
        12: "right",
      };

      if (!(newStep in poseDict)) return;
      this.characterPose = poseDict[newStep];
    },
  },
  methods: {
    submitSearch(searchValue) {
      if (this.currentStep !== 6 && this.currentStep !== 7) return;

      if (searchValue === "google.com") {
        this.currentStep = 8;
      } else {
        this.currentStep = 7;
        this.characterPose = "wrong";
        setTimeout(() => {
          this.characterPose = "explaining";
        }, 2000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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

.ipad {
  position: relative;
  border: 1rem solid #111;
  border-radius: 2rem;
  width: 50rem;
  overflow: hidden;
}

.ipad-background {
  max-width: 100%;
  display: block;
}

.ipad-homescreen {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.apps {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 1.5rem;
  flex: 1;
}

.app-icon {
  height: 3.5rem;
  width: 3.5rem;
  margin: 1rem 2.5rem;
  border-radius: 1rem;
  background-color: #ddd;
}

.dock {
  display: flex;
  justify-content: space-around;
  margin: 1rem auto;
  padding: 0 0.5rem;
  border-radius: 1rem;
  background-color: rgba(225, 225, 225, 0.375);

  .app-icon {
    margin: 1rem 0.5rem;
  }
}

.app-icon-safari {
  position: relative;
  background-color: #fff;
  border: 0;
  padding: 0;
  backface-visibility: hidden;

  img {
    display: block;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 1rem;
    padding: 0.25rem;
  }

  &::after {
    content: "";
    display: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem;
    background-color: var(--color-orange);
    backface-visibility: hidden;
    pointer-events: none;
  }

  &.is-animating {
    animation: pulse 1.5s ease-in-out infinite;

    &::after {
      display: block;
      animation: shadow 1.5s 0.375s ease-in-out infinite;
    }
  }
}

.browser {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  transition: 0.2s ease-in-out;
  backface-visibility: hidden;
  transform-origin: 30% 90%;
  opacity: 0;
  visibility: hidden;
  transform: scale(0.9);

  &.is-open {
    opacity: 1;
    visibility: initial;
    transform: none;
  }
}

.browser-bar {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: #fbfbfd;

  & > *:not(:first-child) {
    margin-left: 1.25rem;
  }
}

.button-newtab {
  border: 0;
  background: 0;
  padding: 0;

  img {
    display: block;
    border-radius: 0.25rem;
  }

  &::after {
    content: "";
    display: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.25rem;
    background-color: var(--color-orange);
    backface-visibility: hidden;
    pointer-events: none;
  }

  &.is-animating {
    position: relative;
    z-index: 1;

    &::after {
      display: block;
      animation: shadow 1.5s ease-in-out infinite;
    }
  }
}

.browser-tabs {
  display: flex;

  &::after {
    content: "";
    display: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 1rem;
    background-color: var(--color-orange);
    backface-visibility: hidden;
    pointer-events: none;
  }

  &.is-animating {
    position: relative;
    z-index: 1;

    &::after {
      display: block;
      animation: shadow-long 1.5s ease-in-out infinite;
    }
  }
}

.browser-tab {
  font: inherit;
  flex: 1;
  position: relative;
  background-color: #eee;
  text-align: center;
  font-size: 0.625em;
  padding: 0.5rem;
  font-weight: 500;
  color: #666;
  border: 0;

  img {
    display: none;
    position: absolute;
    left: 0.5rem;
    top: 50%;
    margin-top: -0.5rem;
  }

  &.is-active {
    background-color: #fbfbfd;

    img {
      display: block;
    }
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

    &::before {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #eee;
    }

    &::after {
      display: block;
      animation: shadow-long 1.5s ease-in-out infinite;
    }
  }
}

.search-wrapper {
  flex: 1;
  margin: 0 0.75rem 0 1.75rem !important;

  &::after {
    content: "";
    display: none;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 0.25rem;
    background-color: var(--color-orange);
    backface-visibility: hidden;
    pointer-events: none;
  }

  &.is-animating {
    position: relative;
    z-index: 1;

    &::after {
      display: block;
      animation: shadow-long 1.5s ease-in-out infinite;
    }
  }
}

.search {
  display: block;
  width: 100%;
  border: 0;
  padding: 0;
  background: #dfdfdf;
  border-radius: 0.25rem;
  font: inherit;
  font-size: 0.75em;
  font-weight: 500;
  text-align: center;
  color: #444;
  height: 1.75rem;
}

.website {
  flex: 1;
}

.website-newtab {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

.website-newtab-icon {
  height: 5rem;
  width: 5rem;
  margin: 1rem;
  border-radius: 0.75rem;
  background-color: rgb(211, 197, 167);
}

.website-google {
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 36rem;
  }
}
</style>