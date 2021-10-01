<template>
  <div class="row justify-content-center mt-5 mb-5 rounded">
    <div class="col-10 rounded" style="background: #f5f5f5">
      <div class="container border-bottom m-4">
        <h2 class="text-center">ส่วนที่ 1 : ข้อมูลผู้ส่งข่าวกิจกรรม</h2>
      </div>
      <div class="container mt-4">
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">ชื่อผู้ติดต่อ <sup>*</sup></label>
          <div class="col-md-9">
            <input type="text" name="parent" id="parent" class="form-control" />
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">อีเมล <sup>*</sup></label>
          <div class="col-md-9">
            <input type="text" name="parent" id="parent" class="form-control" />
          </div>
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">เบอร์โทรศัพท์ <sup>*</sup></label>
          <div class="col-md-9">
            <input type="text" name="parent" id="parent" class="form-control" />
          </div>
        </div>
      </div>
    </div>
    <div class="col-10 rounded mt-4" style="background: #f5f5f5">
      <div class="container border-bottom m-4 mb-0">
        <h2 class="text-center">ส่วนที่ 2 : พาดหัวข่าว และรูปภาพประกอบ</h2>
      </div>
      <div class="container">
        <div class="text-center">
          <figure class="aligncenter size-full is-resized">
            <picture class="wp-image-72079">
              <source
                type="image/webp"
                srcset="
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1.jpg.webp         1000w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-181x195.jpg.webp  181w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-156x168.jpg.webp  156w
                "
                sizes="(max-width: 500px) 100vw, 500px"
              />
              <br />
              <img
                src="https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1.jpg"
                alt=""
                width="500"
                height="539"
                srcset="
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1.jpg          1000w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-297x320.jpg   297w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-951x1024.jpg  951w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-139x150.jpg   139w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-768x827.jpg   768w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-279x300.jpg   279w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-620x668.jpg   620w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-510x549.jpg   510w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-590x635.jpg   590w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-181x195.jpg   181w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-1-156x168.jpg   156w
                "
                sizes="(max-width: 500px) 100vw, 500px"
              />
            </picture>
          </figure>
          <figure class="aligncenter size-full is-resized">
            <picture class="wp-image-72082">
              <source
                type="image/webp"
                srcset="
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2.jpg.webp        1000w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-320x84.jpg.webp  320w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-375x99.jpg.webp  375w
                "
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
              <img
                src="https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2.jpg"
                alt=""
                width="500"
                srcset="
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2.jpg         1000w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-320x84.jpg   320w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-150x40.jpg   150w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-768x203.jpg  768w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-400x106.jpg  400w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-620x164.jpg  620w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-510x135.jpg  510w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-630x166.jpg  630w,
                  https://www.camphub.in.th/wp-content/uploads/2021/04/Example-2-375x99.jpg   375w
                "
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </picture>
          </figure>
        </div>
        <div class="text-center mb-4">
          <h4>
            <span>อัพโหลดภาพหัวข่าว ขนาด 1200x630 พิกเซล</span>
          </h4>
          <input
          class="ms-5 mt-1"
            type="file"
            accept=".jpg,.jpeg,.png,.gif,.pdf,.zip,.rar"
            aria-required="true"
            aria-invalid="false"
          />
        </div>
        <div class="form-group row ms-2 me-5 mb-3">
          <label class="col-md-3 text-end">ชื่อกิจกรรม <sup>*</sup></label>
          <div class="col-md-9">
            <input
              type="email"
              name="parent"
              id="parent"
              class="form-control"
            />
          </div>
        </div>
        <div class="form-group row ms-2 me-5">
          <label class="col-md-3 text-end">คำโปรยของกิจกรรม <sup>*</sup></label>
          <div class="col-md-9">
            <textarea class="form-control" placeholder="อธิบายว่ากิจกรรมคุณทำอะไร มีดียังไง เชิญชวนให้คนเข้ามาอ่านต่อ" id="floatingTextarea2" style="height: 100px"></textarea>
          </div>
        </div>
        <div class="text-center card-body mb-2">
          <button type="submit" class="btn btn-success mt-3">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>