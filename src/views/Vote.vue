<template>
  <div>
    <h1>Vote</h1>
    <div>
      <!--      <VoteOptions :action="handleClick"/>-->
      <!--      <hr>-->

      <VoteOptions>
        <template #header>
          <h2>Custom</h2>
        </template>
        <template v-slot:item="{ optionItem }">
          <div :item="optionItem" @click="handleClick(optionItem)">
            <span
              style="color: white; padding: 10px"
              :style="{ backgroundColor: optionItem.color }"
            >
              {{ optionItem.id }}
              {{ optionItem.label }}
            </span>
          </div>
        </template>
      </VoteOptions>
    </div>
  </div>
</template>

<script>
import VoteOptions from "@/components/VoteOptions.vue";
export default {
  name: "Vote",
  components: { VoteOptions },
  methods: {
    handleClick(item) {
      // alert(item)
      console.log(item.id);
    }
  }
};
</script>

<style scoped></style>
