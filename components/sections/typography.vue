<template>
  <ui-section-container id="typography">
    <ui-section-title>Typography</ui-section-title>

    <ui-section-subtitle>
      {{ typography.fontSize.title }}
    </ui-section-subtitle>
    <ui-sample-grid :class="typography.fontSize.gridClasses">
      <ui-sample-bordered-box
        v-for="utility in typography.fontSize.utilities"
        :key="utility"
        :class="utility"
      >
        {{ utility }}
      </ui-sample-bordered-box>
    </ui-sample-grid>

    <ui-section-subtitle>
      {{ typography.fontWeight.title }}
    </ui-section-subtitle>
    <ui-sample-grid :class="typography.fontWeight.gridClasses">
      <ui-sample-bordered-box
        v-for="utility in typography.fontWeight.utilities"
        :key="utility"
        :class="utility"
      >
        {{ utility }}
      </ui-sample-bordered-box>
    </ui-sample-grid>

    <ui-section-subtitle>
      {{ typography.letterSpacing.title }}
    </ui-section-subtitle>
    <ui-sample-grid :class="typography.letterSpacing.gridClasses">
      <ui-sample-bordered-box
        v-for="utility in typography.letterSpacing.utilities"
        :key="utility"
        :class="utility"
      >
        {{ utility }}
      </ui-sample-bordered-box>
    </ui-sample-grid>

    <ui-section-subtitle>
      {{ typography.lineHeight.title }}
    </ui-section-subtitle>
    <ui-sample-grid :class="typography.lineHeight.gridClasses">
      <ui-sample-bordered-box
        v-for="utility in typography.lineHeight.utilities"
        :key="utility"
        :class="utility"
      >
        <p>{{ utility }}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
          quia temporibus eveniet a libero incidunt suscipit laborum, rerum
          accusantium modi quidem, ipsam illum quis sed voluptatum quae eum
          fugit earum.
        </p>
      </ui-sample-bordered-box>
    </ui-sample-grid>

    <ui-section-subtitle>
      {{ typography.otherUtilities.title }}
    </ui-section-subtitle>
    <ui-sample-grid :class="typography.otherUtilities.gridClasses">
      <ui-sample-bordered-box
        v-for="utility in typography.otherUtilities.utilities"
        :key="utility"
      >
        <div class="w-full" :class="utility">
          {{ utility }}
        </div>
      </ui-sample-bordered-box>
    </ui-sample-grid>
  </ui-section-container>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      typography: {
        fontSize: {
          title: 'Font Size',
          gridClasses: 'grid-cols-6',
          utilities: [
            'text-xs',
            'text-sm',
            'text-lg',
            'text-xl',
            'text-2xl',
            'text-4xl',
          ],
        },
        fontWeight: {
          title: 'Font Weight',
          gridClasses: 'grid-cols-6',
          utilities: [
            'font-thin',
            'font-light',
            'font-normal',
            'font-semibold',
            'font-bold',
            'font-black',
          ],
        },
        letterSpacing: {
          title: 'Letter Spacing',
          gridClasses: 'grid-cols-3',
          utilities: [
            'tracking-tighter',
            'tracking-tight',
            'tracking-normal',
            'tracking-wide',
            'tracking-wider',
            'tracking-widest',
          ],
        },
        lineHeight: {
          title: 'Line Height',
          gridClasses: 'grid-cols-3',
          utilities: [
            'leading-none',
            'leading-tight',
            'leading-snug',
            'leading-normal',
            'leading-relaxed',
            'leading-loose',
          ],
        },
        otherUtilities: {
          title: 'Other Utilities',
          gridClasses: 'grid-cols-6',
          utilities: [
            'italic',
            'underline',
            'line-through',
            'text-left',
            'text-center',
            'text-right',
          ],
        },
      },
    }
  },
}
</script>
