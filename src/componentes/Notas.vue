<template>
    <section class="src-componentes-formulario">
    <div class="jumbotron">
    <h2>Notas</h2>
    <hr>
    <br>

    <vue-form :state="formState" @submit.prevent="enviar()">

      <validate tag="div">
        <label for="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.nombre"
          required
          :minlength="LengthMin"
          :maxlength="LengthMax"
          no-espacios
        >
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
          <div slot="no-espacios" class="alert alert-danger mt-1">
            No se permiten espacios intermedios en este campo
          </div>            
          <div slot="minlength" class="alert alert-danger mt-1">
            Este campo requiere como mínimo {{ LengthMin }} caracteres
          </div>            
          <div v-if="formData.nombre.length == LengthMax" class="alert alert-warning mt-1">
            Este campo debe tener como máximo {{ LengthMax }} caracteres
          </div>            
        </field-messages>

      </validate>
      <br>

      <validate tag="div">
        <label for="apellido">Apellido</label>
        <input 
          type="text" 
          id="apellido" 
          name="apellido" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.apellido"
          required
          :minlength="LengthMin"
          :maxlength="LengthMax"
        >
        <field-messages name="apellido" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
          <div slot="minlength" class="alert alert-danger mt-1">Este campo requiere como mínimo {{ LengthMin }} caracteres</div>            
          <div v-if="formData.apellido.length == LengthMax" class="alert alert-warning mt-1">
            Este campo debe tener como máximo {{ LengthMax }} caracteres      
           </div>       
        </field-messages>

      </validate>
      <br>
      <validate tag="div">
        <label for="nota">Nota</label>
        <input 
          type="number" 
          id="nota" 
          name="nota" 
          class="form-control"
          step="any"
          autocomplete="off"
          v-model.number="formData.nota"
          required
          :min="notaLengthMin"
          :max="notaLengthMax"
        >
        <field-messages name="nota" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>            
          <div slot="min" class="alert alert-danger mt-1">La nota minima es de {{notaLengthMin}}</div> 
          <div slot="max" class="alert alert-danger mt-1">La nota maxima es de {{notaLengthMax}}</div>                
        </field-messages>

      </validate>

      <br>
      <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>

    </vue-form>

    <div v-if="alumnosIngresados.length" class="table-responsive">
      <table class="table table-dark">
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Nota</th>
        </tr>
       <tr v-for="(alumno,index) in alumnosIngresados" :key="index" >
          <td>{{alumno.nombre}}</td>
          <td>{{alumno.apellido}}</td>
          <td :style="{'color': colorNota(alumno.nota)}">{{alumno.nota}}</td> 
        </tr>
        <tr>
          <td :style="{'color': colorNota(promedio)}" >El promedio total es de: {{this.promedio}}</td>
        </tr>
      </table>
      <h4 class="alert alert-primary">Se {{alumnosIngresados.length > 1 ? 'encontraron' : 'encontro'}} {{alumnosIngresados.length}} {{alumnosIngresados.length > 1 ? 'datos' : 'dato'}}</h4>
    </div>
    <h4 v-else class="alert alert-danger">No se encontraron datos</h4>
  </div>
</section>
</template>


<script lang="js">
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      LengthMin : 3,
      LengthMax : 15,
      notaLengthMin : 0,
      notaLengthMax : 10,
      alumnosIngresados: [],
      promedio: 0,
      acumNotas: 0
    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        nota: ''
      }
    },

    enviar() {
      this.alumnosIngresados.push({...this.formData})
      this.acumNotas = this.acumNotas + this.formData.nota;
      this.promedio = (this.acumNotas/this.alumnosIngresados.length).toFixed(2)
      console.log({...this.formData})
      this.formData = this.getInicialData()
      this.formState._reset()
    },
    
    colorNota(nota){
      return (nota >= 0 && nota <= 3 ? 'red' : nota < 7 ? 'yellow' : 'green')
    }
  }
}
</script>

<style scoped lang="css">
.src-componentes-formulario {

}

.jumbotron {
    background-color: rgb(97, 8, 42);
    color: white;
}

hr {
    background-color: #eee;
}

pre {
    color: white;
}
</style>

