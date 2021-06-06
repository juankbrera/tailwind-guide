<template>
  <ui-section-container id="breakpoints">
    <ui-section-title>Breakpoints</ui-section-title>

    <p>
      By default Tailwind comes with 5 breakpoints to apply utilities
      conditionally at different breakpoints. To use breakpoints you need to
      prefix the desired breakpoint to the desire utility class, like
      <code>lg:text-red-600</code>, in this case, the text will be red just if
      the viewport width is greater than 1024px.
    </p>

    <ui-section-subtitle> Default Breakpoints </ui-section-subtitle>
    <ul class="ml-12 list-disc mb-6">
      <li>sm: @media (min-width: 640px) { ... }</li>
      <li>md: @media (min-width: 768px) { ... }</li>
      <li>lg: @media (min-width: 1024px) { ... }</li>
      <li>xl: @media (min-width: 1280px) { ... }</li>
      <li>2xl: @media (min-width: 1536px) { ... }</li>
    </ul>

    <ui-section-subtitle> Extending breakpoints </ui-section-subtitle>

    <!-- prettier-ignore -->
    <ui-code-block>
        // tailwind.config.js
        module.exports = {
          theme: {
            extend: {
              screens: {
                'tablet': '640px',
                'laptop': '1024px',
                'desktop': '1280px',
              }
            }
          }
        }
    </ui-code-block>
  </ui-section-container>
</template>
