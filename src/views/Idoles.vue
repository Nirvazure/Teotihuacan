<template>
<v-container>
    <v-row>
        <v-col cols='12' md='3' v-for='(idole,i) in idoles' :key="i">
            <v-hover v-slot:default="{ hover }">
                <v-card shaped :elevation="hover ? 12 : 2">
                    <v-card-title>{{idole.name}}
                        <v-spacer></v-spacer>
                        <v-chip dark :color=idole.color>hh</v-chip>
                    </v-card-title>
                    <v-card-subtitle>
                        <span>{{idole.description}}</span>
                    </v-card-subtitle>
                    <v-img aspect-ratio="0.9" :src=idole.avatar class='my-1'></v-img>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-progress-circular :color='idole.color' value="100"></v-progress-circular>
                    </v-card-actions>
                </v-card>
            </v-hover>
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
                color: 'white darken-3'
            },
            {
                name: '星马烈',
                avatar: require('@/assets/images/idoles/4.jpg'),
                description: '弯道王子',
                color: 'red'
            },
            {
                name: 'UnderTaker',
                avatar: require('@/assets/images/idoles/5.jpg'),
                description: '死亡谷的主人',
                color: 'black'
            },
            {
                name: 'Json Mraz',
                avatar: require('@/assets/images/idoles/6.jpg'),
                description: '231s',
                color: 'red'
            },
            {
                name: '拉斐内',
                avatar: require('@/assets/images/idoles/7.jpg'),
                description: 'Phoenix',
                color: 'purple'
            },
            {
                name: 'Pablo Aimar',
                avatar: require('@/assets/images/idoles/8.jpg'),
                description: '小丑',
                color: 'blue lighten-3'
            },
            {
                name: 'Criss Angel',
                avatar: require('@/assets/images/idoles/12.jpg'),
                description: 'MindFreak',
                color: 'blue lighten-3'
            }, {
                name: 'Lionel Messi',
                avatar: require('@/assets/images/idoles/10.jpg'),
                description: '上帝之手的天蓝色糖果',
                color: 'blue lighten-3'
            }, {
                name: 'Marksim Mrvica',
                avatar: require('@/assets/images/idoles/11.jpg'),
                description: '钢琴圣手',
                color: 'blue lighten-3'
            }, {
                name: '奥沙利文',
                avatar: require('@/assets/images/idoles/9.jpg'),
                description: '火箭',
                color: 'blue lighten-3'
            }
        ]
    })
}
</script>

<style>

</style>
