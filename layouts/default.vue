<template>
  <div>
    <layout-header />
    <div class="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div class="lg:col-span-1">
        <layout-sidebar />
      </div>
      <div class="lg:col-span-3">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
