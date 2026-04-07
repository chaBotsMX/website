<script lang="ts">
  export let teamName: string; 
  export let robotName: string; 
  export let projectName: string; 
  export let image: string; 
  import '../styles/project.scss';
</script>

<div class="project-wrapper">
    <div class="project-content">
        <div class="project-image">
            <img src={image} alt={projectName} />
        </div>
        <div class="project-text">
            {teamName} - {robotName} - {projectName}
        </div>
    </div>
</div>