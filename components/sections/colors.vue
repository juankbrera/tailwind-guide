<template>
  <ui-section-container>
    <ui-section-title>Colors</ui-section-title>
    <p>
      The following color pallet can be applied to backgrounds (E.g.
      bg-red-500), text (E.g. text-gray-600) and borders (E.g. border-blue-700).
    </p>

    <div v-for="utility in typography.colorPalette.utilities" :key="utility">
      <ui-section-subtitle>{{ utility }}</ui-section-subtitle>
      <ui-sample-grid :class="typography.colorPalette.gridClasses">
        <ui-sample-bordered-box
          v-for="level in typography.colorPalette.levels"
          :key="level"
          :class="'bg-' + utility + '-' + level"
        >
          <span
            class="font-semibold text-sm"
            :class="parseInt(level) >= 500 ? 'text-white' : 'text-black'"
          >
            {{ utility }}-{{ level }}
          </span>
        </ui-sample-bordered-box>
      </ui-sample-grid>
    </div>
  </ui-section-container>
</template>

<script>
export default {
  data() {
    return {
      typography: {
        colorPalette: {
          title: 'Color Palette',
          gridClasses: 'grid-cols-5',
          utilities: [
            'gray',
            'red',
            'yellow',
            'green',
            'blue',
            'indigo',
            'purple',
            'pink',
          ],
          levels: [
            '50',
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
          ],
        },
      },
    }
  },
}
</script>
