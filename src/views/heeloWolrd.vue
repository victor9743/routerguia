<template>

    <div>
           <h1>Hello Wolrd</h1>

            <p>{{ parametro }}</p>

            <router-view/>
    </div>
 
</template>
<script>
export default {
    created(){
        // alert(this.$route.params.dado);

        // this.parametro = this.$route.params.dado;
    },
    data(){
        return {
            parametro: "Nada"
        }
    }
}
</script>