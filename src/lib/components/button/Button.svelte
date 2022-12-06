<script lang="ts">
  export let label: string;
  export let type: string;
  export let icon: string;
  export let size: string;
</script>

<button
  class="btn btn-{type} btn-{size}"
>
  {#if icon !== null}
    <i class="{icon} btn-icon"></i>
  {/if}
  {label}
</button>

<style lang="postcss">
.btn {
  @apply bg-gray-300 px-3 py-2 text-sm rounded flex flex-row items-center text-gray-900 mr-2 shadow-md;
}

.btn.btn-xs {
  @apply px-3 py-2 text-xs;
}

.btn.btn-sm {
  @apply px-3 py-2 text-sm;
}

.btn.btn-lg {
  @apply px-3 py-2 text-lg;
}

.btn .btn-icon {
  @apply text-white mr-2;
}

.btn.btn-primary,
.btn.btn-success,
.btn.btn-warning,
.btn.btn-info,
.btn.btn-danger {
  @apply text-white;
}

.btn.btn-primary {
  @apply bg-blue-500;
}

.btn.btn-success {
  @apply bg-green-500;
}

.btn.btn-warning {
  @apply bg-yellow-500;
}

.btn.btn-info {
  @apply bg-indigo-600;
}

.btn.btn-danger {
  @apply bg-red-500;
}
</style>
