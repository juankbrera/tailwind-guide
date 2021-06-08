<template>
  <ui-section-container id="grid">
    <ui-section-title>Grid</ui-section-title>

    <ui-section-subtitle>Template Columns</ui-section-subtitle>

    <ui-sample-container class="grid grid-cols-4">
      <ui-sample-box-bordered> 1 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 2 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 3 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 4 </ui-sample-box-bordered>
    </ui-sample-container>
    <p class="text-center -mt-6 mb-6">grid-cols-4</p>

    <ui-sample-container class="grid grid-cols-3">
      <ui-sample-box-bordered> 1 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 2 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 3 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 4 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 5 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 6 </ui-sample-box-bordered>
    </ui-sample-container>
    <p class="text-center -mt-6 mb-6">grid-cols-2</p>

    <ui-section-subtitle>Template Rows</ui-section-subtitle>

    <ui-sample-container class="grid grid-cols-2 grid-rows-4">
      <ui-sample-box-bordered> 1 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 2 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 3 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 4 </ui-sample-box-bordered>
    </ui-sample-container>
    <p class="text-center -mt-6 mb-6">grid-rows-4</p>

    <ui-section-subtitle>Column Span / Row Span</ui-section-subtitle>

    <ui-sample-container class="grid grid-cols-3">
      <ui-sample-box-bordered class="col-span-2">
        1 (col-span-2)
      </ui-sample-box-bordered>
      <ui-sample-box-bordered class="row-span-2">
        2 (row-span-2)
      </ui-sample-box-bordered>
      <ui-sample-box-bordered> 3 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 4 </ui-sample-box-bordered>
      <ui-sample-box-bordered class="col-span-3">
        5 (col-span-3)
      </ui-sample-box-bordered>
    </ui-sample-container>
    <p class="text-center -mt-6 mb-6">grid-cols-2</p>

    <ui-section-subtitle>Start / End</ui-section-subtitle>

    <ui-sample-container class="grid grid-cols-6 grid-rows-4">
      <ui-sample-box-bordered
        class="col-start-2 col-end-6 row-start-2 row-end-4"
      >
        col-start-2 col-end-6
        <br />
        row-start-2 row-end-4
      </ui-sample-box-bordered>
      <ui-sample-box-bordered
        class="col-start-5 col-end-7 row-start-3 row-end-4"
      >
        col-start-5 col-end-7
        <br />
        row-start-3 row-end-4
      </ui-sample-box-bordered>
    </ui-sample-container>
    <p class="text-center -mt-6 mb-6">grid-cols-6 grid-rows-4</p>

    <ui-section-subtitle>Gap</ui-section-subtitle>

    <ui-sample-container class="grid grid-cols-3 gap-6">
      <ui-sample-box-bordered class="col-span-2">
        1 (col-span-2)
      </ui-sample-box-bordered>
      <ui-sample-box-bordered class="row-span-2">
        2 (row-span-2)
      </ui-sample-box-bordered>
      <ui-sample-box-bordered> 3 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 4 </ui-sample-box-bordered>
      <ui-sample-box-bordered class="col-span-3">
        5 (col-span-3)
      </ui-sample-box-bordered>
    </ui-sample-container>
    <p class="text-center -mt-6 mb-6">gap-6</p>

    <ui-section-subtitle>Auto Rows</ui-section-subtitle>

    <ui-sample-container class="grid grid-cols-2 auto-rows-auto">
      <ui-sample-box-bordered> 1 </ui-sample-box-bordered>
      <ui-sample-box-bordered class="h-48"> 2 (h-48) </ui-sample-box-bordered>
      <ui-sample-box-bordered> 3 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 4 </ui-sample-box-bordered>
    </ui-sample-container>
    <p class="text-center -mt-6 mb-6">auto-rows-auto (default)</p>

    <ui-sample-container class="grid grid-cols-2 auto-rows-fr">
      <ui-sample-box-bordered> 1 </ui-sample-box-bordered>
      <ui-sample-box-bordered class="h-48"> 2 (h-48) </ui-sample-box-bordered>
      <ui-sample-box-bordered> 3 </ui-sample-box-bordered>
      <ui-sample-box-bordered> 4 </ui-sample-box-bordered>
    </ui-sample-container>
    <p class="text-center -mt-6 mb-6">auto-rows-fr</p>
  </ui-section-container>
</template>
