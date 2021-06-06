<template>
  <ui-section-container id="colors">
    <ui-section-title>Colors</ui-section-title>
    <p>
      The following color palette can be applied to backgrounds (E.g.
      bg-red-500), text (E.g. text-gray-600) and borders (E.g. border-blue-700).
    </p>

    <div v-for="utility in colors.colorPalette.utilities" :key="utility">
      <ui-sample-grid :class="colors.colorPalette.gridClasses">
        <ui-sample-box-bordered
          v-for="level in colors.colorPalette.levels"
          :key="level"
          :class="'bg-' + utility + '-' + level"
        >
          <span
            class="font-semibold text-sm"
            :class="parseInt(level) >= 500 ? 'text-white' : 'text-black'"
          >
            {{ utility }}-{{ level }}
          </span>
        </ui-sample-box-bordered>
      </ui-sample-grid>
    </div>

    <ui-section-subtitle>
      {{ colors.examples.title }}
    </ui-section-subtitle>
    <p>
      The following examples show how to use the color palette with backgrounds,
      texts and borders.
    </p>
    <ui-sample-grid :class="colors.examples.gridClasses">
      <ui-sample-box-bordered
        v-for="utility in colors.examples.utilities"
        :key="utility"
        :class="utility"
      >
        {{ utility }}
      </ui-sample-box-bordered>
    </ui-sample-grid>

    <ui-section-subtitle>Customizing Colors</ui-section-subtitle>
    <p>
      We can extend and modify the color palette by adding our own colors to the
      Tailwind configuration file.
    </p>

    <!-- prettier-ignore -->
    <ui-code-block>
        // tailwind.config.js
        module.exports = {
          theme: {
            extend: {
              colors: {
                primary: '#6c7381',
                secondary: '#dc2626',
                'custom-gray': '#333333',
                red: {
                  450: '#f15554'
                },
              }
            }
          }
        }
    </ui-code-block>
  </ui-section-container>
</template>

<script>
export default {
  data() {
    return {
      colors: {
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
        examples: {
          title: 'Examples',
          gridClasses: 'grid-cols-3',
          utilities: ['bg-green-500', 'text-green-500', 'border-green-500'],
        },
      },
    }
  },
}
</script>
