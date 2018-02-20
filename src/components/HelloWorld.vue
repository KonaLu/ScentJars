<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/WOSAR.jpg" alt="Vuetify.js" class="mb-5">
        <h1>White Oak Search and Rescue</h1>
        <h3> This WebApp contains the information for the Scent Saver Project being conducted by White Oak
          Search and Rescue Personnel. This project consists of distributing scent jars to the general
          public for use with high risk population. The person's scent will be collected on the 
          included cotton gauze pads and sealed in the jars. 
          The scent jars will be collected and used in the
          event of a missing person emergency. 
          The scent jars will be used by scent specific trailing
          dogs to locate the missing person. Testing of the validity of the scent jars will also 
          be done. Testing will consist of trailing dogs following the lost person trail during training
          exercises weeks and months after the scent is collected. 
          Additional testing will be 
          done by independent chemical analysis.
        </h3>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-family: "Times New Roman", Times, serif;
  font-weight: normal;
  font-size: 500%;
  color: DarkOrange;
}
h3 {
    font-size: 100%;
    max-width: 50%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
