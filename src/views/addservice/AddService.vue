<script src="./AddService.js" />

<template>
  <div>
    <breadCrumb />

    <h1>Add New Service</h1>
    
    <b-container>
      <b-row align-h="center">
        <b-col col lg="6" sm="12">
          <b-form @submit.prevent="handleSubmit">
            <div class="form-group col-md-12">
              <label for="service-type-select">Service Type</label>
              <select
                id="service-type-select"
                @blur="$v.serviceType.$touch"
                v-model="serviceType"
                class="form-control"
                :class="
                  $v.serviceType.$invalid == true && $v.serviceType.$dirty
                    ? 'is-invalid'
                    : ''
                "
              >
                <option selected name="serviceType" value="">
                  Service Type...
                </option>
                <option value="Domain">Domain</option>
                <option value="Mail">Email</option>
                <option value="Host">Hosting</option>
              </select>
            </div>
            <div class="form-group col-md-12 alert">
              <label class="sr-only" for="inlineFormInputGroupUsername2"
                >Domain name</label
              >
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">www.</div>
                </div>
                <input
                  type="text"
                  name="domain"
                  v-model="domain"
                  @blur="$v.domain.$touch"
                  class="form-control"
                  :class="
                    $v.domain.$invalid == true && $v.domain.$dirty
                      ? 'is-invalid'
                      : ''
                  "
                  id="domainInput"
                  placeholder="Domain.com"
                />
              </div>
            </div>

            <div class="form-group col-md-12">
              <label class="sr-only" for="inlineFormInputGroupUsername2"
                >Rate</label
              >
              <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">INR.</div>
                </div>
                <input
                  type="number"
                  name="rate"
                  v-model="rate"
                  class="form-control"
                  @blur="$v.rate.$touch"
                  :class="
                    $v.rate.$invalid == true && $v.rate.$dirty
                      ? 'is-invalid'
                      : ''
                  "
                  id="rateInput"
                  placeholder="Rate"
                />
              </div>
            </div>

            <div class="form-group col-md-12">
              <label class="" for="inlineFormInputGroupUsername2"
                >Service Expires on</label
              >
              <div class="input-group mb-2 mr-sm-2">
                <input
                  type="date"
                  name="expiry"
                  @blur="$v.expiry.$touch"
                  v-model="expiry"
                  class="form-control"
                  :class="
                    $v.expiry.$invalid == true && $v.expiry.$dirty
                      ? 'is-invalid'
                      : ''
                  "
                  id="dateInput"
                  placeholder="Date of Expiry "
                />
              </div>
            </div>
            <div class="form-group col-md-12">
              <b-button type="submit" :disabled="$v.$invalid" variant="primary"
                >Submit</b-button
              >
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
