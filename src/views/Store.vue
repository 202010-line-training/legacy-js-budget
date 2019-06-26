<template>
    <div class="about">
        <h1>Your random entity from store is {{storeResult}}</h1>
        <button v-on:click="randomEntity">GoStore</button>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    computed: mapState({
        storeResult: state => state.entity.entries[0].API
    }),
    methods: {
        ...mapActions([
            'randomEntity'
        ])
    }
}
</script>
