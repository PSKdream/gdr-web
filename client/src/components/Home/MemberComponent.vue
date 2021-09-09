<template>
  <div class="subscribe-section mt-5">
    <div class="container col-md-11">
      <div class="container pt-4 pb-3">
        <div class="row">
          <div class="col-md-6">
            <form class="register-form needs-validation">
              <p class="h4">Become a member</p>
              <div class="form-group form-group-two-columns">
                <input
                  id="first_name"
                  type="text"
                  class="form-control form-control-sm"
                  name="first_name"
                  placeholder="First name"
                  value=""
                  required=""
                />
              </div>
              <div class="form-group form-group-two-columns">
                <input
                  id="last_name"
                  type="text"
                  class="form-control form-control-sm"
                  name="last_name"
                  placeholder="Last name"
                  value=""
                  required=""
                />
              </div>
              <div class="form-group form-group-two-columns">
                <input
                  id="email"
                  type="email"
                  class="form-control form-control-sm"
                  name="email"
                  placeholder="E-mail"
                  value=""
                  required=""
                />
              </div>
              <div class="form-group form-group-two-columns">
                <select
                  class="form-control form-control-sm"
                  id="state_id"
                  name="state_id"
                  required=""
                >
                  <option value="">State</option>
                  <option value="1">Australian Capital Territory</option>
                  <option value="2">New South Wales</option>
                  <option value="3">Northern Territory</option>
                  <option value="4">Queensland</option>
                  <option value="5">South Australia</option>
                  <option value="6">Tasmania</option>
                  <option value="7">Victoria</option>
                  <option value="8">Western Australia</option>
                </select>
              </div>
              <div class="form-group form-group-two-columns">
                <select
                  class="form-control form-control-sm"
                  id="user_type_id"
                  name="user_type_id"
                  required=""
                >
                  <option value="">I am a</option>
                  <option value="4">career advisor</option>
                  <option value="2">high school graduate</option>
                  <option value="1">high school student</option>
                  <option value="3">mature age student</option>
                  <option value="6">other</option>
                  <option value="5">parent</option>
                </select>
              </div>
              <div class="form-group form-group-two-columns">
                <select
                  class="form-control form-control-sm"
                  id="simple_qualification_id"
                  name="simple_qualification_id"
                  required=""
                >
                  <option value="">Level of qualification</option>
                  <option value="1">Pre-degree</option>
                  <option value="2">Undergraduate</option>
                  <option value="3">Postgraduate</option>
                </select>
              </div>
              <div class="form-group form-group-two-columns">
                <select
                  class="form-control form-control-sm"
                  id="field_of_study_id"
                  name="field_of_study_id"
                  required=""
                >
                  <option value="">Field of study</option>
                  <option value="1">Accounting</option>
                  <option value="2">Agriculture</option>
                  <option value="3">Architecture</option>
                  <option value="4">Built environment</option>
                  <option value="5">Business and management</option>
                  <option value="6">Communications</option>
                  <option value="7">
                    Computing and information technology
                  </option>
                  <option value="31">Creative arts</option>
                  <option value="10">Dentistry</option>
                  <option value="11">Economics</option>
                  <option value="12">Education and training</option>
                  <option value="13">Engineering and technology</option>
                  <option value="8">Environmental studies</option>
                  <option value="15">Health services and support</option>
                  <option value="17">Humanities and social sciences</option>
                  <option value="18">Languages</option>
                  <option value="19">Law</option>
                  <option value="23">Mathematics</option>
                  <option value="24">Medicine</option>
                  <option value="25">Nursing</option>
                  <option value="20">Para-legal studies</option>
                  <option value="21">Pharmacy</option>
                  <option value="26">Psychology</option>
                  <option value="14">Rehabilitation</option>
                  <option value="27">Sciences</option>
                  <option value="28">Social work</option>
                  <option value="22">Sport and leisure</option>
                  <option value="29">Surveying</option>
                  <option value="16">Tourism and hospitality</option>
                  <option value="30">Veterinary science</option>
                </select>
              </div>
              <div class="form-group form-group-two-columns">
                <select
                  class="form-control form-control-sm"
                  id="attendance_id"
                  name="attendance_id"
                  required=""
                >
                  <option value="">Study mode</option>
                  <option value="1">External</option>
                  <option value="2">Flexible Delivery</option>
                  <option value="3">Full-time internal</option>
                  <option value="6">Part-time internal</option>
                </select>
              </div>
              <div class="form-group form-group-two-columns">
                <input
                  id="password"
                  type="password"
                  class="form-control form-control-sm"
                  name="password"
                  placeholder="Password"
                  required=""
                />
              </div>
              <div class="form-group form-group-two-columns">
                <input
                  id="password-confirm"
                  type="password"
                  class="form-control form-control-sm"
                  name="password_confirmation"
                  placeholder="Confirm password"
                  required=""
                />
              </div>
              <div class="form-group form-group-two-columns">
                <button
                  class="btn btn-warning btn-block btn-sm mb-0"
                  type="submit"
                  style="width:100%"
                >
                  Register
                </button>
              </div>
              <div class="form-group">
                <div class="d-flex justify-content-between">
                  <p>
                    Already a member?
                    <a class="font-weight-bold" href="">Login</a>
                  </p>
                  <a class="font-weight-bold" href="">Forgot password?</a>
                </div>
              </div>
            </form>
          </div>
          <div class="col-md-6  text-center ">
            <h4>Join the conversation</h4>
            <div class="text-center mt-4">
              <h1
                type="button"
                class="btn-floating btn-small btn-fb waves-effect waves-light"
                href=""
              >
                <i class="bi bi-facebook "></i>
                <i class="bi bi-twitter ms-4"></i>
                <i class="bi bi-instagram ms-4"></i>
              </h1>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-group {
  margin: 0.5em;
}
.subscribe-section {
  background: #f9f6f6;
  width: 100vw;
  max-width: 100vw;
}
.waves-light {
  margin: 1rem;
}
</style>