<script lang="ts">

  import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
  import { navList } from '$lib/data/nav-list';
</script>

<Sidebar menus={navList} />
<div class="jenis-map-container ml-56">
  <div class="w-full detail">
    <div class="section">
      <slot />
    </div>
  </div>
</div>
