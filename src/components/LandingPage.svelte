<script lang="ts">
    import Header from "./Header.svelte";
    import Section from "./Section.svelte";
    import chabotsLogo from '../assets/chabotIcon.svg';

    import Project from "./Project.svelte";
    import Slogan from "./Slogan.svelte";
    import Sponsors from "./Sponsors.svelte";
    import Member from "./Member.svelte";
    import Achievement from "./Achievement.svelte";
    import Flag from "./Flag.svelte";
    import Footer from "./Footer.svelte";

    import '../styles/landing-page.scss';

    import PocketBase from 'pocketbase';
    import { onMount } from 'svelte';


    let projects: any[] | null = $state(null);
    let members: any[] | null = $state(null);
    let competitions: any[] | null = $state(null);
    let achievements: any[] | null = $state(null);
    let { onclick } = $props();

    let pb: PocketBase;
    onMount(async () => {
        pb = new PocketBase('https://db.chabots.mx');
        projects = await pb.collection('projects').getFullList();
        members = await pb.collection('members').getFullList();
        competitions = await pb.collection('competitions').getFullList();
        achievements = await pb.collection('achievements').getFullList();
    });
    function getImage(object:any) {
        return pb.files.getURL(object, object.image);
    }
</script>

{#if projects && members && competitions && achievements}
    <Header onclick={onclick}/>
    <div class="landing-page-logo-wrapper">
        <img src={chabotsLogo} alt="chabotsMX" />
    </div>
    <Section text="PROJECTS" />
    {#each projects as project}
        <Project teamName={project.teamName} robotName={project.robotName} projectName={project.projectName} image={getImage(project)}/>
    {/each}
    <Slogan/>
    <Section text="SPONSORS" />
    <Sponsors/>
    <Flag/>
    <Section text="MEMBERS" />
    <div class="members-wrapper">
    {#each members as member}
        <Member memberName={member.name} memberRole={member.role} since={member.since} image={getImage(member)}/>
    {/each}
    </div>
    <Section text="ACHIEVEMENTS" />
    {#each competitions as competition}
        <Achievement title={competition.title} description={competition.description} image={getImage(competition)}/>
    {/each}
    <Footer onclick={onclick}/>
{:else}
    <div class="loading">Loading...</div>
{/if}
