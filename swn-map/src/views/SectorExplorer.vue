<template>
<div class="SectorExplorer">
    <ObjectCard v-bind:theobject="sector"></ObjectCard>
</div>
</template>

<script>
import sectordata from "../assets/sector.json"
import ObjectCard from "../components/ObjectCard"

export default {
    "name": 'SectorExplorer',
    "components": {ObjectCard},
    computed: {
        "sector": function() { return sectordata }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .SectorExplorer {
        max-width: 33vw;
        height: 100vh;
        overflow-y: scroll;
        padding: 25px;
    }
</style>
