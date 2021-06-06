<template>
  <label>
    <input
      type="text"
      class="
        border-2 border-b-4 border-black
        mb-6
        outline-none
        px-6
        py-2
        rounded-xl
        shadow-lg
        focus:border-green-500
      "
      :placeholder="placeholder"
    />
  </label>
</template>

<script>
export default {
  name: 'Input',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
  },
}
</script>
