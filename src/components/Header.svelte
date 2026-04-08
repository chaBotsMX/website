<script lang="ts">
  import chabotsText from '../assets/chabotsText.svg';
  import '../styles/header.scss';
  let { onclick } = $props();
  function goTo(url: string) {
    window.open(url, '_blank');
  }
</script>

<div class="header-wrapper">
    <div class="logo-wrapper"><img src={chabotsText} alt="chabotsMX"></div>
    <div class="email-content">contacto@chabots.mx</div>
    <div class="links-content">
        <div on:click={onclick}>BLOG</div>
        <div on:click={goTo('https://www.facebook.com/chabotsMX')}>FACEBOOK</div>
        <div on:click={goTo('https://www.instagram.com/chabotsmx')}>INSTAGRAM</div>
    </div>
</div>