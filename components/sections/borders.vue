<template>
  <ui-section-container id="borders">
    <ui-section-title>Borders</ui-section-title>

    <div v-for="group in borders" :key="group.title">
      <ui-section-subtitle>
        {{ group.title }}
      </ui-section-subtitle>
      <ui-sample-grid :class="group.gridClasses">
        <div
          v-for="utility in group.utilities"
          :key="utility"
          class="text-center bg-white border-2 border-black p-6 shadow-lg"
          :class="utility"
        >
          {{ utility }}
        </div>
      </ui-sample-grid>
    </div>
  </ui-section-container>
</template>

<script>
export default {
  data() {
    return {
      borders: {
        radius: {
          title: 'Radius',
          gridClasses: 'grid-cols-4',
          utilities: [
            'rounded-sm',
            'rounded',
            'rounded-md',
            'rounded-lg',
            'rounded-xl',
            'rounded-2xl',
            'rounded-3xl',
            'rounded-full',
          ],
        },
        radiusSides: {
          title: 'Radius (sides)',
          gridClasses: 'grid-cols-4',
          utilities: [
            'rounded-l-xl',
            'rounded-t-xl',
            'rounded-b-xl',
            'rounded-r-xl',
          ],
        },
        radiusCorners: {
          title: 'Radius (corners)',
          gridClasses: 'grid-cols-4',
          utilities: [
            'rounded-tl-xl',
            'rounded-tr-xl',
            'rounded-br-xl',
            'rounded-bl-xl',
          ],
        },
        width: {
          title: 'Width',
          gridClasses: 'grid-cols-4',
          utilities: ['border', 'border-2', 'border-4', 'border-8'],
        },
        style: {
          title: 'Style',
          gridClasses: 'grid-cols-3',
          utilities: ['border-solid', 'border-dashed', 'border-dotted'],
        },
      },
    }
  },
}
</script>
