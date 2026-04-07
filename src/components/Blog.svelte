<script lang="ts">
    import '../styles/blog.scss';
    import PocketBase from 'pocketbase';
    import SvelteMarkdown from '@humanspeak/svelte-markdown'
    import { onMount } from 'svelte';

    let { onclick, blog } = $props();
    let pb: PocketBase;
    let records: any[] | null = $state(null);
    onMount(async () => {
        pb = new PocketBase('http://127.0.0.1:8090');
        records = await pb.collection('entries').getFullList({
            filter: `blog = "${blog.id}"`
        });
        records.sort((a, b) => a.index - b.index);
    });
    function getImage(object:any) {
        return pb.files.getURL(object, object.image);
    }
    function formatDate(rawDate: string) {
        const formattedDate = new Date(rawDate).toLocaleDateString('es-MX', {
            month: 'short',
            day: '2-digit',
            year: 'numeric'
        });
        return formattedDate;
    }
</script>

<button onclick={onclick} class="back-btn"> {"←"} </button>
{#if records}
    <div class="blog-wrapper">
        <div class="blog-title">{blog.title}</div>
        <div class="blog-meta">{formatDate(blog.created)} • {blog.author}</div>
        {#each records as record}
            <div class="blog-content">
                {#if record.isImage == false}
                    <SvelteMarkdown source = {record.text} />
                {:else}
                    <img src={getImage(record)} alt={record.text} />
                    <div>Fig {record.text}</div>
                {/if}
            </div> 
        {/each}
    </div>
{:else}
    <div class="loading">Loading...</div>
{/if}