<template>
  <div class="vote-options">
    <slot name="header">
      <h2>Default Header</h2>
    </slot>
    
    <ul>
      <slot>
        <slot v-for="(option) in voteOptions"
              name="item"
              :optionItem="option"
        >
          <li :key="option.id"
              class="option">
            <BaseButton :style="{color: option.color, borderColor: option.color}">
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
    components: {BaseButton},
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

<style lang="scss" scoped>
  ul {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .option {
    margin: 10px;
    color: white;
    padding: 20px;
  }
</style>
