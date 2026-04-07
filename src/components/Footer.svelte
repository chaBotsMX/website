<script lang="ts">
  import '../styles/footer.scss';
  let { onclick } = $props();
  function goTo(url: string) {
    window.open(url, '_blank');
  }
</script>

<div class="footer-wrapper">
    <div class="footer-email-content">contacto@chabots.mx</div>
    <div class="footer-links-content">
        <div on:click={onclick}>BLOG</div>
        <div on:click={goTo('https://www.facebook.com/chabotsMX')}>FACEBOOK</div>
        <div on:click={goTo('https://www.instagram.com/chabotsmx')}>INSTAGRAM</div>
    </div>
</div>