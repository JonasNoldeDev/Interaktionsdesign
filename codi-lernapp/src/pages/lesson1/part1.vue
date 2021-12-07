<template>
  <main-layout>
    About page
    <Character position="right">
      <Bubble size="small" :visible="currentStep === 0">
        <p>Meine Freundin Bella hat mir erzählt, dass man im Internet alles finden kann was man wissen will.</p>
        <p>Das können wir doch gemeinsam ausprobieren!</p>
        <button @click="currentStep++">Weiter</button>
      </Bubble>
      <Bubble size="small" :visible="currentStep === 1">
        <p>Alles was wir dafür brauchen ist ein Browser wie Safari, Google Chrome oder Firefox.</p>
        <p>Klicke doch bitte mal auf das Symbol deines Browsers (auch Icon genannt)!</p>
        <button @click="currentStep++">Weiter</button>
      </Bubble>
    </Character>
  </main-layout>
</template>

<script>
  import MainLayout from '../../layouts/Main.vue'
  import Character from '../../components/Character.vue'
  import Bubble from '../../components/Bubble.vue'

  export default {
    components: {
      MainLayout,
      Character,
      Bubble
    },
    data: () => {
      return {
        currentStep: 0
      }
    }
  }
</script>