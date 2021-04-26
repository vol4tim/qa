<template>
  <div class="container" style="margin-top:40px">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div v-if="state_no === null" class="panel panel-default">
          <div class="panel-body text-center">
            Загрузка
          </div>
        </div>
        <div v-else-if="state_no === 0" class="panel panel-default">
          <div class="panel-body text-center">
            приложите пропуск к сканеру чтобы начать сборку изделия.
          </div>
        </div>
        <div v-else-if="state_no === 1" class="panel panel-default">
          <div class="panel-body text-center">
            ввод параметров изделия
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
                <div
                  class="form-group"
                  v-for="(item, key) in models[type].fields"
                  :key="key"
                >
                  <label>{{ item.label }}</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="item.value"
                  />
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
            идет запись сборки
          </div>
        </div>
        <div v-else-if="state_no === 3" class="panel panel-default">
          <div class="panel-body text-center">
            идет обработка записей и печать паспорта
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/tools/api";
import { MODELS, TIMEOUT } from "@/config";

export default {
  data() {
    return {
      state_no: null,
      type: 1,
      models: MODELS
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
        const result = await api.state();
        this.state_no = result.state_no;
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
        session_start_time: new Date().toLocaleString(),
        product_type: this.models[this.type].name,
        additional_info: additional_info
      };
      await api.send(data);
    }
  }
};
</script>
