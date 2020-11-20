<template>
  <li>
    <h2>
      <span class="name" v-text="name"></span
      ><span
        class="favorite-status"
        v-text="isFavorite ? '(Favorite)' : ''"
      ></span>
    </h2>
    <button @click="toggleDetails" v-text="buttonDetailsText"></button>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="deleteFriend">Delete Friend</button>
    <ul v-if="showDetails">
      <li><strong>Phone: </strong><span v-text="phoneNumber"></span></li>
      <li><strong>Email: </strong><span v-text="emailAddress"></span></li>
    </ul>
  </li>
</template>
<script>
export default {
  name: "App",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  // Simple definition
  //   emits: ["toggle-favorite"],
  // definition with validation
  emits: {
      'toggle-favorite': function(friendId){
          if (friendId) {
              return true;
          } else {
              console.warn('Friend ID is missing');
              return false;
          }
      }
  },
  data() {
    return {
      showDetails: false,
    };
  },
  computed: {
    buttonDetailsText() {
      return this.showDetails ? "Hide Details" : "Show Details";
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id)
    },
    deleteFriend() {
        if (confirm('Are you sure you want to delete this friend?')) {
            this.$emit('delete-friend', this.id);
        }
    }
  },
};
</script>