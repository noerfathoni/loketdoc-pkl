<script lang="ts">
    import { page } from '$app/stores'
    import type { DrawerItem } from '$lib/interfaces/DrawerItem';
  
    import { isDrawerOpen } from '$lib/shared/stores/drawer';
    import drawerImg from '$lib/assets/img/drawer.jpeg'
  
    export let menus: DrawerItem[] = []
  
    let path: string
    let isOpen: boolean
  
    $: path = $page.url.pathname
  
    isDrawerOpen.subscribe(val => {
      isOpen = val
    })
  
    function closeDrawer() {
      isDrawerOpen.set(false)
    }
  </script>
  
  <div class="drawer-container" class:is-close="{isOpen === false}">
    <div class="drawer-header" style="background: url({drawerImg}); background-size: cover;">
      <button class="close" on:click={closeDrawer}>
        <i class="bx bx-x"></i>
      </button>
    </div>
    <div class="drawer-body">
      <ul>
        {#each menus as menu}
        <li>
          <a href="{menu.url}" class={path === menu.url ? 'active' : ''} on:click={closeDrawer}>
            <i class="{menu.icon}"></i>
            {menu.title}
          </a>
        </li>
        {/each}
      </ul>
    </div>
  </div>
  
  <style lang="postcss">
    .drawer-container {
      @apply fixed top-0 left-0 w-64 bg-white h-full z-50 shadow-xl;
    }
  
    .drawer-container.is-close {
      left: -256px;
    }
  
    .drawer-container .drawer-header {
      @apply w-full flex flex-col p-3 h-48 bg-orange-600;
    }
  
    .drawer-container .drawer-body {
      @apply w-full flex flex-col p-3;
    }
  
    .drawer-container .drawer-body ul {
      @apply w-full;
    }
  
    .drawer-container .drawer-body ul li {
      @apply list-none w-full flex text-gray-500;
    }
  
    .drawer-container .drawer-body ul li a {
      @apply decoration-clone my-1 rounded px-3 py-2 w-full font-medium flex flex-row items-center;
    }
  
    .drawer-container .drawer-body a i {
      @apply text-xl mr-2;
    }
  
    .drawer-container .drawer-body a.active {
      @apply text-orange-600 bg-orange-200;
    }
  </style>
  