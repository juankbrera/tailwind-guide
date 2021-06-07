<template>
  <ui-section-container id="breakpoints">
    <ui-section-title>Hover & Focus</ui-section-title>

    <p>
      Similar to how Tailwind handles breakpoints, styling elements on hover,
      focus, and more can be accomplished by prefixing utilities with the
      appropriate variant.
    </p>

    <ui-section-subtitle> Hover / Active </ui-section-subtitle>
    <div class="mb-6">
      <div class="grid grid-cols-2 gap-6 auto-rows-fr">
        <ui-sample-container class="flex items-center justify-center">
          <ui-button class="mb-0 mt-6">Hover Me</ui-button>
        </ui-sample-container>

        <!-- prettier-ignore -->
        <ui-code-block>
          hover:bg-green-500 active:bg-red-500
        </ui-code-block>
      </div>
      <small class="block w-full text-right mt-2">
        *The active variant is not enabled by default, <br />
        in order to be used we need to enable that variant on the Tailwind
        configuration file.
      </small>
    </div>

    <ui-section-subtitle> Focus </ui-section-subtitle>
    <div class="grid grid-cols-2 gap-6 auto-rows-fr mb-6">
      <ui-sample-container class="flex items-center justify-center">
        <ui-input class="mt-6" placeholder="Click Here"></ui-input>
      </ui-sample-container>

      <!-- prettier-ignore -->
      <ui-code-block>
          focus:border-green-500
      </ui-code-block>
    </div>
  </ui-section-container>
</template>
