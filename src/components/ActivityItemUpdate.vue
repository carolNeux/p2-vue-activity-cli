<template>
  <article class="post">
    <div class="activity-title">
      <!-- TODO: Add v-model -->
      <i class="fas fa-cog activity-settings" @click="isMenuDisplayed = !isMenuDisplayed" />
      <input v-model="modifiedActivity.title" type="text" class="input">
    </div>
    <div class="activity-category">
      <!-- TODO: add v-model and iterate categories in option  -->
      <select v-model="modifiedActivity.category" class="select">
        <option disabled value="">Please select one</option>
        <option v-for="category in categories"
                :key="category.id"
                :value="category.id">
          {{ category.text }}
        </option>
      </select>
    </div>
    <div class="control activity-notes">
      <!-- TODO: Add v-model here -->
      <textarea v-model="modifiedActivity.notes"
                class="textarea"
                placeholder="Write some notes here" />
    </div>
    <div class="media">
      <div class="media-left">
        <p class="image is-32x32">
          <img src="../assets/user.png">
        </p>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <a href="#">Filip Jerga</a> updated {{ modifiedActivity.updatedAt | prettyTime }} &nbsp;
          </p>
        </div>
      </div>
      <div class="media-right">
        <!-- TODO: Add v-model here -->
        <input id="progress"
               v-model.number="modifiedActivity.progress"
               type="range"
               name="progress"
               min="0" max="100" value="90" step="10">
        <label for="progress">{{ modifiedActivity.progress }} %</label>
      </div>
    </div>
    <div v-if="isMenuDisplayed" class="activity-controll">
      <!-- TODO: create function 'updateActivity' to console log 'activity' -->
      <a class="button is-warning" @click="updateActivity">Commit Update</a>
      <!-- TODO: Emit Event to Cancel Edit Mode -->
      <a class="button is-danger" @click="$emit('toggleUpdate', false)">Cancel</a>
    </div>
  </article>
</template>

<script>
  import store from '@/store'
  import textUtility from '@/mixins/textUtility'
  export default {
    mixins: [textUtility],
    props: {
      categories: {
        type: Object,
        required: true
      },
      activity: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        isMenuDisplayed: true,
        modifiedActivity: {...this.activity}
      }
    },
    methods: {
      updateActivity () {
        debugger
        store.updateActivity(this.modifiedActivity)
          .then(() => {
            this.$emit('toggleUpdate', false)
          })
      }
    }
  }
</script>

<style scoped>
  .title{
    margin-bottom: 10px;
  }
  .activity-title {
    margin-bottom: 10px;
    display: block;
  }
  /* i{
    margin-bottom: 10px;
  } */
  .activity-category{
    margin-bottom:10px;
  }
  .activity-notes{
    margin-bottom:10px;
  }
  .activity-settings {
    float: right;
    font-size: 22px;
  }
  .activity-settings:hover {
      cursor: pointer;
    }
  .activity-controll {
    margin: 20px 0 0 0;
    margin-right: 5px;
  }
  .button {
    margin-right: 5px;
    }
</style>