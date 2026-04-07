<script lang="ts">
  export let memberName: string; 
  export let memberRole: string; 
  export let since: string; 
  export let image: string; 
  import '../styles/member.scss';
</script>

<div class="member-wrapper">
    <img src={image} alt="pp"/>
    <div class="member-name">{memberName}</div>
    <div class="member-content">
        <div class="member-inner">{memberRole}</div>
        <div class="member-inner">Member since {since}</div>
    </div>
</div>