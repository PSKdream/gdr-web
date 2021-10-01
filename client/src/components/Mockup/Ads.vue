<template>
  <div class="d-flex justify-content-center mt-4 mb-5 rounded">
    <div class="col-10 rounded " style="background: #f5f5f5">
      <div class="container border-bottom m-2">
        <h2 class="text-center">Post an Ad</h2>
      </div>
      <div class="container mt-4">
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Category <sup>*</sup></label>
          <div class="col-md-9">
            <select
              name="parent"
              id="parent"
              class="form-control"
            >
              <option value="1" data-type="classified">Accommodation</option>
              <option value="70" data-type="classified">Banks</option>
              <option value="105" data-type="classified">Buy/Sell</option>
              <option value="7" data-type="classified">Food &amp; Drink</option>
              <option value="98" data-type="job-offer">Jobs</option>
              <option value="85" data-type="classified">Local Events</option>
              <option value="82" data-type="classified">Motors</option>
              <option value="22" data-type="classified">Nightlife</option>

              </select>
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Title <sup>*</sup></label>
          <div class="col-md-9">
            <input 
            type="text"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Description <sup>*</sup></label>
          <div class="col-md-9">
            <textarea class="form-control" placeholder="Description what makes ypur ad unique..." id="floatingTextarea2" style="height: 100px"></textarea>
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Price of Salary <sup></sup></label>
          <div class="col-md-9">
            <input 
            type="number"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Tags <sup></sup></label>
          <div class="col-md-9">
            <input 
            type="number"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
      </div>
      <div class="ms-4 me-4 border-top border-bottom ">
        <h4 class="text-center">Seller information</h4>
      </div>
      <div class="container mt-4">
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Your name <sup>*</sup></label>
          <div class="col-md-9">
            <input 
            type="text"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Email <sup>*</sup></label>
          <div class="col-md-9">
            <input 
            type="email"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Web Site URL </label>
          <div class="col-md-9">
            <input 
            type="email"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Address 1 </label>
          <div class="col-md-9">
            <input 
            type="email"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Address 2 <sup></sup></label>
          <div class="col-md-9">
            <input 
            type="text"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">County <sup></sup></label>
          <div class="col-md-9">
            <input 
            type="text"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">Post Code <sup></sup></label>
          <div class="col-md-9">
            <input 
            type="number"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">City <sup></sup></label>
          <div class="col-md-9">
            <input 
            type="text"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="form-group row ms-2 me-5 ">
          <label class="col-md-3 text-end">Phone Number <sup>*</sup></label>
          <div class="col-md-9">
            <input 
            type="number"
              name="parent"
              id="parent"
              class="form-control"
            >
          </div>
        </div>
        <div class="text-center card-body">
          <button type="submit" class="btn btn-success mt-3">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>