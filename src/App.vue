<template>
  <h2>My Friends</h2>
  <ul>
    <!-- <friend-contact
      :key="friend.name"
      v-for="friend in friends"
      :id="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :is-favorite="friend.isFavorite"      
      @toggle-favorite="toggleFavoriteStatus"
    ></friend-contact> -->

    <!-- bind all props using v-bind -->
    <!-- use this when you need to pass all keys inside an object -->    
    <friend-contact
      :key="friend.name"
      v-for="friend in friends"
      v-bind="friend"
      @toggle-favorite="toggleFavoriteStatus"
      @delete-friend="deleteFriend"
    ></friend-contact>
  </ul>
  <h3> Add Friend: </h3>
  <new-friend @add-friend="addFriend"></new-friend>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      friends: [
        {
          id: '1',
          name: "Anurup Raveendran",
          phoneNumber: "1920029119200291",
          emailAddress: "anurup@raveedran.me",
          isFavorite: true
        },
        {
          id: '2',
          name: "Arun Raveendran",
          phoneNumber: "1230029119200291",
          emailAddress: "arun@raveedran.me",
          isFavorite: false
        },
      ],
    };
  },
  methods: {
      toggleFavoriteStatus(friendId) {
        console.log('friendId', friendId)
          const foundFriend = this.friends.find(friend => {
            return friend.id === friendId
          });

          if (foundFriend) {
            foundFriend.isFavorite = !foundFriend.isFavorite;
          }

      },
      addFriend(friend) {
        this.friends.push(friend);
      },
      deleteFriend(friendId) {

        // one method
        // const foundFriendIndex = this.friends.findIndex(friend => {
        //     return friend.id === friendId
        // });

        // if (foundFriendIndex !== -1) {
        //   this.friends.splice(foundFriendIndex, 1);
        // }

        // much simpler and concise method | from tutorial
        this.friends = this.friends.filter(friend => friend.id !== friendId);
      }
  }
};
</script>
