<template>
    <div class="StudentPage">
        <Navbar/>
        <Tasks/>
        <Scores/>
    </div>
</template>

<script>
import Navbar from '../components/student/Navbar'
import Tasks from '../components/student/Tasks'
import Scores from '../components//student/Scores'

export default {
    components: {
        Navbar,Tasks,Scores
    },
}
</script>

<style lang="scss">

</style>