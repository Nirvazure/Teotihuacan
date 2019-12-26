<template>
<v-container>
    <h2>Gallery</h2>
    <v-sheet max-width="700">
        <v-slide-group show-arrows multiple>
            <v-slide-item v-for='(work,index) in works' :key="index">
                <v-img aspect-ratio='1.5' :src="work.avatar"></v-img>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
</v-container>
</template>

<script>
export default {
    data: () => ({
        works: [{
                avatar: 'https://img.zcool.cn/community/01ec5d5a28d66aa801216e8de4f0f3.jpg@1280w_1l_2o_100sh.jpg'
            },
            {
                avatar: 'https://img.zcool.cn/community/016cc35a28d66aa80120ba383a780f.jpg@1280w_1l_2o_100sh.jpg'
            },
            {
                avatar: 'https://img.zcool.cn/community/01d8895a28d66da801216e8dc51755.jpg@1280w_1l_2o_100sh.jpg'
            },
            {
                avatar: 'https://img.zcool.cn/community/01bfbc5a28d66da801216e8d892ef9.jpg@1280w_1l_2o_100sh.jpg'
            },
            {
                avatar: 'https://img.zcool.cn/community/01cc3b5a28d66ea80120ba38dcb3af.jpg@1280w_1l_2o_100sh.jpg'
            }
        ]
    })
}
</script>

<style>

</style>
