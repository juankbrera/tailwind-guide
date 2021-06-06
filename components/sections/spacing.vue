<template>
  <ui-section-container id="spacing">
    <ui-section-title>Spacing</ui-section-title>

    <ui-section-subtitle>Margin & Padding Utilities</ui-section-subtitle>
    <table>
      <thead>
        <tr>
          <th>Margin Utilities</th>
          <th>Padding Utilities</th>
          <th>Size</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="number in spacing.numbers" :key="number">
          <td>m-{{ number }}</td>
          <td>p-{{ number }}</td>
          <td>{{ number * 0.25 }}rem</td>
        </tr>
      </tbody>
    </table>

    <ui-section-subtitle>
      {{ spacing.margin.title }}
    </ui-section-subtitle>
    <ui-sample-grid :class="spacing.margin.gridClasses">
      <div
        v-for="example in spacing.margin.examples"
        :key="example.title"
        class="flex items-center justify-center"
      >
        <div class="flex bg-gray-200 rounded-xl w-full">
          <ui-sample-box-bordered class="w-full h-48" :class="example.utility">
            <p>{{ example.utility }}</p>
            <p>{{ example.title }}</p>
          </ui-sample-box-bordered>
        </div>
      </div>
    </ui-sample-grid>

    <ui-section-subtitle>
      {{ spacing.padding.title }}
    </ui-section-subtitle>
    <ui-sample-grid :class="spacing.padding.gridClasses">
      <div
        v-for="example in spacing.padding.examples"
        :key="example.title"
        class="flex items-center justify-center"
      >
        <div
          class="flex bg-gray-200 rounded-xl w-full"
          :class="example.utility"
        >
          <ui-sample-box-bordered class="w-full h-48">
            <p>{{ example.utility }}</p>
            <p>{{ example.title }}</p>
          </ui-sample-box-bordered>
        </div>
      </div>
    </ui-sample-grid>
  </ui-section-container>
</template>

<script>
export default {
  data() {
    return {
      spacing: {
        numbers: [
          0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16,
          20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96,
        ],
        margin: {
          title: 'Margin by Sides',
          gridClasses: 'grid-cols-4',
          examples: [
            {
              title: 'Margin Left',
              utility: 'ml-6',
            },
            {
              title: 'Margin Top',
              utility: 'mt-6',
            },
            {
              title: 'Margin Right',
              utility: 'mr-6',
            },
            {
              title: 'Margin Bottom',
              utility: 'mb-6',
            },
            {
              title: 'All Sides',
              utility: 'm-6',
            },
            {
              title: 'Horizontal Margin',
              utility: 'mx-6',
            },
            {
              title: 'Vertical Margin',
              utility: 'my-6',
            },
            {
              title: 'Negative Margin',
              utility: '-mt-6 ml-3 mr-3 mb-3',
            },
          ],
        },
        padding: {
          title: 'Padding by Sides',
          gridClasses: 'grid-cols-4',
          examples: [
            {
              title: 'Padding Left',
              utility: 'pl-6',
            },
            {
              title: 'Padding Top',
              utility: 'pt-6',
            },
            {
              title: 'Padding Right',
              utility: 'pr-6',
            },
            {
              title: 'Padding Bottom',
              utility: 'pb-6',
            },
            {
              title: 'All Sides',
              utility: 'p-6',
            },
            {
              title: 'Horizontal Padding',
              utility: 'px-6',
            },
            {
              title: 'Vertical Padding',
              utility: 'py-6',
            },
          ],
        },
      },
    }
  },
}
</script>
