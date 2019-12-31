<template>
<v-container>
    <v-row>
        <v-col cols='12' md='4' v-for='(idole,i) in idoles' :key="i">
            <v-card shaped raised>
                <v-card-title>{{idole.name}}
                    <v-chip class='ml-1' dark small label color="teal">hh</v-chip>
                    <v-chip class='ml-2' dark small label color="teal">hh</v-chip>
                    <!-- <v-chip class='ml-2' dark small label color="teal">hh</v-chip> -->
                    <v-spacer></v-spacer>
                    <v-chip dark>hh</v-chip>
                </v-card-title>
                <v-card-subtitle>
                    <span>{{idole.description}}</span>

                </v-card-subtitle>
                <v-img aspect-ratio="0.9" :src=idole.avatar class='my-1'></v-img>
                <v-card-actions>

                    <v-spacer></v-spacer>
                    <v-progress-circular></v-progress-circular>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data: () => ({
        idoles: [{
                name: '星弟',
                avatar: require('@/assets/images/idoles/1.jpg'),
                description: '让红莲之火绽放的死神',
                color: 'teal lighten-3'
            },
            {
                name: '宇智波鼬',
                avatar: require('@/assets/images/idoles/2.jpg'),
                description: '让红莲之火绽放的死神',
                color: 'red darken-4'
            },
            {
                name: '怪盗KID',
                avatar: require('@/assets/images/idoles/3.jpg'),
                description: '月光下的魔术师',
                color: 'white'
            }
        ]
    })
}
</script>

<style>

</style>
