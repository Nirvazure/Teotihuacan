<template>
<v-container>
    <v-row>
        <v-col cols="12" md='2' v-for='(toy,index) in toys' :key="index">
            <v-card>
                <v-card-title>{{toy.name}}</v-card-title>
                <v-img aspect-ratio="1.5" :src='toy.avatar'></v-img>
                <v-card-actions>
                  <v-btn block color='teal' dark>Feel it</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    data: () => ({
        toys: [{
                name: '斗破杀',
                avatar: 'https://f11.baidu.com/it/u=3043060502,3321405125&fm=72'
            },
            {
                name: 'Mindoney',
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577945292&di=8c7ff11401ee7d5bd6df1c629e3f8114&imgtype=jpg&er=1&src=http%3A%2F%2Fimg01.taopic.com%2F171106%2F318752-1G10613522091.jpg'
            },
            {
                name: 'DoraPocket',
                avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577350620440&di=8c3a87301b12e9e32f1dd9a965eafc24&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F94o3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2Fb21bb051f8198618a63dac154ced2e738bd4e62d.jpg'
            },{
              name:'YQYMONs',
              avatar:'https://img.zcool.cn/community/01eca85ca73beea80121416862e3e9.jpg@260w_195h_1c_1e_1o_100sh.jpg'
            }
        ]
    })
}
</script>

<style>

</style>
