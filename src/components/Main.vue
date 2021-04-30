<template>
  <div class="container-fluid">
    <div class="row" v-if="state_no !== 0">
      <img src="../image/mvas.png" class="m-2" style="width: 50px;" />
      <img src="../image/strelka.png" class="m-2" style="width: 50px;" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md">
          <div v-if="state_no === null" class="panel panel-default">
            <div class="panel-body text-center">
              Загрузка
            </div>
          </div>
          <div v-else-if="state_no === 0" class="panel panel-default mt-5">
            <div class="panel-body text-center">
              <div class="text-center">
                <h3>
                  Система контроля качества производства на базе платформы Feecc
                </h3>
              </div>
              <hr />
              <div>
                <img
                  src="../image/mvas.png"
                  class="mx-5"
                  style="width: 130px;"
                />
                <img
                  src="../image/strelka.png"
                  class="mx-5"
                  style="width: 150px;"
                />
                <img
                  src="../image/robonomics.png"
                  class="mx-5"
                  style="width: 180px;"
                />
              </div>
              <div class="mt-3">
                Приложите пропуск к сканеру чтобы начать сборку изделия.
              </div>
            </div>
          </div>
          <div v-else-if="state_no === 1" class="panel panel-default">
            <div class="panel-body text-center">
              <h4>Ввод параметров изделия</h4>
              <div class="text-left" v-if="options && form">
                <div class="form-group">
                  <label>{{ options.product_type.field_full_name }}</label>
                  <select v-model="form.product_type" class="form-control">
                    <option
                      v-for="(item, key) in options.product_type.options"
                      :value="item"
                      :key="key"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label>{{ options.production_stage.field_full_name }}</label>
                  <select v-model="form.production_stage" class="form-control">
                    <option
                      v-for="(item, key) in options.production_stage.options"
                      :value="item"
                      :key="key"
                    >
                      {{ item }}
                    </option>
                  </select>
                </div>
                <div
                  class="form-group"
                  v-for="(item, key) in options.additional_info"
                  :key="key"
                >
                  <label>
                    {{ options.additional_info[key].field_full_name }}
                  </label>
                  <select
                    v-model="form.additional_info[key]"
                    class="form-control"
                  >
                    <option
                      v-for="(v, k) in options.additional_info[key].options"
                      :value="v"
                      :key="k"
                    >
                      {{ v }}
                    </option>
                  </select>
                </div>
              </div>
              <br />
              <br />
              <button class="btn btn-info" @click="send">отправить</button>
            </div>
          </div>
          <div v-else-if="state_no === 2" class="panel panel-default">
            <div class="panel-body text-center">
              <h4>Идет запись сборки</h4>
              <div class="text-info display-3">{{ sec }}</div>
              <div>Для завершения сборки нужно приложить пропуск</div>
            </div>
          </div>
          <div v-else-if="state_no === 3" class="panel panel-default">
            <div class="panel-body text-center">
              <h4>Идет обработка записей и печать паспорта</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import api from "@/tools/api";
import { TIMEOUT } from "@/config";

dayjs.extend(duration);

export default {
  data() {
    return {
      state_no: null,
      options: null,
      form: null,
      sec: "00:00:00",
      interval: null
    };
  },
  async created() {
    setInterval(() => {
      this.getState();
    }, TIMEOUT);
    this.getState();
    this.getFormFields();
  },
  watch: {
    state_no: function(value) {
      if (value === 2) {
        clearInterval(this.interval);
        this.sec = "00:00:00";
        const startTime = dayjs();
        this.interval = setInterval(() => {
          const currentTime = dayjs();
          this.sec = dayjs
            .duration(currentTime.diff(startTime))
            .format("HH:mm:ss");
        }, 1000);
      } else if (value === 3) {
        clearInterval(this.interval);
      }
    }
  },
  methods: {
    async getFormFields() {
      this.options = await api.options();
      const form = {
        product_type: this.options.product_type.options[0],
        production_stage: this.options.production_stage.options[0],
        additional_info: {}
      };
      for (const key in this.options.additional_info) {
        form.additional_info[key] = this.options.additional_info[
          key
        ].options[0];
      }
      this.form = form;
    },
    async getState() {
      try {
        const result = await api.state();
        this.state_no = result.state_no;
      } catch (error) {
        console.log(error);
      }
    },
    async send() {
      const additional_info = {};
      for (const field in this.form.additional_info) {
        additional_info[field] = this.form.additional_info[field];
      }
      const data = {
        session_start_time: dayjs().format("DD-MM-YYYY HH:mm:ss"),
        product_type: this.form.product_type,
        production_stage: this.form.production_stage,
        additional_info: additional_info
      };
      await api.send(data);
    }
  }
};
</script>
