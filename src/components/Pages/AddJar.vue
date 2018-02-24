<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1>
          Create a new Scent Jar
        </h1>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>
          Personal Information
        </h2>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <form>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="FirstName"
              label="First Name"
              id="FirstName"
              v-model="FirstName"
              required>
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="LastName"
              label="Last Name"
              id="LastName"
              v-model="LastName"
              required>
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="NickName"
              label="Name to Call"
              id="NickName"
              v-model="NickName"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="SteetAddress"
              label="Steet Address"
              id="SteetAddress"
              v-model="StreetAddress"
              required>
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="City"
              label="City"
              id="City"
              v-model="City"
              required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="HomePhone"
              label="Home Phone"
              id="HomePhone"
              v-model="HomePhone"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="CellPhone"
              label="Cell Phone"
              id="CellPhone"
              v-model="CellPhone"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h2>
                Collection Information
              </h2>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="CollectionDate"
              label="Collection Date"
              id="CollectionDate"
              v-model="CollectionDate"
              required
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Collector"
              label="Collector"
              id="Collector"
              v-model="Collector"
              required
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <h2>
                Medical Information
              </h2>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Height"
              label="Height"
              id="Height"
              v-model="Height"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Weight"
              label="Weight"
              id="Weight"
              v-model="Weight"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Sex"
              label="Sex"
              id="Sex"
              v-model="Sex"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Race"
              label="Race"
              id="Race"
              v-model="Race"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="HairColor"
              label="Hair Color"
              id="HairColor"
              v-model="HairColor"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="HairStyle"
              label="Hair Style"
              id="HairStyle"
              v-model="HairStyle"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Marks"
              label="Distinguishing Marks, Comments"
              id="Marks"
              v-model="Marks"
              multi-line
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Approachable"
              label="Approachable (Y/N)"
              id="Approachable"
              v-model="Approachable"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Dogs"
              label="Fear of Dogs (Y/N)"
              id="Dogs"
              v-model="Dogs"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn class="primary">
                Add Data
              </v-btn>
            </v-flex>
          </v-layout>
 
       </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      FirstName: '',
      LastName: '',
      NickName: '',
      StreetAddress: '',
      City: '',
      HomePhone: '',
      CellPhone: '',
      Height: '',
      Weight: '',
      Sex: '',
      Race: '',
      HairColor: '',
      HairStyle: '',
      Marks: '',
      Approachable: '',
      Dogs: ''
    }
  }
}
</script>
