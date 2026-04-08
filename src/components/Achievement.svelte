<script lang="ts">
    export let title: string; 
    export let description: string; 
    export let image: string; 
    import '../styles/achievement.scss';

    import PocketBase from 'pocketbase';
    import { onMount } from 'svelte';
    let achievements: any[] = [];
    onMount(async () => {
        const pb = new PocketBase('https://db.chabots.mx');
        const comp = await pb.collection('competitions').getFirstListItem(
            `title = "${title}"`,
        );
        const result = await pb.collection('achievements').getList(1, 50, {
            filter: `competition = "${comp.id}"`,
        });
        achievements = result.items;
    });
</script>

<div class="achievement-wrapper">
    <div class="achievement-content">
        <div class="achievement-title">{title}</div>
        <div class="achievement-description">{description}</div>
        <div class="achievement-table-wrapper">
            <table class="achievement-table">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Category</th>
                        <th>Team</th>
                        <th>Location</th>
                        <th>Award</th>
                    </tr>
                </thead>
                <tbody>
                    {#each achievements as achievement}
                        <tr>
                            <td>{achievement.year}</td>
                            <td>{achievement.category}</td>
                            <td>{achievement.team}</td>
                            <td>{achievement.location}</td>
                            <td>{achievement.award}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    </div>
    <div class="achievement-image">
        <img src={image} alt="competitionLogo"/>
    </div>
</div>
