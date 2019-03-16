<template>
  <div class="vote-options">
    <slot name="header">
      <h2>Default Header</h2>
    </slot>
    
    <ul>
      <slot>
        <slot v-for="(option) in voteOptions"
              name="item">
          <li>
            <BaseButton>
              {{option.label}}
              {{option.color}}
            </BaseButton>
          </li>
        </slot>
      </slot>
    </ul>
  </div>
</template>

<script>
  import BaseButton from '@/components/BaseButton.vue';

  export default {
    name: "VoteOptions",
    data: () => {
      return {
        voteOptions: [
          {
            id: 0,
            label: 'Yes',
            color: 'green',
          }, {
            id: 1,
            label: 'Not sure',
            color: 'orange',
          }, {
            id: 2,
            label: 'No',
            color: 'red',
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
