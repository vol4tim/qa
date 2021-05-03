<template>
  <div class="container-fluid">
    <div class="row" v-if="state_no !== 0">
      <img src="/static/logo_mvas.png" class="m-2" style="width: 50px;" />
      <img src="/static/logo_geoskan.png" class="m-2" style="width: 50px;" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md my-5">
          <div v-if="state_no === null" class="panel panel-default">
            <div class="panel-body text-center">
              Загрузка
            </div>
          </div>
          <div v-else-if="state_no === 0" class="panel panel-default">
            <div class="panel-body text-center">
              <div class="text-center">
                <h3>
                  Система контроля качества производства на базе платформы Feecc
                </h3>
              </div>
              <hr />
              <div>
                <img
                  src="/static/logo_mvas.png"
                  class="mx-5"
                  style="width: 130px;"
                />
                <img
                  src="/static/logo_robonomics.png"
                  class="mx-5"
                  style="width: 150px;"
                />
                <img
                  src="/static/logo_geoskan.png"
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
                <div v-if="step === 1">
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
                    <label>{{
                      options.production_stage.field_full_name
                    }}</label>
                    <select
                      v-model="form.production_stage"
                      class="form-control"
                    >
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
                <div v-if="step === 2" class="container my-2 text-center">
                  <div class="row">
                    <div
                      v-for="(item, id) in modules"
                      :key="id"
                      class="col-md-2"
                    >
                      <div
                        class="p-2 my-2"
                        :class="{ active: item.select }"
                        style="cursor:pointer"
                        @click="set(id)"
                      >
                        <img
                          class="img-thumbnail"
                          :src="`/static/images/${item.module_image}`"
                          style="width: 105px;"
                        />
                        <div class="mt-2 label-card">
                          {{ item.module_name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <br />
              <br />
              <button v-if="step === 2" class="btn btn-info mr-2" @click="send">
                Отправить
              </button>
              <button v-if="step === 1" class="btn btn-info mr-2" @click="next">
                Продолжить
              </button>
              <button
                v-if="step === 2"
                class="btn btn-secondary mr-2"
                @click="prev"
              >
                Назад
              </button>
              <button class="btn btn-danger" @click="cancel(0)">
                Отмена
              </button>
            </div>
          </div>
          <div v-else-if="state_no === 2" class="panel panel-default">
            <div class="panel-body text-center">
              <h4>Идет запись сборки</h4>
              <div class="text-info display-3">{{ sec }}</div>
              <div>
                <button class="btn btn-danger mt-2" @click="cancel(3)">
                  Завершить сборку
                </button>
              </div>
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
      step: 1,
      sec: "00:00:00",
      interval: null,
      modules: {}
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
      if (value === 1) {
        this.step = 1;
        for (const id in this.modules) {
          this.modules[id].select = false;
        }
      } else if (value === 2) {
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
      const modules = await api.modules();
      const m = {};
      modules.forEach((item, id) => {
        m[id] = {
          ...item,
          select: false
        };
      });
      this.modules = m;
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
      const additional_modules = [];
      for (const id in this.modules) {
        const module = this.modules[id];
        if (module.select) {
          additional_modules.push(module.module_name);
        }
      }
      const additional_info = {};
      for (const field in this.form.additional_info) {
        additional_info[
          this.options.additional_info[field].field_full_name
        ] = this.form.additional_info[field];
      }
      if (additional_modules.length > 0) {
        additional_info["Дополнительные модули"] = additional_modules;
      }
      const data = {
        session_start_time: dayjs().format("DD-MM-YYYY HH:mm:ss"),
        product_type: this.form.product_type,
        production_stage: this.form.production_stage,
        additional_info: additional_info
      };
      await api.send(data);
    },
    async cancel(state) {
      await api.update({
        change_state_to: state,
        priority: 1
      });
    },
    set(id) {
      this.modules[id].select = !this.modules[id].select;
    },
    next() {
      this.step = 2;
    },
    prev() {
      this.step = 1;
    }
  }
};
</script>

<style scoped>
.active {
  outline: 2px solid #38caff;
}
.label-card {
  font-size: 0.8rem;
}
</style>
