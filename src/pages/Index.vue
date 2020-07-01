<script src="https://unpkg.com/vuelidate@0.7.4/dist/validators.min.js"></script>
<template>
  <!-- <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
    // eslint-disable-next-line no-trailing-spaces
  </q-page> -->
  <!--
  Forked from:
  https://quasar.dev/vue-components/stepper#Example--Vertical
-->

<div id="q-app">
  <div class="q-pa-md">
    <q-stepper
      v-model="step"
      vertical
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Are you experiencing any of the following symptoms?"
        icon="add_comment"
        :done="step > 1"
      >
      <q-btn-toggle
        v-model="symptomps"
        toggle-color="primary"
        push
        glossy
        no-caps
        :options="[
          {label: 'Cough', value: 'one'},
          {label: 'Fever', value: 'two'},
          {label: 'Difficulty in breathing', value: 'three'},
          {label: 'Loss of senses of smell and taste', value: 'four'},
          {label: 'None of the above', value: 'five'}
        ]"
      ></q-btn-toggle>

        <q-stepper-navigation>
          <q-btn @click="step = 2" color="primary" label="Continue"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Have you ever had any of the following:"
        icon="add_comment"
        :done="step > 2"
      >
      <q-btn-toggle
        v-model="ailments"
        push
        glossy
        no-caps
        toggle-color="primary"
        :options="[
          {label: 'Diabetes', value: 'one'},
          {label: 'Hypertension', value: 'two'},
          {label: 'Lung disease', value: 'three'},
          {label: 'Heart disease', value: 'four'},
          {label: 'Kidney disorder', value: 'five'},
          {label: 'None of the above', value: 'Six'}
        ]"
        ></q-btn-toggle>

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue"></q-btn>
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Have you travelled internationally in last 28-45 days"
        icon="add_comment"
        :done="step > 3"
      >
        <q-btn-toggle
        v-model="travel"
        push
        glossy
        no-caps
        toggle-color="primary"
        :options="[
          {label: 'Yes', value: 'Yes'},
          {label: 'No', value: 'No'}
        ]"
        ></q-btn-toggle>

        <q-stepper-navigation>
          <q-btn @click="step = 4" color="primary" label="Continue"></q-btn>
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>

       <q-step
        :name="4"
        title="Enter the location you belong to"
        icon="add_comment"
        :done="step > 4"
      >
       <!-- <q-input @keyup="onLocationEnter" for="loc" filled v-model="location" label="Please enter your location"
      @input="$v.location.$touch()"
       :rules="[
        val => $v.location.required || 'Location is required']"></q-input> -->
      <q-input  filled v-model="city" label="Please enter your city"></q-input>
      <q-input  filled v-model="state" label="Please enter your state"></q-input>
        <q-btn @click="onGetLocation" color="primary" no-caps label="Get Location Based On Ip"></q-btn>

        <q-stepper-navigation>
          <q-btn  disable v-if="city === '' || state === ''" @click="step = 5" color="primary" label="Continue"></q-btn>
          <q-btn v-if="city != '' && state != ''" @click="step = 5" color="primary" label="Continue"></q-btn>
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="5"
        title="Which of the following apply to you"
        icon="add_comment"
      >
        <q-btn-toggle
        v-model="recentActivity"
        push
        glossy
        no-caps
        toggle-color="primary"
        :options="[
          {label: 'I have recently interacted or lived with covid positive individual', value: 'one'},
          {label: 'Im healthcare worker and I examined a COVID-19 confirmed case without protective gear',     value: 'two'},
          {label: 'None of the above', value: 'three'}
        ]"
        ></q-btn-toggle>
        <q-stepper-navigation>
          <q-btn @click="onSubmit" color="primary" label="Submit" type="submit"></q-btn>
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm"></q-btn>
        </q-stepper-navigation>
        <br>
      </q-step>
    </q-stepper>
  </div>
</div>
</template>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="date.js"></script>
<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import axios from 'axios'
import { Notify } from 'quasar'
import { required } from 'vuelidate/lib/validators'
import $ from 'jquery'

export default {
  data () {
    return {
      step: 1,
      symptomps: 'one',
      ailments: 'one',
      travel: 'Yes',
      recentActivity: 'one',
      locationEnable : false,
      city : '',
      state : ''
    }
  },
  validations: {
    location: {
      required
    }
  },
  methods: {

    onGetLocation () {
      //console.log(this.location)
      var self= this;
      $.getJSON('https://ipapi.co/json', callbackfun)
      function callbackfun(data)
      {
        self.city = data.city
        self.state = data.region
      }
    },
    onSubmit () {
      // console.log('submitted')
      const newdata = {
        city: this.city,
        state: this.state
      }
      if (this.city === '' || this.state === '') {
      }else if ((this.symptomps === 'five') || (this.ailments === 'six') || (this.travel === 'No') || (this.recentActivity === 'three')) {
        axios({
          method: 'post',
          url: '/analysestatus',
          data: newdata,
          headers: { 'content-type': `application/json` }
        })
          .then(function (response) {
            console.log('response data', response.data)

            var res = response.data ;
            console.log('Parsed Json', res)
            var dateVal = Date.parse(res.lastUpdation);
            //console.log(date.toString('ddMMyyyy'))
            //var datestring = date.getDate()+(date.getMonth() + 1)+date.getFullYear()

            if(res.id === 'Safe'){
              location.href = '#/Safe?confirmed=' + res.confirmed+ '&deaths='+ res.deaths + '&lastupdated='+ dateVal
            }else{
              location.href = '#/Unsafe?confirmed=' + res.confirmed+ '&deaths='+ res.deaths + '&lastupdated='+ dateVal
            }
            console.log(response)
            Notify.create({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted'
            })
          })
          .catch(function (error) {
            console.log(error)
            Notify.create({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'Not Submitted'
            })
          })
      } else {
        location.href = '#/Unsafe'
      }
    }
  }
}

</script>
