<template>
  <div class="container-fluid">
    <div class="row" v-if="state_no !== 0">
      <img src="https://via.placeholder.com/50" class="m-2" />
      <img src="https://via.placeholder.com/50" class="m-2" />
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
                <img src="https://via.placeholder.com/150" class="m-2" />
                <img src="https://via.placeholder.com/150" class="m-2" />
                <img src="https://via.placeholder.com/150" class="m-2" />
              </div>
              <div class="mt-3">
                Приложите пропуск к сканеру чтобы начать сборку изделия.
              </div>
            </div>
          </div>
          <div v-else-if="state_no === 1" class="panel panel-default">
            <div class="panel-body text-center">
              <h4>Ввод параметров изделия</h4>
              <div class="text-left">
                <div>
                  <div class="form-group">
                    <label>Модель</label>
                    <select v-model="type" class="form-control">
                      <option
                        v-for="(item, key) in models"
                        :value="key"
                        :key="key"
                      >
                        {{ item.name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <div class="form-group">
                    <label>Production stage</label>
                    <select
                      v-model="models[type].production_stage.value"
                      class="form-control"
                    >
                      <option
                        v-for="(item, key) in models[type].production_stage
                          .options"
                        :value="item"
                        :key="key"
                      >
                        {{ item }}
                      </option>
                    </select>
                  </div>
                  <div
                    class="form-group"
                    v-for="(item, key) in models[type].fields"
                    :key="key"
                  >
                    <label>{{ item.label }}</label>
                    <select v-model="item.value" class="form-control">
                      <option
                        v-for="(item, key) in item.options"
                        :value="item"
                        :key="key"
                      >
                        {{ item }}
                      </option>
                    </select>
                  </div>
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
import api from "@/tools/api";
import { MODELS, TIMEOUT } from "@/config";

export default {
  data() {
    return {
      state_no: null,
      type: 1,
      models: MODELS,
      sec: 0,
      interval: null
    };
  },
  created() {
    setInterval(() => {
      this.getState();
    }, TIMEOUT);
    this.getState();
  },
  methods: {
    async getState() {
      try {
        const old = this.state_no;
        const result = await api.state();
        this.state_no = result.state_no;
        if (old === 1 && this.state_no === 2) {
          this.sec = 0;
          this.interval = setInterval(() => {
            this.sec++;
          }, 1000);
        } else if (old === 2 && this.state_no === 3) {
          clearInterval(this.interval);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async send() {
      const additional_info = {};
      for (const field of this.models[this.type].fields) {
        additional_info[field.key] = field.value;
      }
      const data = {
        session_start_time: dayjs().format("DD-MM-YYYY HH:mm:ss"),
        product_type: this.models[this.type].name,
        production_stage: this.models[this.type].production_stage.value,
        additional_info: additional_info
      };
      await api.send(data);
    }
  }
};
</script>
