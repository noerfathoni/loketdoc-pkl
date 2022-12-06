<script lang="ts">
  import './css/main.css';

  export let text: string
  export let hasSidebar: boolean = false
</script>

<footer class="footer" class:has-sidebar={hasSidebar}>
  <div class="footer-text">{ text }</div>
</footer>
