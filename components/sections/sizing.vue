<template>
  <ui-section-container id="sizing">
    <ui-section-title>Sizing</ui-section-title>

    <ui-section-subtitle>
      {{ sizing.fixedSizeUtilities.title }}
    </ui-section-subtitle>
    <table>
      <thead>
        <tr>
          <th>Width Utilities</th>
          <th>Height Utilities</th>
          <th>Maximun Height Utilities</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="number in sizing.fixedSizeUtilities.numbers" :key="number">
          <td>w-{{ number }}</td>
          <td>h-{{ number }}</td>
          <td>max-h-{{ number }}</td>
          <td>{{ number * 0.25 }}rem</td>
        </tr>

        <tr
          v-for="fraction in sizing.fixedSizeUtilities.fractions"
          :key="fraction"
        >
          <td>h-{{ fraction }}</td>
          <td>w-{{ fraction }}</td>
          <td>--</td>
          <td>
            {{
              (
                (parseInt(fraction.split('/')[0]) /
                  parseInt(fraction.split('/')[1])) *
                100
              ).toFixed(2)
            }}%
          </td>
        </tr>

        <tr
          v-for="utility in sizing.fixedSizeUtilities.others"
          :key="utility.name"
        >
          <td>w-{{ utility.name }}</td>
          <td>h-{{ utility.name }}</td>
          <td>max-h-{{ utility.name }}</td>
          <td>{{ utility.value }}</td>
        </tr>
      </tbody>
    </table>

    <ui-section-subtitle>
      {{ sizing.minumunSizeUtilities.title }}
    </ui-section-subtitle>
    <table>
      <thead>
        <tr>
          <th>Utility</th>
          <th>Property</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="utility in sizing.minumunSizeUtilities.utilities"
          :key="utility"
        >
          <td>{{ utility.name }}</td>
          <td>{{ utility.property }}</td>
        </tr>
      </tbody>
    </table>

    <ui-section-subtitle>
      {{ sizing.maximunWidthUtilities.title }}
    </ui-section-subtitle>
    <table>
      <thead>
        <tr>
          <th>Utility</th>
          <th>Property</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="utility in sizing.maximunWidthUtilities.utilities"
          :key="utility"
        >
          <td>{{ utility.name }}</td>
          <td>{{ utility.property }}</td>
        </tr>
      </tbody>
    </table>

    <ui-section-subtitle> Examples </ui-section-subtitle>
    <ui-sample-grid :class="sizing.widthExamples.gridClasses">
      <ui-sample-bordered-box
        v-for="utility in sizing.widthExamples.utilities"
        :key="utility"
        :class="utility"
      >
        {{ utility }}
      </ui-sample-bordered-box>
    </ui-sample-grid>

    <ui-sample-grid :class="sizing.heightExamples.gridClasses">
      <ui-sample-bordered-box
        v-for="utility in sizing.heightExamples.utilities"
        :key="utility"
        :class="utility"
      >
        {{ utility }}
      </ui-sample-bordered-box>
    </ui-sample-grid>
  </ui-section-container>
</template>

<script>
export default {
  data() {
    return {
      sizing: {
        fixedSizeUtilities: {
          title: 'Fixed Width, Fixed Height & Max Height Utilities',
          numbers: [
            0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14,
            16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
          ],
          fractions: [
            '1/2',
            '1/3',
            '2/3',
            '1/4',
            '2/4',
            '3/4',
            '1/5',
            '2/5',
            '3/5',
            '4/5',
            '1/6',
            '2/6',
            '3/6',
            '4/6',
            '5/6',
          ],
          others: [
            { name: 'full', value: '100%' },
            { name: 'screen', value: '100vh / 100vw (Viewport)' },
          ],
        },
        minumunSizeUtilities: {
          title: 'Minimun Height & Width Utilities',
          utilities: [
            { name: 'min-w-full', property: 'min-width: 100%' },
            { name: 'min-h-full', property: 'min-height: 100%' },
            { name: 'min-h-screen', property: 'min-height: 100vh' },
          ],
        },
        maximunWidthUtilities: {
          title: 'Maximun Width Utilities',
          utilities: [
            { name: 'max-w-xs', property: 'max-width: 20rem' },
            { name: 'max-w-sm', property: 'max-width: 24rem' },
            { name: 'max-w-md', property: 'max-width: 28rem' },
            { name: 'max-w-lg', property: 'max-width: 32rem' },
            { name: 'max-w-xl', property: 'max-width: 36rem' },
            { name: 'max-w-2xl', property: 'max-width: 42rem' },
            { name: 'max-w-3xl', property: 'max-width: 48rem' },
            { name: 'max-w-4xl', property: 'max-width: 56rem' },
            { name: 'max-w-5xl', property: 'max-width: 64rem' },
            { name: 'max-w-6xl', property: 'max-width: 72rem' },
            { name: 'max-w-7xl', property: 'max-width: 80rem' },
            { name: 'max-w-screen-sm', property: 'max-width: 640px' },
            { name: 'max-w-screen-md', property: 'max-width: 768px' },
            { name: 'max-w-screen-lg', property: 'max-width: 1024px' },
            { name: 'max-w-screen-xl', property: 'max-width: 1280px' },
            { name: 'max-w-screen-2xl', property: 'max-width: 1536px' },
          ],
        },
        widthExamples: {
          gridClasses: 'grid-cols-1',
          utilities: ['w-full', 'w-full max-w-3xl', 'w-1/4', 'w-48'],
        },
        heightExamples: {
          gridClasses: 'grid-cols-5',
          utilities: ['h-full', 'h-64', 'h-40', 'h-1/4', 'h-36  w-36'],
        },
      },
    }
  },
}
</script>
