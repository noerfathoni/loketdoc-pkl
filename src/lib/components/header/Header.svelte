<script lang="ts">
  import { page } from '$app/stores'
  import './css/main.css';
  import type { HeaderMenuItem } from './interfaces/HeaderMenuItem';

  export let title: string
  export let menus: HeaderMenuItem[]

  $: currUrl = $page.url.pathname
  $: isOpen = false

  function toggleAppBar() {
    isOpen = !isOpen
  }
</script>

<header class="app-bar">
  <div class="app-bar-drawer-toggle">
    <i class="bx bx-menu-alt-left" on:click={toggleAppBar} on:keyup={toggleAppBar}></i>
  </div>
  <div class="app-bar-title">
    <a href="/">{title}</a>
  </div>
  <div class="app-bar-menu">
    <ul>
      {#each menus as {path, label}}
      <li><a href="{path}" class:active={currUrl === path}>{label}</a></li>
      {/each}
    </ul>
  </div>
  {#if isOpen}
  <div class="app-bar-menu-mobile">
    <ul>
      {#each menus as {path, label}}
      <li><a href="{path}" class:active={currUrl === path}>{label}</a></li>
      {/each}
    </ul>
  </div>
  {/if}
</header>
