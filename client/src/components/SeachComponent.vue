<template>
  <div class="col-md-10 container mb-5 mt-5">
    <div class="row">
      <div class="col-md-4 widget-column mt-0 d-none d-sm-block">
        <section class="section search-filter-section">
          <h4>Refine results</h4>
          <form class="search-filter-form">
            <input
              type="hidden"
              name="keywords"
              value="computer game development"
            />
            <ul class="list-group list-group-flush">
              <li class="list-group-item px-0">
                <a
                  class="filter w-100 d-block"
                  data-toggle="collapse"
                  href="#atar_min"
                  role="button"
                  aria-expanded="true"
                  aria-controls="atar_min"
                >
                  ATAR score <span class="caret mr-3"></span
                ></a>
                <div class="" id="atar_min">
                  <div class="mt-2">
                    <div class="input-group input-group-sm">
                      <div class="input-group-prepend">
                        <div class="input-group-text rounded-0">From:</div>
                      </div>
                      <input
                        type="number"
                        value="0"
                        min="0"
                        max="99.5"
                        name="atar_min"
                        class="form-control float-right rounded-0 mr-1"
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text rounded-0">To:</div>
                      </div>
                      <input
                        type="number"
                        value="0"
                        min="0"
                        max="99.5"
                        name="atar_max"
                        class="form-control float-right rounded-0 mr-1"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li class="list-group-item px-0">
                <a
                  class="filter w-100 d-block"
                  data-toggle="collapse"
                  href="#simple_qualification_ids"
                  role="button"
                  aria-expanded="true"
                  aria-controls="simple_qualification_ids"
                >
                  Level of study <span class="caret mr-3"></span
                ></a>
                <div class="" id="simple_qualification_ids">
                  <div class="mt-2">
                    <ul class="p-0 list-style-none small">
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="simple_qualification_ids[]"
                            value="1"
                            data-url-part="pre-degree"
                          />
                          Pre-degree
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="simple_qualification_ids[]"
                            value="2"
                            data-url-part="undergraduate"
                          />
                          Undergraduate
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="simple_qualification_ids[]"
                            value="3"
                            data-url-part="postgraduate"
                          />
                          Postgraduate
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li class="list-group-item px-0">
                <a
                  class="filter w-100 d-block"
                  data-toggle="collapse"
                  href="#attendance_ids"
                  role="button"
                  aria-expanded="true"
                  aria-controls="attendance_ids"
                >
                  Study mode <span class="caret mr-3"></span
                ></a>
                <div class="" id="attendance_ids">
                  <div class="mt-2">
                    <ul class="p-0 list-style-none small">
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="attendance_ids[]"
                            value="1"
                            data-url-part="online-off-campus"
                          />
                          Online/Off-campus
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="attendance_ids[]"
                            value="2"
                            data-url-part="flexible-delivery"
                          />
                          Flexible Delivery
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="attendance_ids[]"
                            value="3"
                            data-url-part="full-time"
                          />
                          Full-time
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="attendance_ids[]"
                            value="6"
                            data-url-part="part-time"
                          />
                          Part-time
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="list-group-item px-0">
                <a
                  class="filter w-100 d-block"
                  data-toggle="collapse"
                  href="#field_of_study_ids"
                  role="button"
                  aria-expanded="true"
                  aria-controls="field_of_study_ids"
                >
                  Field of study <span class="caret mr-3"></span
                ></a>
                <div class="" id="field_of_study_ids">
                  <div class="mt-2 search-filter-scroll">
                    <ul class="p-0 list-style-none small">
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="1"
                            data-url-part="accounting"
                          />
                          Accounting
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="2"
                            data-url-part="agriculture"
                          />
                          Agriculture
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="3"
                            data-url-part="architecture"
                          />
                          Architecture
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="4"
                            data-url-part="built-environment"
                          />
                          Built environment
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="5"
                            data-url-part="business-and-management"
                          />
                          Business and management
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="6"
                            data-url-part="communications"
                          />
                          Communications
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="7"
                            data-url-part="computing-and-information-technology"
                          />
                          Computing and information technology
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="31"
                            data-url-part="creative-arts"
                          />
                          Creative arts
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="10"
                            data-url-part="dentistry"
                          />
                          Dentistry
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="11"
                            data-url-part="economics"
                          />
                          Economics
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="12"
                            data-url-part="education-and-training"
                          />
                          Education and training
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="13"
                            data-url-part="engineering-and-technology"
                          />
                          Engineering and technology
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="8"
                            data-url-part="environmental-studies"
                          />
                          Environmental studies
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="15"
                            data-url-part="health-services-and-support"
                          />
                          Health services and support
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="17"
                            data-url-part="humanities-and-social-sciences"
                          />
                          Humanities and social sciences
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="18"
                            data-url-part="languages"
                          />
                          Languages
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="19"
                            data-url-part="law"
                          />
                          Law
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="23"
                            data-url-part="mathematics"
                          />
                          Mathematics
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="24"
                            data-url-part="medicine"
                          />
                          Medicine
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="25"
                            data-url-part="nursing"
                          />
                          Nursing
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="20"
                            data-url-part="para-legal-studies"
                          />
                          Para-legal studies
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="21"
                            data-url-part="pharmacy"
                          />
                          Pharmacy
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="26"
                            data-url-part="psychology"
                          />
                          Psychology
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="14"
                            data-url-part="rehabilitation"
                          />
                          Rehabilitation
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="27"
                            data-url-part="sciences"
                          />
                          Sciences
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="28"
                            data-url-part="social-work"
                          />
                          Social work
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="22"
                            data-url-part="sport-and-leisure"
                          />
                          Sport and leisure
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="29"
                            data-url-part="surveying"
                          />
                          Surveying
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="16"
                            data-url-part="tourism-and-hospitality"
                          />
                          Tourism and hospitality
                        </label>
                      </li>
                      <li>
                        <label
                          ><input
                            class="search-filter"
                            type="checkbox"
                            name="field_of_study_ids[]"
                            value="30"
                            data-url-part="veterinary-science"
                          />
                          Veterinary science
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </section>
      </div>

      <div class="col-md-8 ps-5">
        <div id=" search-results">
          <p class="search-result-count">
            We found over 2 accredited courses offered by institutions. Learn
            about fees, term dates, entry requirements, duration, structure,
            rankings and subjects.
          </p>
        </div>
        <div class="card mb-3" style="max-width: 540px">
          <div class="row g-0 ">
            <div class="col-md-4 ps-1 d-flex align-items-center justify-content-center">
              <img src="../assets/logo.png" class="img-fluid rounded-start image-card"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"> <a class="link-dark" href="/course-provider">Card title</a> </h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  list-style-type: none;
}
a:link {
  color: black;
}
.image-card{
    width: 80%;
}
</style>