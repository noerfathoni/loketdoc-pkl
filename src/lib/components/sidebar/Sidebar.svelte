<script lang="ts">
  import { page } from '$app/stores';
  import './css/main.css';

  export let menus: any

  $: currUrl = $page.url.pathname
</script>

<aside class="sidebar">
  {#each menus as { path, icon, color, label, submenu }}
  <ul>
    <li>
      <a href={path} class:active={currUrl.includes(path)}>
        <i class="bx text-lg {icon} {color} mr-2"></i> {label}
      </a>
      <div class="sidebar-submenu">
        <ul>
          {#each submenu as { subpath, sublabel }}
            <li>
              <a href={subpath} class:active={subpath === currUrl}>
                <i class="bx bx-chevron-right mr-2"></i> {sublabel}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </li>
  </ul>
  {/each}
</aside>
