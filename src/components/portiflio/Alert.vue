<template>
  <div class="alert">
    <span class="fa fa-info-circle"> Alerta</span>
    <div class="msg">{{ msg }}</div>
    <div class="btns">
      <button @click="clickNao">Não</button>
      <button @click="clickSim">Sim</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertVue",
  props: {
    msg: { type: String, default: "Predente fazer nova adição ?" },
  },
  methods: {
    clickSim() {
      this.$emit("clickSim", true);
    },
    clickNao() {
      this.$emit("clickNao", false);
    },
  },
};
</script>

<style scoped>
.alert {
  position: absolute;
  top: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 40px;
  background-color: #fff;
  box-shadow: 0 0 10px #7f7c7c;
}
.alert .fa {
  font-size: 1em;
  letter-spacing: 3px;
  margin-bottom: 20px;
  font-weight: 600;
  color: #227c9d;
}
.alert .msg {
  padding: 25px;
  font-size: 1.2em;
}
.alert .btns {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.alert .btns button:first-child {
  width: 100%;
  padding: 10px 0;
  color: #fff;
  font-size: 1em;
  margin-right: 5px;
  background-color: #e33d3dc5;
  cursor: pointer;
  transition: 0.5s;
}
.alert .btns button:last-child {
  width: 100%;
  padding: 10px 0;
  color: #fff;
  font-size: 1em;
  margin-left: 5px;
  background-color: #1394c373;
  cursor: pointer;
  transition: 0.5s;
}
.alert .btns button:last-child:hover {
  background-color: #1394c3;
}
.alert .btns button:first-child:hover {
  background-color: #f32727;
}
</style>