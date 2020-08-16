<template>
  <div class="home">
    <div class="is-size-3">
      Manipulação de Sprites
    </div>
    <div class="is-size-5 mt-md">
      Selecione as imagem para iniciar a manipulação
    </div>

    <div class="mt-md columns">
      <div class="column">
        <b-field class="file">
          <b-upload v-model="file" accpet="image" @input="fileInput">
            <a class="button is-primary">
              <b-icon icon="upload"></b-icon>
              <span>Click to upload</span>
            </a>
          </b-upload>
          <span class="file-name" v-if="file">
            {{ file.name }}
          </span>
        </b-field>
        <div class="mt-md max-width">
          <img :src="imgSrc" />
        </div>
      </div>
      <div class="column">
        <b-button
          type="is-primary"
          icon-left="google-downasaur"
          @click="transformImage"
        >
          Processar Imagem
        </b-button>
        <div class="mt-md max-width">
          <img :src="imgDestinySrc" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createEmptyImage } from '../app/transformImages'

export default {
  name: 'Home',
  data() {
    return {
      file: null,
      imgSrc: 'https://bulma.io/images/placeholders/480x480.png',
      imgDestinySrc: 'https://bulma.io/images/placeholders/480x480.png',
    }
  },
  methods: {
    fileInput(value) {
      this.imgSrc = window.URL.createObjectURL(value)
    },
    transformImage() {
      createEmptyImage(this.file).then(ret => {
        this.imgDestinySrc = ret
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.mt-md {
  margin-top: 10px;
}
.max-width {
  max-width: 480px;
}
</style>
