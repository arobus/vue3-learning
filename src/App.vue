<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3>Output course goal with comp api</h3>
  <h4>{{ sCourseGoal }}</h4>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <h3>Separate Refs</h3>
  <h4 v-if="showCourseGoal">{{ courseGoal }}</h4>
  <button @click="toggleCourseGoal">Toggle Goal</button>
  <!-- => Ref Object -->
  <br>
  <br>
  <br>
  <h3>Ref Object</h3>
  <h4 v-if="goalObj.showCourseGoal">{{ goalObj.courseGoal }}</h4>
  <button @click="toggleCourseGoalObj">Toggle Goal</button>
  <!-- => Reactive Object -->
  <br>
  <br>
  <br>
  <h3>Reactive Object</h3>
  <h4 v-if="goalRObj.showCourseGoal">{{ goalRObj.courseGoal }}</h4>
  <button @click="toggleCourseGoalRObj">Toggle Goal</button>
  <!-- Task 4: Also solve the assignment with the Options API -->
  <br>
  <br>
  <br>
  <h3>W/ Options API</h3>
  <h4 v-if="showCourseOGoal">{{ courseOGoal }}</h4>
  <button @click="toggleCourseOGoal">Toggle Goal</button>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup() {
    const staticCourseGoal = 'OUTPUT COURSE GOAL';

    const cGoal = ref('OUTPUT COURSE GOAL');

    const showCGoal = ref(true);

    function toggleCGoal() {
      showCGoal.value = !showCGoal.value;
    }


    const cGoalObj = ref({
      courseGoal: 'OUTPUT COURSE GOAL',
      showCourseGoal: true
    });

    function toggleCGoalObj() {
      cGoalObj.value.showCourseGoal = !cGoalObj.value.showCourseGoal;
    }

    const cGoalRObj = reactive({
      courseGoal: 'OUTPUT COURSE GOAL',
      showCourseGoal: true
    });

    function toggleCGoalRObj() {
      cGoalRObj.showCourseGoal = !cGoalRObj.showCourseGoal;
    }



    return {
      sCourseGoal: staticCourseGoal,

      // separate refs
      courseGoal: cGoal,
      showCourseGoal: showCGoal,
      toggleCourseGoal: toggleCGoal,

      // ref object
      goalObj: cGoalObj,
      toggleCourseGoalObj: toggleCGoalObj,

      // reactive object
      goalRObj: cGoalRObj,
      toggleCourseGoalRObj: toggleCGoalRObj

    };
  },
  data() {
    return {
      courseOGoal: 'OUTPUT COURSE GOAL',
      showCourseOGoal: true
    }
  },
  methods: {
    toggleCourseOGoal() {
      this.showCourseOGoal = !this.showCourseOGoal;
    }
  }
}
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>