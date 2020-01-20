<template>
<v-container>
    <v-row>
            <v-card width="70%">
                <v-row>
                    <v-col cols='4'>
                        <v-img class='ma-4' :src='album.avatar'></v-img>
                    </v-col>
                    <v-col>
                        <h2 class='ma-2'>{{album.name}}</h2>
                        <v-chip class='mr-4' small label color='teal' dark>民谣</v-chip>
                        <v-chip class='mr-4' small label color='primary' dark>90后</v-chip>
                        <v-chip class='mr-4' small label color='black' dark>夜晚</v-chip>
                        <p class='my-4'>西大街的夜晚</p>

                    </v-col>
                </v-row>
                <v-card-actions>
                    <v-sheet class="mx-auto" max-width="100%">
                        <v-slide-group multiple show-arrows @click='dosth'>
                            <v-slide-item v-for="(album,i) in albums" :key="i" >
                                <v-avatar size='70' tile class='mx-3'>
                                    <v-img :src='album.avatar'></v-img>
                                </v-avatar>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                    <!-- <v-text-field filled v-model='index'></v-text-field> -->
                </v-card-actions>
            </v-card>

    </v-row>
            <v-row>
            <v-card width="70%">
                <v-list>
                    <v-list-item dense v-for='(song,i) in album.songs' :key="i">
                        <span>{{song}}</span>
                        <v-spacer></v-spacer>
                        <v-list-item-icon>
                            <v-icon>mdi-wechat</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-card>

        </v-row>
</v-container>
</template>

<script>
export default {
    data: () => ({
        index: 0,
        album: null,
        albums: [{
            name: '古城与少年',
            avatar: require('@/assets/images/albums/4.jpg'),
            songs: [
                '贫嘴高中生幸福生活',
                '流川枫和苍井空'
            ]
        }, {
            name: 'Darkray',
            avatar: require('@/assets/images/albums/3.jpg'),
            songs: [
                'Send it',
                'Desposito'
            ]
        }, {
            name: 'Darkray',
            avatar: require('@/assets/images/albums/3.jpg'),
            songs: [
                'Send it',
                'Desposito'
            ]
        }, {
            name: 'Darkray',
            avatar: require('@/assets/images/albums/3.jpg'),
            songs: [
                'Send it',
                'Desposito'
            ]
        }, {
            name: 'Darkray',
            avatar: require('@/assets/images/albums/3.jpg'),
            songs: [
                'Send it',
                'Desposito'
            ]
        }, {
            name: 'Darkray',
            avatar: require('@/assets/images/albums/3.jpg'),
            songs: [
                'Send it',
                'Desposito'
            ]
        }, {
            name: 'Darkray',
            avatar: require('@/assets/images/albums/3.jpg'),
            songs: [
                'Send it',
                'Desposito'
            ]
        }]
    }),
    created() {
        this.album = this.albums[0]
    },
    methods: {
        dosth(event) {
          console.log(event)
        }
    },
    watch: {
        index(Value) {
            if (Value <= this.albums.length - 1) {
                this.album = this.albums[Number(Value)]
            }
        }
    }
}
</script>

<style>

</style>
