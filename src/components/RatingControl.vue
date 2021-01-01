<template>
  <ul>
    <!-- you can use modelValue prop directly as well -->
    <li :class="{active: modelValue === 'poor'}"> 
        <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{active: activeOption === 'ok'}">
        <button type="button" @click="activate('ok')">Ok</button>
    </li>
    <li :class="{active: activeOption === 'good'}">
        <button type="button" @click="activate('good')">Good</button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
//   data() {
//       return {
//           activeOption: this.modelValue
//       }
//   },
  computed: {
      activeOption() {
          return this.modelValue
      }
  },
  methods: {
    activate(option) {
        this.activeOption = option;
        this.$emit("update:modelValue", option);
    },
  },
};
</script>
<style scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  list-style: none;
  margin-left: 1rem;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border: 1px solid;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.1)
}

button {
  font: inherit;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  padding: 1rem;
}
.active {
  border-color: purple;
}

.active button {
  color: deeppink;
}
</style>