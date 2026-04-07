<script lang="ts">
    import chabotsLogo from '../assets/chabotIcon.svg';
    import '../styles/blog-menu.scss';
    import PocketBase from 'pocketbase';
    import { onMount } from 'svelte';

    let blogs: any[] | null = $state(null);
    let { onchabotclick, oncontentclick } = $props();
    let pb: PocketBase;
    onMount(async () => {
        pb = new PocketBase('http://127.0.0.1:8090');
        blogs = await pb.collection('blogs').getFullList();
    });
    function getImage(object:any) {
        return pb.files.getURL(object, object.cover);
    }
</script>

{#if blogs}
    <div class="blog-header">
        <h1>BLOGS</h1>
        <img on:click={onchabotclick} src={chabotsLogo} alt="chabotsMX" />
    </div>
    {#each blogs as blog}
        <div on:click={() => oncontentclick(blog)} class="blog-card">
            <img src={getImage(blog)} alt={blog.title} />
            <h1>{blog.title}</h1>
        </div>
    {/each}
{:else}
    <div class="loading">Loading...</div>
{/if}