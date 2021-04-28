export const API = "";
export const TIMEOUT = "1000";

export const MODELS = {
  1: {
    name: "Perseverance Mars rover",
    production_stage: {
      label: "Production stage",
      value: "option 1",
      options: ["option 1", "option 2", "option 3"]
    },
    fields: [
      {
        key: "field_1",
        label: "Sample text",
        value: "option 1",
        options: ["option 1", "option 2", "option 3"]
      },
      {
        key: "field_2",
        label: "Sample text2",
        value: "option 1",
        options: ["option 1", "option 2", "option 3"]
      }
    ]
  },
  2: {
    name: "Drone",
    production_stage: {
      label: "Production stage",
      value: "option 1",
      options: ["option 1", "option 2"]
    },
    fields: [
      {
        key: "field_1",
        label: "Sample text",
        value: "option 1",
        options: ["option 1", "option 2", "option 3"]
      }
    ]
  }
};
