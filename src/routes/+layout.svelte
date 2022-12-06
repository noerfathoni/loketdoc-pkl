<script type="ts">
  import Footer from "$lib/components/footer/Footer.svelte";
import Header from "$lib/components/header/Header.svelte";
  import { headerMenuList } from "$lib/data/header-menu-list";
  import "../app.css";
</script>

<Header title={'LoketDoc-Pkl'} menus={headerMenuList} />
<main>
  <slot />
</main>
<Footer text={'Copyright 2022 | Irham Noer Fathoni'} />

<style lang="postcss">
main {
  @apply w-full min-h-screen flex flex-col items-center pt-10;
}
</style>
