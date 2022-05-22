<template>
  <div>
    <!-- Button #1 -->
    <div class="wrapper">
      <input class="checkbox" type="checkbox" />
      <div class="btn demo-one">
        <div class="side back demo-one">
          <i class="fa i-fa-volume-off" aria-hidden="true"></i>
        </div>
        <div class="side mid demo-one"></div>
        <div class="side front demo-one">
          <i class="fa i-fa-volume-up" aria-hidden="true"></i>
        </div>
      </div>
    </div>

    <!-- Button #2 -->
    <div class="wrapper">
      <input class="checkbox" type="checkbox" />
      <div class="btn demo-two">
        <div class="side back demo-two">
          <i class="fa i-fa-minus" aria-hidden="true"></i>
        </div>
        <div class="side mid demo-two"></div>
        <div class="side front demo-two">
          <i class="fa i-fa-plus" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 180px;
  height: 80px;
  position: relative;
  margin: 20px;
}
.side {
  display: flex;
  justify-content: center;
  align-items: center;
}
.fa {
  font-size: 40px;
  color: #fff;
}
.btn,
.checkbox,
.side {
  position: absolute;
  width: 100%;
  height: 100%;
}

.btn {
  transition: transform 1s;
  transform-style: preserve-3d;
  pointer-events: none;
}

/* Sides */
.back {
  transform: translateZ(-10px);
}
.front {
  transform: translateZ(10px);
  backface-visibility: hidden;
}

/* Checkbox */
.checkbox {
  opacity: 0;
  cursor: pointer;
}

/* 
=================================
           BUTTON #1
=================================
*/
.front.demo-one {
  background: #1abc9c;
}
.back.demo-one {
  background: #1abc9c;
}
.mid.demo-one {
  height: 20px;
  background-color: #16a085;
  transform: rotateX(90deg);
  top: -10px;
}
.checkbox:checked + .btn.demo-one {
  transform: rotateX(-180deg);
}

/* 
=================================
           BUTTON #2
=================================
*/
.front.demo-two {
  background: #e26a6a;
}
.back.demo-two {
  background: #e26a6a;
}
.mid.demo-two {
  width: 20px;
  background-color: #e74c3c;
  transform: rotateY(-90deg);
  left: -10px;
}
.checkbox:checked + .btn.demo-two {
  transform: rotateY(180deg);
}
</style>
