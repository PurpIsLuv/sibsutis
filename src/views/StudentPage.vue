<template>
    <div class="StudentPage">
        <Navbar/>
        <Tasks/>
        <Scores/>
    </div>
</template>

<script>
//COMPONENTS
import Navbar from '../components/student/Navbar'
import Tasks from '../components/student/Tasks'
import Scores from '../components//student/Scores'

import {mapActions} from 'vuex'
export default {
    components: {
        Navbar,
        Tasks,
        Scores,
    },
    methods: {
        ...mapActions(['getStudentData'])
    },
    created(){
        this.getStudentData()
    },
}
</script>

<style lang="scss">

</style>