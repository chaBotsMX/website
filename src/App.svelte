<script lang="ts">
    import Blog from "./components/Blog.svelte";
    import BlogMenu from "./components/BlogMenu.svelte";
    import LandingPage from "./components/LandingPage.svelte";
    let showing = "landing";
    let selectedBlog: any = null;
    function handleGoToBlog() {
        showing = "blog";
        selectedBlog = null;
    }
    function handleGoToLanding() {
        showing = "landing";
    }
    function handleGoToContent(blog : any) {
        showing = "content";
        selectedBlog = blog;
    }
</script>

{#if showing === "landing"}
    <LandingPage onclick={handleGoToBlog}/>
{:else if showing === "blog"}
    <BlogMenu onchabotclick={handleGoToLanding} oncontentclick={handleGoToContent}/>
{:else}
    <Blog onclick={handleGoToBlog} blog={selectedBlog}/>
{/if}