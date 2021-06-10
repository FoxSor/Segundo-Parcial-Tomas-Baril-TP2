<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Teorico</h2>
      <table class="table table-dark">
            <tr>
              <th>Número de pregunta</th>
              <th>Respuesta</th>
            </tr>

            <tr v-for="(respuesta,index) in respuestas" :key="index">
              <td>{{respuesta.id}}</td>
              <td>{{respuesta.respuesta}}</td>
            </tr>
          </table>
      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'Teoria',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
          {id:1, respuesta: "c"},
          {id:2, respuesta: "c"},
          {id:3, respuesta: "b"}
        ]
      }
    },
    methods: {
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
  .jumbotron {
    background: rgb(12, 32, 209);
    color: white;
  }

</style>