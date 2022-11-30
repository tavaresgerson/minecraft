<template>
  <q-page class="index-page">
    <div class="header">
      <div class="topbar">
        <div class="inner">
          <h1>Confra</h1>

          <div class="actions">
            <q-btn label="Participar" no-caps flat />
            <q-btn icon="lab la-github" flat round dense class="q-ml-sm" />
          </div>
        </div>
      </div>

      <div class="middle">
        <h1>Minecraft da <br> Confraria</h1>
        <div class="cards">
          <div class="q-pa-sm">
            <q-img src="" />
          </div>
        </div>
      </div>

      <div class="video">
        <div class="overlay"></div>
        <div class="bg-overlay"></div>

        <video-background
          src="/movies/link_evolution_home.webm"
          style="height: 100%"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
