<template>
  <section
    class="main"
    :class="{ 'main--result': this.$store.state.counter >= 15 }"
  >
    <transition-group name="fade" mode="out-in">
      <template v-if="this.$store.state.counter < 15">
        <div class="main__sidebar" key="lorem">
          <div class="main__sidebar-top">
            <router-link to="/" @click="toHome()">
              <img src="@/assets/img/icon-home.svg" alt="home" />
            </router-link>
            <button
              @click="
                reset();
                toggleReset();
              "
              id="resetBtn"
              :class="{ resetAnimate: this.resetPressed }"
            >
              <img src="@/assets/img/icon-reset.svg" alt="reset" />
            </button>
          </div>
          <div class="main__sidebar-middle">
            <span>Параметры:</span>
            <div class="main__sidebar-counters">
              <span>
                <span>
                  <img src="@/assets/img/icon-sad.svg" alt="sad" />
                </span>
                <span>{{ this.$store.state.product1 }}</span>
              </span>
              <span>
                <span>
                  <img src="@/assets/img/icon-happy.svg" alt="happy" />
                </span>
                <span>{{ this.$store.state.product2 }} </span>
              </span>
              <span>
                <span>
                  <img src="@/assets/img/icon-heart.svg" alt="heart" />
                </span>
                <span> {{ this.$store.state.product3 }}</span>
              </span>
            </div>
          </div>
          <div class="main__sidebar-bottom">
            <span>Осталось в очереди: </span>
            <span>
              <strong>{{ this.amount - this.$store.state.counter }}</strong> /{{
                this.amount
              }}
            </span>
          </div>
        </div>
        <div class="main__content" key="lorem">
          <div class="main__cards-holder">
            <Tinder
              ref="tinder"
              key-name="id"
              v-model:queue="queue"
              :max="3"
              :offset-y="1"
              @submit="onSubmit"
              :countPrep1="this.$store.state.product1"
            >
              <template #default="{ data }">
                <div class="pacient">
                  <div
                    class="pacient__img-holder"
                    :style="{ 'background-image': `url(${data.id.img})` }"
                  ></div>
                  <div class="pacient__info">
                    <strong>{{ data.id.name }}, {{ data.id.age }} рокiв</strong>
                    <p>{{ data.id.description }}</p>
                  </div>
                </div>
              </template>
              <template #like>
                <img class="like-pointer" src="@/assets/img/stamp-3.png" />
              </template>
              <template #nope>
                <img
                  class="nope-pointer"
                  slot="nope"
                  src="@/assets/img/stamp-1.png"
                />
              </template>
              <template #super>
                <img
                  class="super-pointer"
                  slot="super"
                  src="@/assets/img/stamp-2.png"
                />
              </template>
              <template #down>
                <img
                  class="down-pointer"
                  slot="down"
                  src="/images/down-txt.png"
                />
              </template>
              <template #rewind>
                <img
                  class="rewind-pointer"
                  slot="rewind"
                  src="/images/rewind-txt.png"
                />
              </template>
            </Tinder>
          </div>
          <div class="main__actions-holder">
            <button class="btn btn--purple" @click="decide('nope')">
              Препарат 1
            </button>
            <button class="btn btn--blue" @click="decide('super')">
              Препарат 2
            </button>
            <button class="btn btn--yellow" @click="decide('like')">
              Препарат 3
            </button>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="main__result-content" key="lorem">
          <router-link to="/" @click="toHome()">
            <img src="@/assets/img/icon-home--white.svg" alt="home" />
          </router-link>
          <div class="main__result-holder">
            <div class="main__result-item">
              <span>{{ toPercentage(this.$store.state.product1) }} %</span>
              <span>Препарат 1:</span>
            </div>
            <div class="main__result-item">
              <span>{{ toPercentage(this.$store.state.product2) }} %</span>
              <span>Препарат 2:</span>
            </div>
            <div class="main__result-item">
              <span>{{ toPercentage(this.$store.state.product3) }} %</span>
              <span>Препарат 3:</span>
            </div>
          </div>
          <div class="main__result-description">
            <span>Ваш результат:</span>
            <span>«Что я здесь делаю?»</span>
            <p>
              Это тестовое задание, так что не будем углубляться в глубины
              проблем фармацевтов
            </p>
          </div>
          <button @click="reset()" class="btn btn--gray">
            Попробовать еще
          </button>
        </div>
      </template>
    </transition-group>
  </section>
</template>

<script>
import Tinder from "@/components/vue-tinder/Tinder.vue";
import source from "@/pacients";

export default {
  name: "Main",
  components: {
    Tinder,
  },
  data() {
    return {
      product1: this.$store.state.product1,
      product2: this.$store.state.product2,
      product3: this.$store.state.product3,

      counter: this.$store.state.counter,

      amount: 15,
      multiply: 3,
      queue: [],
      offset: 0,
      history: [],

      resetPressed: false,
    };
  },
  created() {
    this.mock();
  },
  mounted() {
    this.reset();
  },
  updated() {},
  methods: {
    toPercentage(product) {
      const percent = Math.round((product * 100) / this.amount);
      return percent;
    },

    reset() {
      this.$store.commit("countReset");
      this.$store.commit("resetProducts");

      setTimeout(() => {
        this.$refs.tinder.rewind(
          this.history.splice(-Math.ceil(Math.random() * this.count))
        );
      }, 5);
    },
    toHome() {
      setTimeout(() => {
        this.$store.commit("countReset");
        this.$store.commit("resetProducts");
      }, 350);
    },
    toggleReset() {
      this.resetPressed = !this.resetPressed;
      setTimeout(() => {
        this.resetPressed = !this.resetPressed;
      }, 300);
    },
    mock(count = 5, append = true) {
      const list = [];
      for (let j = 0; j < this.multiply; j++) {
        // console.log(list, "list");
        for (let i = 0; i < count; i++) {
          list.push({ id: source[this.offset] });
          this.offset++;
        }
      }
      // console.log(this.queue, "queue");

      if (append) {
        this.queue = this.queue.concat(list);
      } else {
        this.queue.unshift(...list);
      }
      // console.log(this.queue, "queue");
    },
    onSubmit({ item }) {
      if (this.queue.length < 1) {
        this.mock();
      }
      this.history.push(item);
    },
    async decide(choice) {
      if (choice === "rewind") {
        if (this.history.length) {
          //一个个 rewind
          // this.$refs.tinder.rewind([this.history.pop()])
          // 一次性 rewind 全部
          // this.$refs.tinder.rewind(this.history)
          // this.history = []
          // 一次随机 rewind 多个
          this.$refs.tinder.rewind(
            this.history.splice(-Math.ceil(Math.random() * 3))
          );
          // 非 api调用的添加
          // this.queue.unshift(this.history.pop())
          // this.queue.push(this.history.pop())
          // 非头部添加
          // this.queue.splice(1, 0, this.history.pop())
          // 一次性 rewind 多个，并且含有非头部添加的 item
          // this.queue.unshift(this.history.pop())
          // this.queue.unshift(...this.history)
        }
      } else if (choice === "help") {
        //
      } else {
        this.$refs.tinder.decide(choice);
      }
    },
  },
};
</script>

