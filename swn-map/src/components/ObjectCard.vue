<template>
    <div class="object-card">
        <h1 v-on:click="showbody = !showbody">{{theobject.name}}</h1>
        <div class="body" v-show="showbody">
            <div class="property" v-if="behavior(theobject.properties) == 'table'">
                <table>
                    <tr v-for="propertyname in Object.keys(theobject.properties)" v-bind:key="propertyname">
                        <td>{{propertyname}}:</td>
                        <td>{{theobject.properties[propertyname]}}</td>
                    </tr>
                </table>
            </div>
            <div class="property" v-else v-for="propertyname in Object.keys(theobject.properties)" v-bind:key="propertyname">
                <div class="card-header">
                    <h2>{{propertyname}}</h2>
                </div>
                <div class="property-body">
                    <div class="child" v-if="behavior(theobject.properties[propertyname]) == 'list'">
                        <ObjectCard v-for="(child, index) in theobject.properties[propertyname]" v-bind:key="index" v-bind:theobject="child"></ObjectCard>
                    </div>
                    <template v-else>
                        other
                    </template>
                </div>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    "name": "ObjectCard",
    data() { return {
        showbody: false
    }},
    "props": ["theobject"],
    "methods": {
        behavior(property) {
            if (typeof(property) == "object" && typeof(property[Object.keys(property)[0]]) == "string") return "table";
            if (Array.isArray(property)) return "list"
            else return "foo"
        }
    }
}
</script>

<style lang="scss" scoped>
    .object-card {
        text-align: left;
        padding: 10px;
        .card-header {
            // border-bottom: 1px solid black;
        }
        .property {
            border: 1px solid;
            border-bottom-color: #ddd;
            border-right-color: #ddd;
            border-top-color: #efefef;
            border-left-color: #efefef;
        }
    }
    h1 {
        font-size: 20px;
    }
    h2 {
        font-size: 15px;
    }
    .property {
        margin-left: 20px;
    }
    table {
        border-collapse: collapse;
        td {
            padding: 5px;
        }
    }
</style>