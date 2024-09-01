<script lang="ts">
const nav = [
  {
    label: "Movies",
    to: "#",
  },
  {
    label: "Trailers",
    to: "#",
  },
  {
    label: "Awards",
    to: "#",
  },
  {
    label: "News & Press",
    to: "#",
  },
];
</script>

<template>
  <div>
    <header class="px-5 py-2 flex items-center">
      <NuxtLink class="">
        <img src="/logo.jpg" alt="logo" class="rounded-full h-16 w-16" />
      </NuxtLink>

      <nav></nav>
    </header>
  </div>
</template>
