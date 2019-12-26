<template>
<v-container>
    <h2>Gallery</h2>
    <v-sheet>
        <v-slide-group>
            <v-slide-item v-for='(work,index) in works' :key="index" class="pa-4">
                <v-img class='ma-4' aspect-ratio='1.5' :src="work.avatar"></v-img>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
    <h2>Sketches</h2>
    <v-sheet>
        <v-slide-group>
            <v-slide-item v-for='(work,index) in sketches' :key="index" class="pa-4">
                <v-img class='ma-4' aspect-ratio='1.5' :src="work.avatar"></v-img>
            </v-slide-item>
        </v-slide-group>
    </v-sheet>
    <h2>Crafts</h2>
    <v-sheet>
        <v-slide-group>
            <v-slide-item v-for='(work,index) in crafts' :key="index" class="pa-4">
                <v-img class='ma-4' aspect-ratio='1.5' :src="work.avatar"></v-img>
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
        ],
        sketches: [{
                avatar: 'http://imglf2.nosdn.127.net/img/WUVPa3ZyclFUbDQyZy9peml3OFpDT2szUjRRR2paNFcwaW9NQUVOSGRTV2htaXU3c1htYTlBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTmlydmF6dXJlIC8gbmlydmF6dXJlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0'
            },
            {
                avatar: 'http://imglf0.nosdn.127.net/img/WUVPa3ZyclFUbDY2RHMydytLODBkSG03R3d1ZmpTcXRZeTVoOXM5MEVpSWpqdGU5SkZBcXp3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTmlydmF6dXJlIC8gbmlydmF6dXJlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0'
            },
            {
                avatar: 'http://imglf1.nosdn.127.net/img/WUVPa3ZyclFUbDdYYm1vU2ZGQ1JhMG1xL2JMSVBBMUxZZnhmUWRuOCtlVk9iV2dlSDJsU0R3PT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTmlydmF6dXJlIC8gbmlydmF6dXJlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0'
            },
            {
                avatar: 'http://imglf0.nosdn.127.net/img/WUVPa3ZyclFUbDY1eWZRaDR5WEVzT3g2VWdRN0lSNVBTZEk4bm9KTVFxa0J3dmE1VmpvS2RnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTmlydmF6dXJlIC8gbmlydmF6dXJlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0'
            },
            {
                avatar: 'http://imglf2.nosdn.127.net/img/WUVPa3ZyclFUbDc0ZlI5UzAwSi9keG9iNnlRdktqV1pTbnVZOENjZXhPRjVZZEZ2dStWZGJBPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTmlydmF6dXJlIC8gbmlydmF6dXJlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0'
            }
        ],
        crafts: [{
                avatar: 'http://imglf2.nosdn.127.net/img/WUVPa3ZyclFUbDdBbGJmemc4aE5RNGVmTm9uVXB1YzVXUmJaTEZSYkpPQzVuTjljUGgxQUtnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTmlydmF6dXJlIC8gbmlydmF6dXJlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0'
            },
            {
                avatar: 'http://imglf2.nosdn.127.net/img/WUVPa3ZyclFUbDdKVFltWThWK1Uyd0p1cmFsUnlYUHU2ekxKcW9GYVQ3WGUvTzNKa1FSYS9RPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTmlydmF6dXJlIC8gbmlydmF6dXJlLmxvZnRlci5jb20=&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0'
            },
            {
                avatar: 'http://imglf4.nosdn0.126.net/img/WUVPa3ZyclFUbDRuK1hLV1Y2c3hkTzJzdzJSRmdqc1NjMWF5WHRVckJoallpWmovd2tkM2JnPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'
            },
            {
                avatar: ''
            },
            {
                avatar: ''
            },
        ]
    })
}
</script>

<style>

</style>
