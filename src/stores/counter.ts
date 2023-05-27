import { defineStore } from "pinia";
import { ref, computed } from "vue";

const counterStore = defineStore('counter', () => {
    const counter = ref(0);

    const count = computed(() => counter.value);

    function increment() {
        counter.value++;
    }

    function $reset() {
        counter.value = 0;
    }

    return {
        count,
        increment,
        $reset
    }
});

export default counterStore;