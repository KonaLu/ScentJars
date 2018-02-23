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
              required>
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="LastName"
              label="Last Name"
              id="LastName"
              required>
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="NickName"
              label="Name to Call"
              id="NickName"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="SteetAddress"
              label="Steet Address"
              id="SteetAddress"
              required>
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="City"
              label="City"
              id="City"
              required>
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="HomePhone"
              label="Home Phone"
              id="HomePhone"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="CellPhone"
              label="Cell Phone"
              id="CellPhone"
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
              required
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Collector"
              label="Collector"
              id="Collector"
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
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Weight"
              label="Weight"
              id="Weight"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Sex"
              label="Sex"
              id="Sex"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Race"
              label="Race"
              id="Race"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="HairColor"
              label="Hair Color"
              id="HairColor"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="HairStyle"
              label="Hair Style"
              id="HairStyle"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Marks"
              label="Distinguishing Marks, Comments"
              id="Marks"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Approachable"
              label="Approachable?"
              id="Approachable"
              >
              </v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="Dogs"
              label="Fear of Dogs?"
              id="Dogs"
              >
              </v-text-field>
            </v-flex>
          </v-layout>
 
       </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>