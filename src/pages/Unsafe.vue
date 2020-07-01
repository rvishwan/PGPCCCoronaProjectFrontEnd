<template>
  <div class="fullscreen bg-red text-white text-center q-pa-md flex flex-center">
    <div class='safe'>
      <div class= "thanksmsg">
        Thank you!
      </div>
      <div class="lastUpdate">
        <div class="updatedtext"><u><b>Last updated on </b></u>*</div>
        <div class="updatedate">06/05/2020</div>
      </div>
      <div  class="status" data-covid="india">
          <table class ="analysistable">
          <tr>
            <th><u>Confirmed cases</u></th>
            <th><u>Deaths</u></th>
          </tr>
          <tr>
            <td class= "confirmedNum" id="confirmedcases">50000</td>
            <td class= "deathNumbers" id="deathnum">6000</td>
          </tr>
          </table>
      </div><!-- .status -->

      <div class="low-line">
        <p >You are at low risk. Be prepared but don't panic.<br>Please visit<a style = "color: white;" href="https://www.mohfw.gov.in/"> <u> www.mohfw.gov.in</u></a> for more information.</p>
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        target="_self"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="date.js"></script>
<script >
global.location = window.location;
import $ from 'jquery'
export default {
  name: 'Safe',
  confirmed : "",
  death : "",
  updateDate : ""
}

const getQueryParams = ( params, url ) => {
  let href = url;
  //this expression is to get the query strings
  let reg = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
  let queryString = reg.exec(href);
  return queryString ? queryString[1] : null;
}

$(document).ready(function(){
  const queryString = location.href
  const urlParams = new URLSearchParams(queryString)
  this.confirmed = getQueryParams('confirmed', queryString)
  this.death = getQueryParams('deaths', queryString)
  this.updateDate = getQueryParams('lastupdated', queryString)

  var dateNew = Number(this.updateDate)
  var date = new Date(dateNew)
  $('.confirmedNum').html(this.confirmed)
  $('.deathNumbers').html(this.death)
  $('.updatedate').html(date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear())
 }
)

</script>
