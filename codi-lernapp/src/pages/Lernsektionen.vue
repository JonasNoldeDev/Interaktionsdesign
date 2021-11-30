<template>
  <main-layout>
    <nav>
      <header>
        <v-button href="/"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></v-button>
        <h1>Deine Lernsektionen</h1>
      </header>
      <ul>
        <li class="sektion">
          <div class="sektion-text">
            <h2>Internet-Browser</h2>
            <strong>Aufgabe: Tab öffnen</strong>
            <v-button href="/lernsektionen/sektion1">Start</v-button>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 70%;"></div>
          </div>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <h2>E-Mails</h2>
            <strong>Aufgabe: E-Mail Empfänger, CC und BCC</strong>
            <v-button href="/lernsektionen/sektion1">Start</v-button>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 40%;"></div>
          </div>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <h2>Links</h2>
            <strong>Aufgabe: Adressen</strong>
            <v-button href="/lernsektionen/sektion1">Start</v-button>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 10%;"></div>
          </div>
        </li>
        <li class="sektion">
          <div class="sektion-text">
            <h2>Soziale Medien</h2>
            <strong>Aufgabe: Freundschaften</strong>
            <v-button href="/lernsektionen/sektion1">Start</v-button>
          </div>
          <div class="progress-bar">
            <div class="progress-bar-inner" style="width: 50%;"></div>
          </div>
        </li>
      </ul>
    </nav>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import VButton from "../components/VButton.vue";

  export default {
    components: {
      MainLayout,
      VButton
    }
  }
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  margin: 1rem 0 2rem;

  h1 {
    margin: 0 0 0 2rem;
  }

  svg {
    display: block;
    width: 1em;
    height: 1em;
  }
}


ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 2rem;
}

.sektion {
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 1.5rem;
}

.sektion-text {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    margin: 0 2rem 0 0;
  }

  strong {
    border-left: 4px currentColor solid;
    color: #666;
    flex: 1;
    padding: 0 2rem;
  }
}


.progress-bar {
  height: 2rem;
  border-radius: 1rem;
  background: hsl(204, 97%, 74%);
}

.progress-bar-inner {
  height: 100%;
  border-radius: 1rem;
  background: #18A0FB;
}
</style>