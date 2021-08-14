<template>
  <PacientList>
    <div v-for="pacient in pacients" :key="pacient.id" class="pacient">
      <div class="pacient__img-holder">
        <img :src="pacient.img" alt="pacient name" />
      </div>
      <div class="pacient__info">
        <strong>{{ pacient.name }}</strong>
        <p>{{ pacient.description }}</p>
      </div>
    </div>
  </PacientList>
</template>
<script>
import Pacient from "../components/Pacient.vue";

export default {
  name: "PacientList",
  components: {
    Pacient,
  },
  data() {
    return {
      pacients: [
        {
          id: 1,
          age: 19,
          name: "Марiя",
          description: "1123123123",
          img: `@/assets/img/pacient-1.jpg`,
        },
        // {
        //   id: 2,
        //   age: 61,
        //   name: "Степан",
        //   description: "1123123123",
        //   img: "@/assets/img/pacient-2.jpg",
        // },
        // {
        //   id: 3,
        //   age: 58,
        //   name: "Любов",
        //   description: "1123123123",
        //   img: "@/assets/img/pacient-3.jpg",
        // },
        // {
        //   id: 4,
        //   age: 20,
        //   name: "Олександр",
        //   description: "1123123123",
        //   img: "@/assets/img/pacient-{{id}}.jpg",
        // },
        // {
        //   id: 5,
        //   age: 55,
        //   name: "Iрина",
        //   description: "1123123123",
        //   img: "@/assets/img/pacient-{{id}}.jpg",
        // },
      ],
    };
  },
  methods: {},
};
</script>