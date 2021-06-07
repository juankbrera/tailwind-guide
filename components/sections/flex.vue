<template>
  <ui-section-container id="flex">
    <ui-section-title>Flex</ui-section-title>

    <div v-for="property in flex" :key="property.title">
      <ui-section-subtitle>{{ property.title }}</ui-section-subtitle>
      <div :class="property.cols" class="grid gap-6">
        <div v-for="utility in property.utilities" :key="utility">
          <ui-sample-container :class="utility.classes">
            <ui-sample-box-bordered
              v-for="box in property.boxes"
              :key="box"
              class="square-box"
            >
              {{ box }}
            </ui-sample-box-bordered>
          </ui-sample-container>
          <p class="text-center -mt-6 mb-6">{{ utility.title }}</p>
        </div>
      </div>
    </div>
  </ui-section-container>
</template>

<script>
export default {
  data() {
    return {
      flex: {
        flexDirection: {
          title: 'Flex Direction',
          boxes: 4,
          cols: 'grid-cols-2',
          utilities: [
            {
              title: 'flex-row',
              classes: 'flex flex-row',
            },
            {
              title: 'flex-row-reverse',
              classes: 'flex flex-row-reverse',
            },
            {
              title: 'flex-col',
              classes: 'flex flex-col',
            },
            {
              title: 'flex-col-reverse',
              classes: 'flex flex-col-reverse',
            },
          ],
        },
        flexWrap: {
          title: 'Flex Wrap',
          boxes: 10,
          cols: 'grid-cols-3 auto-rows-fr',
          utilities: [
            {
              title: 'flex-nowrap',
              classes: 'flex flex-nowrap',
            },
            {
              title: 'flex-wrap',
              classes: 'flex flex-wrap',
            },
            {
              title: 'flex-wrap-reverse',
              classes: 'flex flex-wrap-reverse',
            },
          ],
        },
        justifyContent: {
          title: 'Justify Content',
          boxes: 3,
          cols: 'grid-cols-2',
          utilities: [
            {
              title: 'justify-start',
              classes: 'flex justify-start',
            },
            {
              title: 'justify-center',
              classes: 'flex justify-center',
            },
            {
              title: 'justify-end',
              classes: 'flex justify-end',
            },
            {
              title: 'justify-between',
              classes: 'flex justify-between',
            },
            {
              title: 'justify-around',
              classes: 'flex justify-around',
            },
            {
              title: 'justify-evenly',
              classes: 'flex justify-evenly',
            },
          ],
        },
        alignItems: {
          title: 'Align Items',
          boxes: 4,
          cols: 'grid-cols-3',
          utilities: [
            {
              title: 'items-start',
              classes: 'flex items-start h-48',
            },
            {
              title: 'items-center',
              classes: 'flex items-center h-48',
            },
            {
              title: 'items-end',
              classes: 'flex items-end h-48',
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.square-box {
  @apply h-12 w-12;
}
</style>
